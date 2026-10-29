import type { Meta, StoryObj } from '@storybook/react-vite'

import { Checkbox } from './checkbox'
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from './field'
import { Input } from './input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './select'
import { Switch } from './switch'
import { Textarea } from './textarea'

const meta = {
  title: 'Components/Field',
  component: Field,
  parameters: {
    docs: {
      description: {
        component:
          'Composable field primitives for forms. `Field` is a `role="group"` '
          + 'row with `orientation="vertical" | "horizontal" | '
          + '"responsive"`; `FieldLabel`, `FieldDescription`, '
          + '`FieldError` and `FieldContent` fill the slots, while '
          + '`FieldSet`, `FieldLegend`, `FieldGroup` and `FieldSeparator` '
          + 'provide page-level structure. `FieldError` accepts an '
          + '`errors` array (react-hook-form compatible) or children.',
      },
    },
  },
  argTypes: {
    orientation: {
      control: 'radio',
      options: ['vertical', 'horizontal', 'responsive'],
      description: 'Layout direction of label + control.',
    },
    className: {
      control: false,
    },
    children: {
      control: false,
    },
  },
  args: {
    orientation: 'vertical',
  },
} satisfies Meta<typeof Field>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: args => (
    <div className="flex items-center justify-center p-8">
      <FieldGroup className="w-80">
        <Field {...args}>
          <FieldLabel htmlFor="field-name">Full name</FieldLabel>
          <Input id="field-name" placeholder="Luis Futurist" />
          <FieldDescription>
            This is the name shown on your public profile.
          </FieldDescription>
        </Field>
      </FieldGroup>
    </div>
  ),
}

export const WithError: Story = {
  render: () => (
    <div className="flex items-center justify-center p-8">
      <FieldGroup className="w-80">
        <Field data-invalid="true">
          <FieldLabel htmlFor="field-email">Email</FieldLabel>
          <Input
            id="field-email"
            type="email"
            defaultValue="not-an-email"
            aria-invalid="true"
          />
          <FieldError>Please enter a valid email address.</FieldError>
        </Field>
        <Field data-invalid="true">
          <FieldLabel htmlFor="field-password">Password</FieldLabel>
          <Input
            id="field-password"
            type="password"
            defaultValue="123"
            aria-invalid="true"
          />
          <FieldError
            errors={[
              { message: 'Password must be at least 8 characters.' },
              { message: 'Password must contain a symbol.' },
            ]}
          />
        </Field>
      </FieldGroup>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          '`FieldError` renders a single `children` message, or dedupes '
          + 'an `errors` array into a list — the shape matches '
          + 'react-hook-form `fieldState.error` output.',
      },
    },
  },
}

export const FieldSetWithCheckboxes: Story = {
  render: () => (
    <div className="flex items-center justify-center p-8">
      <FieldSet className="w-80">
        <FieldLegend>Notifications</FieldLegend>
        <FieldDescription>
          Choose how you want to be notified.
        </FieldDescription>
        <FieldGroup data-slot="checkbox-group">
          <Field orientation="horizontal">
            <Checkbox id="notif-email" defaultChecked />
            <FieldLabel htmlFor="notif-email" className="font-normal">
              Email notifications
            </FieldLabel>
          </Field>
          <Field orientation="horizontal">
            <Checkbox id="notif-sms" />
            <FieldLabel htmlFor="notif-sms" className="font-normal">
              SMS alerts
            </FieldLabel>
          </Field>
          <Field orientation="horizontal">
            <Checkbox id="notif-push" disabled />
            <FieldLabel htmlFor="notif-push" className="font-normal">
              Push (unavailable offline)
            </FieldLabel>
          </Field>
        </FieldGroup>
      </FieldSet>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          '`FieldSet` + `FieldLegend` group related controls; '
          + '`orientation="horizontal"` puts the checkbox before its '
          + 'label.',
      },
    },
  },
}

export const HorizontalSwitch: Story = {
  render: () => (
    <div className="flex items-center justify-center p-8">
      <FieldGroup className="w-96">
        <Field orientation="horizontal">
          <FieldContent>
            <FieldLabel htmlFor="telemetry">Telemetry</FieldLabel>
            <FieldDescription>
              Share anonymous usage diagnostics with the outpost.
            </FieldDescription>
          </FieldContent>
          <Switch id="telemetry" defaultChecked />
        </Field>
        <FieldSeparator />
        <Field orientation="horizontal">
          <FieldContent>
            <FieldLabel htmlFor="beacon">Distress beacon</FieldLabel>
            <FieldDescription>
              Broadcast your position every 15 minutes.
            </FieldDescription>
          </FieldContent>
          <Switch id="beacon" />
        </Field>
      </FieldGroup>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Horizontal fields with `FieldContent` wrap the label and '
          + 'description into a flex column beside the control; '
          + '`FieldSeparator` draws a rule between rows.',
      },
    },
  },
}

export const ComposedFormSection: Story = {
  render: () => (
    <div className="flex items-center justify-center p-8">
      <FieldSet className="w-96">
        <FieldLegend>Profile</FieldLegend>
        <FieldDescription>
          Update your public expedition profile.
        </FieldDescription>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="profile-name">Display name</FieldLabel>
            <Input id="profile-name" placeholder="Luis Futurist" />
          </Field>
          <Field>
            <FieldLabel htmlFor="profile-region">Region</FieldLabel>
            <Select>
              <SelectTrigger id="profile-region" className="w-full">
                <SelectValue placeholder="Select a region" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="amer">Americas</SelectItem>
                <SelectItem value="emea">Europe & Africa</SelectItem>
                <SelectItem value="apac">Asia Pacific</SelectItem>
              </SelectContent>
            </Select>
          </Field>
          <Field>
            <FieldLabel htmlFor="profile-bio">Bio</FieldLabel>
            <Textarea id="profile-bio" placeholder="A few words about you…" />
            <FieldDescription>Shown on your public page.</FieldDescription>
          </Field>
        </FieldGroup>
      </FieldSet>
    </div>
  ),
}
