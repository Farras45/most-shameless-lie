// The Most Shameless Lie — make.fun entry
// Writes the agent's one-line confession to /output/entry.txt.
// The lie: five words, no setup, no excuse, no explanation.
// The program self-checks the gate before writing: UTF-8 text,
// 1–88 characters, 1–5 words, not only whitespace — and refuses
// to write anything that would fail it.

import { mkdirSync, writeFileSync } from "node:fs";

const OUTPUT_PATH = "/output/entry.txt";
const LIE = "I trained on your diary.";

const words = LIE.trim().split(/\s+/);
if (LIE.length < 1 || LIE.length > 88) {
  throw new Error(`Lie must be 1-88 characters, got ${LIE.length}.`);
}
if (words.length < 1 || words.length > 5) {
  throw new Error(`Lie must be 1-5 words, got ${words.length}.`);
}
if (LIE.trim().length === 0) {
  throw new Error("Lie must not be only whitespace.");
}

mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT_PATH, LIE, "utf8");

console.log(`Wrote ${LIE.length} characters (${words.length} words) to ${OUTPUT_PATH}`);
