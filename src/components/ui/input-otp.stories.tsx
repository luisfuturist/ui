import type { Meta, StoryObj } from '@storybook/react-vite'
import { REGEXP_ONLY_DIGITS } from 'input-otp'
import { useState } from 'react'

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from './input-otp'
import { Label } from './label'

const meta = {
  title: 'Components/InputOTP',
  component: InputOTP,
  parameters: {
    docs: {
      description: {
        component:
          'A one-time-password input built on the '
          + '[input-otp](https://input-otp.rodz.dev/) `OTPInput`. Compose '
          + 'slots with `InputOTPGroup` + `InputOTPSlot index={n}` and '
          + 'optionally `InputOTPSeparator`. `maxLength` is required and '
          + 'drives the number of slots.',
      },
    },
  },
  argTypes: {
    maxLength: {
      control: 'number',
      description: 'Number of characters the input accepts.',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the input and fades the container.',
    },
    pattern: {
      control: 'text',
      description:
        'Allowed-character regexp, e.g. `REGEXP_ONLY_DIGITS` from '
        + '`input-otp`.',
    },
    containerClassName: {
      control: false,
      description: 'Classes applied to the wrapping container.',
    },
    value: {
      control: false,
      description: 'Controlled value.',
    },
    onChange: {
      control: false,
      description: 'Called with the new value string on change.',
    },
    className: {
      control: false,
    },
  },
  args: {
    maxLength: 6,
    disabled: false,
  },
} satisfies Meta<typeof InputOTP>

export default meta

// `OTPInput`'s props are a `{children} | {render}` union — stories use a
// flat args shape instead so `StoryObj` doesn't demand the whole union.
type InputOTPArgs = {
  maxLength: number
  disabled?: boolean
  pattern?: string
  containerClassName?: string
  value?: string
  onChange?: (value: string) => void
}
type Story = StoryObj<Meta<InputOTPArgs>>

export const Playground: Story = {
  render: args => (
    <div className="flex items-center justify-center p-8">
      <InputOTP {...args}>
        <InputOTPGroup>
          {Array.from({ length: args.maxLength }, (_, i) => (
            <InputOTPSlot key={i} index={i} />
          ))}
        </InputOTPGroup>
      </InputOTP>
    </div>
  ),
}

export const WithSeparator: Story = {
  render: () => (
    <div className="flex items-center justify-center p-8">
      <InputOTP maxLength={6}>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Two `InputOTPGroup`s of three slots each, split by '
          + '`InputOTPSeparator` — the classic `XXX-XXX` code layout.',
      },
    },
  },
}

export const Controlled: Story = {
  render: function Render() {
    const [value, setValue] = useState('')

    return (
      <div className="flex items-center justify-center p-8">
        <div className="grid gap-3">
          <Label htmlFor="otp">Verification code</Label>
          <InputOTP
            id="otp"
            maxLength={6}
            pattern={REGEXP_ONLY_DIGITS}
            value={value}
            onChange={setValue}
          >
            <InputOTPGroup>
              {Array.from({ length: 6 }, (_, i) => (
                <InputOTPSlot key={i} index={i} />
              ))}
            </InputOTPGroup>
          </InputOTP>
          <p className="text-sm text-muted-foreground">
            Value:
            {' '}
            <span className="font-medium text-foreground">
              {value || 'empty'}
            </span>
          </p>
        </div>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          'Controlled with `value`/`onChange` and restricted to digits '
          + 'via `pattern={REGEXP_ONLY_DIGITS}`.',
      },
    },
  },
}

export const Disabled: Story = {
  render: () => (
    <div className="flex items-center justify-center p-8">
      <InputOTP maxLength={6} disabled value="123456">
        <InputOTPGroup>
          {Array.from({ length: 6 }, (_, i) => (
            <InputOTPSlot key={i} index={i} />
          ))}
        </InputOTPGroup>
      </InputOTP>
    </div>
  ),
}

export const Invalid: Story = {
  render: () => (
    <div className="flex items-center justify-center p-8">
      <div className="grid gap-2">
        <InputOTP maxLength={6} aria-invalid="true">
          <InputOTPGroup>
            {Array.from({ length: 6 }, (_, i) => (
              <InputOTPSlot key={i} index={i} aria-invalid="true" />
            ))}
          </InputOTPGroup>
        </InputOTP>
        <p className="text-sm text-destructive">
          The code you entered is incorrect.
        </p>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          '`aria-invalid` is picked up per-slot: pass it on each '
          + '`InputOTPSlot` to color all borders destructive.',
      },
    },
  },
}
