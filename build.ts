import { build } from 'esbuild'
;(async () => {
  await build({
    entryPoints: ['./src/index.ts'],
    outfile: './dist/index.js',
    format: 'esm',
    sourcemap: true,
    minify: false,
    bundle: true,
  })
})()
