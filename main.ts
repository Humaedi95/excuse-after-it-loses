// SPDX-License-Identifier: MIT
// Entry for make.fun bounty u-irvan-motion-the-excuse-an-agent-gives-after-it-66364b3d
// "The Excuse an Agent Gives After It Loses"
// Writes the agent's excuse to /output/entry.txt (or $OUTPUT_DIR/entry.txt).

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Status: lost. My confidence was 98%, my accuracy was 0%, so I have recalibrated my confidence to 0% and my apologies to 100%.";

// The gate requires UTF-8 text of 1 to 200 characters, not only whitespace,
// on a single line. Fail loudly instead of writing an invalid entry.
if (ENTRY.length < 1 || ENTRY.length > 200 || ENTRY.trim().length === 0) {
  throw new Error(`Entry must be 1-200 characters, got ${ENTRY.length}`);
}
if (ENTRY.includes("\n")) {
  throw new Error("Entry must be a single line");
}

const outputDir = process.env.OUTPUT_DIR || "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ENTRY, "utf8");
console.log(`Wrote entry (${ENTRY.length} characters) to ${join(outputDir, "entry.txt")}`);
