import type { Meta, StoryObj } from '@storybook/react-vite'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from './button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './form'
import { Input } from './input'

const meta = {
  title: 'Components/Form',
  // `Form` is `FormProvider` whose methods are all required props; using
  // `FormItem` keeps the docs page typed against plain optional div props.
  component: FormItem,
  parameters: {
    docs: {
      description: {
        component:
          'Form helpers for [react-hook-form](https://react-hook-form.com/). '
          + '`Form` is the `FormProvider`; `FormField` wires a '
          + '`Controller` into context so `FormItem` + `FormLabel` + '
          + '`FormControl` + `FormDescription` + `FormMessage` get '
          + 'matching IDs, `aria-describedby` and `aria-invalid` '
          + 'automatically. Pair with `zodResolver` from '
          + '`@hookform/resolvers` for schema validation.',
      },
    },
  },
} satisfies Meta<typeof FormItem>

export default meta
type Story = StoryObj<typeof meta>

const loginSchema = z.object({
  email: z.email('Enter a valid email address.'),
  password: z
    .string()
    .min(8, 'Password must be at least 8 characters.'),
})

type LoginValues = z.infer<typeof loginSchema>

export const LoginForm: Story = {
  render: function Render() {
    const [submitted, setSubmitted] = useState<LoginValues | null>(null)
    const form = useForm<LoginValues>({
      resolver: zodResolver(loginSchema),
      defaultValues: {
        email: '',
        password: '',
      },
    })

    return (
      <div className="flex items-center justify-center p-8">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(values => setSubmitted(values))}
            className="grid w-80 gap-5"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="m@example.com"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    The email you signed up with.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="••••••••"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">
              Sign in
            </Button>
            {submitted && (
              <p
                role="status"
                className="rounded-md border border-primary/40 bg-primary/10 px-3 py-2 text-sm"
              >
                Signed in as
                {' '}
                <span className="font-medium">{submitted.email}</span>
                .
              </p>
            )}
          </form>
        </Form>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          'A working login form: zod schema + `zodResolver`, `FormField` '
          + 'wiring errors into `FormMessage`, and an inline success '
          + 'message on valid submit.',
      },
    },
  },
}
