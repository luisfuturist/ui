import type { ReactNode } from 'react'
import { useEffect, useRef, useState } from 'react'

import { cn } from '../lib/utils'

// Shared primitives for the docs-only pages (Introduction, Design
// Tokens). Not part of the published component surface — storybook-only
// helpers so the token pages render a consistent chrome.

export function PageHeader({ eyebrow, title, children }: {
  eyebrow: string
  title: string
  children?: ReactNode
}) {
  return (
    <header className="flex flex-col gap-2">
      <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
        {eyebrow}
      </p>
      <h1 className="font-mono text-3xl font-semibold tracking-tight">
        {title}
      </h1>
      {children && (
        <p className="max-w-prose text-sm text-muted-foreground">
          {children}
        </p>
      )}
    </header>
  )
}

export function Section({ title, children, className }: {
  title: string
  children: ReactNode
  className?: string
}) {
  return (
    <section className={cn('flex flex-col gap-4', className)}>
      <h2 className="border-b border-foreground/30 pb-2 font-mono text-sm font-semibold tracking-wide uppercase">
        {title}
      </h2>
      {children}
    </section>
  )
}

// Resolves a `--*` token through the whole var() chain to a concrete
// color, live. The toolbar theme toggle flips `.dark` on
// <html>, so a MutationObserver re-reads the computed style on every
// document attribute change instead of sampling once.
export function ResolvedHex({ name, className }: {
  name: string
  className?: string
}) {
  const probeRef = useRef<HTMLSpanElement>(null)
  const [value, setValue] = useState('')

  useEffect(() => {
    const probe = probeRef.current
    if (!probe) return
    const read = () => setValue(getComputedStyle(probe).backgroundColor)
    read()
    const observer = new MutationObserver(read)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class', 'style'],
    })
    return () => observer.disconnect()
  }, [name])

  return (
    <span className={className}>
      <span
        ref={probeRef}
        className="hidden"
        style={{ backgroundColor: `var(--${name})` }}
      />
      {value}
    </span>
  )
}

export function Swatch({ name, className, boxClassName }: {
  name: string
  className?: string
  boxClassName?: string
}) {
  return (
    <div className={cn('flex min-w-0 flex-col gap-1', className)}>
      <div
        className={cn('h-14 w-full', boxClassName)}
        style={{
          backgroundColor: `var(--${name})`,
          border: '1px solid var(--gray-2)',
        }}
      />
      <code className="font-mono text-xs wrap-break-word">
        --{name}
      </code>
      <ResolvedHex
        name={name}
        className="font-mono text-[10px] opacity-60"
      />
    </div>
  )
}

// One fixed track template shared by header and every row of the
// semantic table, so the swatch / token / chain / usage columns line up
// across all groups.
export const TOKEN_ROW_COLS
  = 'grid-cols-[2.5rem_17rem_14rem_minmax(0,1fr)]'

export function TokenRow({ name, chain, use }: {
  name: string
  chain: ReactNode
  use: ReactNode
}) {
  return (
    <div className={`grid ${TOKEN_ROW_COLS} items-center gap-x-4 border-t border-foreground/15 py-3`}>
      <div
        className="size-10"
        style={{
          backgroundColor: `var(--${name})`,
          border: '1px solid var(--gray-2)',
        }}
      />
      <div className="flex min-w-0 flex-col">
        <code className="font-mono text-sm wrap-break-word">
          --{name}
        </code>
        <ResolvedHex
          name={name}
          className="font-mono text-xs opacity-60"
        />
      </div>
      <code className="min-w-0 font-mono text-xs wrap-break-word opacity-70">
        {chain}
      </code>
      <span className="min-w-0 text-xs opacity-70">{use}</span>
    </div>
  )
}

export function Code({ children, className }: {
  children: ReactNode
  className?: string
}) {
  return (
    <pre className={cn('overflow-x-auto border border-foreground/30 bg-background-secondary p-4 font-mono text-xs leading-relaxed text-foreground', className)}>
      <code>{children}</code>
    </pre>
  )
}
