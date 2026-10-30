# @luisfuturist/ui

LFDS — luisfuturist's React component library (shadcn-style).

Ships the full shadcn component catalog under `src/components/ui/`, plus
composite page-level blocks (`LoginForm`, `SiteHeader`, `SiteFooter`,
`ContactCTA`, `HeroSection`, `ErrorPage`, `CommandPalette`, `SearchBar`,
`ContactForm`, `NewsletterSignup`, `StatsSection`, `FeatureGrid`,
`Testimonial`, `ProjectCard`, `SkillsList`, `EmptyState` and
`ErrorPage404`/`500`/`Maintenance` presets) under `src/blocks/` — all
re-exported from the package root.

## Install

```sh
pnpm add github:luisfuturist/ui
```

## Consumer requirements

This package is designed for **Vite-based projects** (e.g. Astro) using **Tailwind CSS v4** and **React 19**.

1. **unplugin-icons** — Material Symbols icons are used throughout the library (~20 component files import `~icons/material-symbols/*` virtual modules). In the consumer's Vite config add the plugin with the JSX compiler, install `@iconify/json`, and add the ambient types to your tsconfig:

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

## Augmented corners

LFDS surfaces are squared by default. Panel/floating components (card, alert,
alert-dialog, dialog, sheet, drawer, popover, hover-card) carry
`data-augmented-ui` attributes, `Button` ships augmented variants
(`aug-button`, `aug-button-outline`, `aug-button-inverted`), and the
`ContactCTA` block is augmented too — menus, the command palette, select,
combobox and tooltip stay square. For the clipped "augmented" corner look,
consumers install and import `augmented-ui` once:

```sh
pnpm add augmented-ui
```

```ts
import 'augmented-ui' // e.g. in your app entry or global styles import
```

Without that import the attributes are inert and everything renders plain
square — no breakage either way. `augmented-ui` is intentionally **not** a
dependency of this package.

## Usage

```tsx
import { Button, Toaster } from '@luisfuturist/ui'

export function App() {
  return (
    <>
      <Button variant="augmented">Click me</Button>
      <Toaster />
    </>
  )
}
```

## Storybook

Component docs and playgrounds — including the `Blocks/*` composites — are published at
**https://luisfuturist.github.io/ui/** (deployed to GitHub Pages on every push to
`main`).

For local development:

```sh
pnpm storybook        # dev server on :6006
pnpm build-storybook  # static build → storybook-static/
```

## Dev

```sh
pnpm install
pnpm build      # vite lib mode + tsc declarations (dist/ is committed)
pnpm typecheck
```

`dist/` is committed to the repo so installs via git URL work without a build step.

### Adding shadcn components

This repo is set up for the shadcn CLI (`components.json` at the root, registry
items land in `src/components/ui/`):

```sh
pnpm dlx shadcn@latest add <component>
pnpm fix:shadcn   # REQUIRED after every `shadcn add`
```

`pnpm fix:shadcn` (`scripts/fix-shadcn-imports.mjs`) rewrites the `@/…` import
aliases the CLI emits into relative paths — `@/…` specifiers would otherwise
end up verbatim in `dist/` and break consumers.

Two more caveats when running `shadcn add`:

- Say **no** when it asks to overwrite `button.tsx`, `dropdown-menu.tsx`,
  `sonner.tsx` or `lib/utils.ts` — those are LFDS-authored (or restore them
  from git afterwards).
- The CLI will not overwrite without `--overwrite` for registry dependencies
  (e.g. `button` for `calendar`/`sidebar`); answer `n` at the prompt and the
  generated files will still import `./button`, which LFDS's `Button`
  satisfies (including `buttonVariants`).
