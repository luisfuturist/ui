import type { Meta, StoryObj } from '@storybook/react-vite'
import type { ReactNode } from 'react'

import { Code } from './docs/primitives'

const meta = {
  title: 'Introduction/Getting Started',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Install and wire `@luisfuturist/ui` (LFDS) into a Vite + '
          + 'Tailwind CSS v4 + React 19 consumer.',
      },
    },
  },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

function Step({ index, title, children }: {
  index: number
  title: string
  children: ReactNode
}) {
  return (
    <section className="flex flex-col gap-3">
      <h3 className="flex items-baseline gap-2 font-mono text-sm font-semibold tracking-wide uppercase">
        <span className="text-muted-foreground">
          {String(index).padStart(2, '0')}
        </span>
        {title}
      </h3>
      <div className="flex flex-col gap-3 text-sm leading-relaxed">
        {children}
      </div>
    </section>
  )
}

export const Setup: Story = {
  render: () => (
    <div className="bg-background text-foreground">
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-10 px-6 py-12">
        <header className="flex flex-col gap-3">
          <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
            LFDS · luisfuturist design system
          </p>
          <h1 className="font-mono text-3xl font-semibold tracking-tight sm:text-4xl">
            Getting started
          </h1>
          <p className="max-w-prose text-sm text-muted-foreground">
            LFDS — luisfuturist's React component library (shadcn-style).
            Ships the full shadcn component catalog under
            {' '}
            <code className="font-mono">src/components/ui/</code>
            , plus
            composite page-level blocks (
            <code className="font-mono">LoginForm</code>
            ,
            {' '}
            <code className="font-mono">SiteHeader</code>
            ,
            {' '}
            <code className="font-mono">SiteFooter</code>
            ,
            {' '}
            <code className="font-mono">ContactCTA</code>
            ,
            {' '}
            <code className="font-mono">HeroSection</code>
            ) under
            {' '}
            <code className="font-mono">src/blocks/</code>
            {' '}
            — all
            re-exported from the package root.
          </p>
        </header>

        <Step index={1} title="Install">
          <Code>{'pnpm add github:luisfuturist/ui'}</Code>
        </Step>

        <Step index={2} title="Consumer requirements">
          <p>
            This package is designed for
            {' '}
            <strong>Vite-based projects</strong>
            {' '}
            (e.g. Astro) using
            {' '}
            <strong>Tailwind CSS v4</strong>
            {' '}
            and
            {' '}
            <strong>React 19</strong>
            .
          </p>

          <p>
            <strong>unplugin-icons</strong>
            {' '}
            — roughly twenty component files across the catalog
            (accordion, breadcrumb, calendar, dropdown-menu, sidebar…) import
            {' '}
            <code className="font-mono">~icons/material-symbols/*</code>
            {' '}
            virtual
            modules. In the consumer's Vite config add the plugin with the JSX
            compiler, install
            {' '}
            <code className="font-mono">@iconify/json</code>
            , and add the
            ambient types to your tsconfig:
          </p>
          <Code>
{`// vite.config.ts (or astro.config.* integrations)
import Icons from 'unplugin-icons/vite'

export default defineConfig({
  plugins: [Icons({ compiler: 'jsx' })],
})`}
          </Code>
          <Code>
{`// tsconfig.json
{ "compilerOptions": { "types": ["unplugin-icons/types/react"] } }`}
          </Code>

          <p>
            <strong>Exclude this package from esbuild pre-bundling</strong>
            {' '}
            —
            {' '}
            <code className="font-mono">optimizeDeps</code>
            {' '}
            can't resolve
            {' '}
            <code className="font-mono">~icons</code>
            {' '}
            virtual modules:
          </p>
          <Code>
{`export default defineConfig({
  optimizeDeps: { exclude: ['@luisfuturist/ui'] },
})`}
          </Code>

          <p>
            <strong>Styles</strong>
            {' '}
            — in the consumer's global CSS, after
            {' '}
            <code className="font-mono">@import 'tailwindcss';</code>
            :
          </p>
          <Code>
{`@import 'tailwindcss';
@import '@luisfuturist/ui/styles.css';
@source "../node_modules/@luisfuturist/ui";`}
          </Code>
          <p>
            The overlay motion utilities (
            <code className="font-mono">animate-in</code>
            /
            <code className="font-mono">fade-in-*</code>
            /
            <code className="font-mono">zoom-*</code>
            /
            <code className="font-mono">slide-in-from-*</code>
            ) come from
            {' '}
            <code className="font-mono">tw-animate-css</code>
            , which
            {' '}
            <code className="font-mono">styles.css</code>
            {' '}
            already
            {' '}
            <code className="font-mono">@import</code>
            s — no extra install needed.
          </p>
          <p>
            The
            {' '}
            <code className="font-mono">@source</code>
            {' '}
            path is relative to the CSS
            file — Tailwind v4 skips
            {' '}
            <code className="font-mono">node_modules</code>
            {' '}
            during automatic
            content detection otherwise.
          </p>

          <p>
            <strong>Fonts</strong>
            {' '}
            —
            {' '}
            <code className="font-mono">styles.css</code>
            {' '}
            defines
            {' '}
            <code className="font-mono">--font-display</code>
            /
            <code className="font-mono">--font-sans</code>
            /
            <code className="font-mono">--font-mono</code>
            /
            <code className="font-mono">--font-flex</code>
            {' '}
            tokens pointing at the Roboto family, but doesn't fetch the
            faces — load them once in your HTML head:
          </p>
          <Code>
{`<link rel="preconnect" href="https://fonts.googleapis.com" />
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&family=Roboto+Flex:opsz,wght@8..144,100..1000&family=Roboto+Mono:ital,wght@0,100..700;1,100..700&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap"
/>`}
          </Code>
          <p>
            Set
            {' '}
            <code className="font-mono">font-sans</code>
            {' '}
            (or
            {' '}
            <code className="font-mono">font-family: var(--font-sans)</code>
            ) on
            {' '}
            <code className="font-mono">html</code>
            /
            <code className="font-mono">body</code>
            {' '}
            for the site default.
          </p>

          <p>
            <strong>Tailwind v4 + React 19 required.</strong>
          </p>
        </Step>

        <Step index={3} title="Augmented corners">
          <p>
            LFDS surfaces are squared by default — menus, tooltips, command,
            select and combobox panels stay plain square. The clipped-corner
            carriers are Card, Alert, AlertDialog, Dialog, Sheet, Drawer,
            Popover, HoverCard, the
            {' '}
            <code className="font-mono">augmented*</code>
            {' '}
            Button
            variants and the ContactCTA block, each tagged with
            {' '}
            <code className="font-mono">data-augmented-ui</code>
            {' '}
            — for the clipped "augmented" corner look, consumers
            install and import
            {' '}
            <code className="font-mono">augmented-ui</code>
            {' '}
            once:
          </p>
          <Code>{'pnpm add augmented-ui'}</Code>
          <Code>
{`import 'augmented-ui' // e.g. in your app entry or global styles import`}
          </Code>
          <p>
            Without that import the attributes are inert and everything renders
            plain square — no breakage either way.
            {' '}
            <code className="font-mono">augmented-ui</code>
            {' '}
            is intentionally
            {' '}
            <strong>not</strong>
            {' '}
            a dependency of this package.
          </p>
        </Step>

        <Step index={4} title="Usage">
          <Code>
{`import { Button, Toaster } from '@luisfuturist/ui'

export function App() {
  return (
    <>
      <Button data-augmented-ui="tr-clip bl-clip both" className="aug-button">
        Click me
      </Button>
      <Toaster />
    </>
  )
}`}
          </Code>
        </Step>

        <footer className="border-t border-foreground/30 pt-6 text-xs text-muted-foreground">
          Storybook docs and playgrounds are published at
          {' '}
          <a
            className="text-link-primary underline underline-offset-4 hover:text-link-primary-hover"
            href="https://luisfuturist.github.io/ui/"
          >
            luisfuturist.github.io/ui
          </a>
          .
        </footer>
      </div>
    </div>
  ),
}
