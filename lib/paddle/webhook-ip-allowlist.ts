const PADDLE_IPS_URL = "https://api.paddle.com/ips";
const CACHE_TTL_MS = 60 * 60 * 1000;

let cachedIpv4Cidrs: string[] | null = null;
let cachedAtMs = 0;

interface PaddleIpsResponse {
  data?: {
    ipv4_cidrs?: string[];
  };
}

function parseIpv4ToInt(ip: string): number | null {
  const parts = ip.split(".");
  if (parts.length !== 4) {
    return null;
  }

  let value = 0;
  for (const part of parts) {
    const octet = Number(part);
    if (!Number.isInteger(octet) || octet < 0 || octet > 255) {
      return null;
    }
    value = (value << 8) + octet;
  }

  return value >>> 0;
}

export function ipv4MatchesCidr(ip: string, cidr: string): boolean {
  const [network, prefixLengthRaw] = cidr.split("/");
  const prefixLength = Number(prefixLengthRaw);

  const ipValue = parseIpv4ToInt(ip);
  const networkValue = parseIpv4ToInt(network);

  if (
    ipValue === null ||
    networkValue === null ||
    !Number.isInteger(prefixLength) ||
    prefixLength < 0 ||
    prefixLength > 32
  ) {
    return false;
  }

  if (prefixLength === 0) {
    return true;
  }

  const mask = prefixLength === 32 ? 0xffffffff : (~0 << (32 - prefixLength)) >>> 0;
  return (ipValue & mask) === (networkValue & mask);
}

export async function getPaddleWebhookIpv4Cidrs(): Promise<string[]> {
  const now = Date.now();
  if (cachedIpv4Cidrs && now - cachedAtMs < CACHE_TTL_MS) {
    return cachedIpv4Cidrs;
  }

  const response = await fetch(PADDLE_IPS_URL, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(
      `Failed to fetch Paddle webhook IPs (${response.status} ${response.statusText}).`,
    );
  }

  const payload = (await response.json()) as PaddleIpsResponse;
  const cidrs = payload.data?.ipv4_cidrs;

  if (!cidrs?.length) {
    throw new Error("Paddle /ips response did not include ipv4_cidrs.");
  }

  cachedIpv4Cidrs = cidrs;
  cachedAtMs = now;
  return cidrs;
}

export async function isAllowedPaddleWebhookIp(ip: string): Promise<boolean> {
  const normalizedIp = ip.trim();
  if (!normalizedIp) {
    return false;
  }

  const cidrs = await getPaddleWebhookIpv4Cidrs();
  return cidrs.some((cidr) => ipv4MatchesCidr(normalizedIp, cidr));
}

export function getClientIpFromRequest(request: Request): string | null {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) {
    const firstHop = forwardedFor.split(",")[0]?.trim();
    if (firstHop) {
      return firstHop;
    }
  }

  const realIp = request.headers.get("x-real-ip")?.trim();
  if (realIp) {
    return realIp;
  }

  return null;
}
