import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'

import { ContactForm, type ContactFormValues } from './contact-form'

const meta = {
  title: 'Blocks/ContactForm',
  component: ContactForm,
  parameters: {
    docs: {
      description: {
        component:
          'A LoginForm-style contact card composing `Card`, `Field` '
          + 'and `Input`/`Textarea`. `fields` configures the inputs '
          + '(defaults: name / email / message — `multiline` renders a '
          + '`Textarea`, `required` defaults to `true`); `onSubmit` '
          + 'receives the values once required fields validate. '
          + '`pending` disables the form and shows a `Spinner` in the '
          + 'submit button.',
      },
    },
  },
  argTypes: {
    onSubmit: { control: false },
    fields: { control: false },
    pending: { control: 'boolean' },
  },
} satisfies Meta<typeof ContactForm>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: args => (
    <div className="flex items-center justify-center p-8">
      <ContactForm {...args} />
    </div>
  ),
}

export const WithSubmitHandler: Story = {
  render: () => {
    const [submitted, setSubmitted] = useState<ContactFormValues | null>(null)

    return (
      <div className="flex flex-col items-center justify-center gap-6 p-8">
        <ContactForm onSubmit={setSubmitted} />
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
          'Fill all fields and submit — `onSubmit` receives '
          + '`{ name, email, message }`. Submitting with empty fields '
          + 'shows the built-in `FieldError` validation instead.',
      },
    },
  },
}

export const Pending: Story = {
  render: () => (
    <div className="flex items-center justify-center p-8">
      <ContactForm pending actionLabel="Sending…" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          '`pending` disables every control and swaps a `Spinner` '
          + 'into the submit button — pair it with your mutation state.',
      },
    },
  },
}

export const CustomFields: Story = {
  render: args => (
    <div className="flex items-center justify-center p-8">
      <ContactForm
        {...args}
        title="Project inquiry"
        description="Tell me about the work — scope fields are optional."
        fields={[
          {
            name: 'email',
            label: 'Email',
            type: 'email',
            placeholder: 'you@company.com',
            autoComplete: 'email',
          },
          {
            name: 'company',
            label: 'Company',
            placeholder: 'Optional',
            required: false,
          },
          {
            name: 'budget',
            label: 'Budget',
            placeholder: 'Optional — e.g. $10k+',
            required: false,
          },
          {
            name: 'brief',
            label: 'Project brief',
            placeholder: 'What are we building?',
            multiline: true,
            rows: 6,
          },
        ]}
        actionLabel="Send inquiry"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'A different `fields` array — an optional `required: false` '
          + 'company/budget pair, a `rows: 6` multiline brief and a '
          + 'custom `actionLabel`. Only required fields gate '
          + '`onSubmit`.',
      },
    },
  },
}

export const SplitLayout: Story = {
  render: () => (
    <div className="flex items-center justify-center p-8">
      <div className="grid w-full max-w-4xl gap-10 md:grid-cols-2">
        <div className="flex flex-col gap-4">
          <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
            {'// contact'}
          </p>
          <h2 className="font-display text-3xl font-medium text-balance">
            Open a channel
          </h2>
          <p className="text-muted-foreground">
            Prefer async? The same inbox is reachable through these
            endpoints — response latency is usually under one cycle.
          </p>
          <ul className="flex flex-col gap-2 font-mono text-sm">
            <li>
              <a href="mailto:hi@lf.ds" className="hover:text-link-primary-hover">
                [email] hi@lf.ds
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-link-primary-hover">
                [github] @luisfuturist
              </a>
            </li>
          </ul>
        </div>
        <ContactForm className="max-w-none" />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Composed contact section — an eyebrow/heading/alternative-'
          + 'channels column beside the form, with `max-w-none` '
          + 'letting the card fill its grid track.',
      },
    },
  },
}
