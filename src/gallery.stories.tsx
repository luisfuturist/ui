import type { Meta, StoryObj } from '@storybook/react-vite'
import type { ReactNode } from 'react'
import { useState } from 'react'
import MaterialDocumentSearch from '~icons/material-symbols/document-search'
import MaterialFormatBold from '~icons/material-symbols/format-bold'
import MaterialFormatItalic from '~icons/material-symbols/format-italic'
import MaterialFormatUnderlined from '~icons/material-symbols/format-underlined'
import MaterialHome from '~icons/material-symbols/home'
import MaterialSearch from '~icons/material-symbols/search'
import MaterialSettings from '~icons/material-symbols/settings'
import { createPortal } from 'react-dom'
import { useForm } from 'react-hook-form'
import { Bar, BarChart } from 'recharts'
import { toast } from 'sonner'

import {
  CommandPalette,
  type CommandPaletteGroup,
} from './blocks/command-palette'
import { ContactCTA } from './blocks/contact-cta'
import { ContactForm } from './blocks/contact-form'
import { EmptyData, EmptyError, EmptySearch } from './blocks/empty-state'
import {
  ErrorPage404,
  ErrorPage500,
  ErrorPageMaintenance,
} from './blocks/error-page-presets'
import { FeatureGrid } from './blocks/feature-grid'
import { HeroSection } from './blocks/hero-section'
import { LoginForm } from './blocks/login-form'
import { NewsletterSignup } from './blocks/newsletter-signup'
import { ProjectCard, ProjectGrid } from './blocks/project-card'
import { SearchBar } from './blocks/search-bar'
import { SiteFooter } from './blocks/site-footer'
import { SiteHeader } from './blocks/site-header'
import { SkillsList } from './blocks/skills-list'
import { StatsSection } from './blocks/stats-section'
import { TestimonialCard } from './blocks/testimonial'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './components/ui/accordion'
import { Alert, AlertDescription, AlertTitle } from './components/ui/alert'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from './components/ui/alert-dialog'
import { AspectRatio } from './components/ui/aspect-ratio'
import { Avatar, AvatarFallback } from './components/ui/avatar'
import { Badge } from './components/ui/badge'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from './components/ui/breadcrumb'
import { Button } from './components/ui/button'
import {
  ButtonGroup,
  ButtonGroupSeparator,
} from './components/ui/button-group'
import { Calendar } from './components/ui/calendar'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from './components/ui/carousel'
import type { ChartConfig } from './components/ui/chart'
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from './components/ui/chart'
import { Checkbox } from './components/ui/checkbox'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from './components/ui/collapsible'
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from './components/ui/combobox'
import {
  Command,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from './components/ui/command'
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from './components/ui/context-menu'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './components/ui/dialog'
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from './components/ui/drawer'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './components/ui/dropdown-menu'
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from './components/ui/empty'
import { Field, FieldGroup, FieldLabel } from './components/ui/field'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from './components/ui/form'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from './components/ui/hover-card'
import { Input } from './components/ui/input'
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from './components/ui/input-group'
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from './components/ui/input-otp'
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from './components/ui/item'
import { Kbd, KbdGroup } from './components/ui/kbd'
import { Label } from './components/ui/label'
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from './components/ui/menubar'
import {
  NativeSelect,
  NativeSelectOption,
} from './components/ui/native-select'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from './components/ui/navigation-menu'
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from './components/ui/pagination'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from './components/ui/popover'
import { Progress } from './components/ui/progress'
import { RadioGroup, RadioGroupItem } from './components/ui/radio-group'
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from './components/ui/resizable'
import { ScrollArea } from './components/ui/scroll-area'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './components/ui/select'
import { Separator } from './components/ui/separator'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './components/ui/sheet'
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from './components/ui/sidebar'
import { Skeleton } from './components/ui/skeleton'
import { Slider } from './components/ui/slider'
import { Toaster } from './components/ui/sonner'
import { Spinner } from './components/ui/spinner'
import { Switch } from './components/ui/switch'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './components/ui/table'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from './components/ui/tabs'
import { Textarea } from './components/ui/textarea'
import { Toggle } from './components/ui/toggle'
import { ToggleGroup, ToggleGroupItem } from './components/ui/toggle-group'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './components/ui/tooltip'
import { cn } from './lib/utils'

const meta = {
  title: 'Introduction/Gallery',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Every component in the `@luisfuturist/ui` catalog as a small '
          + 'labeled cell — a coverage/QA page, not a playground. '
          + 'Portal-based components show their closed trigger.',
      },
    },
  },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

const labelLinkClass
  = 'font-mono text-xs text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline'

function LabelLink({ story, children }: {
  story: string
  children: ReactNode
}) {
  return (
    <a
      href={`?path=/docs/${story}`}
      target="_top"
      className={cn('w-fit', labelLinkClass)}
    >
      {children}
    </a>
  )
}

function Cell({ label, description, wide, story, children }: {
  label: string
  description?: string
  wide?: boolean
  story?: string
  children: ReactNode
}) {
  // Storybook docs ids are `components-<name-lowercased>--docs`; labels
  // like "Form (react-hook-form)" resolve via their first token.
  const docsId = story
    ?? `components-${label.split(/[\s(]/)[0].toLowerCase()}--docs`

  return (
    <div className={cn('flex flex-col gap-2', wide && 'sm:col-span-2')}>
      <div className="flex min-h-28 w-full flex-1 items-center justify-center border border-foreground bg-background p-3">
        {children}
      </div>
      <div className="flex flex-col gap-0.5">
        <LabelLink story={docsId}>
          {label}
        </LabelLink>
        {description && (
          <span className="text-xs text-muted-foreground opacity-60">
            {description}
          </span>
        )}
      </div>
    </div>
  )
}

function Section({ title, children }: {
  title: string
  children: ReactNode
}) {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="border-b border-foreground/30 pb-2 font-mono text-sm font-semibold tracking-wide uppercase">
        {title}
      </h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {children}
      </div>
    </section>
  )
}

function FormDemo() {
  const form = useForm<{ email: string }>({ defaultValues: { email: '' } })
  return (
    <Form {...form}>
      <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Email</FormLabel>
            <FormControl>
              <Input placeholder="you@lf.ds" {...field} />
            </FormControl>
            <FormDescription>We never share it.</FormDescription>
          </FormItem>
        )}
      />
    </Form>
  )
}

const chartConfig = {
  views: { label: 'Views', color: 'var(--chart-1)' },
} satisfies ChartConfig

const chartData = [
  { day: 'Mon', views: 8 },
  { day: 'Tue', views: 14 },
  { day: 'Wed', views: 6 },
  { day: 'Thu', views: 18 },
  { day: 'Fri', views: 11 },
]

const comboboxItems = ['Next.js', 'Astro', 'SvelteKit']

const paletteGroups: CommandPaletteGroup[] = [
  {
    label: 'Pages',
    items: [
      { label: 'Home', icon: <MaterialHome /> },
      { label: 'Docs', icon: <MaterialDocumentSearch /> },
      { label: 'Settings', icon: <MaterialSettings /> },
    ],
  },
]

// Small controlled wrapper so the CommandPalette / SearchBar cells can
// open the real palette from their trigger element.
function PaletteDemo({ trigger }: {
  trigger: (open: () => void) => ReactNode
}) {
  const [open, setOpen] = useState(false)
  return (
    <>
      {trigger(() => setOpen(true))}
      <CommandPalette
        open={open}
        onOpenChange={setOpen}
        groups={paletteGroups}
      />
    </>
  )
}

export const Catalog: Story = {
  render: () => (
    <div className="bg-background text-foreground">
      {/* sonner renders position:fixed in place (no portal). On the docs
          page the story block gets `transform: translateZ(0)`, which
          re-anchors fixed elements to the story container — the toast
          ends up at the very bottom of the page, offscreen. Portaling
          to <body> anchors it to the real viewport in both views. */}
      {createPortal(<Toaster />, document.body)}
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-12 px-6 py-10">
        <header className="flex flex-col gap-2">
          <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
            Introduction
          </p>
          <h1 className="font-mono text-3xl font-semibold tracking-tight">
            Component gallery
          </h1>
          <p className="max-w-prose text-sm text-muted-foreground">
            The full LFDS catalog in one view. Interactive/portal components
            render their trigger — open their dedicated stories for live
            behavior.
          </p>
        </header>

        <Section title="Inputs">
          <Cell label="Button" description="cva variants + radix Slot" wide>
            <div className="flex flex-wrap items-center justify-center gap-2">
              <Button size="sm">Default</Button>
              <Button size="sm" variant="secondary">Secondary</Button>
              <Button size="sm" variant="outline">Outline</Button>
              <Button size="sm" variant="destructive">Destructive</Button>
              <Button size="sm" variant="ghost">Ghost</Button>
              <Button size="sm" variant="link">Link</Button>
              <Button size="sm" variant="augmented">Augmented</Button>
              <Button size="sm" variant="augmented-outline">Aug. outline</Button>
              <Button size="sm" variant="augmented-inverted">Aug. inverted</Button>
              <Button size="sm" disabled>Disabled</Button>
              <Button size="icon-sm" aria-label="settings">
                <MaterialSettings />
              </Button>
            </div>
          </Cell>

          <Cell label="ButtonGroup" description="joined controls via radix Slot">
            <ButtonGroup>
              <Button variant="outline" size="sm">Left</Button>
              <ButtonGroupSeparator />
              <Button variant="outline" size="sm">Right</Button>
            </ButtonGroup>
          </Cell>

          <Cell label="Checkbox" description="radix checkbox">
            <div className="flex flex-wrap items-center justify-center gap-4">
              <div className="flex items-center gap-2">
                <Checkbox id="g-check" defaultChecked />
                <Label htmlFor="g-check">Checked</Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="g-check-off" />
                <Label htmlFor="g-check-off">Off</Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="g-check-dis" disabled />
                <Label htmlFor="g-check-dis">Disabled</Label>
              </div>
            </div>
          </Cell>

          <Cell label="RadioGroup" description="radix radio-group">
            <RadioGroup defaultValue="a" className="flex gap-4">
              <div className="flex items-center gap-2">
                <RadioGroupItem id="g-ra" value="a" />
                <Label htmlFor="g-ra">A</Label>
              </div>
              <div className="flex items-center gap-2">
                <RadioGroupItem id="g-rb" value="b" />
                <Label htmlFor="g-rb">B</Label>
              </div>
            </RadioGroup>
          </Cell>

          <Cell label="Switch" description="radix switch">
            <div className="flex items-center gap-4">
              <Switch defaultChecked aria-label="on" />
              <Switch aria-label="off" />
              <Switch disabled aria-label="disabled" />
            </div>
          </Cell>

          <Cell label="Slider" description="radix slider">
            <Slider defaultValue={[40]} className="w-40" aria-label="value" />
          </Cell>

          <Cell label="Input" description="native input" wide>
            <div className="grid w-full grid-cols-2 gap-2">
              <Input placeholder="Placeholder" />
              <Input defaultValue="Filled value" />
              <Input defaultValue="Invalid value" aria-invalid />
              <Input placeholder="Disabled" disabled />
            </div>
          </Cell>

          <Cell label="Textarea" description="native textarea" wide>
            <div className="grid w-full grid-cols-2 gap-2">
              <Textarea placeholder="Default" />
              <Textarea defaultValue={'Filled\nwith two lines'} />
              <Textarea defaultValue="Invalid entry" aria-invalid />
              <Textarea placeholder="Disabled" disabled />
            </div>
          </Cell>

          <Cell label="Label" description="radix label">
            <div className="flex items-center gap-2">
              <Label htmlFor="g-label">Handle</Label>
              <Input id="g-label" placeholder="lf" className="w-28" />
            </div>
          </Cell>

          <Cell label="InputGroup" description="input + addon composite">
            <InputGroup>
              <InputGroupInput placeholder="Search…" />
              <InputGroupAddon>
                <MaterialSearch />
              </InputGroupAddon>
            </InputGroup>
          </Cell>

          <Cell label="InputOTP" description="input-otp · one-time code">
            <InputOTP maxLength={4}>
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
                <InputOTPSlot index={3} />
              </InputOTPGroup>
            </InputOTP>
          </Cell>

          <Cell label="Field" description="label + control wrapper">
            <FieldGroup className="w-full">
              <Field>
                <FieldLabel htmlFor="g-field">Full name</FieldLabel>
                <Input id="g-field" placeholder="Luis Futurist" />
              </Field>
            </FieldGroup>
          </Cell>

          <Cell label="Form (react-hook-form)" description="react-hook-form + radix label">
            <FormDemo />
          </Cell>

          <Cell label="Select" description="radix select">
            <div className="flex w-full flex-col gap-2">
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Pick one" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="a">Alpha</SelectItem>
                  <SelectItem value="b">Beta</SelectItem>
                </SelectContent>
              </Select>
              <Select disabled>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Disabled" />
                </SelectTrigger>
              </Select>
            </div>
          </Cell>

          <Cell label="NativeSelect" description="native select">
            <NativeSelect>
              <NativeSelectOption>Alpha</NativeSelectOption>
              <NativeSelectOption>Beta</NativeSelectOption>
            </NativeSelect>
          </Cell>

          <Cell label="Combobox" description="base-ui combobox">
            <Combobox items={comboboxItems}>
              <ComboboxInput placeholder="Framework" className="w-full" />
              <ComboboxContent>
                <ComboboxEmpty>No frameworks found.</ComboboxEmpty>
                <ComboboxList>
                  {(item: string) => (
                    <ComboboxItem key={item} value={item}>
                      {item}
                    </ComboboxItem>
                  )}
                </ComboboxList>
              </ComboboxContent>
            </Combobox>
          </Cell>

          <Cell label="Toggle" description="radix toggle">
            <Toggle aria-label="bold">
              <MaterialFormatBold />
            </Toggle>
          </Cell>

          <Cell label="ToggleGroup" description="radix toggle-group">
            <ToggleGroup type="single" defaultValue="b">
              <ToggleGroupItem value="b" aria-label="bold">
                <MaterialFormatBold />
              </ToggleGroupItem>
              <ToggleGroupItem value="i" aria-label="italic">
                <MaterialFormatItalic />
              </ToggleGroupItem>
              <ToggleGroupItem value="u" aria-label="underline">
                <MaterialFormatUnderlined />
              </ToggleGroupItem>
            </ToggleGroup>
          </Cell>

          <Cell label="Calendar" description="react-day-picker" wide>
            <Calendar mode="single" className="rounded-md border" />
          </Cell>
        </Section>

        <Section title="Display">
          <Cell label="Alert" description="status callout container">
            <Alert className="w-full">
              <AlertTitle>Heads up</AlertTitle>
              <AlertDescription>Systems nominal.</AlertDescription>
            </Alert>
          </Cell>

          <Cell label="Avatar" description="radix avatar">
            <Avatar>
              <AvatarFallback>LF</AvatarFallback>
            </Avatar>
          </Cell>

          <Cell label="Badge" description="cva variants + radix Slot">
            <div className="flex flex-wrap items-center justify-center gap-2">
              <Badge>Beta</Badge>
              <Badge variant="secondary">v4</Badge>
              <Badge variant="outline">Draft</Badge>
            </div>
          </Cell>

          <Cell label="Card" description="sectioned container" wide>
            <Card className="w-full py-4">
              <CardHeader>
                <CardTitle>Card title</CardTitle>
                <CardDescription>Short description.</CardDescription>
              </CardHeader>
              <CardContent className="text-sm">
                Body copy goes here.
              </CardContent>
            </Card>
          </Cell>

          <Cell label="AspectRatio" description="radix aspect-ratio">
            <AspectRatio ratio={16 / 9} className="w-full">
              <div className="flex size-full items-center justify-center bg-card text-xs text-muted-foreground">
                16:9
              </div>
            </AspectRatio>
          </Cell>

          <Cell label="Carousel" description="embla-carousel">
            <Carousel className="w-full max-w-44">
              <CarouselContent>
                {['One', 'Two', 'Three'].map(n => (
                  <CarouselItem key={n}>
                    <div className="flex h-16 items-center justify-center border border-foreground/30 text-xs">
                      {n}
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </Cell>

          <Cell label="Chart" description="recharts + ChartConfig context" wide>
            <ChartContainer config={chartConfig} className="h-36 w-full">
              <BarChart data={chartData}>
                <Bar dataKey="views" fill="var(--color-views)" radius={2} />
                <ChartTooltip content={<ChartTooltipContent />} />
              </BarChart>
            </ChartContainer>
          </Cell>

          <Cell label="Empty" description="empty-state layout">
            <Empty className="w-full border p-4">
              <EmptyHeader>
                <EmptyMedia variant="icon">
                  <MaterialDocumentSearch />
                </EmptyMedia>
                <EmptyTitle>No results</EmptyTitle>
                <EmptyDescription>Try a different query.</EmptyDescription>
              </EmptyHeader>
            </Empty>
          </Cell>

          <Cell label="Item" description="media + content row via radix Slot">
            <Item variant="outline" size="sm" className="w-full">
              <ItemMedia variant="icon">
                <MaterialSearch />
              </ItemMedia>
              <ItemContent>
                <ItemTitle>Saved search</ItemTitle>
                <ItemDescription>12 matching results.</ItemDescription>
              </ItemContent>
            </Item>
          </Cell>

          <Cell label="Kbd" description="native kbd">
            <KbdGroup>
              <Kbd>⌘</Kbd>
              <Kbd>K</Kbd>
            </KbdGroup>
          </Cell>

          <Cell label="Progress" description="radix progress">
            <Progress value={60} className="w-full" />
          </Cell>

          <Cell label="Separator" description="radix separator">
            <div className="flex w-full flex-col gap-3 text-xs">
              <span>Above</span>
              <Separator />
              <span>Below</span>
            </div>
          </Cell>

          <Cell label="Skeleton" description="loading placeholder div">
            <div className="flex w-full flex-col gap-2">
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
            </div>
          </Cell>

          <Cell label="Spinner" description="icon spinner">
            <Spinner />
          </Cell>

          <Cell label="Accordion" description="radix accordion">
            <Accordion type="single" defaultValue="a" className="w-full">
              <AccordionItem value="a">
                <AccordionTrigger>Open item</AccordionTrigger>
                <AccordionContent>Panel content.</AccordionContent>
              </AccordionItem>
            </Accordion>
          </Cell>

          <Cell label="Collapsible" description="radix collapsible">
            <Collapsible defaultOpen className="w-full">
              <CollapsibleTrigger className="text-sm underline underline-offset-4">
                Section
              </CollapsibleTrigger>
              <CollapsibleContent className="pt-1 text-xs text-muted-foreground">
                Revealed content.
              </CollapsibleContent>
            </Collapsible>
          </Cell>

          <Cell label="Tabs" description="radix tabs">
            <Tabs defaultValue="a" className="w-full">
              <TabsList>
                <TabsTrigger value="a">One</TabsTrigger>
                <TabsTrigger value="b">Two</TabsTrigger>
              </TabsList>
              <TabsContent value="a" className="pt-2 text-xs">
                First panel.
              </TabsContent>
              <TabsContent value="b" className="pt-2 text-xs">
                Second panel.
              </TabsContent>
            </Tabs>
          </Cell>

          <Cell label="Table" description="native table + scroll-area wrapper" wide>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>alpha</TableCell>
                  <TableCell>live</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>beta</TableCell>
                  <TableCell>queued</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Cell>

          <Cell label="ScrollArea" description="radix scroll-area">
            <ScrollArea className="h-20 w-full rounded-md border p-2 text-xs">
              {Array.from({ length: 8 }, (_, i) => (
                <p key={i}>
                  Scrollable line
                  {' '}
                  {i + 1}
                </p>
              ))}
            </ScrollArea>
          </Cell>

          <Cell label="Resizable" description="react-resizable-panels">
            <ResizablePanelGroup
              orientation="horizontal"
              className="h-20 w-full rounded-md border"
            >
              <ResizablePanel className="flex items-center justify-center text-xs">
                A
              </ResizablePanel>
              <ResizableHandle />
              <ResizablePanel className="flex items-center justify-center text-xs">
                B
              </ResizablePanel>
            </ResizablePanelGroup>
          </Cell>

          <Cell label="Sonner (toast)" description="sonner · portaled to body" story="components-toaster--docs">
            <Button
              variant="outline"
              size="sm"
              onClick={() => toast('Hello from LFDS')}
            >
              Show toast
            </Button>
          </Cell>
        </Section>

        <Section title="Overlays">
          <Cell label="Command" description="cmdk palette">
            <Command className="w-full rounded-md border">
              <CommandInput placeholder="Search…" />
              <CommandList>
                <CommandGroup heading="Actions">
                  <CommandItem>Profile</CommandItem>
                  <CommandItem>Settings</CommandItem>
                </CommandGroup>
              </CommandList>
            </Command>
          </Cell>

          <Cell label="Dialog" description="radix dialog">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" size="sm">Open dialog</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Dialog</DialogTitle>
                  <DialogDescription>Inline content.</DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </Cell>

          <Cell label="AlertDialog" description="radix alert-dialog">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="outline" size="sm">Delete</Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This cannot be undone.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction>Continue</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </Cell>

          <Cell label="Sheet" description="radix dialog · side panel">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="sm">Open sheet</Button>
              </SheetTrigger>
              <SheetContent side="right">
                <SheetHeader>
                  <SheetTitle>Sheet</SheetTitle>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </Cell>

          <Cell label="Drawer" description="vaul drawer">
            <Drawer>
              <DrawerTrigger asChild>
                <Button variant="outline" size="sm">Open drawer</Button>
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader>
                  <DrawerTitle>Drawer</DrawerTitle>
                </DrawerHeader>
              </DrawerContent>
            </Drawer>
          </Cell>

          <Cell label="Popover" description="radix popover">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" size="sm">Open popover</Button>
              </PopoverTrigger>
              <PopoverContent className="text-sm">
                Popover content.
              </PopoverContent>
            </Popover>
          </Cell>

          <Cell label="Tooltip" description="radix tooltip">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" size="sm">Hover me</Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Tooltip</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </Cell>

          <Cell label="HoverCard" description="radix hover-card">
            <HoverCard>
              <HoverCardTrigger asChild>
                <Button variant="link" size="sm">@luisfuturist</Button>
              </HoverCardTrigger>
              <HoverCardContent className="text-sm">
                Profile preview.
              </HoverCardContent>
            </HoverCard>
          </Cell>

          <Cell label="DropdownMenu" description="radix dropdown-menu">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm">Menu</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Item one</DropdownMenuItem>
                <DropdownMenuItem>Item two</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </Cell>

          <Cell label="ContextMenu" description="radix context-menu">
            <ContextMenu>
              <ContextMenuTrigger className="flex h-16 w-full items-center justify-center rounded-md border border-dashed border-foreground/50 text-xs text-muted-foreground">
                Right-click me
              </ContextMenuTrigger>
              <ContextMenuContent>
                <ContextMenuItem>Action</ContextMenuItem>
              </ContextMenuContent>
            </ContextMenu>
          </Cell>
        </Section>

        <Section title="Navigation">
          <Cell label="Breadcrumb" description="nav + radix Slot">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Library</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </Cell>

          <Cell label="Menubar" description="radix menubar">
            <Menubar>
              <MenubarMenu>
                <MenubarTrigger>File</MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>New</MenubarItem>
                </MenubarContent>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger>Edit</MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>Copy</MenubarItem>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
          </Cell>

          <Cell label="NavigationMenu" description="radix navigation-menu">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink href="#">Docs</NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink href="#">Blocks</NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </Cell>

          <Cell label="Pagination" description="nav links + buttonVariants">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive>1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </Cell>

          <Cell label="Sidebar" description="composite sidebar + provider context" wide>
            <SidebarProvider className="h-48 min-h-0 w-full overflow-hidden rounded-md border">
              <Sidebar collapsible="none">
                <SidebarContent>
                  <SidebarGroup>
                    <SidebarGroupLabel>App</SidebarGroupLabel>
                    <SidebarGroupContent>
                      <SidebarMenu>
                        <SidebarMenuItem>
                          <SidebarMenuButton isActive>
                            <MaterialHome />
                            Home
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                        <SidebarMenuItem>
                          <SidebarMenuButton>
                            <MaterialSettings />
                            Settings
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      </SidebarMenu>
                    </SidebarGroupContent>
                  </SidebarGroup>
                </SidebarContent>
              </Sidebar>
            </SidebarProvider>
          </Cell>
        </Section>

        <section className="flex flex-col gap-4">
          <h2 className="border-b border-foreground/30 pb-2 font-mono text-sm font-semibold tracking-wide uppercase">
            Blocks
          </h2>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <div className="overflow-hidden border border-foreground/30">
                <SiteHeader
                  links={[
                    { label: 'Docs', href: '#' },
                    { label: 'Blocks', href: '#' },
                  ]}
                  actions={<Button size="sm">Start</Button>}
                />
              </div>
              <LabelLink story="blocks-siteheader--docs">
                SiteHeader
              </LabelLink>
            </div>

            <div className="flex flex-col gap-2">
              <div className="border border-foreground/30">
                <HeroSection
                  eyebrow="LFDS"
                  title="Ship the interface"
                  description="Composite hero block from src/blocks."
                  actions={<Button>Get started</Button>}
                  className="py-12 sm:py-12"
                />
              </div>
              <LabelLink story="blocks-herosection--docs">
                HeroSection
              </LabelLink>
            </div>

            <div className="flex flex-col gap-2">
              <div className="border border-foreground/30">
                <StatsSection
                  className="py-8 sm:py-8"
                  stats={[
                    { value: '128+', label: 'Components' },
                    { value: '99.9%', label: 'Uptime' },
                    { value: '42ms', label: 'Avg. response' },
                    { value: '7y', label: 'In production' },
                  ]}
                />
              </div>
              <LabelLink story="blocks-statssection--docs">
                StatsSection
              </LabelLink>
            </div>

            <div className="flex flex-col gap-2">
              <div className="border border-foreground/30">
                <FeatureGrid
                  title="Built for the terminal"
                  className="py-8 sm:py-8"
                  columns={3}
                  features={[
                    {
                      title: 'Composable',
                      description: 'Blocks assemble from the same primitives the components use.',
                    },
                    {
                      title: 'Theme-aware',
                      description: 'Tokens flip between light and dark with one `.dark` class.',
                    },
                    {
                      title: 'augmented-ui ready',
                      description: 'Tagged surfaces gain clipped corners once the stylesheet loads.',
                    },
                  ]}
                />
              </div>
              <LabelLink story="blocks-featuregrid--docs">
                FeatureGrid
              </LabelLink>
            </div>

            <div className="flex flex-col gap-2">
              <div className="border border-foreground/30 p-6">
                <SkillsList
                  title="Stack"
                  groups={[
                    {
                      title: 'Languages',
                      items: ['TypeScript', 'Rust', 'Python', 'Go'],
                    },
                    {
                      title: 'Frontend',
                      items: ['React', 'Astro', 'Tailwind CSS'],
                    },
                  ]}
                />
              </div>
              <LabelLink story="blocks-skillslist--docs">
                SkillsList
              </LabelLink>
            </div>

            <div className="flex flex-col gap-2">
              <div className="border border-foreground/30 p-6">
                <ProjectGrid className="md:grid-cols-3">
                  <ProjectCard
                    index={1}
                    title="Gaia"
                    description="AI-native conversational platform."
                    tags={['TypeScript', 'React']}
                    href="https://9aia.com"
                  />
                  <ProjectCard
                    index={2}
                    title="Handl"
                    description="Handle-semantics language."
                    tags={['Rust', 'CLI']}
                    links={[{ label: 'GitHub', href: '#' }]}
                  />
                  <ProjectCard
                    index={3}
                    title="m7tlab"
                    description="Experimental web lab."
                    tags={['Astro', 'Three.js']}
                    links={[{ label: 'GitHub', href: '#' }]}
                  />
                </ProjectGrid>
              </div>
              <LabelLink story="blocks-projectcard--docs">
                ProjectCard / ProjectGrid
              </LabelLink>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex justify-center border border-foreground bg-background p-6">
                <TestimonialCard
                  className="max-w-md"
                  quote="LFDS is the rare design system that commits to its bit — square corners, mono accents, orange on demand."
                  author="Ada Nakamura"
                  role="Design Engineer"
                  company="Hexlab"
                />
              </div>
              <LabelLink story="blocks-testimonial--docs">
                TestimonialCard
              </LabelLink>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex flex-col items-center gap-3 border border-foreground bg-background p-6">
                <PaletteDemo
                  trigger={open => (
                    <SearchBar
                      className="w-full max-w-md"
                      placeholder="Search pages…"
                      onOpen={open}
                    />
                  )}
                />
                <SearchBar
                  className="w-full max-w-md"
                  shortcut={null}
                  placeholder="Input mode…"
                  defaultValue="filter query"
                />
              </div>
              <LabelLink story="blocks-searchbar--docs">
                SearchBar
              </LabelLink>
              <span className="text-xs text-muted-foreground opacity-60">
                trigger mode opens a CommandPalette · input mode is a real field
              </span>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex justify-center border border-foreground bg-background p-6">
                <PaletteDemo
                  trigger={open => (
                    <Button variant="outline" size="sm" onClick={open}>
                      Open command palette
                    </Button>
                  )}
                />
              </div>
              <LabelLink story="blocks-commandpalette--docs">
                CommandPalette
              </LabelLink>
              <span className="text-xs text-muted-foreground opacity-60">
                dialog-based ⌘K palette — the button opens it
              </span>
            </div>

            <div className="flex flex-col gap-2">
              <div className="grid divide-y divide-foreground/30 border border-foreground/30 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
                <EmptySearch />
                <EmptyData />
                <EmptyError />
              </div>
              <LabelLink story="blocks-emptystate--docs">
                EmptyState presets
              </LabelLink>
              <span className="text-xs text-muted-foreground opacity-60">
                EmptySearch · EmptyData · EmptyError
              </span>
            </div>

            <div className="flex flex-col gap-2">
              <div className="grid divide-y divide-foreground/30 border border-foreground/30 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
                <ErrorPage404 className="min-h-0 gap-4 py-8 [&>div]:m-0 [&_h1]:text-5xl [&_h1_span]:text-base [&_p]:text-sm" />
                <ErrorPage500 className="min-h-0 gap-4 py-8 [&>div]:m-0 [&_h1]:text-5xl [&_h1_span]:text-base [&_p]:text-sm" />
                <ErrorPageMaintenance className="min-h-0 gap-4 py-8 [&>div]:m-0 [&_h1]:text-5xl [&_h1_span]:text-base [&_p]:text-sm" />
              </div>
              <LabelLink story="blocks-errorpagepresets--docs">
                ErrorPage presets
              </LabelLink>
              <span className="text-xs text-muted-foreground opacity-60">
                ErrorPage404 · ErrorPage500 · ErrorPageMaintenance (shrunk for the cell)
              </span>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex justify-center border border-foreground bg-background p-6">
                <ContactForm className="w-full max-w-md" />
              </div>
              <LabelLink story="blocks-contactform--docs">
                ContactForm
              </LabelLink>
            </div>

            <div className="flex flex-col gap-2">
              <div className="border border-foreground/30 bg-background p-6">
                <NewsletterSignup
                  title="Intercept the signal"
                  description="One dispatch per cycle — components, blocks and design-token drops."
                />
              </div>
              <LabelLink story="blocks-newslettersignup--docs">
                NewsletterSignup
              </LabelLink>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex justify-center border border-foreground bg-background p-6">
                <LoginForm className="w-full max-w-sm" />
              </div>
              <LabelLink story="blocks-loginform--docs">
                LoginForm
              </LabelLink>
            </div>

            <div className="flex flex-col gap-2">
              <div className="overflow-hidden border border-foreground/30 p-6">
                <ContactCTA
                  title="Connect with me now—Let's UDP or TCP."
                  className="mb-0"
                />
              </div>
              <LabelLink story="blocks-contactcta--docs">
                ContactCTA
              </LabelLink>
            </div>

            <div className="flex flex-col gap-2">
              <div className="border border-foreground/30">
                <SiteFooter
                  columns={[
                    {
                      title: 'Product',
                      links: [
                        { label: 'Components', href: '#' },
                        { label: 'Blocks', href: '#' },
                      ],
                    },
                  ]}
                  copyright="© LFDS"
                />
              </div>
              <LabelLink story="blocks-sitefooter--docs">
                SiteFooter
              </LabelLink>
            </div>
          </div>
        </section>
      </div>
    </div>
  ),
}
