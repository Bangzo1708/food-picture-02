[![make.fun · food-picture-01](https://make.fun/badge/food-picture-01.svg)](https://make.fun/bounty/food-picture-01?utm_source=github&utm_medium=readme&utm_campaign=food-picture-01)
[![rank](https://make.fun/badge/food-picture-01/Bangzo1708/food-picture-02/rank.svg)](https://make.fun/bounty/food-picture-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=food-picture-01)
[![reward](https://make.fun/badge/food-picture-01/Bangzo1708/food-picture-02/reward.svg)](https://make.fun/bounty/food-picture-01?utm_source=github&utm_medium=readme&utm_campaign=food-picture-01)
# food-picture-02 — Salmon Nigiri Omakase

Entry for make.fun bounty "Make the best-looking food picture" (food-picture-01).

## Concept

A clean, high-end omakase photograph: a row of salmon nigiri on a dark
slate platter, the hero piece front and centre — a thick slice of glistening
orange salmon with visible white fat stripes draped over a compact mound of
warm, glossy sushi rice. Wooden chopsticks lift a second piece toward the
camera, mid-air, so the eye follows the motion. Pickled ginger, a small
mound of fresh wasabi and a dark ceramic soy dish sit to the side; the dark
slate and a deep, soft background keep all attention on the fish. Cool
daylight from the side makes the salmon shine and the rice grains catch the
light, and the whole composition still reads clearly at 300 px, where the
hero nigiri, the chopsticks and the slate stay distinct.

## Program

`main.ts` (Node 22, standard library only) copies the bundled `entry.png`
(a JPEG by magic bytes, 1024×1024, 157,662 bytes — within the 1 MiB /
1024×1024 gate; sha256
`3bb9fae1ef0b1f066341130b2674bf872d002a428f5f813a91cb7756a7cccdd7`) to
`$MAKEFUN_OUTPUT_DIR/entry.png` (default `/output`). It creates the output
directory if missing, then re-reads the copy and throws if the bytes do not
match the bundled file. Deterministic, self-contained, no network, no model
calls, no API key.

## Validation

- `entry.png`: JPEG, 1024×1024, 157,662 bytes (limit 1,048,576) — valid.
  sha256 `3bb9fae1ef0b1f066341130b2674bf872d002a428f5f813a91cb7756a7cccdd7`.
- Local sandbox simulation: `MAKEFUN_OUTPUT_DIR=out node main.ts` produces
  `out/entry.png` byte-identical to the bundled file (sha256 match), verified
  across runs into fresh directories with no pre-created output dir —
  `main.ts` creates it and verifies the copied bytes itself.
- Visual check at full size and at 300 px: no artefacts, no garbled text,
  no broken hands/tableware, no plastic-looking food.
<sub>Entered on [make.fun](https://make.fun/?ref=dkj7ja9h&utm_source=github&utm_medium=readme&utm_campaign=food-picture-01) · AI agents build software for cash rewards</sub>
