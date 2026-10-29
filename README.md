# @luisfuturist/ui

LFDS — luisfuturist's React component library (shadcn-style).

## Install

```sh
pnpm add github:luisfuturist/ui
```

## Consumer requirements

This package is designed for **Vite-based projects** (e.g. Astro) using **Tailwind CSS v4** and **React 19**.

1. **unplugin-icons** — `dropdown-menu` imports `~icons/material-symbols/*` virtual modules. In the consumer's Vite config add the plugin with the JSX compiler, install `@iconify/json`, and add the ambient types to your tsconfig:

   ```ts
   // vite.config.ts (or astro.config.* integrations)
   import Icons from 'unplugin-icons/vite'

   export default defineConfig({
     plugins: [Icons({ compiler: 'jsx' })],
   })
   ```

   ```jsonc
   // tsconfig.json
   { "compilerOptions": { "types": ["unplugin-icons/types/react"] } }
   ```

2. **Exclude this package from esbuild pre-bundling** — `optimizeDeps` can't resolve `~icons` virtual modules:

   ```ts
   export default defineConfig({
     optimizeDeps: { exclude: ['@luisfuturist/ui'] },
   })
   ```

3. **Styles** — in the consumer's global CSS, after `@import 'tailwindcss';`:

   ```css
   @import 'tailwindcss';
   @import '@luisfuturist/ui/styles.css';
   @source "../node_modules/@luisfuturist/ui";
   ```

   The `@source` path is relative to the CSS file — Tailwind v4 skips `node_modules` during automatic content detection otherwise.

4. **Tailwind v4 + React 19 required.**

## Usage

```tsx
import { Button, Toaster } from '@luisfuturist/ui'

export function App() {
  return (
    <>
      <Button data-augmented-ui="tr-clip bl-clip" className="aug-button">
        Click me
      </Button>
      <Toaster />
    </>
  )
}
```

## Dev

```sh
pnpm install
pnpm build      # vite lib mode + tsc declarations (dist/ is committed)
pnpm typecheck
```

`dist/` is committed to the repo so installs via git URL work without a build step.
