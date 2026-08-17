import { sql } from "@vercel/postgres";

export { sql };

export function requireDatabaseUrl(): string {
  const url =
    process.env.POSTGRES_URL ??
    process.env.DATABASE_URL ??
    process.env.POSTGRES_URL_NON_POOLING;

  if (!url) {
    throw new Error(
      "Database URL is not set. Configure POSTGRES_URL (or DATABASE_URL) before using the database.",
    );
  }

  return url;
}
