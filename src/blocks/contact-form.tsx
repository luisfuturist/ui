import * as React from 'react'

import { Button } from '../components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../components/ui/card'
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from '../components/ui/field'
import { Input } from '../components/ui/input'
import { Spinner } from '../components/ui/spinner'
import { Textarea } from '../components/ui/textarea'
import { cn } from '../lib/utils'

export type ContactFormValues = Record<string, string>

export interface ContactFormField {
  /** Key the field's value is submitted under; also seeds the label/input id. */
  name: string
  label?: React.ReactNode
  placeholder?: string
  /** `<input>` type — ignored when `multiline` is set. */
  type?: React.HTMLInputTypeAttribute
  /** Render a `Textarea` instead of an `Input`. */
  multiline?: boolean
  /** Defaults to `true` — empty required fields surface a `FieldError`. */
  required?: boolean
  autoComplete?: string
  rows?: number
}

export interface ContactFormProps
  extends Omit<React.ComponentProps<'div'>, 'onSubmit' | 'title'> {
  title?: React.ReactNode
  description?: React.ReactNode
  /** Defaults to name / email / message. */
  fields?: ContactFormField[]
  actionLabel?: React.ReactNode
  /** Disables the form and shows a spinner in the submit button. */
  pending?: boolean
  onSubmit?: (values: ContactFormValues) => void
}

const defaultFields: ContactFormField[] = [
  {
    name: 'name',
    label: 'Name',
    placeholder: 'Jane Doe',
    autoComplete: 'name',
  },
  {
    name: 'email',
    label: 'Email',
    type: 'email',
    placeholder: 'you@example.com',
    autoComplete: 'email',
  },
  {
    name: 'message',
    label: 'Message',
    placeholder: 'How can I help?',
    multiline: true,
  },
]

function capitalize(text: string) {
  return text.charAt(0).toUpperCase() + text.slice(1)
}

export function ContactForm({
  title = 'Contact me',
  description = 'Fill out the form below and I\'ll get back to you.',
  fields = defaultFields,
  actionLabel = 'Send message',
  pending = false,
  onSubmit,
  className,
  ...props
}: ContactFormProps) {
  const [values, setValues] = React.useState<ContactFormValues>(() =>
    Object.fromEntries(fields.map(field => [field.name, ''])),
  )
  const [errors, setErrors] = React.useState<ContactFormValues>({})

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const next: ContactFormValues = {}
    for (const field of fields) {
      if ((field.required ?? true) && !values[field.name]?.trim())
        next[field.name] = `${field.label ?? capitalize(field.name)} is required.`
    }

    setErrors(next)
    if (Object.keys(next).length === 0)
      onSubmit?.(values)
  }

  return (
    <Card className={cn('w-full max-w-md', className)} {...props}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} noValidate>
          <FieldGroup>
            {fields.map((field) => {
              const id = `contact-${field.name}`
              const label = field.label ?? capitalize(field.name)
              const error = errors[field.name]

              return (
                <Field key={field.name} data-invalid={!!error}>
                  <FieldLabel htmlFor={id}>{label}</FieldLabel>
                  {field.multiline
                    ? (
                        <Textarea
                          id={id}
                          placeholder={field.placeholder}
                          rows={field.rows}
                          disabled={pending}
                          aria-invalid={!!error}
                          value={values[field.name] ?? ''}
                          onChange={event =>
                            setValues(current => ({
                              ...current,
                              [field.name]: event.target.value,
                            }))}
                        />
                      )
                    : (
                        <Input
                          id={id}
                          type={field.type}
                          autoComplete={field.autoComplete}
                          placeholder={field.placeholder}
                          disabled={pending}
                          aria-invalid={!!error}
                          value={values[field.name] ?? ''}
                          onChange={event =>
                            setValues(current => ({
                              ...current,
                              [field.name]: event.target.value,
                            }))}
                        />
                      )}
                  <FieldError errors={[{ message: error }]} />
                </Field>
              )
            })}
            <Field>
              <Button
                type="submit"
                className="w-full"
                disabled={pending}
              >
                {pending && <Spinner />}
                {actionLabel}
              </Button>
            </Field>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  )
}
