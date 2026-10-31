import type { Meta, StoryObj } from '@storybook/react-vite'

import { PageHeader } from './docs/primitives'

const meta = {
  title: 'Design Tokens/Prose',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'LFDS preset for `@tailwindcss/typography` — the `.prose` class '
          + 'ships terminal-aesthetic typography for long-form content '
          + '(blog posts, docs, MD/Markdown output). Colors are wired '
          + 'through the plugin\'s `--tw-prose-*` custom properties to '
          + 'LFDS tokens, so light/dark flips automatically and '
          + '`prose-invert` stays consistent. Element chrome — `//` '
          + 'heading markers, dashed links, boxed code, bordered tables — '
          + 'is layered on top in `styles/lfds.css`.',
      },
    },
  },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const Article: Story = {
  render: () => (
    <div className="bg-background text-foreground">
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-10 px-6 py-12">
        <PageHeader eyebrow="Typography preset" title=".prose">
          <code className="font-mono">@tailwindcss/typography</code>
          {' '}
          themed with LFDS tokens — everything below renders with only
          {' '}
          <code className="font-mono">class=&quot;prose&quot;</code>
          {' '}
          on the wrapper.
        </PageHeader>

        <article className="prose">
          <h2>Boot sequence</h2>
          <p>
            Every phosphor terminal starts the same way: a flicker, a
            raster line sweeping down the tube, then a cursor blinking at
            {' '}
            <code>0x0000</code>
            . The
            {' '}
            <a href="#bios">BIOS handshake</a>
            {' '}
            negotiates beam intensity
            before the first glyph lands — saturate too early and the
            phosphor blooms, too late and the frame is lost.
          </p>
          <p>
            LFDS treats long-form text the same way. Tokens bind once,
            upstream, and every element below inherits the theme without
            re-negotiating colors per component.
          </p>

          <h3>Signal path</h3>
          <p>
            Content flows from the renderer through three stages. Each
            stage is idempotent, so the pipeline can replay a frame
            without side effects.
          </p>
          <ol>
            <li>Parse — Markdown to a typed document tree.</li>
            <li>Bind — resolve design tokens to concrete values.</li>
            <li>Rasterize — emit glyphs to the phosphor grid.</li>
          </ol>

          <h3>Scan budget</h3>
          <p>
            The electron beam has a fixed dwell budget per frame. Keep
            lines under
            {' '}
            <code>65ch</code>
            {' '}
            — the plugin enforces this as
            {' '}
            <code>max-width</code>
            {' '}
            — and the eye never has to re-scan a
            full-width line.
          </p>
          <ul>
            <li>Phosphor persistence: ~40ms green, ~90ms amber.</li>
            <li>Refresh: 60Hz interlaced, 30Hz effective.</li>
            <li>Beam current: bounded by the tube's aperture grille.</li>
          </ul>

          <h4>Dwell timing</h4>
          <p>
            Dwell time controls brightness per pixel. The driver exposes
            it as a single register:
          </p>
          <pre>
            <code>{`// phosphor/dwell.ts
export const DWELL_NS = 41_000

export function stroke(x: number, y: number, level: 0 | 1 | 2 | 3) {
  beam.moveTo(x, y)
  beam.hold(DWELL_NS * level)
}`}</code>
          </pre>
          <p>
            Inline references like
            {' '}
            <code>beam.hold()</code>
            {' '}
            render boxed —
            the border is structural chrome, not decoration.
          </p>

          <blockquote>
            <p>
              A terminal is not a metaphor for computing. It is the
              machine, at the speed of light on glass.
            </p>
          </blockquote>

          <h3>Character cells</h3>
          <p>
            The glyph ROM ships four cell formats; the font stack
            determines which renders.
          </p>
          <table>
            <thead>
              <tr>
                <th>Register</th>
                <th>Width</th>
                <th>Purpose</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>FONT_BANK</td>
                <td>2 bits</td>
                <td>Active glyph bank</td>
              </tr>
              <tr>
                <td>ATTR_FG</td>
                <td>4 bits</td>
                <td>Phosphor hue</td>
              </tr>
              <tr>
                <td>ATTR_BG</td>
                <td>4 bits</td>
                <td>Cell background</td>
              </tr>
              <tr>
                <td>ATTR_BLINK</td>
                <td>1 bit</td>
                <td>7.5Hz toggle</td>
              </tr>
            </tbody>
          </table>

          <p>
            A frame captured mid-refresh, scanlines visible between rows:
          </p>
          <img
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='640' height='200'%3E%3Crect width='640' height='200' fill='%23000'/%3E%3Cg fill='%23b3ffb3'%3E%3Crect y='0' width='640' height='2' opacity='.9'/%3E%3Crect y='8' width='640' height='2' opacity='.6'/%3E%3Crect y='16' width='640' height='2' opacity='.9'/%3E%3Crect y='24' width='640' height='2' opacity='.5'/%3E%3Crect y='32' width='640' height='2' opacity='.8'/%3E%3Crect y='40' width='640' height='2' opacity='.4'/%3E%3Crect y='48' width='640' height='2' opacity='.9'/%3E%3Crect y='56' width='640' height='2' opacity='.5'/%3E%3Crect y='64' width='640' height='2' opacity='.7'/%3E%3Crect y='72' width='640' height='2' opacity='.4'/%3E%3Crect y='80' width='640' height='2' opacity='.9'/%3E%3Crect y='88' width='640' height='2' opacity='.6'/%3E%3Crect y='96' width='640' height='2' opacity='.8'/%3E%3Crect y='104' width='640' height='2' opacity='.5'/%3E%3Crect y='112' width='640' height='2' opacity='.9'/%3E%3Crect y='120' width='640' height='2' opacity='.4'/%3E%3Crect y='128' width='640' height='2' opacity='.7'/%3E%3Crect y='136' width='640' height='2' opacity='.6'/%3E%3Crect y='144' width='640' height='2' opacity='.9'/%3E%3Crect y='152' width='640' height='2' opacity='.5'/%3E%3Crect y='160' width='640' height='2' opacity='.8'/%3E%3Crect y='168' width='640' height='2' opacity='.4'/%3E%3Crect y='176' width='640' height='2' opacity='.9'/%3E%3Crect y='184' width='640' height='2' opacity='.6'/%3E%3Crect y='192' width='640' height='2' opacity='.8'/%3E%3C/g%3E%3C/svg%3E"
            alt="CRT frame mid-refresh, green scanlines on black"
          />

          <hr />

          <h2>Shutdown</h2>
          <p>
            When the beam collapses to a point at the center of the tube,
            the phosphor holds the afterimage for a moment — then the
            glass is dark. Read the
            {' '}
            <a href="#postmortem">postmortem log</a>
            {' '}
            for what the
            frame buffer contained at power-off, or return to the
            {' '}
            <a href="#top">boot prompt</a>
            .
          </p>
        </article>
      </div>
    </div>
  ),
}
