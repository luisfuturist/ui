import type { Meta, StoryObj } from '@storybook/react-vite'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './accordion'

const meta = {
  title: 'Components/Accordion',
  component: Accordion,
  parameters: {
    docs: {
      description: {
        component:
          'A vertically stacked set of expandable sections built on '
          + '`radix-ui`\'s `Accordion.Root`. Supports `type="single" | '
          + '"multiple"`, `collapsible` (single only), `defaultValue` and '
          + 'per-item `disabled`. The trigger renders a chevron that '
          + 'rotates via `[data-state=open]` selectors.',
      },
    },
  },
  argTypes: {
    type: {
      control: 'radio',
      options: ['single', 'multiple'],
      description: 'Whether one or many items can be open at once.',
    },
    collapsible: {
      control: 'boolean',
      description:
        'Allows the open item to be closed again (`type="single"` '
        + 'only).',
    },
    defaultValue: {
      control: false,
      description:
        'Initially open item value(s) — a string for `single`, an '
        + 'array for `multiple`.',
    },
    className: {
      control: false,
    },
    children: {
      control: false,
    },
  },
  args: {
    type: 'single',
    collapsible: true,
  },
} satisfies Meta<typeof Accordion>

export default meta
type Story = StoryObj<typeof meta>

const items = [
  {
    value: 'item-1',
    trigger: 'Is the expedition kit included?',
    content:
      'Yes. Every expedition ships with a field kit containing maps, a '
      + 'compass and rations for the first leg of the journey.',
  },
  {
    value: 'item-2',
    trigger: 'Can I reschedule my departure?',
    content:
      'Departures may be rescheduled once, free of charge, up to 14 '
      + 'days before the launch date.',
  },
  {
    value: 'item-3',
    trigger: 'What happens in bad weather?',
    content:
      'Routes are rerouted or postponed at the quartermaster\'s '
      + 'discretion. You will be notified by carrier pigeon within 24 '
      + 'hours.',
  },
]

export const Playground: Story = {
  render: args => (
    <div className="flex items-center justify-center p-8">
      <Accordion className="w-96" {...args}>
        {items.map(item => (
          <AccordionItem key={item.value} value={item.value}>
            <AccordionTrigger>{item.trigger}</AccordionTrigger>
            <AccordionContent>{item.content}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  ),
}

export const Multiple: Story = {
  render: () => (
    <div className="flex items-center justify-center p-8">
      <Accordion
        type="multiple"
        className="w-96"
        defaultValue={['item-1', 'item-3']}
      >
        {items.map(item => (
          <AccordionItem key={item.value} value={item.value}>
            <AccordionTrigger>{item.trigger}</AccordionTrigger>
            <AccordionContent>{item.content}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          '`type="multiple"` lets several items stay open at once — '
          + 'here `defaultValue` receives an array of open values.',
      },
    },
  },
}

export const DefaultOpen: Story = {
  render: () => (
    <div className="flex items-center justify-center p-8">
      <Accordion
        type="single"
        collapsible
        className="w-96"
        defaultValue="item-2"
      >
        {items.map(item => (
          <AccordionItem key={item.value} value={item.value}>
            <AccordionTrigger>{item.trigger}</AccordionTrigger>
            <AccordionContent>{item.content}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'With `type="single"` + `collapsible`, the open item can be '
          + 'collapsed again, leaving zero items open.',
      },
    },
  },
}

export const DisabledItem: Story = {
  render: () => (
    <div className="flex items-center justify-center p-8">
      <Accordion type="single" collapsible className="w-96">
        {items.map(item => (
          <AccordionItem
            key={item.value}
            value={item.value}
            disabled={item.value === 'item-2'}
          >
            <AccordionTrigger>{item.trigger}</AccordionTrigger>
            <AccordionContent>{item.content}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Edge case: `disabled` on `AccordionItem` dims the trigger '
          + 'and removes pointer events for that item only.',
      },
    },
  },
}
