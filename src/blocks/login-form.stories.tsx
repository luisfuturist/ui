import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'

import { LoginForm, type LoginFormValues } from './login-form'

const meta = {
  title: 'Blocks/LoginForm',
  component: LoginForm,
  parameters: {
    docs: {
      description: {
        component:
          'A ready-to-drop login card composing `Card`, `Field` and '
          + '`Input`. Email and password are controlled internally; '
          + 'submitting empty fields surfaces `FieldError` messages, '
          + 'otherwise `onSubmit` receives the values. `forgotPasswordHref` '
          + 'and `signUpHref` configure the footer links.',
      },
    },
  },
  argTypes: {
    onSubmit: { control: false },
    forgotPasswordHref: { control: 'text' },
    signUpHref: { control: 'text' },
  },
} satisfies Meta<typeof LoginForm>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: args => (
    <div className="flex items-center justify-center p-8">
      <LoginForm {...args} />
    </div>
  ),
}

export const WithSubmitHandler: Story = {
  render: () => {
    const [submitted, setSubmitted] = useState<LoginFormValues | null>(null)

    return (
      <div className="flex flex-col items-center justify-center gap-6 p-8">
        <LoginForm onSubmit={setSubmitted} />
        <p className="font-mono text-sm text-muted-foreground">
          {submitted
            ? `submitted: ${JSON.stringify(submitted)}`
            : 'submitted: —'}
        </p>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          'Fill both fields and submit — `onSubmit` receives '
          + '`{ email, password }`. Submitting with empty fields shows '
          + 'the built-in `FieldError` validation instead.',
      },
    },
  },
}
