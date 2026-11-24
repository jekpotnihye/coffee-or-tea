import { mkdirSync, writeFileSync } from "node:fs";

// One Letter: Coffee or Tea — the entry is exactly one letter, A for coffee,
// reaffirmed: coffee is the vivid, honest pick, so the letter stays "A".
// The program writes that single letter to /output/entry.txt and nothing else:
// no newline, no explanation, no punctuation, so the output is 1 character.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", "A", "utf8");
