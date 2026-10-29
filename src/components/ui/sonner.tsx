import type { ToasterProps } from 'sonner'
import { useTheme } from 'next-themes'
import { Toaster as Sonner } from 'sonner'

function Toaster({ toastOptions, ...props }: ToasterProps) {
  const { theme = 'system' } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps['theme']}
      toastOptions={{
        ...toastOptions,
        classNames: {
          // Square, flat chrome: drop sonner's drop shadow, LFDS focus
          // outline (sonner's focus ring is an rgba shadow).
          toast:
            'shadow-none! focus-visible:[outline:2px_solid_var(--accent)]',
          // Sonner hardcodes gray description text; use the surface fg,
          // dimmed via opacity instead of an alpha color.
          description: 'text-popover-foreground! opacity-70',
          // Inverted-fg action / outlined cancel, squared, accent on hover.
          actionButton:
            'rounded-none! hover:bg-accent! hover:text-accent-foreground! focus-visible:[outline:2px_solid_var(--accent)]!',
          cancelButton:
            'rounded-none! border! border-current! bg-transparent! hover:bg-accent! hover:text-accent-foreground! focus-visible:[outline:2px_solid_var(--accent)]!',
          // Sonner's close button is a 50%-radius circle — square it.
          closeButton:
            'rounded-none! hover:border-accent! hover:bg-accent! hover:text-accent-foreground!',
          loader:
            '[&_.sonner-loading-bar]:rounded-none! [&_.sonner-loading-bar]:bg-foreground!',
          // Type colors apply even without `richColors` (which only swaps
          // the same CSS vars): colored border + icon, fg text.
          success: 'border-green! [&_[data-icon]]:text-green',
          info: 'border-blue! [&_[data-icon]]:text-blue',
          warning: 'border-yellow! [&_[data-icon]]:text-yellow',
          error: 'border-destructive! [&_[data-icon]]:text-destructive',
          ...toastOptions?.classNames,
        },
      }}
      className="toaster group"
      style={
        {
          '--normal-bg': 'var(--popover)',
          '--normal-text': 'var(--popover-foreground)',
          '--normal-border': 'var(--foreground)',
          // Sonner reads `--border-radius` (default 8px) for the toast
          // corners — the previous `--normal-border-radius` was a no-op.
          '--border-radius': '0',
          // Type palettes, applied to typed toasts when `richColors` is
          // enabled — keeps them on the LFDS palette instead of sonner's
          // pastel HSL ramps.
          '--success-bg': 'var(--popover)',
          '--success-border': 'var(--green)',
          '--success-text': 'var(--popover-foreground)',
          '--info-bg': 'var(--popover)',
          '--info-border': 'var(--blue)',
          '--info-text': 'var(--popover-foreground)',
          '--warning-bg': 'var(--popover)',
          '--warning-border': 'var(--yellow)',
          '--warning-text': 'var(--popover-foreground)',
          '--error-bg': 'var(--popover)',
          '--error-border': 'var(--destructive)',
          '--error-text': 'var(--popover-foreground)',
        } as React.CSSProperties
      }
      {...props}
    />
  )
}

export { Toaster }
