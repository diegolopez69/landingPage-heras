// lib/theme.ts
import { z } from "zod";
import { redis } from "./redis";

export const ThemeSchema = z.object({
  name: z.string().min(1).max(100),
  logoUrl: z.string().url(),
  colors: z.array(z.string().regex(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i)).length(3),
  until: z.number().int().optional(),
});
export type ThemeOverride = z.infer<typeof ThemeSchema>;
const KEY = "lp:theme:override";

export const hasUpstash =
  !!process.env.UPSTASH_REDIS_REST_URL && !!process.env.UPSTASH_REDIS_REST_TOKEN;

export function defaultTheme() {
  return {
    name: process.env.DEFAULT_NAME || "Mi Empresa",
    logoUrl: process.env.DEFAULT_LOGO_URL || "/logo.svg",
    colors: [
      process.env.DEFAULT_COLOR_1 || "#FF8A00",
      process.env.DEFAULT_COLOR_2 || "#FFC24D",
      process.env.DEFAULT_COLOR_3 || "#111827",
    ] as [string, string, string],
  };
}

export async function getActiveTheme() {
  if (!hasUpstash) return defaultTheme();

  const raw = await redis.get<string>(KEY);
  if (!raw) return defaultTheme();

  try {
    const parsed = ThemeSchema.parse(JSON.parse(raw));
    return {
      name: parsed.name,
      logoUrl: parsed.logoUrl,
      colors: parsed.colors as [string, string, string],
    };
  } catch {
    return defaultTheme();
  }
}

export async function setOverride(payload: {
  name: string;
  logoUrl: string;
  colors: [string, string, string];
  ttlSeconds: number;
}) {
  if (!hasUpstash) throw new Error("Upstash no configurado (UPSTASH_* vacíos).");
  const until = Math.floor(Date.now() / 1000) + payload.ttlSeconds;
  const validated = ThemeSchema.parse({ ...payload, until });
  await redis.set(KEY, JSON.stringify(validated), { ex: payload.ttlSeconds });
  return validated;
}

export async function clearOverride() {
  if (!hasUpstash) return;
  await redis.del(KEY);
}