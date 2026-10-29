import * as React from 'react'

import { Button } from '../components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
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
import { cn } from '../lib/utils'

export interface LoginFormValues {
  email: string
  password: string
}

export interface LoginFormProps
  extends Omit<React.ComponentProps<'div'>, 'onSubmit'> {
  onSubmit?: (values: LoginFormValues) => void
  forgotPasswordHref?: string
  signUpHref?: string
}

export function LoginForm({
  className,
  onSubmit,
  forgotPasswordHref = '#',
  signUpHref = '#',
  ...props
}: LoginFormProps) {
  const [values, setValues] = React.useState<LoginFormValues>({
    email: '',
    password: '',
  })
  const [errors, setErrors] = React.useState<Partial<LoginFormValues>>({})

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const next: Partial<LoginFormValues> = {}
    if (!values.email)
      next.email = 'Email is required.'
    if (!values.password)
      next.password = 'Password is required.'

    setErrors(next)
    if (Object.keys(next).length === 0)
      onSubmit?.(values)
  }

  return (
    <Card className={cn('w-full max-w-sm', className)} {...props}>
      <CardHeader>
        <CardTitle>Log in to your account</CardTitle>
        <CardDescription>
          Enter your credentials to continue.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} noValidate>
          <FieldGroup>
            <Field data-invalid={!!errors.email}>
              <FieldLabel htmlFor="login-email">Email</FieldLabel>
              <Input
                id="login-email"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                aria-invalid={!!errors.email}
                value={values.email}
                onChange={event =>
                  setValues(current => ({
                    ...current,
                    email: event.target.value,
                  }))}
              />
              <FieldError errors={[{ message: errors.email }]} />
            </Field>
            <Field data-invalid={!!errors.password}>
              <div className="flex items-center justify-between gap-2">
                <FieldLabel htmlFor="login-password">Password</FieldLabel>
                <a
                  href={forgotPasswordHref}
                  className="text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
                >
                  Forgot password?
                </a>
              </div>
              <Input
                id="login-password"
                type="password"
                autoComplete="current-password"
                aria-invalid={!!errors.password}
                value={values.password}
                onChange={event =>
                  setValues(current => ({
                    ...current,
                    password: event.target.value,
                  }))}
              />
              <FieldError errors={[{ message: errors.password }]} />
            </Field>
            <Field>
              <Button
                type="submit"
                className="w-full border bg-primary px-3 py-1.5 text-sm text-primary-foreground"
              >
                Log in
              </Button>
            </Field>
          </FieldGroup>
        </form>
      </CardContent>
      <CardFooter className="justify-center">
        <p className="text-sm text-muted-foreground">
          Don&apos;t have an account?{' '}
          <a
            href={signUpHref}
            className="text-foreground underline-offset-4 hover:underline"
          >
            Sign up
          </a>
        </p>
      </CardFooter>
    </Card>
  )
}
