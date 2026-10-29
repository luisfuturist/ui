import type { Meta, StoryObj } from '@storybook/react-vite'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from './navigation-menu'

const meta = {
  title: 'Components/NavigationMenu',
  component: NavigationMenu,
  parameters: {
    docs: {
      description: {
        component:
          'A desktop nav with dropdown panels, built on `radix-ui` '
          + '`NavigationMenu`. `NavigationMenuTrigger` opens each '
          + 'item\'s `NavigationMenuContent` inside a shared '
          + '`Viewport` (disable with `viewport={false}` for per-item '
          + 'popovers). Plain links use `NavigationMenuLink` + the '
          + 'exported `navigationMenuTriggerStyle()` class helper.',
      },
    },
  },
  argTypes: {
    viewport: {
      control: 'boolean',
      description: 'Render panels inside a shared animated viewport.',
    },
  },
  args: {
    viewport: true,
  },
} satisfies Meta<typeof NavigationMenu>

export default meta
type Story = StoryObj<typeof meta>

const components: { title: string, description: string }[] = [
  {
    title: 'Alert Dialog',
    description: 'A modal that interrupts with critical content.',
  },
  {
    title: 'Hover Card',
    description: 'Preview content behind a link on hover.',
  },
  {
    title: 'Progress',
    description: 'Visual indicator for completion of a task.',
  },
  {
    title: 'Scroll Area',
    description: 'Augments native scroll for custom styling.',
  },
  {
    title: 'Tabs',
    description: 'Layered sections of content shown one at a time.',
  },
  {
    title: 'Tooltip',
    description: 'A popup with information related to an element.',
  },
]

function DemoMenu({ viewport = true }: { viewport?: boolean }) {
  return (
    <NavigationMenu viewport={viewport}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-2 p-4 md:w-96 lg:grid-cols-[1fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    href="#"
                    className="flex h-full w-full flex-col justify-end rounded-md bg-muted p-4 no-underline"
                  >
                    <div className="text-lg font-medium">LFDS</div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Terminal-inspired components for React.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink href="#">
                  <div className="text-sm font-medium">Introduction</div>
                  <p className="text-sm text-muted-foreground">
                    What LFDS is and how it's structured.
                  </p>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink href="#">
                  <div className="text-sm font-medium">Installation</div>
                  <p className="text-sm text-muted-foreground">
                    Add the library to your project.
                  </p>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Components</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-96 gap-2 p-4 md:w-[28rem] md:grid-cols-2">
              {components.map(component => (
                <li key={component.title}>
                  <NavigationMenuLink href="#">
                    <div className="text-sm font-medium">
                      {component.title}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {component.description}
                    </p>
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            href="#"
            className={navigationMenuTriggerStyle()}
          >
            Docs
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

export const Default: Story = {
  render: args => (
    <div className="flex items-start justify-center p-8 pb-56">
      <DemoMenu viewport={args.viewport} />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Two dropdown items (a featured panel and a 2-column link '
          + 'grid) plus a plain link styled with '
          + '`navigationMenuTriggerStyle()`. Toggle the `viewport` '
          + 'control to compare behaviors.',
      },
    },
  },
}

export const WithoutViewport: Story = {
  render: () => (
    <div className="flex items-start justify-center p-8 pb-56">
      <DemoMenu viewport={false} />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          '`viewport={false}` renders each panel as an independent '
          + 'popover under its item instead of animating a shared '
          + 'viewport.',
      },
    },
  },
}
