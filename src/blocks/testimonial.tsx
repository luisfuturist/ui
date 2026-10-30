import * as React from 'react'
import MaterialFormatQuote from '~icons/material-symbols/format-quote'

import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar'
import { cn } from '../lib/utils'

export interface Testimonial {
  quote: React.ReactNode
  author: React.ReactNode
  role?: React.ReactNode
  company?: React.ReactNode
  avatarSrc?: string
  avatarFallback?: React.ReactNode
}

// `role` is omitted from the figure props — the ARIA attribute collides
// with the testimonial's author-role field.
export type TestimonialCardProps
  = Testimonial & Omit<React.ComponentProps<'figure'>, 'role'>

export interface TestimonialsProps
  extends Omit<React.ComponentProps<'section'>, 'title'> {
  title?: React.ReactNode
  eyebrow?: React.ReactNode
  testimonials: Testimonial[]
}

function initials(author: React.ReactNode) {
  if (typeof author !== 'string')
    return null
  return (
    author
      .split(/\s+/)
      .map(part => part[0])
      .filter(Boolean)
      .slice(0, 2)
      .join('')
      .toUpperCase()
  )
}

export function TestimonialCard({
  quote,
  author,
  role,
  company,
  avatarSrc,
  avatarFallback,
  className,
  children,
  ...props
}: TestimonialCardProps) {
  return (
    <figure
      data-slot="testimonial-card"
      data-augmented-ui="tr-clip bl-clip both"
      className={cn(
        'aug-surface aug-surface-card flex flex-col gap-6 bg-card p-6 text-card-foreground',
        className,
      )}
      {...props}
    >
      <MaterialFormatQuote className="size-6 text-accent" aria-hidden />
      <blockquote className="text-base leading-relaxed text-pretty">
        {quote}
      </blockquote>
      <figcaption className="mt-auto flex items-center gap-3">
        <Avatar size="lg" className="rounded-none">
          {avatarSrc && (
            <AvatarImage src={avatarSrc} alt="" className="rounded-none" />
          )}
          <AvatarFallback className="rounded-none font-mono text-xs">
            {avatarFallback ?? initials(author) ?? '?'}
          </AvatarFallback>
        </Avatar>
        <div className="flex flex-col gap-0.5">
          <span className="text-sm font-medium">{author}</span>
          {(role || company) && (
            <span className="font-mono text-xs text-muted-foreground">
              {role}
              {role && company && ' // '}
              {company}
            </span>
          )}
        </div>
      </figcaption>
      {children}
    </figure>
  )
}

export function Testimonials({
  title,
  eyebrow,
  testimonials,
  className,
  ...props
}: TestimonialsProps) {
  return (
    <section
      data-slot="testimonials"
      className={cn('w-full px-6 py-16 sm:py-20', className)}
      {...props}
    >
      <div className="mx-auto w-full max-w-5xl">
        {(eyebrow || title) && (
          <div className="mb-10 flex max-w-2xl flex-col gap-2">
            {eyebrow && (
              <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="font-display text-3xl font-medium text-balance sm:text-4xl">
                {title}
              </h2>
            )}
          </div>
        )}

        <div
          data-slot="testimonials-grid"
          className="grid gap-6 grid-cols-[repeat(auto-fill,minmax(min(100%,18rem),1fr))]"
        >
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  )
}
