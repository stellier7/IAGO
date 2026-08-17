#!/usr/bin/env node
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { sql } from "@vercel/postgres";

const __dirname = dirname(fileURLToPath(import.meta.url));
const schemaPath = join(__dirname, "../lib/db/schema.sql");

async function main() {
  const schema = readFileSync(schemaPath, "utf8");
  const statements = schema
    .split(";")
    .map((statement) => statement.trim())
    .filter(Boolean);

  for (const statement of statements) {
    await sql.query(`${statement};`);
    console.log(`Applied: ${statement.split("\n")[0]}…`);
  }

  console.log("Database migration complete.");
}

main().catch((error) => {
  console.error("Migration failed:", error);
  process.exit(1);
});
