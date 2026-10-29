import type { Meta, StoryObj } from '@storybook/react-vite'
import { Bell } from 'lucide-react'

import { Button } from './button'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './card'
import { Input } from './input'
import { Label } from './label'

const meta = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    docs: {
      description: {
        component:
          'A bordered surface composed of `CardHeader`, `CardTitle`, '
          + '`CardDescription`, `CardAction`, `CardContent` and '
          + '`CardFooter`. The header is a grid — adding `CardAction` '
          + 'switches it to a title/action two-column layout '
          + 'automatically.',
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
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: () => (
    <div className="flex items-center justify-center p-8">
      <Card className="w-96">
        <CardHeader>
          <CardTitle>Expedition report</CardTitle>
          <CardDescription>
            Weekly summary for the northern pass route.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            12 checkpoints cleared, 3 supply drops collected and one
            compass recalibrated. Morale remains high.
          </p>
        </CardContent>
        <CardFooter className="justify-end gap-2">
          <Button variant="outline" size="sm">Dismiss</Button>
          <Button size="sm">
            Archive
          </Button>
        </CardFooter>
      </Card>
    </div>
  ),
}

export const WithAction: Story = {
  render: () => (
    <div className="flex items-center justify-center p-8">
      <Card className="w-96">
        <CardHeader>
          <CardTitle>Notifications</CardTitle>
          <CardDescription>
            Choose what the carrier pigeons bring you.
          </CardDescription>
          <CardAction>
            <Button variant="outline" size="sm">
              <Bell />
              Subscribe
            </Button>
          </CardAction>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Route alerts, weather bulletins and quartermaster memos.
          </p>
        </CardContent>
      </Card>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          '`CardAction` occupies `col-start-2` spanning both header '
          + 'rows, pinning a control beside the title/description.',
      },
    },
  },
}

export const Minimal: Story = {
  render: () => (
    <div className="flex items-center justify-center p-8">
      <Card className="w-96">
        <CardContent>
          <p className="text-sm text-muted-foreground">
            A card with only `CardContent` — no header or footer. The
            vertical padding comes from `Card` itself.
          </p>
        </CardContent>
      </Card>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Every section is optional — `Card` alone still provides '
          + 'border, radius, `py-6` and the `gap-6` column layout.',
      },
    },
  },
}

export const WithForm: Story = {
  render: () => (
    <div className="flex items-center justify-center p-8">
      <Card className="w-96">
        <CardHeader>
          <CardTitle>Create expedition</CardTitle>
          <CardDescription>
            Name your expedition and pick a launch date.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="exp-name">Name</Label>
              <Input id="exp-name" placeholder="Northern lights survey" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="exp-date">Launch date</Label>
              <Input id="exp-date" type="date" />
            </div>
          </form>
        </CardContent>
        <CardFooter className="justify-end gap-2 border-t pt-6">
          <Button variant="outline" size="sm">Cancel</Button>
          <Button size="sm">
            Create
          </Button>
        </CardFooter>
      </Card>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'A realistic composition: `Card` hosts a small form and the '
          + 'footer gets a `border-t` + `pt-6` — the `[.border-t]` '
          + 'selectors coordinate the spacing.',
      },
    },
  },
}
