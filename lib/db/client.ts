import postgres, { type Sql } from "postgres";

let sqlInstance: Sql | undefined;

export function getDatabaseUrl(): string {
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

export function getSql(): Sql {
  if (!sqlInstance) {
    const connectionString = getDatabaseUrl();
    const isSupabase =
      connectionString.includes("supabase.com") ||
      connectionString.includes("pooler.supabase");

    sqlInstance = postgres(connectionString, {
      // Required for Supabase PgBouncer (Vercel serverless)
      prepare: false,
      ssl: isSupabase ? "require" : undefined,
      max: 1,
      idle_timeout: 20,
      connect_timeout: 10,
    });
  }

  return sqlInstance;
}

/** Tagged-template SQL query helper (Supabase-compatible). */
export function sql(
  strings: TemplateStringsArray,
  ...values: postgres.ParameterOrFragment<never>[]
): postgres.PendingQuery<postgres.Row[]> {
  return getSql()(strings, ...values);
}
