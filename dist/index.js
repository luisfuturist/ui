import { jsx as t, jsxs as s } from "react/jsx-runtime";
import { Slot as c } from "@radix-ui/react-slot";
import "react";
import { clsx as l } from "clsx";
import { twMerge as m } from "tailwind-merge";
import { cva as p } from "class-variance-authority";
import * as n from "@radix-ui/react-dropdown-menu";
import f from "~icons/material-symbols/check";
import g from "~icons/material-symbols/chevron-right";
import v from "~icons/material-symbols/circle";
import { useTheme as b } from "next-themes";
import { Toaster as x } from "sonner";
function r(...e) {
  return m(l(e));
}
const w = p(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        // default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        // destructive:
        //   'bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
        // outline:
        //   'border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
        // secondary:
        //   'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        // ghost:
        //   'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
        // link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        // default: 'h-9 px-4 py-2 has-[>svg]:px-3',
        // sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
        // lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
        // icon: 'size-9',
      }
    },
    defaultVariants: {
      // variant: 'default',
      // size: 'default',
    }
  }
);
function R({
  className: e,
  variant: o,
  size: a,
  "data-augmented-ui": i,
  asChild: d = !1,
  ...u
}) {
  return /* @__PURE__ */ t(
    d ? c : "button",
    {
      "data-slot": "button",
      className: r(w({ variant: o, size: a, className: e })),
      "data-augmented-ui": i,
      ...u
    }
  );
}
function j({
  ...e
}) {
  return /* @__PURE__ */ t(n.Root, { "data-slot": "dropdown-menu", ...e });
}
function G({
  ...e
}) {
  return /* @__PURE__ */ t(n.Portal, { "data-slot": "dropdown-menu-portal", ...e });
}
function P({
  ...e
}) {
  return /* @__PURE__ */ t(
    n.Trigger,
    {
      "data-slot": "dropdown-menu-trigger",
      ...e
    }
  );
}
function L({
  className: e,
  sideOffset: o = 4,
  ...a
}) {
  return /* @__PURE__ */ t(n.Portal, { children: /* @__PURE__ */ t(
    n.Content,
    {
      "data-slot": "dropdown-menu-content",
      sideOffset: o,
      className: r(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto border p-1",
        e
      ),
      ...a
    }
  ) });
}
function V({
  ...e
}) {
  return /* @__PURE__ */ t(n.Group, { "data-slot": "dropdown-menu-group", ...e });
}
function B({
  className: e,
  inset: o,
  variant: a = "default",
  ...i
}) {
  return /* @__PURE__ */ t(
    n.Item,
    {
      "data-slot": "dropdown-menu-item",
      "data-inset": o,
      "data-variant": a,
      className: r(
        "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...i
    }
  );
}
function $({
  className: e,
  children: o,
  checked: a,
  ...i
}) {
  return /* @__PURE__ */ s(
    n.CheckboxItem,
    {
      "data-slot": "dropdown-menu-checkbox-item",
      className: r(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      checked: a,
      ...i,
      children: [
        /* @__PURE__ */ t("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ t(n.ItemIndicator, { children: /* @__PURE__ */ t(f, { className: "size-5" }) }) }),
        o
      ]
    }
  );
}
function q({
  ...e
}) {
  return /* @__PURE__ */ t(
    n.RadioGroup,
    {
      "data-slot": "dropdown-menu-radio-group",
      ...e
    }
  );
}
function A({
  className: e,
  children: o,
  ...a
}) {
  return /* @__PURE__ */ s(
    n.RadioItem,
    {
      "data-slot": "dropdown-menu-radio-item",
      className: r(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...a,
      children: [
        /* @__PURE__ */ t("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ t(n.ItemIndicator, { children: /* @__PURE__ */ t(v, { className: "size-2 fill-current" }) }) }),
        o
      ]
    }
  );
}
function E({
  className: e,
  inset: o,
  ...a
}) {
  return /* @__PURE__ */ t(
    n.Label,
    {
      "data-slot": "dropdown-menu-label",
      "data-inset": o,
      className: r(
        "px-2 py-1.5 text-sm font-medium data-[inset]:pl-8",
        e
      ),
      ...a
    }
  );
}
function F({
  className: e,
  ...o
}) {
  return /* @__PURE__ */ t(
    n.Separator,
    {
      "data-slot": "dropdown-menu-separator",
      className: r("bg-border -mx-1 my-1 h-px", e),
      ...o
    }
  );
}
function H({
  className: e,
  ...o
}) {
  return /* @__PURE__ */ t(
    "span",
    {
      "data-slot": "dropdown-menu-shortcut",
      className: r(
        "text-muted-foreground opacity-50 ml-auto text-xs tracking-widest",
        e
      ),
      ...o
    }
  );
}
function J({
  ...e
}) {
  return /* @__PURE__ */ t(n.Sub, { "data-slot": "dropdown-menu-sub", ...e });
}
function K({
  className: e,
  inset: o,
  children: a,
  ...i
}) {
  return /* @__PURE__ */ s(
    n.SubTrigger,
    {
      "data-slot": "dropdown-menu-sub-trigger",
      "data-inset": o,
      className: r(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex cursor-default items-center px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8",
        e
      ),
      ...i,
      children: [
        a,
        /* @__PURE__ */ t(g, { className: "ml-auto size-5" })
      ]
    }
  );
}
function O({
  className: e,
  ...o
}) {
  return /* @__PURE__ */ t(
    n.SubContent,
    {
      "data-slot": "dropdown-menu-sub-content",
      className: r(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-hidden border p-1",
        e
      ),
      ...o
    }
  );
}
function Q({ ...e }) {
  const { theme: o = "system" } = b();
  return /* @__PURE__ */ t(
    x,
    {
      theme: o,
      className: "toaster group",
      style: {
        "--normal-bg": "var(--popover)",
        "--normal-text": "var(--popover-foreground)",
        "--normal-border": "var(--border)",
        "--normal-border-radius": "0"
      },
      ...e
    }
  );
}
export {
  R as Button,
  j as DropdownMenu,
  $ as DropdownMenuCheckboxItem,
  L as DropdownMenuContent,
  V as DropdownMenuGroup,
  B as DropdownMenuItem,
  E as DropdownMenuLabel,
  G as DropdownMenuPortal,
  q as DropdownMenuRadioGroup,
  A as DropdownMenuRadioItem,
  F as DropdownMenuSeparator,
  H as DropdownMenuShortcut,
  J as DropdownMenuSub,
  O as DropdownMenuSubContent,
  K as DropdownMenuSubTrigger,
  P as DropdownMenuTrigger,
  Q as Toaster,
  w as buttonVariants,
  r as cn
};
