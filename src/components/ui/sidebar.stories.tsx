import type { Meta, StoryObj } from '@storybook/react-vite'
import {
  ChartColumnIcon,
  FolderKanbanIcon,
  HomeIcon,
  SettingsIcon,
  UsersIcon,
  ZapIcon,
} from 'lucide-react'

import { Separator } from './separator'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarRail,
  SidebarTrigger,
} from './sidebar'

const meta = {
  title: 'Components/Sidebar',
  component: Sidebar,
  parameters: {
    docs: {
      description: {
        component:
          'An app-shell sidebar. `SidebarProvider` owns open state '
          + '(plus `Ctrl/Cmd+B` and a `sidebar_state` cookie); `Sidebar` '
          + 'takes `side`, `variant` (`sidebar` | `floating` | `inset`) '
          + 'and `collapsible` (`offcanvas` | `icon` | `none`). Content '
          + 'areas are `Header`/`Content`/`Footer` with `Group` + '
          + '`Menu` primitives; `SidebarInset` is the sibling main area '
          + 'and `SidebarTrigger`/`SidebarRail` toggle it.',
      },
    },
    layout: 'fullscreen',
  },
  argTypes: {
    side: {
      control: 'radio',
      options: ['left', 'right'],
      description: 'Edge the sidebar docks to.',
    },
    variant: {
      control: 'radio',
      options: ['sidebar', 'floating', 'inset'],
      description: 'Visual variant of the sidebar container.',
    },
    collapsible: {
      control: 'radio',
      options: ['offcanvas', 'icon', 'none'],
      description: 'Collapse behavior — offcanvas hides, icon shrinks.',
    },
  },
  args: {
    side: 'left',
    variant: 'sidebar',
    collapsible: 'offcanvas',
  },
} satisfies Meta<typeof Sidebar>

export default meta
type Story = StoryObj<typeof meta>

const platformItems = [
  { icon: HomeIcon, label: 'Home', isActive: true },
  { icon: ChartColumnIcon, label: 'Analytics' },
  { icon: FolderKanbanIcon, label: 'Projects', badge: '12' },
]

const fleetItems = [
  { icon: UsersIcon, label: 'Crew' },
  { icon: ZapIcon, label: 'Reactor' },
  { icon: SettingsIcon, label: 'Settings' },
]

function AppSidebar(props: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg">
              <div className="flex aspect-square size-8 items-center justify-center rounded-md bg-sidebar-primary text-sidebar-primary-foreground">
                LF
              </div>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-medium">LFDS Console</span>
                <span className="truncate text-xs text-muted-foreground">
                  v0.1.0
                </span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Platform</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {platformItems.map(item => (
                <SidebarMenuItem key={item.label}>
                  <SidebarMenuButton
                    isActive={item.isActive}
                    tooltip={item.label}
                  >
                    <item.icon />
                    <span>{item.label}</span>
                  </SidebarMenuButton>
                  {item.badge && (
                    <SidebarMenuBadge>{item.badge}</SidebarMenuBadge>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Fleet</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {fleetItems.map(item => (
                <SidebarMenuItem key={item.label}>
                  <SidebarMenuButton tooltip={item.label}>
                    <item.icon />
                    <span>{item.label}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton>
              <div className="flex aspect-square size-6 items-center justify-center rounded-full bg-muted text-xs">
                L
              </div>
              <span>luisfuturist</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}

function MainArea() {
  return (
    <SidebarInset>
      <header className="flex h-12 shrink-0 items-center gap-2 border-b px-4">
        <SidebarTrigger />
        <Separator orientation="vertical" className="h-4" />
        <span className="text-sm font-medium">Dashboard</span>
      </header>
      <main className="flex flex-1 flex-col gap-4 p-4">
        <div className="grid auto-rows-min gap-4 md:grid-cols-3">
          <div className="aspect-video rounded-md border bg-muted/50" />
          <div className="aspect-video rounded-md border bg-muted/50" />
          <div className="aspect-video rounded-md border bg-muted/50" />
        </div>
        <div className="min-h-32 flex-1 rounded-md border bg-muted/50" />
      </main>
    </SidebarInset>
  )
}

export const Default: Story = {
  render: args => (
    <div className="min-h-96 w-full">
      <SidebarProvider className="min-h-96">
        <AppSidebar {...args} />
        <MainArea />
      </SidebarProvider>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Full app shell: `SidebarProvider` > `Sidebar` (header, two '
          + 'menu groups, footer, `SidebarRail`) + `SidebarInset` with '
          + 'a `SidebarTrigger` header bar. `Ctrl/Cmd+B` toggles too.',
      },
    },
  },
}

export const CollapsibleIcon: Story = {
  render: () => (
    <div className="min-h-96 w-full">
      <SidebarProvider className="min-h-96">
        <AppSidebar collapsible="icon" />
        <MainArea />
      </SidebarProvider>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          '`collapsible="icon"` shrinks to a `3rem` icon rail instead '
          + 'of sliding off-canvas; `tooltip` on `SidebarMenuButton` '
          + 'labels the icons when collapsed (try the trigger or '
          + 'rail).',
      },
    },
  },
}

export const Floating: Story = {
  render: () => (
    <div className="min-h-96 w-full">
      <SidebarProvider className="min-h-96">
        <AppSidebar variant="floating" collapsible="icon" />
        <MainArea />
      </SidebarProvider>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          '`variant="floating"` detaches the sidebar from the edge — '
          + 'padded, rounded and bordered.',
      },
    },
  },
}

export const Inset: Story = {
  render: () => (
    <div className="min-h-96 w-full">
      <SidebarProvider className="min-h-96">
        <AppSidebar variant="inset" />
        <MainArea />
      </SidebarProvider>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          '`variant="inset"` gives `SidebarInset` a margin + rounded '
          + 'main surface, and the provider wrapper picks up '
          + '`bg-sidebar` behind it.',
      },
    },
  },
}

export const InitiallyCollapsed: Story = {
  render: () => (
    <div className="min-h-96 w-full">
      <SidebarProvider className="min-h-96" defaultOpen={false}>
        <AppSidebar collapsible="icon" />
        <MainArea />
      </SidebarProvider>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Edge case: `defaultOpen={false}` on the provider starts '
          + 'collapsed — with `collapsible="icon"` the icon rail '
          + 'remains visible.',
      },
    },
  },
}
