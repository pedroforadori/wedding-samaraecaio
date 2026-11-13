import { Redis } from "@upstash/redis";

// Requer a integração "Upstash for Redis" conectada ao projeto na Vercel, que
// injeta KV_REST_API_URL / KV_REST_API_TOKEN. Ausentes localmente até o dev
// rodar `vercel env pull` — nesse caso o cliente fica indisponível e quem
// chamar deve tratar o erro (ver /api/visits).
export function getRedis(): Redis | null {
  const url = process.env.KV_REST_API_URL;
  const token = process.env.KV_REST_API_TOKEN;
  if (!url || !token) return null;
  return new Redis({ url, token });
}

// Prefixo de todas as chaves do site no Redis. Padrão "samaraecaio", para que
// os dados deste casamento nunca se misturem com os de outro site que use o
// mesmo banco Upstash (ex.: o de Camila & Victor, que usa "site:"). Pode ser
// sobrescrito com REDIS_KEY_PREFIX (ex.: "samaraecaio-dev" para testes locais).
const KEY_PREFIX = process.env.REDIS_KEY_PREFIX?.trim() || "samaraecaio";

export function redisKey(name: string): string {
  return `${KEY_PREFIX}:${name}`;
}
