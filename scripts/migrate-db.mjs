#!/usr/bin/env node
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import postgres from "postgres";

const __dirname = dirname(fileURLToPath(import.meta.url));
const schemaPath = join(__dirname, "../lib/db/schema.sql");

const connectionString =
  process.env.POSTGRES_URL ??
  process.env.DATABASE_URL ??
  process.env.POSTGRES_URL_NON_POOLING;

if (!connectionString) {
  console.error("POSTGRES_URL (or DATABASE_URL) is required");
  process.exit(1);
}

const isSupabase =
  connectionString.includes("supabase.com") ||
  connectionString.includes("pooler.supabase");

const sql = postgres(connectionString, {
  prepare: false,
  ssl: isSupabase ? "require" : undefined,
});

async function main() {
  const schema = readFileSync(schemaPath, "utf8");
  const statements = schema
    .split(";")
    .map((statement) => statement.trim())
    .filter(Boolean);

  for (const statement of statements) {
    await sql.unsafe(`${statement};`);
    console.log(`Applied: ${statement.split("\n")[0]}…`);
  }

  await sql.end();
  console.log("Database migration complete.");
}

main().catch(async (error) => {
  console.error("Migration failed:", error);
  await sql.end().catch(() => undefined);
  process.exit(1);
});
