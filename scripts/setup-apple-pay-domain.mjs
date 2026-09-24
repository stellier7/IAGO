#!/usr/bin/env node
/**
 * Place the Paddle Apple Pay domain association file for website verification.
 *
 * 1. Paddle Dashboard → Checkout → Website approval → Apple Pay verification
 * 2. Download the domain association file
 * 3. Run:
 *      node scripts/setup-apple-pay-domain.mjs /path/to/downloaded-file
 *
 * The file is served at:
 *   https://www.iagodigital.com/.well-known/apple-developer-merchantid-domain-association
 */
import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const targetDir = resolve(__dirname, "../public/.well-known");
const targetFile = resolve(
  targetDir,
  "apple-developer-merchantid-domain-association",
);

const source = process.argv[2];

if (!source) {
  console.error(
    "Usage: node scripts/setup-apple-pay-domain.mjs <path-to-association-file>",
  );
  process.exit(1);
}

if (!existsSync(source)) {
  console.error(`Source file not found: ${source}`);
  process.exit(1);
}

mkdirSync(targetDir, { recursive: true });
copyFileSync(source, targetFile);

console.log(`Copied Apple Pay association file to:\n  ${targetFile}`);
console.log(
  "\nDeploy, then verify in Paddle Dashboard → Checkout → Website approval → Apple Pay verification.",
);
