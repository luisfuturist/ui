import { cva } from 'class-variance-authority'

export const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*=\'size-\'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive',
  {
    variants: {
      // Standard shadcn variant union — also consumed by registry
      // components (calendar, pagination, alert-dialog, sidebar, combobox,
      // carousel, input-group…). Styles are mapped to LFDS tokens.
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        destructive: 'bg-destructive text-white hover:bg-destructive/90',
        // LFDS --border matches the background; use a solid foreground
        // border so the outline reads in both themes.
        outline:
          'border border-foreground bg-transparent hover:bg-primary hover:text-primary-foreground',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        // Accent (orange) hover matches the menu convention —
        // `focus:bg-accent` in dropdown-menu, menubar, navigation-menu.
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        // LFDS anchors run on the --link-primary tokens (styles/lfds.css):
        // --primary in both themes, black/white on hover.
        link: 'text-link-primary underline-offset-4 hover:text-link-primary-hover hover:underline',
        // The website's clipped-corner buttons (`NavbarMenu`,
        // `SettingsMenu`, `ContactCTA`, `DiscordUsernameButton`, logo):
        // the `.aug-button*` classes (styles/lfds.css) provide the
        // `--aug-*` custom properties; `Button` auto-applies
        // `data-augmented-ui="tr-clip bl-clip both"` for every
        // `augmented*` variant — pass the prop explicitly to override
        // the clip pattern. The bg/border/text utilities are the plain
        // square fallbacks shown when `augmented-ui`'s CSS isn't loaded.
        augmented: 'aug-button bg-background-secondary text-foreground',
        'augmented-outline':
          'aug-button-outline border border-foreground bg-transparent text-foreground hover:bg-accent hover:text-accent-foreground',
        'augmented-inverted': 'aug-button-inverted bg-foreground text-background',
      },
      // Text sizes step 7→8→9→10; `has-[>svg]` trims the horizontal
      // padding when an icon is present so icon+label buttons keep
      // balanced whitespace. `icon-*` sizes are the square icon-only
      // counterparts.
      size: {
        default: 'h-9 px-4 py-2 has-[>svg]:px-3',
        xs: 'h-7 gap-1 px-2 text-xs has-[>svg]:px-1.5',
        sm: 'h-8 gap-1.5 px-3 has-[>svg]:px-2.5',
        lg: 'h-10 px-6 has-[>svg]:px-4',
        icon: 'size-9',
        'icon-xs': 'size-7',
        'icon-sm': 'size-8',
        'icon-lg': 'size-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)
