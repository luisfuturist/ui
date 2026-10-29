import type { Meta, StoryObj } from '@storybook/react-vite'
import { Inbox } from 'lucide-react'

import { Badge } from './badge'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from './table'

const meta = {
  title: 'Components/Table',
  component: Table,
  parameters: {
    docs: {
      description: {
        component:
          'Semantic table primitives. `Table` wraps the `<table>` in '
          + 'an `overflow-x-auto` container. `TableRow` ships '
          + '`hover:bg-muted/50` and `data-[state=selected]` styling; '
          + 'stripes and alignment come from utility classes.',
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
} satisfies Meta<typeof Table>

export default meta
type Story = StoryObj<typeof meta>

const supplies = [
  { item: 'Compass', sku: 'SUP-001', stock: 42, price: '18.00' },
  { item: 'Signal flare', sku: 'SUP-014', stock: 130, price: '4.50' },
  { item: 'Dried rations', sku: 'SUP-027', stock: 860, price: '2.25' },
  { item: 'Insulated tarp', sku: 'SUP-033', stock: 74, price: '31.00' },
  { item: 'Star chart', sku: 'SUP-040', stock: 12, price: '9.75' },
]

export const Playground: Story = {
  render: () => (
    <div className="flex items-center justify-center p-8">
      <div className="w-full max-w-2xl">
        <Table>
          <TableCaption>Quartermaster inventory — Q3.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Item</TableHead>
              <TableHead>SKU</TableHead>
              <TableHead className="text-right">Stock</TableHead>
              <TableHead className="text-right">Unit price</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {supplies.map(row => (
              <TableRow key={row.sku}>
                <TableCell className="font-medium">{row.item}</TableCell>
                <TableCell>{row.sku}</TableCell>
                <TableCell className="text-right">{row.stock}</TableCell>
                <TableCell className="text-right">{row.price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={2}>Total units</TableCell>
              <TableCell className="text-right">1,118</TableCell>
              <TableCell />
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </div>
  ),
}

export const Striped: Story = {
  render: () => (
    <div className="flex items-center justify-center p-8">
      <div className="w-full max-w-2xl">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Item</TableHead>
              <TableHead>SKU</TableHead>
              <TableHead className="text-right">Stock</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="[&_tr:nth-child(odd)]:bg-muted/50">
            {supplies.map(row => (
              <TableRow key={row.sku} className="border-b-0 hover:bg-muted">
                <TableCell className="font-medium">{row.item}</TableCell>
                <TableCell>{row.sku}</TableCell>
                <TableCell className="text-right">{row.stock}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Striped rows are a `className` concern — '
          + '`[&_tr:nth-child(odd)]:bg-muted/50` on `TableBody` plus '
          + '`border-b-0` on the rows.',
      },
    },
  },
}

export const EmptyState: Story = {
  render: () => (
    <div className="flex items-center justify-center p-8">
      <div className="w-full max-w-2xl">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Item</TableHead>
              <TableHead>SKU</TableHead>
              <TableHead className="text-right">Stock</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="hover:bg-transparent">
              <TableCell colSpan={3}>
                <div className="flex flex-col items-center gap-2 py-10 text-muted-foreground">
                  <Inbox className="size-6" />
                  <p className="text-sm">
                    No supplies match this filter.
                  </p>
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Empty-state row: a single `colSpan` cell hosting centered '
          + 'placeholder content, with the row hover disabled.',
      },
    },
  },
}

export const WideTable: Story = {
  render: () => (
    <div className="flex items-center justify-center p-8">
      <div className="w-full max-w-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Checkpoint</TableHead>
              <TableHead className="whitespace-nowrap">Grid reference</TableHead>
              <TableHead className="text-right">Elevation (m)</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="w-96">Quartermaster notes</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {supplies.map((row, i) => (
              <TableRow key={row.sku}>
                <TableCell className="font-medium">
                  CP-{String(i + 1).padStart(3, '0')}
                </TableCell>
                <TableCell>{`N 48.${120 + i} / E 11.${340 + i}`}</TableCell>
                <TableCell className="text-right">{1200 + i * 130}</TableCell>
                <TableCell>
                  <Badge variant="outline">Open</Badge>
                </TableCell>
                <TableCell className="whitespace-normal">
                  Supplies restocked; markers repainted; snow poles
                  replaced along the eastern approach.
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Edge case: `TableCell` defaults to `whitespace-nowrap`, so '
          + 'wide content overflows the wrapper — the `Table` '
          + 'container scrolls horizontally.',
      },
    },
  },
}
