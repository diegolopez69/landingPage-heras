import { NextResponse } from "next/server";
import { getActiveTheme } from "@/lib/theme";
export const runtime = "edge";
export const dynamic = "force-dynamic";
export async function GET(){
  const theme = await getActiveTheme();
  return NextResponse.json(theme, { headers: { "Cache-Control": "no-store" } });
}
