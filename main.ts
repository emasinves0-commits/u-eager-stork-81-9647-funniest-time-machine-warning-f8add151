// Funniest Time Machine Warning Label
// Entry for make.fun bounty u-eager-stork-81-9647-funniest-time-machine-warning-f8add151
// Writes the chosen warning label to /output/entry.txt (no trailing newline).

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

export const ENTRY_LINE =
  "WARNING: If stranded in the past, do not marry anyone, no matter how charming. Especially not your grandmother.";

export const MAX_ENTRY_CHARS = 120;

const OUTPUT_PATH = "/output/entry.txt";

/** Guard: the entry must be 1-120 characters and not only whitespace. */
function validateEntryLine(line: string): void {
  if (line.length < 1 || line.length > MAX_ENTRY_CHARS) {
    throw new Error(
      `entry line must be 1-${MAX_ENTRY_CHARS} characters, got ${line.length}`,
    );
  }
  if (line.trim().length === 0) {
    throw new Error("entry line must not be only whitespace");
  }
}

validateEntryLine(ENTRY_LINE);

mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
writeFileSync(OUTPUT_PATH, ENTRY_LINE, "utf8");

// Assert the written bytes equal the constant exactly (no trailing newline).
const written = readFileSync(OUTPUT_PATH, "utf8");
if (written !== ENTRY_LINE) {
  throw new Error("written entry does not match ENTRY_LINE");
}
