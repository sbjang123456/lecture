import run from '@sbjang/esbuild-config';
import pkg from "./package.json" assert { type: "json" };

run({
  pkg,
})