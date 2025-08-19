import { NextResponse } from "next/server";
import { setOverride, clearOverride } from "@/lib/theme";
import { z } from "zod";
export const runtime = "edge";
export const dynamic = "force-dynamic";

const BodySchema = z.object({
  name: z.string().min(1),
  logoUrl: z.string().url(),
  colors: z.tuple([
    z.string().regex(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i),
    z.string().regex(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i),
    z.string().regex(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i),
  ]),
  ttlHours: z.number().int().min(1).max(24).default(2),
});

function authorize(req: Request) {
  const auth = req.headers.get("authorization") || "";
  const token = auth.replace(/^Bearer\s+/i, "");
  return token && token === process.env.ADMIN_TOKEN;
}

export async function POST(req: Request) {
  if (!authorize(req)) return new NextResponse("Unauthorized", { status: 401 });
  try {
    const body = BodySchema.parse(await req.json());
    const ttlSeconds = body.ttlHours * 3600;
    const saved = await setOverride({
      name: body.name,
      logoUrl: body.logoUrl,
      colors: body.colors,
      ttlSeconds,
    });
    return NextResponse.json({ ok: true, until: saved.until }, { status: 201 });
  } catch (err: any) {
    return NextResponse.json(
      { ok: false, error: err.message },
      { status: 400 },
    );
  }
}

export async function DELETE(req: Request) {
  if (!authorize(req)) return new NextResponse("Unauthorized", { status: 401 });
  await clearOverride();
  return NextResponse.json({ ok: true });
}
