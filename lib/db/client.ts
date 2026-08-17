import postgres, { type Sql } from "postgres";

let sqlInstance: Sql | undefined;

function buildConnectionStringFromParts(): string | null {
  const host = process.env.POSTGRES_HOST;
  const user = process.env.POSTGRES_USER;
  const password = process.env.POSTGRES_PASSWORD;

  if (!host || !user || !password) {
    return null;
  }

  const database = process.env.POSTGRES_DATABASE ?? "postgres";
  const port = process.env.POSTGRES_PORT ?? "6543";

  return `postgresql://${encodeURIComponent(user)}:${encodeURIComponent(password)}@${host}:${port}/${database}`;
}

export function getDatabaseUrl(): string {
  const url =
    process.env.POSTGRES_URL ??
    process.env.DATABASE_URL ??
    buildConnectionStringFromParts() ??
    process.env.POSTGRES_URL_NON_POOLING;

  if (!url) {
    throw new Error(
      "Database URL is not set. Configure POSTGRES_URL (or DATABASE_URL) before using the database.",
    );
  }

  return url;
}

function usesRemoteHost(connectionString: string): boolean {
  try {
    const normalized = connectionString.replace(/^postgres(ql)?:/, "http:");
    const hostname = new URL(normalized).hostname;
    return hostname !== "localhost" && hostname !== "127.0.0.1";
  } catch {
    return true;
  }
}

export function getSql(): Sql {
  if (!sqlInstance) {
    const connectionString = getDatabaseUrl();

    sqlInstance = postgres(connectionString, {
      // Required for Supabase PgBouncer / Vercel serverless poolers
      prepare: false,
      ssl: usesRemoteHost(connectionString) ? "require" : undefined,
      max: 1,
      idle_timeout: 20,
      connect_timeout: 15,
      fetch_types: false,
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

export function isDatabaseConnectionError(error: unknown): boolean {
  if (!(error instanceof Error)) {
    return false;
  }

  const message = error.message.toLowerCase();
  const code =
    "code" in error && typeof error.code === "string"
      ? error.code.toLowerCase()
      : "";

  return (
    code.startsWith("econn") ||
    code.startsWith("08") ||
    message.includes("connect") ||
    message.includes("connection") ||
    message.includes("timeout") ||
    message.includes("econnrefused") ||
    message.includes("database url is not set") ||
    message.includes("password authentication failed") ||
    message.includes("ssl") ||
    message.includes("relation") ||
    message.includes("does not exist")
  );
}
