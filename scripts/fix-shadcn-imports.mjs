#!/usr/bin/env node
// Rewrites `@/…` import specifiers in src/ to correct relative paths.
// The shadcn CLI emits `@/…` aliases (per components.json), which would end up
// verbatim in dist/ and break consumers. Run this after every `shadcn add`:
//
//   pnpm fix:shadcn
//
// No dependencies; plain Node >= 18.

import { promises as fs } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const srcDir = path.join(root, 'src')

async function* walk(dir) {
  for (const entry of await fs.readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) yield* walk(full)
    else if (/\.(ts|tsx)$/.test(entry.name)) yield full
  }
}

// Matches a quoted specifier starting with `@/` — covers `from "@/x"`,
// `import "@/x"`, `import("@/x")`, `export * from "@/x"`, etc.
const SPECIFIER_RE = /(['"])(@\/[^'"]+)\1/g

let changedFiles = 0
let changedSpecifiers = 0

for await (const file of walk(srcDir)) {
  const original = await fs.readFile(file, 'utf8')
  const fileDir = path.dirname(file)

  const updated = original.replace(SPECIFIER_RE, (match, quote, spec) => {
    // `@/foo/bar` -> absolute filesystem path <root>/src/foo/bar
    const target = path.join(srcDir, spec.slice(2))
    let rel = path.relative(fileDir, target).split(path.sep).join('/')
    if (!rel.startsWith('.')) rel = `./${rel}`
    changedSpecifiers++
    return `${quote}${rel}${quote}`
  })

  if (updated !== original) {
    await fs.writeFile(file, updated)
    changedFiles++
    console.log(`fixed ${path.relative(root, file)}`)
  }
}

console.log(`\n${changedSpecifiers} specifier(s) rewritten in ${changedFiles} file(s).`)
