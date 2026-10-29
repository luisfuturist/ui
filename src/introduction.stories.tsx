import type { Meta, StoryObj } from '@storybook/react-vite'
import type { ReactNode } from 'react'

import { Badge } from './components/ui/badge'
import { Button } from './components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './components/ui/card'
import { Kbd, KbdGroup } from './components/ui/kbd'
import { Label } from './components/ui/label'
import { Progress } from './components/ui/progress'
import { Switch } from './components/ui/switch'

const meta = {
  title: 'Introduction/Overview',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'LFDS — luisfuturist design system. A retro-terminal, '
          + 'phosphor-lit design language for React: saturated CRT '
          + 'primaries, monospace type, solid borders, square geometry '
          + 'and augmented clipped corners.',
      },
    },
  },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

function Section({ title, children }: {
  title: string
  children: ReactNode
}) {
  return (
    <section className="flex flex-col gap-5">
      <h2 className="border-b border-foreground/30 pb-2 font-mono text-sm font-semibold tracking-wide uppercase">
        {title}
      </h2>
      {children}
    </section>
  )
}

function Swatch({ name }: { name: string }) {
  return (
    <div className="flex flex-col gap-1.5">
      <div
        className="h-20 w-full"
        style={{
          backgroundColor: `var(--${name})`,
          border: '1px solid var(--gray-2)',
        }}
      />
      <code className="font-mono text-xs">--{name}</code>
    </div>
  )
}

function Principle({ motif, title, children }: {
  motif: ReactNode
  title: string
  children: ReactNode
}) {
  return (
    <div className="flex flex-col gap-3 border border-foreground/30 bg-background p-5">
      <div className="flex h-20 items-center">
        {motif}
      </div>
      <h3 className="font-mono text-xs font-semibold tracking-widest uppercase">
        {title}
      </h3>
      <p className="text-xs leading-relaxed text-muted-foreground">
        {children}
      </p>
    </div>
  )
}

const signal = ['blue', 'cyan', 'green', 'magenta', 'red', 'yellow', 'orange']
const neutrals = ['black', 'white', 'gray-1', 'gray-2', 'gray-3']

export const DesignLanguage: Story = {
  render: () => (
    <div className="bg-background text-foreground">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-16 px-6 py-12">

        {/* Hero */}
        <header className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-col gap-5">
            <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
              luisfuturist design system
            </p>
            <h1 className="font-mono text-6xl font-bold tracking-tight sm:text-7xl">
              LFDS
            </h1>
            <p className="max-w-prose text-sm leading-relaxed text-muted-foreground">
              A retro-terminal design language for React. Saturated phosphor
              primaries on black or white, monospace-first typography, solid
              1px borders, zero border radius — and clipped
              {' '}
              <em>augmented</em>
              {' '}
              corners on every panel and button. Ships the full shadcn
              component catalog plus page-level blocks, re-exported from
              {' '}
              <code className="font-mono">@luisfuturist/ui</code>
              .
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Button variant="augmented-inverted">Get started</Button>
              <Button variant="augmented-outline">Browse the gallery</Button>
              <span className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
                <KbdGroup>
                  <Kbd>⌘</Kbd>
                  <Kbd>K</Kbd>
                </KbdGroup>
                to search
              </span>
            </div>
          </div>

          {/* Terminal panel — phosphor green on black in both themes */}
          <div className="w-full max-w-md shrink-0 border border-green bg-black font-mono text-xs text-green">
            <div className="flex items-center gap-1.5 border-b border-green/40 px-3 py-2">
              <span className="size-2 bg-green/70" />
              <span className="size-2 bg-green/50" />
              <span className="size-2 bg-green/30" />
              <span className="ml-2 opacity-60">lfds — phosphor.term</span>
            </div>
            <div className="flex flex-col gap-1.5 p-4">
              <p>
                <span className="opacity-50">$ </span>
                pnpm add github:luisfuturist/ui
              </p>
              <p className="opacity-70">resolving 12 phosphor primitives…</p>
              <p className="opacity-70">binding semantic roles… done</p>
              <p className="opacity-70">clipping corners… done</p>
              <p>
                <span className="opacity-50">$ </span>
                <span className="animate-pulse">▊</span>
              </p>
            </div>
          </div>
        </header>

        {/* Palette */}
        <Section title="The phosphor palette">
          <p className="max-w-prose text-sm text-muted-foreground">
            Twelve primitives in
            {' '}
            <code className="font-mono">styles/lfds.css</code>
            {' '}
            — pure CRT
            primaries plus a three-step gray ramp. Every semantic role token
            resolves one of these; dark theme rebinds the same names to
            glowing pastel values.
          </p>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-7">
            {signal.map(name => (
              <Swatch key={name} name={name} />
            ))}
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-5">
            {neutrals.map(name => (
              <Swatch key={name} name={name} />
            ))}
          </div>
        </Section>

        {/* Principles */}
        <Section title="Design principles">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">

            <Principle
              title="Phosphor palette"
              motif={(
                <div className="flex gap-1">
                  {['blue', 'cyan', 'green', 'magenta', 'red', 'yellow'].map(
                    name => (
                      <span
                        key={name}
                        className="size-8"
                        style={{ backgroundColor: `var(--${name})` }}
                      />
                    ),
                  )}
                </div>
              )}
            >
              Saturated hues lifted from a CRT phosphor mask — no muted
              half-measures. Light theme runs deep-toned color on white;
              dark theme glows pastel on black.
            </Principle>

            <Principle
              title="Monospace typography"
              motif={(
                <span className="font-mono text-3xl font-semibold tracking-tight">
                  Aa 0O1l
                </span>
              )}
            >
              Terminals don't kern. Headings, labels, code and chrome all
              set in monospace — UI copy reads like a machine wrote it,
              because it did.
            </Principle>

            <Principle
              title="Augmented corners"
              motif={(
                <div
                  data-augmented-ui="tr-clip bl-clip both"
                  className="aug-surface size-14 bg-card"
                />
              )}
            >
              Panels and buttons carry
              {' '}
              <code className="font-mono">data-augmented-ui</code>
              {' '}
              — clipped-corner chrome when
              {' '}
              <code className="font-mono">augmented-ui</code>
              {' '}
              CSS is loaded, inert square fallback when it isn't.
            </Principle>

            <Principle
              title="Solid borders"
              motif={(
                <div className="flex items-center">
                  <span className="block size-14 border border-foreground" />
                  <span className="-ml-8 block size-10 border border-foreground/60" />
                  <span className="-ml-6 block size-6 border border-foreground/30" />
                </div>
              )}
            >
              1px solid
              {' '}
              <code className="font-mono">foreground</code>
              {' '}
              rings draw the
              machine's wireframe — borders are structural, never decorative
              gradients or hairline whispers.
            </Principle>

            <Principle
              title="Square geometry"
              motif={(
                <div className="grid grid-cols-2 gap-1">
                  <span className="block size-7 bg-foreground" />
                  <span className="block size-7 bg-foreground/70" />
                  <span className="block size-7 bg-foreground/40" />
                  <span className="block size-7 bg-foreground/20" />
                </div>
              )}
            >
              <code className="font-mono">--radius: 0</code>
              {' '}
              — every
              {' '}
              <code className="font-mono">rounded-*</code>
              {' '}
              utility resolves
              to nothing. Curves enter only through the aug clip paths.
            </Principle>

            <Principle
              title="Light & dark"
              motif={(
                <div className="flex size-14 overflow-hidden border border-foreground/30">
                  <span className="h-full w-1/2 bg-white" />
                  <span className="h-full w-1/2 bg-black" />
                </div>
              )}
            >
              One token graph, two bindings.
              {' '}
              <code className="font-mono">.dark</code>
              {' '}
              re-points every
              primitive — use the toolbar theme toggle anywhere in these
              docs to compare.
            </Principle>
          </div>
        </Section>

        {/* Composed showcase */}
        <Section title="In composition">
          <div className="flex justify-center">
            <Card className="w-full max-w-xl">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Badge>Live</Badge>
                  <Badge variant="secondary">v0.1.0</Badge>
                  <Badge variant="outline">phosphor</Badge>
                </div>
                <CardTitle className="font-mono">phosphor-core</CardTitle>
                <CardDescription>
                  All subsystems nominal — one card, six components.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="ov-glow" className="font-mono text-xs">
                      CRT glow
                    </Label>
                    <Switch id="ov-glow" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="ov-scan" className="font-mono text-xs">
                      Scanlines
                    </Label>
                    <Switch id="ov-scan" defaultChecked />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <span className="font-mono text-xs text-muted-foreground">
                    beam charge — 72%
                  </span>
                  <Progress value={72} />
                </div>
              </CardContent>
              <CardFooter className="flex items-center justify-between gap-3">
                <div className="flex gap-2">
                  <Button variant="augmented-inverted" size="sm">
                    Engage
                  </Button>
                  <Button variant="augmented-outline" size="sm">
                    Reset
                  </Button>
                </div>
                <KbdGroup>
                  <Kbd>⌘</Kbd>
                  <Kbd>⏎</Kbd>
                </KbdGroup>
              </CardFooter>
            </Card>
          </div>
        </Section>

        <footer className="border-t border-foreground/30 pt-6 font-mono text-xs text-muted-foreground">
          Next:
          {' '}
          <strong>Getting Started</strong>
          {' '}
          for consumer setup, or jump straight to the
          {' '}
          <strong>Gallery</strong>
          {' '}
          for the full component catalog.
        </footer>
      </div>
    </div>
  ),
}
