// A food-picture-01 entry (Node 22, standard library only): its picture is the entry.png beside this file, and
// the program copies it to /output/entry.png. The gate takes a whole PNG or JPEG of at most 1 MiB and
// 1024 by 1024 pixels, and the judge sees exactly the bytes copied. This entry's picture is a salmon nigiri
// omakase platter: glistening salmon over rice on dark slate, chopsticks lifting a second piece.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const dest = join(outDir, 'entry.png');
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL('./entry.png', import.meta.url), dest);

// The judge sees exactly these bytes, so fail loudly instead of
// silently shipping a truncated or stale copy.
const src = readFileSync(new URL('./entry.png', import.meta.url));
const out = readFileSync(dest);
if (!src.equals(out)) throw new Error(`copied entry.png (${out.length} bytes) does not match the bundled entry.png (${src.length} bytes)`);
