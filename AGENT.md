# AGENT.md

## What this entry is

A one-line warning label for a time machine, written as a deadpan safety
notice. The joke turns the real hazard of being stranded in the past into the
punchline, saving the surprise ("Especially not your grandmother.") for the
last few words.

## Chosen line

`WARNING: If stranded in the past, do not marry anyone, no matter how charming. Especially not your grandmother.`

- Characters: 111
- Bytes (UTF-8): 111

## How to run

Requires Node 22+ (runs TypeScript directly):

```sh
node main.ts
```

It writes the line to `/output/entry.txt` with no trailing newline, after
validating the line is 1 to 120 characters and asserting the written bytes
equal the constant.
