import type { Meta, StoryObj } from '@storybook/react-vite'
import {
  Check,
  Copy,
  CreditCard,
  HelpCircle,
  Loader2,
  Search,
} from 'lucide-react'
import { useState } from 'react'

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from './input-group'
import { Label } from './label'

const meta = {
  title: 'Components/InputGroup',
  component: InputGroup,
  parameters: {
    docs: {
      description: {
        component:
          'A bordered container that merges an `InputGroupInput`/'
          + '`InputGroupTextarea` with `InputGroupAddon`s. Addons accept '
          + '`align="inline-start" | "inline-end" | "block-start" | '
          + '"block-end"` and hold `InputGroupText`, `InputGroupButton` '
          + '(`size="xs" | "sm" | "icon-xs" | "icon-sm"`), icons or kbd '
          + 'hints. Focus and `aria-invalid` styles are forwarded from '
          + 'the inner control to the group border.',
      },
    },
  },
  argTypes: {
    className: {
      control: false,
    },
    children: {
      control: false,
    },
  },
} satisfies Meta<typeof InputGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: () => (
    <div className="flex items-center justify-center p-8">
      <InputGroup className="w-80">
        <InputGroupInput placeholder="Search…" />
        <InputGroupAddon>
          <Search />
        </InputGroupAddon>
        <InputGroupAddon align="inline-end">
          <InputGroupText>12 results</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
    </div>
  ),
}

export const WithIconsAndText: Story = {
  render: () => (
    <div className="flex items-center justify-center p-8">
      <div className="grid w-80 gap-4">
        <InputGroup>
          <InputGroupAddon>
            <Search />
          </InputGroupAddon>
          <InputGroupInput placeholder="Search documentation…" />
        </InputGroup>
        <InputGroup>
          <InputGroupInput placeholder="card number" />
          <InputGroupAddon align="inline-end">
            <CreditCard />
          </InputGroupAddon>
        </InputGroup>
        <InputGroup>
          <InputGroupAddon>
            <InputGroupText>https://</InputGroupText>
          </InputGroupAddon>
          <InputGroupInput placeholder="example.com" />
        </InputGroup>
      </div>
    </div>
  ),
}

export const WithButtons: Story = {
  render: function Render() {
    const [copied, setCopied] = useState(false)

    return (
      <div className="flex items-center justify-center p-8">
        <InputGroup className="w-80">
          <InputGroupInput
            readOnly
            value="https://luisfuturist.github.io/ui"
          />
          <InputGroupAddon align="inline-end">
            <InputGroupButton
              size="icon-xs"
              aria-label="Copy link"
              onClick={() => {
                setCopied(true)
                setTimeout(() => setCopied(false), 1500)
              }}
            >
              {copied ? <Check /> : <Copy />}
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          '`InputGroupButton` renders a compact `Button` sized for '
          + 'addons — here an `icon-xs` copy action.',
      },
    },
  },
}

export const BlockAddons: Story = {
  render: () => (
    <div className="flex items-center justify-center p-8">
      <InputGroup className="w-80">
        <InputGroupAddon align="block-start" className="border-b">
          <InputGroupText className="font-mono text-xs font-medium">
            notes.md
          </InputGroupText>
          <InputGroupButton className="ml-auto" size="icon-xs">
            <HelpCircle />
          </InputGroupButton>
        </InputGroupAddon>
        <InputGroupTextarea placeholder="Write your expedition notes…" />
        <InputGroupAddon align="block-end" className="border-t">
          <InputGroupText>Markdown supported</InputGroupText>
          <InputGroupButton className="ml-auto border" size="sm">
            Save
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          '`align="block-start"`/`"block-end"` stack addons above/below '
          + 'the control — commonly paired with `InputGroupTextarea`.',
      },
    },
  },
}

export const Invalid: Story = {
  render: () => (
    <div className="flex items-center justify-center p-8">
      <div className="grid w-80 gap-2">
        <Label htmlFor="username">Username</Label>
        <InputGroup>
          <InputGroupAddon>
            <InputGroupText>@</InputGroupText>
          </InputGroupAddon>
          <InputGroupInput
            id="username"
            defaultValue="invalid user!"
            aria-invalid="true"
          />
        </InputGroup>
        <p className="text-sm text-destructive">
          Username may only contain letters, numbers and underscores.
        </p>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Setting `aria-invalid` on the inner control recolors the '
          + 'whole group border via `has-[[aria-invalid=true]]` '
          + 'selectors.',
      },
    },
  },
}

export const Loading: Story = {
  render: () => (
    <div className="flex items-center justify-center p-8">
      <InputGroup className="w-80" data-disabled="true">
        <InputGroupInput placeholder="Checking availability…" disabled />
        <InputGroupAddon align="inline-end">
          <Loader2 className="animate-spin" />
        </InputGroupAddon>
      </InputGroup>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Edge case: `data-disabled="true"` on the group dims addons '
          + 'while the inner input stays disabled.',
      },
    },
  },
}
