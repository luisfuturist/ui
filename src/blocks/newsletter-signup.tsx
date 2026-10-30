import * as React from 'react'
import MaterialCheckCircle from '~icons/material-symbols/check-circle'
import MaterialSend from '~icons/material-symbols/send'

import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { cn } from '../lib/utils'

export interface NewsletterSignupProps
  extends Omit<React.ComponentProps<'section'>, 'title' | 'onSubmit'> {
  title: React.ReactNode
  eyebrow?: React.ReactNode
  description?: React.ReactNode
  placeholder?: string
  actionLabel?: React.ReactNode
  successMessage?: React.ReactNode
  /**
   * Controlled success state. Leave `undefined` to let the block flip to
   * the success message internally after a valid submit.
   */
  submitted?: boolean
  onSubmit?: (email: string) => void
}

export function NewsletterSignup({
  title,
  eyebrow = '// transmission',
  description,
  placeholder = 'you@domain.net',
  actionLabel = 'Subscribe',
  successMessage = 'Signal received — check your inbox to confirm.',
  submitted,
  onSubmit,
  className,
  ...props
}: NewsletterSignupProps) {
  const [email, setEmail] = React.useState('')
  const [internalSubmitted, setInternalSubmitted] = React.useState(false)
  const isSubmitted = submitted ?? internalSubmitted

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    onSubmit?.(email)
    if (submitted === undefined)
      setInternalSubmitted(true)
  }

  return (
    <section
      data-slot="newsletter-signup"
      data-augmented-ui="tr-clip bl-clip both"
      className={cn(
        'aug-surface aug-surface-card w-full bg-card px-6 py-10 text-card-foreground sm:px-10',
        className,
      )}
      {...props}
    >
      {eyebrow && (
        <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-2 font-display text-3xl font-medium text-balance sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 max-w-xl text-balance text-muted-foreground">
          {description}
        </p>
      )}

      {isSubmitted
        ? (
            <p
              data-slot="newsletter-signup-success"
              className="mt-8 flex items-center gap-2 font-mono text-sm text-foreground"
            >
              <MaterialCheckCircle className="size-5 shrink-0 text-accent" />
              {successMessage}
            </p>
          )
        : (
            <form
              data-slot="newsletter-signup-form"
              className="mt-8 flex flex-col gap-3 sm:flex-row"
              onSubmit={handleSubmit}
            >
              <Input
                type="email"
                required
                autoComplete="email"
                aria-label="Email address"
                placeholder={placeholder}
                value={email}
                onChange={event => setEmail(event.target.value)}
                className="h-10 flex-1 border-foreground font-mono"
              />
              <Button type="submit" variant="augmented" size="lg">
                {actionLabel}
                <MaterialSend className="size-4" />
              </Button>
            </form>
          )}
    </section>
  )
}
