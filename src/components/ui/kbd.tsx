import { cn } from "cn"

function Kbd({ className, ...props }: React.ComponentProps<"kbd">) {
  return (
    <kbd
      data-slot="kbd"
      className={cn(
        "pointer-events-none inline-flex h-5 w-fit min-w-5 items-center justify-center gap-1 rounded-sm border border-foreground border-b-2 bg-background-secondary px-1 font-mono text-xs font-medium text-foreground select-none",
        "[&_svg:not([class*='size-'])]:size-3",
        // Highlighted items paint the accent surface — the keycap inverts
        // to match (cmdk `data-selected`, Radix/Base UI `data-highlighted`).
        "[[data-selected=true]_&]:border-accent [[data-selected=true]_&]:bg-accent-foreground [[data-selected=true]_&]:text-accent",
        "[[data-highlighted]_&]:border-accent [[data-highlighted]_&]:bg-accent-foreground [[data-highlighted]_&]:text-accent",
        // Inverted keycap on the inverted tooltip surface.
        "[[data-slot=tooltip-content]_&]:border-foreground [[data-slot=tooltip-content]_&]:bg-background [[data-slot=tooltip-content]_&]:text-foreground",
        className
      )}
      {...props}
    />
  )
}

function KbdGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <kbd
      data-slot="kbd-group"
      className={cn("inline-flex items-center gap-1", className)}
      {...props}
    />
  )
}

export { Kbd, KbdGroup }
