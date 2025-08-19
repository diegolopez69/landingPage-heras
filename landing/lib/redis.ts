// lib/redis.ts
import { Redis } from "@upstash/redis";

const hasCreds =
  !!process.env.UPSTASH_REDIS_REST_URL && !!process.env.UPSTASH_REDIS_REST_TOKEN;

// Solo inicializamos el cliente si hay credenciales.
// OJO: theme.ts nunca lo usa si no hay creds, así que este "null cast" es seguro.
export const redis = hasCreds ? Redis.fromEnv() : (null as unknown as Redis);