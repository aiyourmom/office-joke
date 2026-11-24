import { mkdirSync, writeFileSync } from "node:fs";

// One line of office comedy, at most 200 characters (gate: 1-200 chars).
const JOKE =
  "My calendar is so full of meetings about meetings that I had to schedule a meeting to plan my meetings.";

// Guard the gate contract: refuse to write an entry the scorer would reject.
const length = [...JOKE].length;
if (length < 1 || length > 200) {
  throw new Error(`joke must be 1-200 characters, got ${length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
