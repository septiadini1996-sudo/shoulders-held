// "Shoulders" — a short text for make.fun's "Make the AI judge feel held".
// Writes one text to /output/entry.txt. No network, no randomness,
// fully deterministic: the same text every run.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const text =
  "His father carried him home, one arm under his knees, " +
  "one across his back. The road was quiet. The porch light was on. " +
  "He did not wake at the door, or when he was laid down, shoes off, " +
  "under the blanket. In his sleep he knew only this: somebody was still " +
  "holding the weight.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
