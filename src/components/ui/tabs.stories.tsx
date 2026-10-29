import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './card'
import { Input } from './input'
import { Label } from './label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './tabs'

const meta = {
  title: 'Components/Tabs',
  component: Tabs,
  parameters: {
    docs: {
      description: {
        component:
          '`radix-ui` `Tabs` with a `TabsList` `variant="default" | '
          + '"line"`, `orientation="horizontal" | "vertical"` on the '
          + 'root, and `TabsTrigger`/`TabsContent` pairs keyed by '
          + '`value`. Vertical mode stacks triggers and places '
          + 'content beside the list.',
      },
    },
  },
  argTypes: {
    defaultValue: {
      control: 'text',
      description: 'Initially active tab value (uncontrolled).',
    },
    orientation: {
      control: 'radio',
      options: ['horizontal', 'vertical'],
      description: 'Layout axis of the list relative to content.',
    },
    value: {
      control: false,
      description: 'Controlled active tab value.',
    },
    onValueChange: {
      control: false,
      description: 'Called with the next value on tab change.',
    },
    className: {
      control: false,
    },
    children: {
      control: false,
    },
  },
  args: {
    defaultValue: 'account',
    orientation: 'horizontal',
  },
} satisfies Meta<typeof Tabs>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: args => (
    <div className="flex items-center justify-center p-8">
      <Tabs className="w-96" {...args}>
        <TabsList>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <Card>
            <CardHeader>
              <CardTitle>Account</CardTitle>
              <CardDescription>
                Update your expedition callsign.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-2">
              <Label htmlFor="callsign">Callsign</Label>
              <Input id="callsign" defaultValue="wanderer-7" />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="password">
          <Card>
            <CardHeader>
              <CardTitle>Password</CardTitle>
              <CardDescription>
                Change your passphrase here.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-2">
              <Label htmlFor="current">Current passphrase</Label>
              <Input id="current" type="password" />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  ),
}

export const LineVariant: Story = {
  render: () => (
    <div className="flex items-center justify-center p-8">
      <Tabs defaultValue="overview" className="w-96">
        <TabsList variant="line">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="routes">Routes</TabsTrigger>
          <TabsTrigger value="supplies">Supplies</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <p className="px-1 pt-3 text-sm text-muted-foreground">
            Expedition summary, morale index and upcoming checkpoints.
          </p>
        </TabsContent>
        <TabsContent value="routes">
          <p className="px-1 pt-3 text-sm text-muted-foreground">
            Planned and alternate routes for this leg.
          </p>
        </TabsContent>
        <TabsContent value="supplies">
          <p className="px-1 pt-3 text-sm text-muted-foreground">
            Current manifest and restock requests.
          </p>
        </TabsContent>
      </Tabs>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          '`variant="line"` drops the muted background for an '
          + 'underline indicator (`after:` pseudo-element) on the '
          + 'active trigger.',
      },
    },
  },
}

export const Controlled: Story = {
  render: function Render() {
    const [tab, setTab] = useState('map')

    return (
      <div className="flex items-center justify-center p-8">
        <div className="grid w-96 gap-3">
          <Tabs value={tab} onValueChange={setTab}>
            <TabsList>
              <TabsTrigger value="map">Map</TabsTrigger>
              <TabsTrigger value="list">List</TabsTrigger>
            </TabsList>
            <TabsContent value="map">
              <p className="text-sm text-muted-foreground">
                A gridded terrain view would render here.
              </p>
            </TabsContent>
            <TabsContent value="list">
              <p className="text-sm text-muted-foreground">
                A checkpoint list view would render here.
              </p>
            </TabsContent>
          </Tabs>
          <p className="text-sm text-muted-foreground">
            Active tab:
            {' '}
            <span className="font-medium text-foreground">{tab}</span>
          </p>
        </div>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          'Controlled mode: `value` + `onValueChange` keep the active '
          + 'tab in React state.',
      },
    },
  },
}

export const DisabledTab: Story = {
  render: () => (
    <div className="flex items-center justify-center p-8">
      <Tabs defaultValue="profile" className="w-96">
        <TabsList>
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="messages">Messages</TabsTrigger>
          <TabsTrigger value="archive" disabled>
            Archive
          </TabsTrigger>
        </TabsList>
        <TabsContent value="profile">
          <p className="px-1 pt-3 text-sm text-muted-foreground">
            Ranger profile and badges.
          </p>
        </TabsContent>
        <TabsContent value="messages">
          <p className="px-1 pt-3 text-sm text-muted-foreground">
            Pigeon-delivered messages.
          </p>
        </TabsContent>
        <TabsContent value="archive">
          <p className="px-1 pt-3 text-sm text-muted-foreground">
            Locked until the season ends.
          </p>
        </TabsContent>
      </Tabs>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Edge case: `disabled` on `TabsTrigger` dims it and blocks '
          + 'selection.',
      },
    },
  },
}

export const Vertical: Story = {
  render: () => (
    <div className="flex items-center justify-center p-8">
      <Tabs
        defaultValue="general"
        orientation="vertical"
        className="w-96"
      >
        <TabsList>
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="roster">Roster</TabsTrigger>
          <TabsTrigger value="rations">Rations</TabsTrigger>
        </TabsList>
        <TabsContent value="general">
          <p className="px-3 text-sm text-muted-foreground">
            Expedition name, region and season.
          </p>
        </TabsContent>
        <TabsContent value="roster">
          <p className="px-3 text-sm text-muted-foreground">
            Rangers assigned to this expedition.
          </p>
        </TabsContent>
        <TabsContent value="rations">
          <p className="px-3 text-sm text-muted-foreground">
            Per-person ration allocation.
          </p>
        </TabsContent>
      </Tabs>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          '`orientation="vertical"` lays the list out as a column on '
          + 'the left (`flex-col`, full-width triggers) with content '
          + 'alongside.',
      },
    },
  },
}
