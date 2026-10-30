import { jsx as a, jsxs as l, Fragment as ue } from "react/jsx-runtime";
import { Slot as st } from "@radix-ui/react-slot";
import * as m from "react";
import { useMemo as lt } from "react";
import { clsx as dt } from "clsx";
import { twMerge as ct } from "tailwind-merge";
import { cva as T } from "class-variance-authority";
import { useTheme as ut } from "next-themes";
import { Toaster as mt } from "sonner";
import { cn as o } from "cn";
import F from "~icons/material-symbols/keyboard-arrow-down";
import { Accordion as U, AlertDialog as j, AspectRatio as ft, Avatar as me, Slot as P, Separator as gt, Checkbox as _e, Collapsible as fe, ScrollArea as q, Dialog as z, ContextMenu as C, Label as pt, HoverCard as Y, Menubar as _, NavigationMenu as R, Popover as W, Progress as Se, RadioGroup as ne, Select as M, Tooltip as $, Slider as X, Switch as Ie, Tabs as Q, Toggle as bt, ToggleGroup as Pe } from "radix-ui";
import O from "~icons/material-symbols/chevron-right";
import je from "~icons/material-symbols/more-horiz";
import Re from "~icons/material-symbols/chevron-left";
import { getDefaultClassNames as Ae, DayPicker as ht } from "react-day-picker";
import xt from "embla-carousel-react";
import vt from "~icons/material-symbols/arrow-back";
import wt from "~icons/material-symbols/arrow-forward";
import * as ge from "recharts";
import V from "~icons/material-symbols/check";
import { Combobox as y } from "@base-ui/react";
import Z from "~icons/material-symbols/close";
import { Command as G } from "cmdk";
import Ee from "~icons/material-symbols/search";
import pe from "~icons/material-symbols/circle";
import { Drawer as A } from "vaul";
import * as S from "@radix-ui/react-dropdown-menu";
import { FormProvider as Nt, Controller as yt, useFormContext as kt, useFormState as zt } from "react-hook-form";
import { OTPInput as Ct, OTPInputContext as _t } from "input-otp";
import St from "~icons/material-symbols/remove";
import It from "~icons/material-symbols/drag-indicator";
import * as be from "react-resizable-panels";
import Mt from "~icons/material-symbols/keyboard-arrow-up";
import Tt from "~icons/material-symbols/view-sidebar";
import Dt from "~icons/material-symbols/progress-activity";
import ie from "~icons/material-symbols/arrow-outward";
import Pt from "~icons/material-symbols/add";
import jt from "~icons/material-symbols/error";
import Rt from "~icons/material-symbols/inbox";
import At from "~icons/material-symbols/refresh";
import Et from "~icons/material-symbols/search-off";
import Ft from "~icons/material-symbols/check-circle";
import Gt from "~icons/material-symbols/send";
import $t from "~icons/material-symbols/trending-down";
import Lt from "~icons/material-symbols/trending-flat";
import Bt from "~icons/material-symbols/trending-up";
import Ot from "~icons/material-symbols/format-quote";
function h(...e) {
  return ct(dt(e));
}
const J = T(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      // Standard shadcn variant union — also consumed by registry
      // components (calendar, pagination, alert-dialog, sidebar, combobox,
      // carousel, input-group…). Styles are mapped to LFDS tokens.
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-white hover:bg-destructive/90",
        // LFDS --border matches the background; use a solid foreground
        // border so the outline reads in both themes.
        outline: "border border-foreground bg-transparent hover:bg-primary hover:text-primary-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        // Accent (orange) hover matches the menu convention —
        // `focus:bg-accent` in dropdown-menu, menubar, navigation-menu.
        ghost: "hover:bg-accent hover:text-accent-foreground",
        // LFDS anchors run on the --link-primary tokens (styles/lfds.css):
        // --primary in both themes, black/white on hover.
        link: "text-link-primary underline-offset-4 hover:text-link-primary-hover hover:underline",
        // The website's clipped-corner buttons (`NavbarMenu`,
        // `SettingsMenu`, `ContactCTA`, `DiscordUsernameButton`, logo):
        // the `.aug-button*` classes (styles/lfds.css) provide the
        // `--aug-*` custom properties; `Button` auto-applies
        // `data-augmented-ui="tr-clip bl-clip both"` for every
        // `augmented*` variant — pass the prop explicitly to override
        // the clip pattern. The bg/border/text utilities are the plain
        // square fallbacks shown when `augmented-ui`'s CSS isn't loaded.
        augmented: "aug-button bg-background-secondary text-foreground",
        "augmented-outline": "aug-button-outline border border-foreground bg-transparent text-foreground hover:bg-accent hover:text-accent-foreground",
        "augmented-inverted": "aug-button-inverted bg-foreground text-background"
      },
      // Text sizes step 7→8→9→10; `has-[>svg]` trims the horizontal
      // padding when an icon is present so icon+label buttons keep
      // balanced whitespace. `icon-*` sizes are the square icon-only
      // counterparts.
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        xs: "h-7 gap-1 px-2 text-xs has-[>svg]:px-1.5",
        sm: "h-8 gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 px-6 has-[>svg]:px-4",
        icon: "size-9",
        "icon-xs": "size-7",
        "icon-sm": "size-8",
        "icon-lg": "size-10",
        "icon-xl": "size-14"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function D({
  className: e,
  variant: t,
  size: r,
  "data-augmented-ui": n,
  asChild: i = !1,
  ...s
}) {
  const c = i ? st : "button", u = n ?? (t?.startsWith("augmented") ? "tr-clip bl-clip both" : void 0);
  return /* @__PURE__ */ a(
    c,
    {
      "data-slot": "button",
      className: h(J({ variant: t, size: r, className: e })),
      "data-augmented-ui": u,
      ...s
    }
  );
}
function ao({ toastOptions: e, ...t }) {
  const { theme: r = "system" } = ut();
  return /* @__PURE__ */ a(
    mt,
    {
      theme: r,
      toastOptions: {
        ...e,
        classNames: {
          // Square, flat chrome: drop sonner's drop shadow, LFDS focus
          // outline (sonner's focus ring is an rgba shadow).
          toast: "shadow-none! focus-visible:[outline:2px_solid_var(--accent)]",
          // Sonner hardcodes gray description text; use the surface fg,
          // dimmed via opacity instead of an alpha color.
          description: "text-popover-foreground! opacity-70",
          // Inverted-fg action / outlined cancel, squared, accent on hover.
          actionButton: "rounded-none! hover:bg-accent! hover:text-accent-foreground! focus-visible:[outline:2px_solid_var(--accent)]!",
          cancelButton: "rounded-none! border! border-current! bg-transparent! hover:bg-accent! hover:text-accent-foreground! focus-visible:[outline:2px_solid_var(--accent)]!",
          // Sonner's close button is a 50%-radius circle — square it.
          closeButton: "rounded-none! hover:border-accent! hover:bg-accent! hover:text-accent-foreground!",
          loader: "[&_.sonner-loading-bar]:rounded-none! [&_.sonner-loading-bar]:bg-foreground!",
          // Type colors apply even without `richColors` (which only swaps
          // the same CSS vars): colored border + icon, fg text.
          success: "border-green! [&_[data-icon]]:text-green",
          info: "border-blue! [&_[data-icon]]:text-blue",
          warning: "border-yellow! [&_[data-icon]]:text-yellow",
          error: "border-destructive! [&_[data-icon]]:text-destructive",
          ...e?.classNames
        }
      },
      className: "toaster group",
      style: {
        "--normal-bg": "var(--popover)",
        "--normal-text": "var(--popover-foreground)",
        "--normal-border": "var(--foreground)",
        // Sonner reads `--border-radius` (default 8px) for the toast
        // corners — the previous `--normal-border-radius` was a no-op.
        "--border-radius": "0",
        // Type palettes, applied to typed toasts when `richColors` is
        // enabled — keeps them on the LFDS palette instead of sonner's
        // pastel HSL ramps.
        "--success-bg": "var(--popover)",
        "--success-border": "var(--green)",
        "--success-text": "var(--popover-foreground)",
        "--info-bg": "var(--popover)",
        "--info-border": "var(--blue)",
        "--info-text": "var(--popover-foreground)",
        "--warning-bg": "var(--popover)",
        "--warning-border": "var(--yellow)",
        "--warning-text": "var(--popover-foreground)",
        "--error-bg": "var(--popover)",
        "--error-border": "var(--destructive)",
        "--error-text": "var(--popover-foreground)"
      },
      ...t
    }
  );
}
function ro({
  ...e
}) {
  return /* @__PURE__ */ a(U.Root, { "data-slot": "accordion", ...e });
}
function oo({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    U.Item,
    {
      "data-slot": "accordion-item",
      className: o("border-b last:border-b-0", e),
      ...t
    }
  );
}
function no({
  className: e,
  children: t,
  ...r
}) {
  return /* @__PURE__ */ a(U.Header, { className: "flex", children: /* @__PURE__ */ l(
    U.Trigger,
    {
      "data-slot": "accordion-trigger",
      className: o(
        "flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180",
        e
      ),
      ...r,
      children: [
        t,
        /* @__PURE__ */ a(F, { className: "pointer-events-none size-4 shrink-0 translate-y-0.5 text-muted-foreground transition-transform duration-200" })
      ]
    }
  ) });
}
function io({
  className: e,
  children: t,
  ...r
}) {
  return /* @__PURE__ */ a(
    U.Content,
    {
      "data-slot": "accordion-content",
      className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
      ...r,
      children: /* @__PURE__ */ a("div", { className: o("pt-0 pb-4", e), children: t })
    }
  );
}
const Vt = T(
  "aug-surface aug-surface-card relative grid w-full grid-cols-[0_1fr] items-start gap-y-0.5 rounded-lg px-4 py-3 text-sm has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] has-[>svg]:gap-x-3 [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current",
  {
    variants: {
      variant: {
        default: "bg-card text-card-foreground",
        destructive: "bg-card text-destructive *:data-[slot=alert-description]:text-destructive/90 [&>svg]:text-current"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function so({
  className: e,
  variant: t,
  ...r
}) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "alert",
      "data-augmented-ui": "tr-clip bl-clip both",
      role: "alert",
      className: o(Vt({ variant: t }), e),
      ...r
    }
  );
}
function lo({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "alert-title",
      className: o(
        "col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight",
        e
      ),
      ...t
    }
  );
}
function co({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "alert-description",
      className: o(
        "col-start-2 grid justify-items-start gap-1 text-sm text-muted-foreground [&_p]:leading-relaxed",
        e
      ),
      ...t
    }
  );
}
function uo({
  ...e
}) {
  return /* @__PURE__ */ a(j.Root, { "data-slot": "alert-dialog", ...e });
}
function mo({
  ...e
}) {
  return /* @__PURE__ */ a(j.Trigger, { "data-slot": "alert-dialog-trigger", ...e });
}
function Ht({
  ...e
}) {
  return /* @__PURE__ */ a(j.Portal, { "data-slot": "alert-dialog-portal", ...e });
}
function qt({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    j.Overlay,
    {
      "data-slot": "alert-dialog-overlay",
      className: o(
        "fixed inset-0 z-50 bg-black/50 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0",
        e
      ),
      ...t
    }
  );
}
function fo({
  className: e,
  size: t = "default",
  ...r
}) {
  return /* @__PURE__ */ l(Ht, { children: [
    /* @__PURE__ */ a(qt, {}),
    /* @__PURE__ */ a(
      j.Content,
      {
        "data-slot": "alert-dialog-content",
        "data-augmented-ui": "tr-clip bl-clip both",
        "data-size": t,
        className: o(
          "aug-surface aug-surface-bg aug-pos-fixed group/alert-dialog-content fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg bg-background p-6 duration-200 data-[size=sm]:max-w-xs data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 data-[size=default]:sm:max-w-lg",
          e
        ),
        ...r
      }
    )
  ] });
}
function go({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "alert-dialog-header",
      className: o(
        "grid grid-rows-[auto_1fr] place-items-center gap-1.5 text-center has-data-[slot=alert-dialog-media]:grid-rows-[auto_auto_1fr] has-data-[slot=alert-dialog-media]:gap-x-6 sm:group-data-[size=default]/alert-dialog-content:place-items-start sm:group-data-[size=default]/alert-dialog-content:text-left sm:group-data-[size=default]/alert-dialog-content:has-data-[slot=alert-dialog-media]:grid-rows-[auto_1fr]",
        e
      ),
      ...t
    }
  );
}
function po({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "alert-dialog-footer",
      className: o(
        "flex flex-col-reverse gap-2 group-data-[size=sm]/alert-dialog-content:grid group-data-[size=sm]/alert-dialog-content:grid-cols-2 sm:flex-row sm:justify-end",
        e
      ),
      ...t
    }
  );
}
function bo({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    j.Title,
    {
      "data-slot": "alert-dialog-title",
      className: o(
        "text-lg font-semibold sm:group-data-[size=default]/alert-dialog-content:group-has-data-[slot=alert-dialog-media]/alert-dialog-content:col-start-2",
        e
      ),
      ...t
    }
  );
}
function ho({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    j.Description,
    {
      "data-slot": "alert-dialog-description",
      className: o("text-sm text-muted-foreground", e),
      ...t
    }
  );
}
function xo({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "alert-dialog-media",
      className: o(
        "mb-2 inline-flex size-16 items-center justify-center rounded-md bg-muted sm:group-data-[size=default]/alert-dialog-content:row-span-2 *:[svg:not([class*='size-'])]:size-8",
        e
      ),
      ...t
    }
  );
}
function vo({
  className: e,
  variant: t = "default",
  size: r = "default",
  ...n
}) {
  return /* @__PURE__ */ a(D, { variant: t, size: r, asChild: !0, children: /* @__PURE__ */ a(
    j.Action,
    {
      "data-slot": "alert-dialog-action",
      className: o(e),
      ...n
    }
  ) });
}
function wo({
  className: e,
  variant: t = "outline",
  size: r = "default",
  ...n
}) {
  return /* @__PURE__ */ a(D, { variant: t, size: r, asChild: !0, children: /* @__PURE__ */ a(
    j.Cancel,
    {
      "data-slot": "alert-dialog-cancel",
      className: o(e),
      ...n
    }
  ) });
}
function No({
  ...e
}) {
  return /* @__PURE__ */ a(ft.Root, { "data-slot": "aspect-ratio", ...e });
}
function Kt({
  className: e,
  size: t = "default",
  ...r
}) {
  return /* @__PURE__ */ a(
    me.Root,
    {
      "data-slot": "avatar",
      "data-size": t,
      className: o(
        "group/avatar relative flex size-8 shrink-0 rounded-full select-none data-[size=lg]:size-10 data-[size=sm]:size-6",
        e
      ),
      ...r
    }
  );
}
function Ut({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    me.Image,
    {
      "data-slot": "avatar-image",
      className: o("aspect-square size-full rounded-full", e),
      ...t
    }
  );
}
function Wt({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    me.Fallback,
    {
      "data-slot": "avatar-fallback",
      className: o(
        "flex size-full items-center justify-center rounded-full bg-foreground text-sm font-medium text-background group-data-[size=sm]/avatar:text-xs",
        e
      ),
      ...t
    }
  );
}
function yo({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "span",
    {
      "data-slot": "avatar-badge",
      className: o(
        "absolute right-0 bottom-0 z-10 inline-flex items-center justify-center rounded-full bg-accent text-accent-foreground ring-2 ring-background select-none",
        "group-data-[size=sm]/avatar:size-2 group-data-[size=sm]/avatar:[&>svg]:hidden",
        "group-data-[size=default]/avatar:size-2.5 group-data-[size=default]/avatar:[&>svg]:size-2",
        "group-data-[size=lg]/avatar:size-3 group-data-[size=lg]/avatar:[&>svg]:size-2",
        e
      ),
      ...t
    }
  );
}
function ko({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "avatar-group",
      className: o(
        "group/avatar-group flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:ring-background",
        e
      ),
      ...t
    }
  );
}
function zo({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "avatar-group-count",
      className: o(
        "relative flex size-8 shrink-0 items-center justify-center rounded-full bg-foreground text-sm font-medium text-background ring-2 ring-background group-has-data-[size=lg]/avatar-group:size-10 group-has-data-[size=sm]/avatar-group:size-6 [&>svg]:size-4 group-has-data-[size=lg]/avatar-group:[&>svg]:size-5 group-has-data-[size=sm]/avatar-group:[&>svg]:size-3",
        e
      ),
      ...t
    }
  );
}
const Xt = T(
  "inline-flex w-fit shrink-0 items-center justify-center gap-1 overflow-hidden border border-transparent px-2 py-0.5 text-xs font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&>svg]:pointer-events-none [&>svg]:size-3",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
        secondary: "bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
        destructive: "bg-destructive text-white focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 [a&]:hover:bg-destructive/90",
        outline: "border-foreground text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
        ghost: "[a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
        link: "text-primary underline-offset-4 [a&]:hover:underline"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function Yt({
  className: e,
  variant: t = "default",
  asChild: r = !1,
  ...n
}) {
  const i = r ? P.Root : "span";
  return /* @__PURE__ */ a(
    i,
    {
      "data-slot": "badge",
      "data-variant": t,
      className: o(Xt({ variant: t }), e),
      ...n
    }
  );
}
function Co({ ...e }) {
  return /* @__PURE__ */ a("nav", { "aria-label": "breadcrumb", "data-slot": "breadcrumb", ...e });
}
function _o({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "ol",
    {
      "data-slot": "breadcrumb-list",
      className: o(
        "flex flex-wrap items-center gap-1.5 text-sm break-words text-muted-foreground sm:gap-2.5",
        e
      ),
      ...t
    }
  );
}
function So({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "li",
    {
      "data-slot": "breadcrumb-item",
      className: o("inline-flex items-center gap-1.5", e),
      ...t
    }
  );
}
function Io({
  asChild: e,
  className: t,
  ...r
}) {
  const n = e ? P.Root : "a";
  return /* @__PURE__ */ a(
    n,
    {
      "data-slot": "breadcrumb-link",
      className: o("transition-colors hover:text-foreground", t),
      ...r
    }
  );
}
function Mo({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "span",
    {
      "data-slot": "breadcrumb-page",
      role: "link",
      "aria-disabled": "true",
      "aria-current": "page",
      className: o("font-normal text-foreground", e),
      ...t
    }
  );
}
function To({
  children: e,
  className: t,
  ...r
}) {
  return /* @__PURE__ */ a(
    "li",
    {
      "data-slot": "breadcrumb-separator",
      role: "presentation",
      "aria-hidden": "true",
      className: o("[&>svg]:size-3.5", t),
      ...r,
      children: e ?? /* @__PURE__ */ a(O, {})
    }
  );
}
function Do({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ l(
    "span",
    {
      "data-slot": "breadcrumb-ellipsis",
      role: "presentation",
      "aria-hidden": "true",
      className: o("flex size-9 items-center justify-center", e),
      ...t,
      children: [
        /* @__PURE__ */ a(je, { className: "size-4" }),
        /* @__PURE__ */ a("span", { className: "sr-only", children: "More" })
      ]
    }
  );
}
function ee({
  className: e,
  orientation: t = "horizontal",
  decorative: r = !0,
  ...n
}) {
  return /* @__PURE__ */ a(
    gt.Root,
    {
      "data-slot": "separator",
      decorative: r,
      orientation: t,
      className: o(
        "shrink-0 bg-foreground data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        e
      ),
      ...n
    }
  );
}
const Jt = T(
  "flex w-fit items-stretch has-[>[data-slot=button-group]]:gap-2 [&>*]:focus-visible:relative [&>*]:focus-visible:z-10 has-[select[aria-hidden=true]:last-child]:[&>[data-slot=select-trigger]:last-of-type]:rounded-r-md [&>[data-slot=select-trigger]:not([class*='w-'])]:w-fit [&>input]:flex-1",
  {
    variants: {
      orientation: {
        horizontal: "[&>*:not(:first-child)]:rounded-l-none [&>*:not(:first-child)]:border-l-0 [&>*:not(:last-child)]:rounded-r-none",
        vertical: "flex-col [&>*:not(:first-child)]:rounded-t-none [&>*:not(:first-child)]:border-t-0 [&>*:not(:last-child)]:rounded-b-none"
      }
    },
    defaultVariants: {
      orientation: "horizontal"
    }
  }
);
function Po({
  className: e,
  orientation: t,
  ...r
}) {
  return /* @__PURE__ */ a(
    "div",
    {
      role: "group",
      "data-slot": "button-group",
      "data-orientation": t,
      className: o(Jt({ orientation: t }), e),
      ...r
    }
  );
}
function jo({
  className: e,
  asChild: t = !1,
  ...r
}) {
  const n = t ? P.Root : "div";
  return /* @__PURE__ */ a(
    n,
    {
      className: o(
        "flex items-center gap-2 rounded-md border border-foreground bg-card px-4 text-sm font-medium shadow-xs [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...r
    }
  );
}
function Ro({
  className: e,
  orientation: t = "vertical",
  ...r
}) {
  return /* @__PURE__ */ a(
    ee,
    {
      "data-slot": "button-group-separator",
      orientation: t,
      className: o(
        "relative m-0! self-stretch bg-foreground data-[orientation=vertical]:h-auto",
        e
      ),
      ...r
    }
  );
}
function Ao({
  className: e,
  classNames: t,
  showOutsideDays: r = !0,
  captionLayout: n = "label",
  buttonVariant: i = "ghost",
  formatters: s,
  components: c,
  ...u
}) {
  const d = Ae();
  return /* @__PURE__ */ a(
    ht,
    {
      showOutsideDays: r,
      className: o(
        "group/calendar bg-background p-3 [--cell-size:--spacing(8)] [[data-slot=card-content]_&]:bg-transparent [[data-slot=popover-content]_&]:bg-transparent",
        String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`,
        String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`,
        e
      ),
      captionLayout: n,
      formatters: {
        formatMonthDropdown: (f) => f.toLocaleString("default", { month: "short" }),
        ...s
      },
      classNames: {
        root: o("w-fit", d.root),
        months: o(
          "relative flex flex-col gap-4 md:flex-row",
          d.months
        ),
        month: o("flex w-full flex-col gap-4", d.month),
        nav: o(
          "absolute inset-x-0 top-0 flex w-full items-center justify-between gap-1",
          d.nav
        ),
        button_previous: o(
          J({ variant: i }),
          "size-(--cell-size) p-0 select-none aria-disabled:opacity-50",
          d.button_previous
        ),
        button_next: o(
          J({ variant: i }),
          "size-(--cell-size) p-0 select-none aria-disabled:opacity-50",
          d.button_next
        ),
        month_caption: o(
          "flex h-(--cell-size) w-full items-center justify-center px-(--cell-size)",
          d.month_caption
        ),
        dropdowns: o(
          "flex h-(--cell-size) w-full items-center justify-center gap-1.5 text-sm font-medium",
          d.dropdowns
        ),
        dropdown_root: o(
          "relative rounded-md border border-input shadow-xs has-focus:border-ring has-focus:ring-[3px] has-focus:ring-ring/50",
          d.dropdown_root
        ),
        dropdown: o(
          "absolute inset-0 bg-popover opacity-0",
          d.dropdown
        ),
        caption_label: o(
          "font-medium select-none",
          n === "label" ? "text-sm" : "flex h-8 items-center gap-1 rounded-md pr-1 pl-2 text-sm [&>svg]:size-3.5 [&>svg]:text-muted-foreground",
          d.caption_label
        ),
        month_grid: o("w-full border-collapse", d.month_grid),
        weekdays: o("flex", d.weekdays),
        weekday: o(
          "flex-1 rounded-md text-[0.8rem] font-normal text-muted-foreground select-none",
          d.weekday
        ),
        week: o("mt-2 flex w-full", d.week),
        week_number_header: o(
          "w-(--cell-size) select-none",
          d.week_number_header
        ),
        week_number: o(
          "text-[0.8rem] text-muted-foreground select-none",
          d.week_number
        ),
        day: o(
          "group/day relative aspect-square h-full w-full p-0 text-center select-none [&:last-child[data-selected=true]_button]:rounded-r-md",
          u.showWeekNumber ? "[&:nth-child(2)[data-selected=true]_button]:rounded-l-md" : "[&:first-child[data-selected=true]_button]:rounded-l-md",
          d.day
        ),
        range_start: o(
          "rounded-l-md bg-accent",
          d.range_start
        ),
        range_middle: o("rounded-none", d.range_middle),
        range_end: o("rounded-r-md bg-accent", d.range_end),
        today: o(
          "rounded-md bg-accent text-accent-foreground data-[selected=true]:rounded-none",
          d.today
        ),
        outside: o(
          "text-muted-foreground aria-selected:text-muted-foreground",
          d.outside
        ),
        disabled: o(
          "text-muted-foreground opacity-50",
          d.disabled
        ),
        hidden: o("invisible", d.hidden),
        ...t
      },
      components: {
        Root: ({ className: f, rootRef: g, ...v }) => /* @__PURE__ */ a(
          "div",
          {
            "data-slot": "calendar",
            ref: g,
            className: o(f),
            ...v
          }
        ),
        Chevron: ({ className: f, orientation: g, ...v }) => g === "left" ? /* @__PURE__ */ a(Re, { className: o("size-4", f), ...v }) : g === "right" ? /* @__PURE__ */ a(
          O,
          {
            className: o("size-4", f),
            ...v
          }
        ) : /* @__PURE__ */ a(F, { className: o("size-4", f), ...v }),
        DayButton: Qt,
        WeekNumber: ({ children: f, ...g }) => /* @__PURE__ */ a("td", { ...g, children: /* @__PURE__ */ a("div", { className: "flex size-(--cell-size) items-center justify-center text-center", children: f }) }),
        ...c
      },
      ...u
    }
  );
}
function Qt({
  className: e,
  day: t,
  modifiers: r,
  ...n
}) {
  const i = Ae(), s = m.useRef(null);
  return m.useEffect(() => {
    r.focused && s.current?.focus();
  }, [r.focused]), /* @__PURE__ */ a(
    D,
    {
      ref: s,
      variant: "ghost",
      size: "icon",
      "data-day": t.date.toLocaleDateString(),
      "data-selected-single": r.selected && !r.range_start && !r.range_end && !r.range_middle,
      "data-range-start": r.range_start,
      "data-range-end": r.range_end,
      "data-range-middle": r.range_middle,
      className: o(
        "flex aspect-square size-auto w-full min-w-(--cell-size) flex-col gap-1 leading-none font-normal group-data-[focused=true]/day:relative group-data-[focused=true]/day:z-10 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 data-[range-end=true]:rounded-md data-[range-end=true]:rounded-r-md data-[range-end=true]:bg-primary data-[range-end=true]:text-primary-foreground data-[range-middle=true]:rounded-none data-[range-middle=true]:bg-accent data-[range-middle=true]:text-accent-foreground data-[range-start=true]:rounded-md data-[range-start=true]:rounded-l-md data-[range-start=true]:bg-primary data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground hover:bg-foreground hover:text-background [&>span]:text-xs [&>span]:opacity-70",
        i.day,
        e
      ),
      ...n
    }
  );
}
function he({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "card",
      "data-augmented-ui": "tr-clip bl-clip both",
      className: o(
        "aug-surface aug-surface-card flex flex-col gap-6 rounded-xl bg-card py-6 text-card-foreground ",
        e
      ),
      ...t
    }
  );
}
function xe({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "card-header",
      className: o(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        e
      ),
      ...t
    }
  );
}
function ve({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "card-title",
      className: o("leading-none font-semibold", e),
      ...t
    }
  );
}
function we({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "card-description",
      className: o("text-sm text-muted-foreground", e),
      ...t
    }
  );
}
function Zt({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "card-action",
      className: o(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        e
      ),
      ...t
    }
  );
}
function Ne({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "card-content",
      className: o("px-6", e),
      ...t
    }
  );
}
function Fe({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "card-footer",
      className: o("flex items-center px-6 [.border-t]:pt-6", e),
      ...t
    }
  );
}
const Ge = m.createContext(null);
function te() {
  const e = m.useContext(Ge);
  if (!e)
    throw new Error("useCarousel must be used within a <Carousel />");
  return e;
}
function Eo({
  orientation: e = "horizontal",
  opts: t,
  setApi: r,
  plugins: n,
  className: i,
  children: s,
  ...c
}) {
  const [u, d] = xt(
    {
      ...t,
      axis: e === "horizontal" ? "x" : "y"
    },
    n
  ), [f, g] = m.useState(!1), [v, k] = m.useState(!1), p = m.useCallback((x) => {
    x && (g(x.canScrollPrev()), k(x.canScrollNext()));
  }, []), w = m.useCallback(() => {
    d?.scrollPrev();
  }, [d]), N = m.useCallback(() => {
    d?.scrollNext();
  }, [d]), b = m.useCallback(
    (x) => {
      x.key === "ArrowLeft" ? (x.preventDefault(), w()) : x.key === "ArrowRight" && (x.preventDefault(), N());
    },
    [w, N]
  );
  return m.useEffect(() => {
    !d || !r || r(d);
  }, [d, r]), m.useEffect(() => {
    if (d)
      return p(d), d.on("reInit", p), d.on("select", p), () => {
        d?.off("select", p);
      };
  }, [d, p]), /* @__PURE__ */ a(
    Ge.Provider,
    {
      value: {
        carouselRef: u,
        api: d,
        opts: t,
        orientation: e || (t?.axis === "y" ? "vertical" : "horizontal"),
        scrollPrev: w,
        scrollNext: N,
        canScrollPrev: f,
        canScrollNext: v
      },
      children: /* @__PURE__ */ a(
        "div",
        {
          onKeyDownCapture: b,
          className: o("relative", i),
          role: "region",
          "aria-roledescription": "carousel",
          "data-slot": "carousel",
          ...c,
          children: s
        }
      )
    }
  );
}
function Fo({ className: e, ...t }) {
  const { carouselRef: r, orientation: n } = te();
  return /* @__PURE__ */ a(
    "div",
    {
      ref: r,
      className: "overflow-hidden",
      "data-slot": "carousel-content",
      children: /* @__PURE__ */ a(
        "div",
        {
          className: o(
            "flex",
            n === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
            e
          ),
          ...t
        }
      )
    }
  );
}
function Go({ className: e, ...t }) {
  const { orientation: r } = te();
  return /* @__PURE__ */ a(
    "div",
    {
      role: "group",
      "aria-roledescription": "slide",
      "data-slot": "carousel-item",
      className: o(
        "min-w-0 shrink-0 grow-0 basis-full",
        r === "horizontal" ? "pl-4" : "pt-4",
        e
      ),
      ...t
    }
  );
}
function $o({
  className: e,
  variant: t = "outline",
  size: r = "icon",
  ...n
}) {
  const { orientation: i, scrollPrev: s, canScrollPrev: c } = te();
  return /* @__PURE__ */ l(
    D,
    {
      "data-slot": "carousel-previous",
      variant: t,
      size: r,
      className: o(
        "absolute size-8",
        i === "horizontal" ? "top-1/2 -left-12 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
        e
      ),
      disabled: !c,
      onClick: s,
      ...n,
      children: [
        /* @__PURE__ */ a(vt, {}),
        /* @__PURE__ */ a("span", { className: "sr-only", children: "Previous slide" })
      ]
    }
  );
}
function Lo({
  className: e,
  variant: t = "outline",
  size: r = "icon",
  ...n
}) {
  const { orientation: i, scrollNext: s, canScrollNext: c } = te();
  return /* @__PURE__ */ l(
    D,
    {
      "data-slot": "carousel-next",
      variant: t,
      size: r,
      className: o(
        "absolute size-8",
        i === "horizontal" ? "top-1/2 -right-12 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        e
      ),
      disabled: !c,
      onClick: s,
      ...n,
      children: [
        /* @__PURE__ */ a(wt, {}),
        /* @__PURE__ */ a("span", { className: "sr-only", children: "Next slide" })
      ]
    }
  );
}
const ea = { light: "", dark: ".dark" }, ta = { width: 320, height: 200 }, $e = m.createContext(null);
function Le() {
  const e = m.useContext($e);
  if (!e)
    throw new Error("useChart must be used within a <ChartContainer />");
  return e;
}
function Bo({
  id: e,
  className: t,
  children: r,
  config: n,
  initialDimension: i = ta,
  ...s
}) {
  const c = m.useId(), u = `chart-${e ?? c.replace(/:/g, "")}`;
  return /* @__PURE__ */ a($e.Provider, { value: { config: n }, children: /* @__PURE__ */ l(
    "div",
    {
      "data-slot": "chart",
      "data-chart": u,
      className: o(
        "flex aspect-video justify-center text-xs [&_.recharts-cartesian-axis-tick_text]:fill-card-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-card [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-card [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector]:outline-hidden [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-surface]:outline-hidden",
        t
      ),
      ...s,
      children: [
        /* @__PURE__ */ a(aa, { id: u, config: n }),
        /* @__PURE__ */ a(
          ge.ResponsiveContainer,
          {
            initialDimension: i,
            children: r
          }
        )
      ]
    }
  ) });
}
const aa = ({ id: e, config: t }) => {
  const r = Object.entries(t).filter(
    ([, n]) => n.theme ?? n.color
  );
  return r.length ? /* @__PURE__ */ a(
    "style",
    {
      dangerouslySetInnerHTML: {
        __html: Object.entries(ea).map(
          ([n, i]) => `
${i} [data-chart=${e}] {
${r.map(([s, c]) => {
            const u = c.theme?.[n] ?? c.color;
            return u ? `  --color-${s}: ${u};` : null;
          }).join(`
`)}
}
`
        ).join(`
`)
      }
    }
  ) : null;
}, Oo = ge.Tooltip;
function Vo({
  active: e,
  payload: t,
  className: r,
  indicator: n = "dot",
  hideLabel: i = !1,
  hideIndicator: s = !1,
  label: c,
  labelFormatter: u,
  labelClassName: d,
  formatter: f,
  color: g,
  nameKey: v,
  labelKey: k
}) {
  const { config: p } = Le(), w = m.useMemo(() => {
    if (i || !t?.length)
      return null;
    const [b] = t, x = `${k ?? b?.dataKey ?? b?.name ?? "value"}`, I = se(p, b, x), E = !k && typeof c == "string" ? p[c]?.label ?? c : I?.label;
    return u ? /* @__PURE__ */ a("div", { className: o("font-medium", d), children: u(E, t) }) : E ? /* @__PURE__ */ a("div", { className: o("font-medium", d), children: E }) : null;
  }, [
    c,
    u,
    t,
    i,
    d,
    p,
    k
  ]);
  if (!e || !t?.length)
    return null;
  const N = t.length === 1 && n !== "dot";
  return /* @__PURE__ */ l(
    "div",
    {
      className: o(
        "grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl",
        r
      ),
      children: [
        N ? null : w,
        /* @__PURE__ */ a("div", { className: "grid gap-1.5", children: t.filter((b) => b.type !== "none").map((b, x) => {
          const I = `${v ?? b.name ?? b.dataKey ?? "value"}`, E = se(p, b, I), Ce = g ?? b.payload?.fill ?? b.color;
          return /* @__PURE__ */ a(
            "div",
            {
              className: o(
                "flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-muted-foreground",
                n === "dot" && "items-center"
              ),
              children: f && b?.value !== void 0 && b.name ? f(b.value, b.name, b, x, b.payload) : /* @__PURE__ */ l(ue, { children: [
                E?.icon ? /* @__PURE__ */ a(E.icon, {}) : !s && /* @__PURE__ */ a(
                  "div",
                  {
                    className: o(
                      "shrink-0 border-(--color-border) bg-(--color-bg)",
                      {
                        "h-2.5 w-2.5": n === "dot",
                        "w-1": n === "line",
                        "w-0 border-[1.5px] border-dashed bg-transparent": n === "dashed",
                        "my-0.5": N && n === "dashed"
                      }
                    ),
                    style: {
                      "--color-bg": Ce,
                      "--color-border": Ce
                    }
                  }
                ),
                /* @__PURE__ */ l(
                  "div",
                  {
                    className: o(
                      "flex flex-1 justify-between leading-none",
                      N ? "items-end" : "items-center"
                    ),
                    children: [
                      /* @__PURE__ */ l("div", { className: "grid gap-1.5", children: [
                        N ? w : null,
                        /* @__PURE__ */ a("span", { className: "text-muted-foreground", children: E?.label ?? b.name })
                      ] }),
                      b.value != null && /* @__PURE__ */ a("span", { className: "font-mono font-medium text-foreground tabular-nums", children: typeof b.value == "number" ? b.value.toLocaleString() : String(b.value) })
                    ]
                  }
                )
              ] })
            },
            x
          );
        }) })
      ]
    }
  );
}
const Ho = ge.Legend;
function qo({
  className: e,
  hideIcon: t = !1,
  payload: r,
  verticalAlign: n = "bottom",
  nameKey: i
}) {
  const { config: s } = Le();
  return r?.length ? /* @__PURE__ */ a(
    "div",
    {
      className: o(
        "flex items-center justify-center gap-4",
        n === "top" ? "pb-3" : "pt-3",
        e
      ),
      children: r.filter((c) => c.type !== "none").map((c, u) => {
        const d = `${i ?? c.dataKey ?? "value"}`, f = se(s, c, d);
        return /* @__PURE__ */ l(
          "div",
          {
            className: o(
              "flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-muted-foreground"
            ),
            children: [
              f?.icon && !t ? /* @__PURE__ */ a(f.icon, {}) : /* @__PURE__ */ a(
                "div",
                {
                  className: "h-2 w-2 shrink-0",
                  style: {
                    backgroundColor: c.color
                  }
                }
              ),
              f?.label
            ]
          },
          u
        );
      })
    }
  ) : null;
}
function se(e, t, r) {
  if (typeof t != "object" || t === null)
    return;
  const n = "payload" in t && typeof t.payload == "object" && t.payload !== null ? t.payload : void 0;
  let i = r;
  return r in t && typeof t[r] == "string" ? i = t[r] : n && r in n && typeof n[r] == "string" && (i = n[r]), i in e ? e[i] : e[r];
}
function Ko({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    _e.Root,
    {
      "data-slot": "checkbox",
      className: o(
        "peer size-4 shrink-0 border border-input shadow-xs transition-shadow outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 data-[state=checked]:border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:bg-background dark:aria-invalid:ring-destructive/40 dark:data-[state=checked]:bg-primary",
        e
      ),
      ...t,
      children: /* @__PURE__ */ a(
        _e.Indicator,
        {
          "data-slot": "checkbox-indicator",
          className: "grid place-content-center text-current transition-none",
          children: /* @__PURE__ */ a(V, { className: "size-3.5" })
        }
      )
    }
  );
}
function Uo({
  ...e
}) {
  return /* @__PURE__ */ a(fe.Root, { "data-slot": "collapsible", ...e });
}
function Wo({
  ...e
}) {
  return /* @__PURE__ */ a(
    fe.CollapsibleTrigger,
    {
      "data-slot": "collapsible-trigger",
      ...e
    }
  );
}
function Xo({
  ...e
}) {
  return /* @__PURE__ */ a(
    fe.CollapsibleContent,
    {
      "data-slot": "collapsible-content",
      ...e
    }
  );
}
function L({ className: e, type: t, ...r }) {
  return /* @__PURE__ */ a(
    "input",
    {
      type: t,
      "data-slot": "input",
      className: o(
        "h-9 w-full min-w-0 rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none selection:bg-primary selection:text-primary-foreground file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:bg-background",
        "focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50",
        "aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40",
        e
      ),
      ...r
    }
  );
}
function Be({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "textarea",
    {
      "data-slot": "textarea",
      className: o(
        "flex field-sizing-content min-h-16 w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 md:text-sm dark:bg-background dark:aria-invalid:ring-destructive/40",
        e
      ),
      ...t
    }
  );
}
function Oe({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "input-group",
      role: "group",
      className: o(
        "group/input-group relative flex w-full items-center rounded-md border border-input shadow-xs transition-[color,box-shadow] outline-none dark:bg-background",
        "h-9 min-w-0 has-[>textarea]:h-auto",
        // Variants based on alignment.
        "has-[>[data-align=inline-start]]:[&>input]:pl-2",
        "has-[>[data-align=inline-end]]:[&>input]:pr-2",
        "has-[>[data-align=block-start]]:h-auto has-[>[data-align=block-start]]:flex-col has-[>[data-align=block-start]]:[&>input]:pb-3",
        "has-[>[data-align=block-end]]:h-auto has-[>[data-align=block-end]]:flex-col has-[>[data-align=block-end]]:[&>input]:pt-3",
        // Focus state.
        "has-[[data-slot=input-group-control]:focus-visible]:border-ring has-[[data-slot=input-group-control]:focus-visible]:ring-[3px] has-[[data-slot=input-group-control]:focus-visible]:ring-ring/50",
        // Error state.
        "has-[[data-slot][aria-invalid=true]]:border-destructive has-[[data-slot][aria-invalid=true]]:ring-destructive/20 dark:has-[[data-slot][aria-invalid=true]]:ring-destructive/40",
        e
      ),
      ...t
    }
  );
}
const ra = T(
  "flex h-auto cursor-text items-center justify-center gap-2 py-1.5 text-sm font-medium text-muted-foreground select-none group-data-[disabled=true]/input-group:opacity-50 [&>kbd]:rounded-sm [&>svg:not([class*='size-'])]:size-4",
  {
    variants: {
      align: {
        "inline-start": "order-first pl-3 has-[>button]:ml-[-0.45rem] has-[>kbd]:ml-[-0.35rem]",
        "inline-end": "order-last pr-3 has-[>button]:mr-[-0.45rem] has-[>kbd]:mr-[-0.35rem]",
        "block-start": "order-first w-full justify-start px-3 pt-3 group-has-[>input]/input-group:pt-2.5 [.border-b]:pb-3",
        "block-end": "order-last w-full justify-start px-3 pb-3 group-has-[>input]/input-group:pb-2.5 [.border-t]:pt-3"
      }
    },
    defaultVariants: {
      align: "inline-start"
    }
  }
);
function le({
  className: e,
  align: t = "inline-start",
  ...r
}) {
  return /* @__PURE__ */ a(
    "div",
    {
      role: "group",
      "data-slot": "input-group-addon",
      "data-align": t,
      className: o(ra({ align: t }), e),
      onClick: (n) => {
        n.target.closest("button") || n.currentTarget.parentElement?.querySelector("input")?.focus();
      },
      ...r
    }
  );
}
const oa = T(
  "flex items-center gap-2 text-sm shadow-none",
  {
    variants: {
      size: {
        xs: "h-6 gap-1 rounded-sm px-2 has-[>svg]:px-2 [&>svg:not([class*='size-'])]:size-3.5",
        sm: "h-8 gap-1.5 rounded-md px-2.5 has-[>svg]:px-2.5",
        "icon-xs": "size-6 rounded-sm p-0 has-[>svg]:p-0",
        "icon-sm": "size-8 p-0 has-[>svg]:p-0"
      }
    },
    defaultVariants: {
      size: "xs"
    }
  }
);
function Ve({
  className: e,
  type: t = "button",
  variant: r = "ghost",
  size: n = "xs",
  ...i
}) {
  return /* @__PURE__ */ a(
    D,
    {
      type: t,
      "data-size": n,
      variant: r,
      className: o(oa({ size: n }), e),
      ...i
    }
  );
}
function Yo({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "span",
    {
      className: o(
        "flex items-center gap-2 text-sm text-muted-foreground [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...t
    }
  );
}
function He({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    L,
    {
      "data-slot": "input-group-control",
      className: o(
        "flex-1 rounded-none border-0 bg-transparent shadow-none focus-visible:ring-0 dark:bg-transparent",
        e
      ),
      ...t
    }
  );
}
function Jo({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    Be,
    {
      "data-slot": "input-group-control",
      className: o(
        "flex-1 resize-none rounded-none border-0 bg-transparent py-3 shadow-none focus-visible:ring-0 dark:bg-transparent",
        e
      ),
      ...t
    }
  );
}
function H({
  className: e,
  children: t,
  ...r
}) {
  return /* @__PURE__ */ l(
    q.Root,
    {
      "data-slot": "scroll-area",
      className: o("relative", e),
      ...r,
      children: [
        /* @__PURE__ */ a(
          q.Viewport,
          {
            "data-slot": "scroll-area-viewport",
            className: "size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-1",
            children: t
          }
        ),
        /* @__PURE__ */ a(qe, {}),
        /* @__PURE__ */ a(q.Corner, {})
      ]
    }
  );
}
function qe({
  className: e,
  orientation: t = "vertical",
  ...r
}) {
  return /* @__PURE__ */ a(
    q.ScrollAreaScrollbar,
    {
      "data-slot": "scroll-area-scrollbar",
      orientation: t,
      className: o(
        "flex touch-none p-px transition-colors select-none",
        t === "vertical" && "h-full w-2.5 border-l border-l-transparent",
        t === "horizontal" && "h-2.5 flex-col border-t border-t-transparent",
        e
      ),
      ...r,
      children: /* @__PURE__ */ a(
        q.ScrollAreaThumb,
        {
          "data-slot": "scroll-area-thumb",
          className: "relative flex-1 bg-primary"
        }
      )
    }
  );
}
const Qo = y.Root;
function Zo({ ...e }) {
  return /* @__PURE__ */ a(y.Value, { "data-slot": "combobox-value", ...e });
}
function na({
  className: e,
  children: t,
  ...r
}) {
  return /* @__PURE__ */ l(
    y.Trigger,
    {
      "data-slot": "combobox-trigger",
      className: o("[&_svg:not([class*='size-'])]:size-4", e),
      ...r,
      children: [
        t,
        /* @__PURE__ */ a(
          F,
          {
            "data-slot": "combobox-trigger-icon",
            className: "pointer-events-none size-4 text-muted-foreground"
          }
        )
      ]
    }
  );
}
function ia({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    y.Clear,
    {
      "data-slot": "combobox-clear",
      render: /* @__PURE__ */ a(Ve, { variant: "ghost", size: "icon-xs" }),
      className: o(e),
      ...t,
      children: /* @__PURE__ */ a(Z, { className: "pointer-events-none" })
    }
  );
}
function en({
  className: e,
  children: t,
  disabled: r = !1,
  showTrigger: n = !0,
  showClear: i = !1,
  ...s
}) {
  return /* @__PURE__ */ l(Oe, { className: o("w-auto", e), children: [
    /* @__PURE__ */ a(
      y.Input,
      {
        render: /* @__PURE__ */ a(He, { disabled: r }),
        ...s
      }
    ),
    /* @__PURE__ */ l(le, { align: "inline-end", children: [
      n && /* @__PURE__ */ a(
        Ve,
        {
          size: "icon-xs",
          variant: "ghost",
          asChild: !0,
          "data-slot": "input-group-button",
          className: "group-has-data-[slot=combobox-clear]/input-group:hidden data-pressed:bg-transparent",
          disabled: r,
          children: /* @__PURE__ */ a(na, {})
        }
      ),
      i && /* @__PURE__ */ a(ia, { disabled: r })
    ] }),
    t
  ] });
}
function tn({
  className: e,
  side: t = "bottom",
  sideOffset: r = 6,
  align: n = "start",
  alignOffset: i = 0,
  anchor: s,
  ...c
}) {
  return /* @__PURE__ */ a(y.Portal, { children: /* @__PURE__ */ a(
    y.Positioner,
    {
      side: t,
      sideOffset: r,
      align: n,
      alignOffset: i,
      anchor: s,
      className: "isolate z-50",
      children: /* @__PURE__ */ a(
        y.Popup,
        {
          "data-slot": "combobox-content",
          "data-chips": !!s,
          className: o(
            "group/combobox-content relative max-h-96 w-(--anchor-width) max-w-(--available-width) min-w-[calc(var(--anchor-width)+--spacing(7))] origin-(--transform-origin) overflow-hidden rounded-md bg-popover text-popover-foreground duration-100 data-[chips=true]:min-w-(--anchor-width) data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 *:data-[slot=input-group]:m-1 *:data-[slot=input-group]:mb-0 *:data-[slot=input-group]:h-8 *:data-[slot=input-group]:-input/30 *:data-[slot=input-group]:bg-input/30 *:data-[slot=input-group]:-none data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95",
            e
          ),
          ...c
        }
      )
    }
  ) });
}
function an({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(H, { className: "max-h-[min(calc(--spacing(96)---spacing(9)),calc(var(--available-height)---spacing(9)))]", children: /* @__PURE__ */ a(
    y.List,
    {
      "data-slot": "combobox-list",
      className: o("p-1 data-empty:p-0", e),
      ...t
    }
  ) });
}
function rn({
  className: e,
  children: t,
  ...r
}) {
  return /* @__PURE__ */ l(
    y.Item,
    {
      "data-slot": "combobox-item",
      className: o(
        "relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...r,
      children: [
        t,
        /* @__PURE__ */ a(
          y.ItemIndicator,
          {
            "data-slot": "combobox-item-indicator",
            render: /* @__PURE__ */ a("span", { className: "pointer-events-none absolute right-2 flex size-4 items-center justify-center" }),
            children: /* @__PURE__ */ a(V, { className: "pointer-events-none size-4 pointer-coarse:size-5" })
          }
        )
      ]
    }
  );
}
function on({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    y.Group,
    {
      "data-slot": "combobox-group",
      className: o(e),
      ...t
    }
  );
}
function nn({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    y.GroupLabel,
    {
      "data-slot": "combobox-label",
      className: o(
        "px-2 py-1.5 text-xs text-muted-foreground pointer-coarse:px-3 pointer-coarse:py-2 pointer-coarse:text-sm",
        e
      ),
      ...t
    }
  );
}
function sn({ ...e }) {
  return /* @__PURE__ */ a(y.Collection, { "data-slot": "combobox-collection", ...e });
}
function ln({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    y.Empty,
    {
      "data-slot": "combobox-empty",
      className: o(
        "hidden w-full justify-center py-2 text-center text-sm text-muted-foreground group-data-empty/combobox-content:flex",
        e
      ),
      ...t
    }
  );
}
function dn({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    y.Separator,
    {
      "data-slot": "combobox-separator",
      className: o("-mx-1 my-1 h-px bg-foreground", e),
      ...t
    }
  );
}
function cn({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    y.Chips,
    {
      "data-slot": "combobox-chips",
      className: o(
        "flex min-h-9 flex-wrap items-center gap-1.5 rounded-md border border-input bg-transparent bg-clip-padding px-2.5 py-1.5 text-sm shadow-xs transition-[color,box-shadow] focus-within:border-ring focus-within:ring-[3px] focus-within:ring-ring/50 has-aria-invalid:border-destructive has-aria-invalid:ring-[3px] has-aria-invalid:ring-destructive/20 has-data-[slot=combobox-chip]:px-1.5 dark:bg-background dark:has-aria-invalid:border-destructive/50 dark:has-aria-invalid:ring-destructive/40",
        e
      ),
      ...t
    }
  );
}
function un({
  className: e,
  children: t,
  showRemove: r = !0,
  ...n
}) {
  return /* @__PURE__ */ l(
    y.Chip,
    {
      "data-slot": "combobox-chip",
      className: o(
        "flex h-[calc(--spacing(5.5))] w-fit items-center justify-center gap-1 rounded-sm bg-foreground px-1.5 text-xs font-medium whitespace-nowrap text-background has-disabled:pointer-events-none has-disabled:cursor-not-allowed has-disabled:opacity-50 has-data-[slot=combobox-chip-remove]:pr-0",
        e
      ),
      ...n,
      children: [
        t,
        r && /* @__PURE__ */ a(
          y.ChipRemove,
          {
            render: /* @__PURE__ */ a(D, { variant: "ghost", size: "icon-xs" }),
            className: "-ml-1 text-background/70 hover:bg-background/20 hover:text-background focus-visible:ring-background/60",
            "data-slot": "combobox-chip-remove",
            children: /* @__PURE__ */ a(Z, { className: "pointer-events-none" })
          }
        )
      ]
    }
  );
}
function mn({
  className: e,
  children: t,
  ...r
}) {
  return /* @__PURE__ */ a(
    y.Input,
    {
      "data-slot": "combobox-chip-input",
      className: o("min-w-16 flex-1 outline-none", e),
      ...r
    }
  );
}
function fn() {
  return m.useRef(null);
}
function B({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "kbd",
    {
      "data-slot": "kbd",
      className: o(
        "pointer-events-none inline-flex h-5 w-fit min-w-5 items-center justify-center gap-1 rounded-sm border border-foreground border-b-2 bg-background-secondary px-1 font-mono text-xs font-medium text-foreground select-none",
        "[&_svg:not([class*='size-'])]:size-3",
        // Highlighted items paint the accent surface — the keycap inverts
        // to match (cmdk `data-selected`, Radix/Base UI `data-highlighted`).
        "[[data-selected=true]_&]:border-accent-foreground [[data-selected=true]_&]:bg-accent [[data-selected=true]_&]:text-accent-foreground",
        "[[data-highlighted]_&]:border-accent-foreground [[data-highlighted]_&]:bg-accent [[data-highlighted]_&]:text-accent-foreground",
        // Inverted keycap on the inverted tooltip surface.
        "[[data-slot=tooltip-content]_&]:border-foreground [[data-slot=tooltip-content]_&]:bg-background [[data-slot=tooltip-content]_&]:text-foreground",
        e
      ),
      ...t
    }
  );
}
function gn({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "kbd",
    {
      "data-slot": "kbd-group",
      className: o("inline-flex items-center gap-1", e),
      ...t
    }
  );
}
function Ke({
  ...e
}) {
  return /* @__PURE__ */ a(z.Root, { "data-slot": "dialog", ...e });
}
function pn({
  ...e
}) {
  return /* @__PURE__ */ a(z.Trigger, { "data-slot": "dialog-trigger", ...e });
}
function sa({
  ...e
}) {
  return /* @__PURE__ */ a(z.Portal, { "data-slot": "dialog-portal", ...e });
}
function bn({
  ...e
}) {
  return /* @__PURE__ */ a(z.Close, { "data-slot": "dialog-close", ...e });
}
function la({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    z.Overlay,
    {
      "data-slot": "dialog-overlay",
      className: o(
        "fixed inset-0 z-50 bg-black/50 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0",
        e
      ),
      ...t
    }
  );
}
function Ue({
  className: e,
  children: t,
  showCloseButton: r = !0,
  augmented: n = !0,
  ...i
}) {
  return /* @__PURE__ */ l(sa, { "data-slot": "dialog-portal", children: [
    /* @__PURE__ */ a(la, {}),
    /* @__PURE__ */ l(
      z.Content,
      {
        "data-slot": "dialog-content",
        "data-augmented-ui": n ? "tr-clip bl-clip both" : void 0,
        className: o(
          "fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg bg-background p-6 duration-200 outline-none data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 sm:max-w-lg",
          n && "aug-surface aug-surface-bg aug-pos-fixed",
          e
        ),
        ...i,
        children: [
          t,
          r && /* @__PURE__ */ l(
            z.Close,
            {
              "data-slot": "dialog-close",
              className: "absolute top-4 right-4 rounded-xs opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
              children: [
                /* @__PURE__ */ a(Z, {}),
                /* @__PURE__ */ a("span", { className: "sr-only", children: "Close" })
              ]
            }
          )
        ]
      }
    )
  ] });
}
function We({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "dialog-header",
      className: o("flex flex-col gap-2 text-center sm:text-left", e),
      ...t
    }
  );
}
function hn({
  className: e,
  showCloseButton: t = !1,
  children: r,
  ...n
}) {
  return /* @__PURE__ */ l(
    "div",
    {
      "data-slot": "dialog-footer",
      className: o(
        "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
        e
      ),
      ...n,
      children: [
        r,
        t && /* @__PURE__ */ a(z.Close, { asChild: !0, children: /* @__PURE__ */ a(D, { variant: "outline", children: "Close" }) })
      ]
    }
  );
}
function Xe({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    z.Title,
    {
      "data-slot": "dialog-title",
      className: o("text-lg leading-none font-semibold", e),
      ...t
    }
  );
}
function Ye({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    z.Description,
    {
      "data-slot": "dialog-description",
      className: o("text-sm text-muted-foreground", e),
      ...t
    }
  );
}
function Je({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    G,
    {
      "data-slot": "command",
      className: o(
        "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
        e
      ),
      ...t
    }
  );
}
function xn({
  title: e = "Command Palette",
  description: t = "Search for a command to run...",
  children: r,
  className: n,
  showCloseButton: i = !0,
  ...s
}) {
  return /* @__PURE__ */ l(Ke, { ...s, children: [
    /* @__PURE__ */ l(We, { className: "sr-only", children: [
      /* @__PURE__ */ a(Xe, { children: e }),
      /* @__PURE__ */ a(Ye, { children: t })
    ] }),
    /* @__PURE__ */ a(
      Ue,
      {
        className: o("overflow-hidden p-0", n),
        showCloseButton: i,
        augmented: !1,
        children: /* @__PURE__ */ a(
          Je,
          {
            className: "**:data-[slot=command-input-wrapper]:h-12 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]]:px-2 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5",
            children: r
          }
        )
      }
    )
  ] });
}
function da({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ l(
    "div",
    {
      "data-slot": "command-input-wrapper",
      className: "flex h-9 items-center gap-2 border-b px-3",
      children: [
        /* @__PURE__ */ a(Ee, { className: "size-4 shrink-0" }),
        /* @__PURE__ */ a(
          G.Input,
          {
            "data-slot": "command-input",
            className: o(
              "flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-hidden placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
              e
            ),
            ...t
          }
        )
      ]
    }
  );
}
function ca({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(H, { className: "max-h-[300px]", children: /* @__PURE__ */ a(
    G.List,
    {
      "data-slot": "command-list",
      className: o("overflow-x-hidden", e),
      ...t
    }
  ) });
}
function ua({
  ...e
}) {
  return /* @__PURE__ */ a(
    G.Empty,
    {
      "data-slot": "command-empty",
      className: "py-6 text-center text-sm",
      ...e
    }
  );
}
function ma({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    G.Group,
    {
      "data-slot": "command-group",
      className: o(
        "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
        e
      ),
      ...t
    }
  );
}
function fa({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    G.Separator,
    {
      "data-slot": "command-separator",
      className: o("-mx-1 h-px bg-foreground", e),
      ...t
    }
  );
}
function ga({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    G.Item,
    {
      "data-slot": "command-item",
      className: o(
        "relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-current",
        e
      ),
      ...t
    }
  );
}
function pa({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    B,
    {
      "data-slot": "command-shortcut",
      className: o("ml-auto", e),
      ...t
    }
  );
}
function vn({
  ...e
}) {
  return /* @__PURE__ */ a(C.Root, { "data-slot": "context-menu", ...e });
}
function wn({
  ...e
}) {
  return /* @__PURE__ */ a(C.Trigger, { "data-slot": "context-menu-trigger", ...e });
}
function Nn({
  ...e
}) {
  return /* @__PURE__ */ a(C.Group, { "data-slot": "context-menu-group", ...e });
}
function yn({
  ...e
}) {
  return /* @__PURE__ */ a(C.Portal, { "data-slot": "context-menu-portal", ...e });
}
function kn({
  ...e
}) {
  return /* @__PURE__ */ a(C.Sub, { "data-slot": "context-menu-sub", ...e });
}
function zn({
  ...e
}) {
  return /* @__PURE__ */ a(
    C.RadioGroup,
    {
      "data-slot": "context-menu-radio-group",
      ...e
    }
  );
}
function Cn({
  className: e,
  inset: t,
  children: r,
  ...n
}) {
  return /* @__PURE__ */ l(
    C.SubTrigger,
    {
      "data-slot": "context-menu-sub-trigger",
      "data-inset": t,
      className: o(
        "flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-[inset]:pl-8 data-[state=open]:bg-accent data-[state=open]:text-accent-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-current",
        e
      ),
      ...n,
      children: [
        r,
        /* @__PURE__ */ a(O, { className: "ml-auto" })
      ]
    }
  );
}
function _n({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    C.SubContent,
    {
      "data-slot": "context-menu-sub-content",
      className: o(
        "z-50 min-w-[8rem] origin-(--radix-context-menu-content-transform-origin) overflow-hidden rounded-md bg-popover p-1 text-popover-foreground data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
        e
      ),
      ...t
    }
  );
}
function Sn({
  className: e,
  children: t,
  ...r
}) {
  return /* @__PURE__ */ a(C.Portal, { children: /* @__PURE__ */ a(
    C.Content,
    {
      "data-slot": "context-menu-content",
      className: o(
        "z-50 max-h-(--radix-context-menu-content-available-height) min-w-[8rem] origin-(--radix-context-menu-content-transform-origin) overflow-hidden rounded-md bg-popover text-popover-foreground data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
        e
      ),
      ...r,
      children: /* @__PURE__ */ a(H, { className: "max-h-(--radix-context-menu-content-available-height)", children: /* @__PURE__ */ a("div", { className: "p-1", children: t }) })
    }
  ) });
}
function In({
  className: e,
  inset: t,
  variant: r = "default",
  ...n
}) {
  return /* @__PURE__ */ a(
    C.Item,
    {
      "data-slot": "context-menu-item",
      "data-inset": t,
      "data-variant": r,
      className: o(
        "relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 data-[variant=destructive]:focus:text-destructive dark:data-[variant=destructive]:focus:bg-destructive/20 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-current data-[variant=destructive]:*:[svg]:text-destructive!",
        e
      ),
      ...n
    }
  );
}
function Mn({
  className: e,
  children: t,
  checked: r,
  ...n
}) {
  return /* @__PURE__ */ l(
    C.CheckboxItem,
    {
      "data-slot": "context-menu-checkbox-item",
      className: o(
        "relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      checked: r,
      ...n,
      children: [
        /* @__PURE__ */ a("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ a(C.ItemIndicator, { children: /* @__PURE__ */ a(V, { className: "size-4" }) }) }),
        t
      ]
    }
  );
}
function Tn({
  className: e,
  children: t,
  ...r
}) {
  return /* @__PURE__ */ l(
    C.RadioItem,
    {
      "data-slot": "context-menu-radio-item",
      className: o(
        "relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...r,
      children: [
        /* @__PURE__ */ a("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ a(C.ItemIndicator, { children: /* @__PURE__ */ a(pe, { className: "size-2 fill-current" }) }) }),
        t
      ]
    }
  );
}
function Dn({
  className: e,
  inset: t,
  ...r
}) {
  return /* @__PURE__ */ a(
    C.Label,
    {
      "data-slot": "context-menu-label",
      "data-inset": t,
      className: o(
        "px-2 py-1.5 text-sm font-medium text-foreground data-[inset]:pl-8",
        e
      ),
      ...r
    }
  );
}
function Pn({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    C.Separator,
    {
      "data-slot": "context-menu-separator",
      className: o("-mx-1 my-1 h-px bg-foreground", e),
      ...t
    }
  );
}
function jn({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    B,
    {
      "data-slot": "context-menu-shortcut",
      className: o("ml-auto", e),
      ...t
    }
  );
}
function Rn({
  ...e
}) {
  return /* @__PURE__ */ a(A.Root, { "data-slot": "drawer", ...e });
}
function An({
  ...e
}) {
  return /* @__PURE__ */ a(A.Trigger, { "data-slot": "drawer-trigger", ...e });
}
function ba({
  ...e
}) {
  return /* @__PURE__ */ a(A.Portal, { "data-slot": "drawer-portal", ...e });
}
function En({
  ...e
}) {
  return /* @__PURE__ */ a(A.Close, { "data-slot": "drawer-close", ...e });
}
function ha({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    A.Overlay,
    {
      "data-slot": "drawer-overlay",
      className: o(
        "fixed inset-0 z-50 bg-black/50 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0",
        e
      ),
      ...t
    }
  );
}
function Fn({
  className: e,
  children: t,
  ...r
}) {
  return /* @__PURE__ */ l(ba, { "data-slot": "drawer-portal", children: [
    /* @__PURE__ */ a(ha, {}),
    /* @__PURE__ */ l(
      A.Content,
      {
        "data-slot": "drawer-content",
        "data-augmented-ui": "tl-clip tr-clip bl-clip br-clip both",
        className: o(
          "aug-surface aug-surface-bg aug-pos-fixed aug-drawer group/drawer-content fixed z-50 flex h-auto flex-col bg-background",
          "data-[vaul-drawer-direction=top]:inset-x-0 data-[vaul-drawer-direction=top]:top-0 data-[vaul-drawer-direction=top]:mb-24 data-[vaul-drawer-direction=top]:max-h-[80vh] data-[vaul-drawer-direction=top]:rounded-b-lg ",
          "data-[vaul-drawer-direction=bottom]:inset-x-0 data-[vaul-drawer-direction=bottom]:bottom-0 data-[vaul-drawer-direction=bottom]:mt-24 data-[vaul-drawer-direction=bottom]:max-h-[80vh] data-[vaul-drawer-direction=bottom]:rounded-t-lg ",
          "data-[vaul-drawer-direction=right]:inset-y-0 data-[vaul-drawer-direction=right]:right-0 data-[vaul-drawer-direction=right]:w-3/4 data-[vaul-drawer-direction=right]:sm:max-w-sm",
          "data-[vaul-drawer-direction=left]:inset-y-0 data-[vaul-drawer-direction=left]:left-0 data-[vaul-drawer-direction=left]:w-3/4 data-[vaul-drawer-direction=left]:sm:max-w-sm",
          e
        ),
        ...r,
        children: [
          /* @__PURE__ */ a("div", { className: "mx-auto mt-4 hidden h-2 w-[100px] shrink-0 bg-muted group-data-[vaul-drawer-direction=bottom]/drawer-content:block" }),
          t
        ]
      }
    )
  ] });
}
function Gn({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "drawer-header",
      className: o(
        "flex flex-col gap-0.5 p-4 group-data-[vaul-drawer-direction=bottom]/drawer-content:text-center group-data-[vaul-drawer-direction=top]/drawer-content:text-center md:gap-1.5 md:text-left",
        e
      ),
      ...t
    }
  );
}
function $n({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "drawer-footer",
      className: o("mt-auto flex flex-col gap-2 p-4", e),
      ...t
    }
  );
}
function Ln({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    A.Title,
    {
      "data-slot": "drawer-title",
      className: o("font-semibold text-foreground", e),
      ...t
    }
  );
}
function Bn({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    A.Description,
    {
      "data-slot": "drawer-description",
      className: o("text-sm text-muted-foreground", e),
      ...t
    }
  );
}
function On({
  ...e
}) {
  return /* @__PURE__ */ a(S.Root, { "data-slot": "dropdown-menu", ...e });
}
function Vn({
  ...e
}) {
  return /* @__PURE__ */ a(S.Portal, { "data-slot": "dropdown-menu-portal", ...e });
}
function Hn({
  ...e
}) {
  return /* @__PURE__ */ a(
    S.Trigger,
    {
      "data-slot": "dropdown-menu-trigger",
      ...e
    }
  );
}
function qn({
  className: e,
  children: t,
  sideOffset: r = 4,
  ...n
}) {
  return /* @__PURE__ */ a(S.Portal, { children: /* @__PURE__ */ a(
    S.Content,
    {
      "data-slot": "dropdown-menu-content",
      sideOffset: r,
      className: h(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-hidden",
        e
      ),
      ...n,
      children: /* @__PURE__ */ a(H, { className: "max-h-(--radix-dropdown-menu-content-available-height)", children: /* @__PURE__ */ a("div", { className: "p-1", children: t }) })
    }
  ) });
}
function Kn({
  ...e
}) {
  return /* @__PURE__ */ a(S.Group, { "data-slot": "dropdown-menu-group", ...e });
}
function Un({
  className: e,
  inset: t,
  variant: r = "default",
  ...n
}) {
  return /* @__PURE__ */ a(
    S.Item,
    {
      "data-slot": "dropdown-menu-item",
      "data-inset": t,
      "data-variant": r,
      className: h(
        "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-current relative flex cursor-default items-center gap-2 px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...n
    }
  );
}
function Wn({
  className: e,
  children: t,
  checked: r,
  ...n
}) {
  return /* @__PURE__ */ l(
    S.CheckboxItem,
    {
      "data-slot": "dropdown-menu-checkbox-item",
      className: h(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      checked: r,
      ...n,
      children: [
        /* @__PURE__ */ a("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ a(S.ItemIndicator, { children: /* @__PURE__ */ a(V, { className: "size-5" }) }) }),
        t
      ]
    }
  );
}
function Xn({
  ...e
}) {
  return /* @__PURE__ */ a(
    S.RadioGroup,
    {
      "data-slot": "dropdown-menu-radio-group",
      ...e
    }
  );
}
function Yn({
  className: e,
  children: t,
  ...r
}) {
  return /* @__PURE__ */ l(
    S.RadioItem,
    {
      "data-slot": "dropdown-menu-radio-item",
      className: h(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...r,
      children: [
        /* @__PURE__ */ a("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ a(S.ItemIndicator, { children: /* @__PURE__ */ a(pe, { className: "size-2 fill-current" }) }) }),
        t
      ]
    }
  );
}
function Jn({
  className: e,
  inset: t,
  ...r
}) {
  return /* @__PURE__ */ a(
    S.Label,
    {
      "data-slot": "dropdown-menu-label",
      "data-inset": t,
      className: h(
        "px-2 py-1.5 text-sm font-medium data-[inset]:pl-8",
        e
      ),
      ...r
    }
  );
}
function Qn({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    S.Separator,
    {
      "data-slot": "dropdown-menu-separator",
      className: h("bg-foreground -mx-1 my-1 h-px", e),
      ...t
    }
  );
}
function Zn({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    B,
    {
      "data-slot": "dropdown-menu-shortcut",
      className: h("ml-auto", e),
      ...t
    }
  );
}
function ei({
  ...e
}) {
  return /* @__PURE__ */ a(S.Sub, { "data-slot": "dropdown-menu-sub", ...e });
}
function ti({
  className: e,
  inset: t,
  children: r,
  ...n
}) {
  return /* @__PURE__ */ l(
    S.SubTrigger,
    {
      "data-slot": "dropdown-menu-sub-trigger",
      "data-inset": t,
      className: h(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex cursor-default items-center gap-2 px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...n,
      children: [
        r,
        /* @__PURE__ */ a(O, { className: "ml-auto size-5" })
      ]
    }
  );
}
function ai({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    S.SubContent,
    {
      "data-slot": "dropdown-menu-sub-content",
      className: h(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-hidden p-1",
        e
      ),
      ...t
    }
  );
}
function xa({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "empty",
      className: o(
        "flex min-w-0 flex-1 flex-col items-center justify-center gap-6 rounded-lg border-dashed p-6 text-center text-balance md:p-12",
        e
      ),
      ...t
    }
  );
}
function va({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "empty-header",
      className: o(
        "flex max-w-sm flex-col items-center gap-2 text-center",
        e
      ),
      ...t
    }
  );
}
const wa = T(
  "mb-2 flex shrink-0 items-center justify-center [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        // Icon chip: same container language as `ItemMedia` — card
        // surface, foreground keyline, tr/bl corner clips — scaled up.
        icon: "flex size-10 shrink-0 items-center justify-center bg-card text-foreground [&_svg:not([class*='size-'])]:size-6"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function Na({
  className: e,
  variant: t = "default",
  ...r
}) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "empty-icon",
      "data-variant": t,
      className: o(wa({ variant: t, className: e })),
      ...r
    }
  );
}
function ya({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "empty-title",
      className: o("text-lg font-medium tracking-tight", e),
      ...t
    }
  );
}
function ka({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "empty-description",
      className: o(
        "text-sm/relaxed text-muted-foreground [&>a]:underline [&>a]:underline-offset-4 [&>a:hover]:text-primary",
        e
      ),
      ...t
    }
  );
}
function za({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "empty-content",
      className: o(
        "flex w-full max-w-sm min-w-0 flex-col items-center gap-4 text-sm text-balance",
        e
      ),
      ...t
    }
  );
}
function Qe({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    pt.Root,
    {
      "data-slot": "label",
      className: o(
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        e
      ),
      ...t
    }
  );
}
function ri({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "fieldset",
    {
      "data-slot": "field-set",
      className: o(
        "flex flex-col gap-6",
        "has-[>[data-slot=checkbox-group]]:gap-3 has-[>[data-slot=radio-group]]:gap-3",
        e
      ),
      ...t
    }
  );
}
function oi({
  className: e,
  variant: t = "legend",
  ...r
}) {
  return /* @__PURE__ */ a(
    "legend",
    {
      "data-slot": "field-legend",
      "data-variant": t,
      className: o(
        "mb-3 font-medium",
        "data-[variant=legend]:text-base",
        "data-[variant=label]:text-sm",
        e
      ),
      ...r
    }
  );
}
function Ze({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "field-group",
      className: o(
        "group/field-group @container/field-group flex w-full flex-col gap-7 data-[slot=checkbox-group]:gap-3 [&>[data-slot=field-group]]:gap-4",
        e
      ),
      ...t
    }
  );
}
const Ca = T(
  "group/field flex w-full gap-3 data-[invalid=true]:text-destructive",
  {
    variants: {
      orientation: {
        vertical: ["flex-col [&>*]:w-full [&>.sr-only]:w-auto"],
        horizontal: [
          "flex-row items-center",
          "[&>[data-slot=field-label]]:flex-auto",
          "has-[>[data-slot=field-content]]:items-start has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px"
        ],
        responsive: [
          "flex-col @md/field-group:flex-row @md/field-group:items-center [&>*]:w-full @md/field-group:[&>*]:w-auto [&>.sr-only]:w-auto",
          "@md/field-group:[&>[data-slot=field-label]]:flex-auto",
          "@md/field-group:has-[>[data-slot=field-content]]:items-start @md/field-group:has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px"
        ]
      }
    },
    defaultVariants: {
      orientation: "vertical"
    }
  }
);
function K({
  className: e,
  orientation: t = "vertical",
  ...r
}) {
  return /* @__PURE__ */ a(
    "div",
    {
      role: "group",
      "data-slot": "field",
      "data-orientation": t,
      className: o(Ca({ orientation: t }), e),
      ...r
    }
  );
}
function ni({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "field-content",
      className: o(
        "group/field-content flex flex-1 flex-col gap-1.5 leading-snug",
        e
      ),
      ...t
    }
  );
}
function de({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    Qe,
    {
      "data-slot": "field-label",
      className: o(
        "group/field-label peer/field-label flex w-fit gap-2 leading-snug group-data-[disabled=true]/field:opacity-50",
        "has-[>[data-slot=field]]:w-full has-[>[data-slot=field]]:flex-col has-[>[data-slot=field]]:rounded-md has-[>[data-slot=field]]:border [&>*]:data-[slot=field]:p-4",
        "has-data-[state=checked]:border-primary has-data-[state=checked]:bg-primary/5 dark:has-data-[state=checked]:bg-primary/10",
        e
      ),
      ...t
    }
  );
}
function ii({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "field-label",
      className: o(
        "flex w-fit items-center gap-2 text-sm leading-snug font-medium group-data-[disabled=true]/field:opacity-50",
        e
      ),
      ...t
    }
  );
}
function si({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "p",
    {
      "data-slot": "field-description",
      className: o(
        "text-sm leading-normal font-normal text-muted-foreground group-has-[[data-orientation=horizontal]]/field:text-balance",
        "last:mt-0 nth-last-2:-mt-1 [[data-variant=legend]+&]:-mt-1.5",
        "[&>a]:underline [&>a]:underline-offset-4 [&>a:hover]:text-primary",
        e
      ),
      ...t
    }
  );
}
function li({
  children: e,
  className: t,
  ...r
}) {
  return /* @__PURE__ */ l(
    "div",
    {
      "data-slot": "field-separator",
      "data-content": !!e,
      className: o(
        "relative -my-2 h-5 text-sm group-data-[variant=outline]/field-group:-mb-2",
        t
      ),
      ...r,
      children: [
        /* @__PURE__ */ a(ee, { className: "absolute inset-0 top-1/2" }),
        e && /* @__PURE__ */ a(
          "span",
          {
            className: "relative mx-auto block w-fit bg-background px-2 text-muted-foreground",
            "data-slot": "field-separator-content",
            children: e
          }
        )
      ]
    }
  );
}
function ce({
  className: e,
  children: t,
  errors: r,
  ...n
}) {
  const i = lt(() => {
    if (t)
      return t;
    if (!r?.length)
      return null;
    const s = [
      ...new Map(r.map((c) => [c?.message, c])).values()
    ];
    return s?.length == 1 ? s[0]?.message : /* @__PURE__ */ a("ul", { className: "ml-4 flex list-disc flex-col gap-1", children: s.map(
      (c, u) => c?.message && /* @__PURE__ */ a("li", { children: c.message }, u)
    ) });
  }, [t, r]);
  return i ? /* @__PURE__ */ a(
    "div",
    {
      role: "alert",
      "data-slot": "field-error",
      className: o("text-sm font-normal text-destructive", e),
      ...n,
      children: i
    }
  ) : null;
}
const di = Nt, et = m.createContext(
  {}
), ci = ({
  ...e
}) => /* @__PURE__ */ a(et.Provider, { value: { name: e.name }, children: /* @__PURE__ */ a(yt, { ...e }) }), ae = () => {
  const e = m.useContext(et), t = m.useContext(tt), { getFieldState: r } = kt(), n = zt({ name: e.name }), i = r(e.name, n);
  if (!e)
    throw new Error("useFormField should be used within <FormField>");
  const { id: s } = t;
  return {
    id: s,
    name: e.name,
    formItemId: `${s}-form-item`,
    formDescriptionId: `${s}-form-item-description`,
    formMessageId: `${s}-form-item-message`,
    ...i
  };
}, tt = m.createContext(
  {}
);
function ui({ className: e, ...t }) {
  const r = m.useId();
  return /* @__PURE__ */ a(tt.Provider, { value: { id: r }, children: /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "form-item",
      className: o("grid gap-2", e),
      ...t
    }
  ) });
}
function mi({
  className: e,
  ...t
}) {
  const { error: r, formItemId: n } = ae();
  return /* @__PURE__ */ a(
    Qe,
    {
      "data-slot": "form-label",
      "data-error": !!r,
      className: o("data-[error=true]:text-destructive", e),
      htmlFor: n,
      ...t
    }
  );
}
function fi({ ...e }) {
  const { error: t, formItemId: r, formDescriptionId: n, formMessageId: i } = ae();
  return /* @__PURE__ */ a(
    P.Root,
    {
      "data-slot": "form-control",
      id: r,
      "aria-describedby": t ? `${n} ${i}` : `${n}`,
      "aria-invalid": !!t,
      ...e
    }
  );
}
function gi({ className: e, ...t }) {
  const { formDescriptionId: r } = ae();
  return /* @__PURE__ */ a(
    "p",
    {
      "data-slot": "form-description",
      id: r,
      className: o("text-sm text-muted-foreground", e),
      ...t
    }
  );
}
function pi({ className: e, ...t }) {
  const { error: r, formMessageId: n } = ae(), i = r ? String(r?.message ?? "") : t.children;
  return i ? /* @__PURE__ */ a(
    "p",
    {
      "data-slot": "form-message",
      id: n,
      className: o("text-sm text-destructive", e),
      ...t,
      children: i
    }
  ) : null;
}
function bi({
  ...e
}) {
  return /* @__PURE__ */ a(Y.Root, { "data-slot": "hover-card", ...e });
}
function hi({
  ...e
}) {
  return /* @__PURE__ */ a(Y.Trigger, { "data-slot": "hover-card-trigger", ...e });
}
function xi({
  className: e,
  align: t = "center",
  sideOffset: r = 4,
  ...n
}) {
  return /* @__PURE__ */ a(Y.Portal, { "data-slot": "hover-card-portal", children: /* @__PURE__ */ a(
    Y.Content,
    {
      "data-slot": "hover-card-content",
      "data-augmented-ui": "tr-clip bl-clip both",
      align: t,
      sideOffset: r,
      className: o(
        "aug-surface aug-surface-sm z-50 w-64 origin-(--radix-hover-card-content-transform-origin) rounded-md bg-popover p-4 text-popover-foreground outline-hidden data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
        e
      ),
      ...n
    }
  ) });
}
function vi({
  className: e,
  containerClassName: t,
  ...r
}) {
  return /* @__PURE__ */ a(
    Ct,
    {
      "data-slot": "input-otp",
      containerClassName: o(
        "flex items-center gap-2 has-disabled:opacity-50",
        t
      ),
      className: o("disabled:cursor-not-allowed", e),
      ...r
    }
  );
}
function wi({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "input-otp-group",
      className: o("flex items-center", e),
      ...t
    }
  );
}
function Ni({
  index: e,
  className: t,
  ...r
}) {
  const n = m.useContext(_t), { char: i, hasFakeCaret: s, isActive: c } = n?.slots[e] ?? {};
  return /* @__PURE__ */ l(
    "div",
    {
      "data-slot": "input-otp-slot",
      "data-active": c,
      className: o(
        "relative flex h-9 w-9 items-center justify-center border-y border-r border-input text-sm shadow-xs transition-all outline-none first:rounded-l-md first:border-l last:rounded-r-md aria-invalid:border-destructive data-[active=true]:z-10 data-[active=true]:border-ring data-[active=true]:ring-[3px] data-[active=true]:ring-ring/50 data-[active=true]:aria-invalid:border-destructive data-[active=true]:aria-invalid:ring-destructive/20 dark:bg-background dark:data-[active=true]:aria-invalid:ring-destructive/40",
        t
      ),
      ...r,
      children: [
        i,
        s && /* @__PURE__ */ a("div", { className: "pointer-events-none absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ a("div", { className: "h-4 w-px animate-caret-blink bg-foreground duration-1000" }) })
      ]
    }
  );
}
function yi({ ...e }) {
  return /* @__PURE__ */ a("div", { "data-slot": "input-otp-separator", role: "separator", ...e, children: /* @__PURE__ */ a(St, {}) });
}
function ki({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      role: "list",
      "data-slot": "item-group",
      className: o("group/item-group flex flex-col", e),
      ...t
    }
  );
}
function zi({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    ee,
    {
      "data-slot": "item-separator",
      orientation: "horizontal",
      className: o("my-0", e),
      ...t
    }
  );
}
const _a = T(
  "group/item flex flex-wrap items-center rounded-md border border-transparent text-sm transition-colors duration-100 outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 [a]:transition-colors [a]:hover:bg-accent/50",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline: "border-border",
        muted: "bg-muted/50"
      },
      size: {
        default: "gap-4 p-4",
        sm: "gap-2.5 px-4 py-3"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function Ci({
  className: e,
  variant: t = "default",
  size: r = "default",
  asChild: n = !1,
  ...i
}) {
  const s = n ? P.Root : "div";
  return /* @__PURE__ */ a(
    s,
    {
      "data-slot": "item",
      "data-variant": t,
      "data-size": r,
      className: o(_a({ variant: t, size: r, className: e })),
      ...i
    }
  );
}
const Sa = T(
  "flex shrink-0 items-center justify-center gap-2 group-has-[[data-slot=item-description]]/item:translate-y-0.5 group-has-[[data-slot=item-description]]/item:self-start [&_svg]:pointer-events-none",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        // Icon chip: card surface + foreground keyline with the LFDS
        // signature tr/bl corner clips (same cut as `tr-clip bl-clip`
        // on augmented surfaces, done in pure CSS so it always renders).
        icon: "size-8 bg-card text-foreground [&_svg:not([class*='size-'])]:size-4",
        image: "size-10 overflow-hidden rounded-sm [&_img]:size-full [&_img]:object-cover"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function _i({
  className: e,
  variant: t = "default",
  ...r
}) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "item-media",
      "data-variant": t,
      className: o(Sa({ variant: t, className: e })),
      ...r
    }
  );
}
function Si({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "item-content",
      className: o(
        "flex flex-1 flex-col gap-1 [&+[data-slot=item-content]]:flex-none",
        e
      ),
      ...t
    }
  );
}
function Ii({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "item-title",
      className: o(
        "flex w-fit items-center gap-2 text-sm leading-snug font-medium",
        e
      ),
      ...t
    }
  );
}
function Mi({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "p",
    {
      "data-slot": "item-description",
      className: o(
        "line-clamp-2 text-sm leading-normal font-normal text-balance text-muted-foreground",
        "[&>a]:underline [&>a]:underline-offset-4 [&>a:hover]:text-primary",
        e
      ),
      ...t
    }
  );
}
function Ti({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "item-actions",
      className: o("flex items-center gap-2", e),
      ...t
    }
  );
}
function Di({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "item-header",
      className: o(
        "flex basis-full items-center justify-between gap-2",
        e
      ),
      ...t
    }
  );
}
function Pi({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "item-footer",
      className: o(
        "flex basis-full items-center justify-between gap-2",
        e
      ),
      ...t
    }
  );
}
function ji({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    _.Root,
    {
      "data-slot": "menubar",
      className: o(
        "flex h-9 items-center gap-1 rounded-md border bg-background p-1 shadow-xs",
        e
      ),
      ...t
    }
  );
}
function Ri({
  ...e
}) {
  return /* @__PURE__ */ a(_.Menu, { "data-slot": "menubar-menu", ...e });
}
function Ai({
  ...e
}) {
  return /* @__PURE__ */ a(_.Group, { "data-slot": "menubar-group", ...e });
}
function Ia({
  ...e
}) {
  return /* @__PURE__ */ a(_.Portal, { "data-slot": "menubar-portal", ...e });
}
function Ei({
  ...e
}) {
  return /* @__PURE__ */ a(_.RadioGroup, { "data-slot": "menubar-radio-group", ...e });
}
function Fi({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    _.Trigger,
    {
      "data-slot": "menubar-trigger",
      className: o(
        "flex items-center rounded-sm px-2 py-1 text-sm font-medium outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
        e
      ),
      ...t
    }
  );
}
function Gi({
  className: e,
  align: t = "start",
  alignOffset: r = -4,
  sideOffset: n = 8,
  ...i
}) {
  return /* @__PURE__ */ a(Ia, { children: /* @__PURE__ */ a(
    _.Content,
    {
      "data-slot": "menubar-content",
      align: t,
      alignOffset: r,
      sideOffset: n,
      className: o(
        "z-50 min-w-[12rem] origin-(--radix-menubar-content-transform-origin) overflow-hidden rounded-md bg-popover p-1 text-popover-foreground data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
        e
      ),
      ...i
    }
  ) });
}
function $i({
  className: e,
  inset: t,
  variant: r = "default",
  ...n
}) {
  return /* @__PURE__ */ a(
    _.Item,
    {
      "data-slot": "menubar-item",
      "data-inset": t,
      "data-variant": r,
      className: o(
        "relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 data-[variant=destructive]:focus:text-destructive dark:data-[variant=destructive]:focus:bg-destructive/20 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-current data-[variant=destructive]:*:[svg]:text-destructive!",
        e
      ),
      ...n
    }
  );
}
function Li({
  className: e,
  children: t,
  checked: r,
  ...n
}) {
  return /* @__PURE__ */ l(
    _.CheckboxItem,
    {
      "data-slot": "menubar-checkbox-item",
      className: o(
        "relative flex cursor-default items-center gap-2 rounded-xs py-1.5 pr-2 pl-8 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      checked: r,
      ...n,
      children: [
        /* @__PURE__ */ a("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ a(_.ItemIndicator, { children: /* @__PURE__ */ a(V, { className: "size-4" }) }) }),
        t
      ]
    }
  );
}
function Bi({
  className: e,
  children: t,
  ...r
}) {
  return /* @__PURE__ */ l(
    _.RadioItem,
    {
      "data-slot": "menubar-radio-item",
      className: o(
        "relative flex cursor-default items-center gap-2 rounded-xs py-1.5 pr-2 pl-8 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...r,
      children: [
        /* @__PURE__ */ a("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ a(_.ItemIndicator, { children: /* @__PURE__ */ a(pe, { className: "size-2 fill-current" }) }) }),
        t
      ]
    }
  );
}
function Oi({
  className: e,
  inset: t,
  ...r
}) {
  return /* @__PURE__ */ a(
    _.Label,
    {
      "data-slot": "menubar-label",
      "data-inset": t,
      className: o(
        "px-2 py-1.5 text-sm font-medium data-[inset]:pl-8",
        e
      ),
      ...r
    }
  );
}
function Vi({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    _.Separator,
    {
      "data-slot": "menubar-separator",
      className: o("-mx-1 my-1 h-px bg-foreground", e),
      ...t
    }
  );
}
function Hi({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    B,
    {
      "data-slot": "menubar-shortcut",
      className: o("ml-auto", e),
      ...t
    }
  );
}
function qi({
  ...e
}) {
  return /* @__PURE__ */ a(_.Sub, { "data-slot": "menubar-sub", ...e });
}
function Ki({
  className: e,
  inset: t,
  children: r,
  ...n
}) {
  return /* @__PURE__ */ l(
    _.SubTrigger,
    {
      "data-slot": "menubar-sub-trigger",
      "data-inset": t,
      className: o(
        "flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-none select-none focus:bg-accent focus:text-accent-foreground data-[inset]:pl-8 data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
        e
      ),
      ...n,
      children: [
        r,
        /* @__PURE__ */ a(O, { className: "ml-auto h-4 w-4" })
      ]
    }
  );
}
function Ui({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    _.SubContent,
    {
      "data-slot": "menubar-sub-content",
      className: o(
        "z-50 min-w-[8rem] origin-(--radix-menubar-content-transform-origin) overflow-hidden rounded-md bg-popover p-1 text-popover-foreground data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
        e
      ),
      ...t
    }
  );
}
function Wi({
  className: e,
  size: t = "default",
  ...r
}) {
  return /* @__PURE__ */ l(
    "div",
    {
      className: "group/native-select relative w-fit has-[select:disabled]:opacity-50",
      "data-slot": "native-select-wrapper",
      children: [
        /* @__PURE__ */ a(
          "select",
          {
            "data-slot": "native-select",
            "data-size": t,
            className: o(
              "h-9 w-full min-w-0 appearance-none rounded-md border border-input bg-transparent px-3 py-2 pr-9 text-sm shadow-xs transition-[color,box-shadow] outline-none selection:bg-primary selection:text-primary-foreground placeholder:text-muted-foreground disabled:pointer-events-none disabled:cursor-not-allowed data-[size=sm]:h-8 data-[size=sm]:py-1 dark:bg-background dark:hover:bg-input/50",
              "focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50",
              "aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40",
              e
            ),
            ...r
          }
        ),
        /* @__PURE__ */ a(
          F,
          {
            className: "pointer-events-none absolute top-1/2 right-3.5 size-4 -translate-y-1/2 text-muted-foreground opacity-50 select-none",
            "aria-hidden": "true",
            "data-slot": "native-select-icon"
          }
        )
      ]
    }
  );
}
function Xi({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    "option",
    {
      "data-slot": "native-select-option",
      className: o("bg-[Canvas] text-[CanvasText]", e),
      ...t
    }
  );
}
function Yi({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    "optgroup",
    {
      "data-slot": "native-select-optgroup",
      className: o("bg-[Canvas] text-[CanvasText]", e),
      ...t
    }
  );
}
function Ma({
  className: e,
  children: t,
  viewport: r = !0,
  ...n
}) {
  return /* @__PURE__ */ l(
    R.Root,
    {
      "data-slot": "navigation-menu",
      "data-viewport": r,
      className: o(
        "group/navigation-menu relative flex max-w-max flex-1 items-center justify-center",
        e
      ),
      ...n,
      children: [
        t,
        r && /* @__PURE__ */ a(Ra, {})
      ]
    }
  );
}
function Ta({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    R.List,
    {
      "data-slot": "navigation-menu-list",
      className: o(
        "group flex flex-1 list-none items-center justify-center gap-1",
        e
      ),
      ...t
    }
  );
}
function Da({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    R.Item,
    {
      "data-slot": "navigation-menu-item",
      className: o("relative", e),
      ...t
    }
  );
}
const at = T(
  "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-[color,box-shadow] outline-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=open]:bg-accent data-[state=open]:text-accent-foreground"
);
function Pa({
  className: e,
  children: t,
  ...r
}) {
  return /* @__PURE__ */ l(
    R.Trigger,
    {
      "data-slot": "navigation-menu-trigger",
      className: o(at(), "group", e),
      ...r,
      children: [
        t,
        " ",
        /* @__PURE__ */ a(
          F,
          {
            className: "relative top-[1px] ml-1 size-4 shrink-0 transition duration-300 group-data-[state=open]:rotate-180",
            "aria-hidden": "true"
          }
        )
      ]
    }
  );
}
function ja({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    R.Content,
    {
      "data-slot": "navigation-menu-content",
      className: o(
        "absolute top-0 left-0 w-full p-2 pr-2.5 data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 data-[motion^=from-]:animate-in data-[motion^=from-]:fade-in data-[motion^=to-]:animate-out data-[motion^=to-]:fade-out md:w-auto",
        "group-data-[viewport=false]/navigation-menu:top-full group-data-[viewport=false]/navigation-menu:mt-1.5 group-data-[viewport=false]/navigation-menu:overflow-hidden group-data-[viewport=false]/navigation-menu:rounded-md group-data-[viewport=false]/navigation-menu:bg-popover group-data-[viewport=false]/navigation-menu:text-popover-foreground group-data-[viewport=false]/navigation-menu:duration-200 **:data-[slot=navigation-menu-link]:focus:ring-0 **:data-[slot=navigation-menu-link]:focus:outline-none group-data-[viewport=false]/navigation-menu:data-[state=closed]:animate-out group-data-[viewport=false]/navigation-menu:data-[state=closed]:fade-out-0 group-data-[viewport=false]/navigation-menu:data-[state=closed]:zoom-out-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:animate-in group-data-[viewport=false]/navigation-menu:data-[state=open]:fade-in-0 group-data-[viewport=false]/navigation-menu:data-[state=open]:zoom-in-95",
        e
      ),
      ...t
    }
  );
}
function Ra({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    "div",
    {
      className: o(
        "absolute top-full left-0 isolate z-50 flex justify-center"
      ),
      children: /* @__PURE__ */ a(
        R.Viewport,
        {
          "data-slot": "navigation-menu-viewport",
          className: o(
            "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md bg-popover text-popover-foreground data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",
            e
          ),
          ...t
        }
      )
    }
  );
}
function Me({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    R.Link,
    {
      "data-slot": "navigation-menu-link",
      className: o(
        "flex flex-col gap-1 rounded-sm p-2 text-sm transition-all outline-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-1 data-[active=true]:bg-primary data-[active=true]:text-primary-foreground data-[active=true]:hover:bg-accent data-[active=true]:hover:text-accent-foreground data-[active=true]:focus:bg-accent [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-current",
        e
      ),
      ...t
    }
  );
}
function Ji({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    R.Indicator,
    {
      "data-slot": "navigation-menu-indicator",
      className: o(
        "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:animate-in data-[state=visible]:fade-in",
        e
      ),
      ...t,
      children: /* @__PURE__ */ a("div", { className: "relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-foreground" })
    }
  );
}
function Qi({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "nav",
    {
      role: "navigation",
      "aria-label": "pagination",
      "data-slot": "pagination",
      className: o("mx-auto flex w-full justify-center", e),
      ...t
    }
  );
}
function Zi({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    "ul",
    {
      "data-slot": "pagination-content",
      className: o("flex flex-row items-center gap-1", e),
      ...t
    }
  );
}
function es({ ...e }) {
  return /* @__PURE__ */ a("li", { "data-slot": "pagination-item", ...e });
}
function rt({
  className: e,
  isActive: t,
  size: r = "icon",
  ...n
}) {
  return /* @__PURE__ */ a(
    "a",
    {
      "aria-current": t ? "page" : void 0,
      "data-slot": "pagination-link",
      "data-active": t,
      className: o(
        J({
          variant: t ? "outline" : "ghost",
          size: r
        }),
        e
      ),
      ...n
    }
  );
}
function ts({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ l(
    rt,
    {
      "aria-label": "Go to previous page",
      size: "default",
      className: o("gap-1 px-2.5 sm:pl-2.5", e),
      ...t,
      children: [
        /* @__PURE__ */ a(Re, {}),
        /* @__PURE__ */ a("span", { className: "hidden sm:block", children: "Previous" })
      ]
    }
  );
}
function as({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ l(
    rt,
    {
      "aria-label": "Go to next page",
      size: "default",
      className: o("gap-1 px-2.5 sm:pr-2.5", e),
      ...t,
      children: [
        /* @__PURE__ */ a("span", { className: "hidden sm:block", children: "Next" }),
        /* @__PURE__ */ a(O, {})
      ]
    }
  );
}
function rs({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ l(
    "span",
    {
      "aria-hidden": !0,
      "data-slot": "pagination-ellipsis",
      className: o("flex size-9 items-center justify-center", e),
      ...t,
      children: [
        /* @__PURE__ */ a(je, { className: "size-4" }),
        /* @__PURE__ */ a("span", { className: "sr-only", children: "More pages" })
      ]
    }
  );
}
function os({
  ...e
}) {
  return /* @__PURE__ */ a(W.Root, { "data-slot": "popover", ...e });
}
function ns({
  ...e
}) {
  return /* @__PURE__ */ a(W.Trigger, { "data-slot": "popover-trigger", ...e });
}
function is({
  className: e,
  align: t = "center",
  sideOffset: r = 4,
  ...n
}) {
  return /* @__PURE__ */ a(W.Portal, { children: /* @__PURE__ */ a(
    W.Content,
    {
      "data-slot": "popover-content",
      "data-augmented-ui": "tr-clip bl-clip both",
      align: t,
      sideOffset: r,
      className: o(
        "aug-surface z-50 w-72 origin-(--radix-popover-content-transform-origin) rounded-md bg-popover p-4 text-popover-foreground outline-hidden data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
        e
      ),
      ...n
    }
  ) });
}
function ss({
  ...e
}) {
  return /* @__PURE__ */ a(W.Anchor, { "data-slot": "popover-anchor", ...e });
}
function ls({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "popover-header",
      className: o("flex flex-col gap-1 text-sm", e),
      ...t
    }
  );
}
function ds({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "popover-title",
      className: o("font-medium", e),
      ...t
    }
  );
}
function cs({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    "p",
    {
      "data-slot": "popover-description",
      className: o("text-muted-foreground", e),
      ...t
    }
  );
}
function us({
  className: e,
  value: t,
  ...r
}) {
  return /* @__PURE__ */ a(
    Se.Root,
    {
      "data-slot": "progress",
      className: o(
        "relative h-2 w-full overflow-hidden bg-primary/20",
        e
      ),
      ...r,
      children: /* @__PURE__ */ a(
        Se.Indicator,
        {
          "data-slot": "progress-indicator",
          className: o(
            "h-full w-full flex-1 bg-primary",
            t == null ? "origin-left animate-progress" : "transition-transform"
          ),
          style: t == null ? void 0 : { transform: `translateX(-${100 - (t || 0)}%)` }
        }
      )
    }
  );
}
function ms({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    ne.Root,
    {
      "data-slot": "radio-group",
      className: o("grid gap-3", e),
      ...t
    }
  );
}
function fs({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    ne.Item,
    {
      "data-slot": "radio-group-item",
      className: o(
        "aspect-square size-4 shrink-0 border border-input text-primary shadow-xs transition-[color,box-shadow] outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:bg-background dark:aria-invalid:ring-destructive/40",
        e
      ),
      ...t,
      children: /* @__PURE__ */ a(
        ne.Indicator,
        {
          "data-slot": "radio-group-indicator",
          className: "relative flex items-center justify-center",
          children: /* @__PURE__ */ a("span", { className: "absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2 bg-primary" })
        }
      )
    }
  );
}
function gs({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    be.Group,
    {
      "data-slot": "resizable-panel-group",
      className: o(
        "flex h-full w-full aria-[orientation=vertical]:flex-col",
        e
      ),
      ...t
    }
  );
}
function ps({ ...e }) {
  return /* @__PURE__ */ a(be.Panel, { "data-slot": "resizable-panel", ...e });
}
function bs({
  withHandle: e,
  className: t,
  ...r
}) {
  return /* @__PURE__ */ a(
    be.Separator,
    {
      "data-slot": "resizable-handle",
      className: o(
        "relative flex w-px items-center justify-center bg-foreground after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:outline-hidden aria-[orientation=horizontal]:h-px aria-[orientation=horizontal]:w-full aria-[orientation=horizontal]:after:left-0 aria-[orientation=horizontal]:after:h-1 aria-[orientation=horizontal]:after:w-full aria-[orientation=horizontal]:after:translate-x-0 aria-[orientation=horizontal]:after:-translate-y-1/2 [&[aria-orientation=horizontal]>div]:rotate-90",
        t
      ),
      ...r,
      children: e && /* @__PURE__ */ a("div", { className: "z-10 flex h-4 w-3 items-center justify-center rounded-xs border border-foreground bg-foreground text-background", children: /* @__PURE__ */ a(It, { className: "size-2.5" }) })
    }
  );
}
function hs({
  ...e
}) {
  return /* @__PURE__ */ a(M.Root, { "data-slot": "select", ...e });
}
function xs({
  ...e
}) {
  return /* @__PURE__ */ a(M.Group, { "data-slot": "select-group", ...e });
}
function vs({
  ...e
}) {
  return /* @__PURE__ */ a(M.Value, { "data-slot": "select-value", ...e });
}
function ws({
  className: e,
  size: t = "default",
  children: r,
  ...n
}) {
  return /* @__PURE__ */ l(
    M.Trigger,
    {
      "data-slot": "select-trigger",
      "data-size": t,
      className: o(
        "flex w-fit items-center justify-between gap-2 rounded-md border border-input bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 data-[placeholder]:text-muted-foreground data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 dark:bg-background dark:hover:bg-input/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground",
        e
      ),
      ...n,
      children: [
        r,
        /* @__PURE__ */ a(M.Icon, { asChild: !0, children: /* @__PURE__ */ a(F, { className: "size-4 opacity-50" }) })
      ]
    }
  );
}
function Ns({
  className: e,
  children: t,
  position: r = "popper",
  align: n = "center",
  ...i
}) {
  return /* @__PURE__ */ a(M.Portal, { children: /* @__PURE__ */ l(
    M.Content,
    {
      "data-slot": "select-content",
      className: o(
        "relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-hidden rounded-md bg-popover text-popover-foreground data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
        r === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        e
      ),
      position: r,
      align: n,
      ...i,
      children: [
        /* @__PURE__ */ a(Aa, {}),
        /* @__PURE__ */ a(
          M.Viewport,
          {
            className: o(
              "p-1",
              r === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"
            ),
            children: t
          }
        ),
        /* @__PURE__ */ a(Ea, {})
      ]
    }
  ) });
}
function ys({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    M.Label,
    {
      "data-slot": "select-label",
      className: o("px-2 py-1.5 text-xs text-muted-foreground", e),
      ...t
    }
  );
}
function ks({
  className: e,
  children: t,
  ...r
}) {
  return /* @__PURE__ */ l(
    M.Item,
    {
      "data-slot": "select-item",
      className: o(
        "relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-current *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        e
      ),
      ...r,
      children: [
        /* @__PURE__ */ a(
          "span",
          {
            "data-slot": "select-item-indicator",
            className: "absolute right-2 flex size-3.5 items-center justify-center",
            children: /* @__PURE__ */ a(M.ItemIndicator, { children: /* @__PURE__ */ a(V, { className: "size-4" }) })
          }
        ),
        /* @__PURE__ */ a(M.ItemText, { children: t })
      ]
    }
  );
}
function zs({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    M.Separator,
    {
      "data-slot": "select-separator",
      className: o("pointer-events-none -mx-1 my-1 h-px bg-foreground", e),
      ...t
    }
  );
}
function Aa({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    M.ScrollUpButton,
    {
      "data-slot": "select-scroll-up-button",
      className: o(
        "flex cursor-default items-center justify-center py-1",
        e
      ),
      ...t,
      children: /* @__PURE__ */ a(Mt, { className: "size-4" })
    }
  );
}
function Ea({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    M.ScrollDownButton,
    {
      "data-slot": "select-scroll-down-button",
      className: o(
        "flex cursor-default items-center justify-center py-1",
        e
      ),
      ...t,
      children: /* @__PURE__ */ a(F, { className: "size-4" })
    }
  );
}
function Fa({ ...e }) {
  return /* @__PURE__ */ a(z.Root, { "data-slot": "sheet", ...e });
}
function Cs({
  ...e
}) {
  return /* @__PURE__ */ a(z.Trigger, { "data-slot": "sheet-trigger", ...e });
}
function _s({
  ...e
}) {
  return /* @__PURE__ */ a(z.Close, { "data-slot": "sheet-close", ...e });
}
function Ga({
  ...e
}) {
  return /* @__PURE__ */ a(z.Portal, { "data-slot": "sheet-portal", ...e });
}
function $a({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    z.Overlay,
    {
      "data-slot": "sheet-overlay",
      className: o(
        "fixed inset-0 z-50 bg-black/50 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0",
        e
      ),
      ...t
    }
  );
}
const La = {
  right: "tl-clip bl-clip both",
  left: "tr-clip br-clip both",
  top: "bl-clip br-clip both",
  bottom: "tl-clip tr-clip both"
};
function Ba({
  className: e,
  children: t,
  side: r = "right",
  showCloseButton: n = !0,
  ...i
}) {
  return /* @__PURE__ */ l(Ga, { children: [
    /* @__PURE__ */ a($a, {}),
    /* @__PURE__ */ l(
      z.Content,
      {
        "data-slot": "sheet-content",
        "data-augmented-ui": La[r],
        className: o(
          "aug-surface aug-surface-bg aug-pos-fixed fixed z-50 flex flex-col gap-4 bg-background transition ease-in-out data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:animate-in data-[state=open]:duration-500",
          r === "right" && "inset-y-0 right-0 h-full w-3/4 data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm",
          r === "left" && "inset-y-0 left-0 h-full w-3/4 data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
          r === "top" && "inset-x-0 top-0 h-auto data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
          r === "bottom" && "inset-x-0 bottom-0 h-auto data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
          e
        ),
        ...i,
        children: [
          t,
          n && /* @__PURE__ */ l(z.Close, { className: "absolute top-4 right-4 rounded-xs opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none data-[state=open]:bg-secondary", children: [
            /* @__PURE__ */ a(Z, { className: "size-4" }),
            /* @__PURE__ */ a("span", { className: "sr-only", children: "Close" })
          ] })
        ]
      }
    )
  ] });
}
function Oa({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "sheet-header",
      className: o("flex flex-col gap-1.5 p-4", e),
      ...t
    }
  );
}
function Ss({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "sheet-footer",
      className: o("mt-auto flex flex-col gap-2 p-4", e),
      ...t
    }
  );
}
function Va({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    z.Title,
    {
      "data-slot": "sheet-title",
      className: o("font-semibold text-foreground", e),
      ...t
    }
  );
}
function Ha({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    z.Description,
    {
      "data-slot": "sheet-description",
      className: o("text-sm text-muted-foreground", e),
      ...t
    }
  );
}
const oe = 768;
function qa() {
  const [e, t] = m.useState(void 0);
  return m.useEffect(() => {
    const r = window.matchMedia(`(max-width: ${oe - 1}px)`), n = () => {
      t(window.innerWidth < oe);
    };
    return r.addEventListener("change", n), t(window.innerWidth < oe), () => r.removeEventListener("change", n);
  }, []), !!e;
}
function Te({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "skeleton",
      className: o("animate-pulse rounded-md bg-card", e),
      ...t
    }
  );
}
function Ka({
  delayDuration: e = 0,
  ...t
}) {
  return /* @__PURE__ */ a(
    $.Provider,
    {
      "data-slot": "tooltip-provider",
      delayDuration: e,
      ...t
    }
  );
}
function Ua({
  ...e
}) {
  return /* @__PURE__ */ a($.Root, { "data-slot": "tooltip", ...e });
}
function Wa({
  ...e
}) {
  return /* @__PURE__ */ a($.Trigger, { "data-slot": "tooltip-trigger", ...e });
}
function Xa({
  className: e,
  sideOffset: t = 0,
  children: r,
  ...n
}) {
  return /* @__PURE__ */ a($.Portal, { children: /* @__PURE__ */ l(
    $.Content,
    {
      "data-slot": "tooltip-content",
      sideOffset: t,
      className: o(
        "z-50 w-fit origin-(--radix-tooltip-content-transform-origin) animate-in rounded-md bg-foreground px-3 py-1.5 text-xs text-balance text-background fade-in-0 zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
        e
      ),
      ...n,
      children: [
        r,
        /* @__PURE__ */ a($.Arrow, { className: "z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 bg-foreground fill-foreground" })
      ]
    }
  ) });
}
const Ya = "sidebar_state", Ja = 3600 * 24 * 7, Qa = "16rem", Za = "18rem", er = "3rem", tr = "b", ot = m.createContext(null);
function re() {
  const e = m.useContext(ot);
  if (!e)
    throw new Error("useSidebar must be used within a SidebarProvider.");
  return e;
}
function Is({
  defaultOpen: e = !0,
  open: t,
  onOpenChange: r,
  className: n,
  style: i,
  children: s,
  ...c
}) {
  const u = qa(), [d, f] = m.useState(!1), [g, v] = m.useState(e), k = t ?? g, p = m.useCallback(
    (x) => {
      const I = typeof x == "function" ? x(k) : x;
      r ? r(I) : v(I), document.cookie = `${Ya}=${I}; path=/; max-age=${Ja}`;
    },
    [r, k]
  ), w = m.useCallback(() => u ? f((x) => !x) : p((x) => !x), [u, p, f]);
  m.useEffect(() => {
    const x = (I) => {
      I.key === tr && (I.metaKey || I.ctrlKey) && (I.preventDefault(), w());
    };
    return window.addEventListener("keydown", x), () => window.removeEventListener("keydown", x);
  }, [w]);
  const N = k ? "expanded" : "collapsed", b = m.useMemo(
    () => ({
      state: N,
      open: k,
      setOpen: p,
      isMobile: u,
      openMobile: d,
      setOpenMobile: f,
      toggleSidebar: w
    }),
    [N, k, p, u, d, f, w]
  );
  return /* @__PURE__ */ a(ot.Provider, { value: b, children: /* @__PURE__ */ a(Ka, { delayDuration: 0, children: /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "sidebar-wrapper",
      style: {
        "--sidebar-width": Qa,
        "--sidebar-width-icon": er,
        ...i
      },
      className: o(
        "group/sidebar-wrapper flex min-h-svh w-full has-data-[variant=inset]:bg-sidebar",
        n
      ),
      ...c,
      children: s
    }
  ) }) });
}
function Ms({
  side: e = "left",
  variant: t = "sidebar",
  collapsible: r = "offcanvas",
  className: n,
  children: i,
  ...s
}) {
  const { isMobile: c, state: u, openMobile: d, setOpenMobile: f } = re();
  return r === "none" ? /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "sidebar",
      className: o(
        "flex h-full w-(--sidebar-width) flex-col bg-sidebar text-sidebar-foreground",
        n
      ),
      ...s,
      children: i
    }
  ) : c ? /* @__PURE__ */ a(Fa, { open: d, onOpenChange: f, ...s, children: /* @__PURE__ */ l(
    Ba,
    {
      "data-sidebar": "sidebar",
      "data-slot": "sidebar",
      "data-mobile": "true",
      className: "w-(--sidebar-width) bg-sidebar p-0 text-sidebar-foreground [&>button]:hidden",
      style: {
        "--sidebar-width": Za
      },
      side: e,
      children: [
        /* @__PURE__ */ l(Oa, { className: "sr-only", children: [
          /* @__PURE__ */ a(Va, { children: "Sidebar" }),
          /* @__PURE__ */ a(Ha, { children: "Displays the mobile sidebar." })
        ] }),
        /* @__PURE__ */ a("div", { className: "flex h-full w-full flex-col", children: i })
      ]
    }
  ) }) : /* @__PURE__ */ l(
    "div",
    {
      className: "group peer hidden text-sidebar-foreground md:block",
      "data-state": u,
      "data-collapsible": u === "collapsed" ? r : "",
      "data-variant": t,
      "data-side": e,
      "data-slot": "sidebar",
      children: [
        /* @__PURE__ */ a(
          "div",
          {
            "data-slot": "sidebar-gap",
            className: o(
              "relative w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear",
              "group-data-[collapsible=offcanvas]:w-0",
              "group-data-[side=right]:rotate-180",
              t === "floating" || t === "inset" ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon)"
            )
          }
        ),
        /* @__PURE__ */ a(
          "div",
          {
            "data-slot": "sidebar-container",
            className: o(
              "fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear md:flex",
              e === "left" ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]" : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
              // Adjust the padding for floating and inset variants.
              t === "floating" || t === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=left]:border-sidebar-foreground group-data-[side=right]:border-l group-data-[side=right]:border-sidebar-foreground",
              n
            ),
            ...s,
            children: /* @__PURE__ */ a(
              "div",
              {
                "data-sidebar": "sidebar",
                "data-slot": "sidebar-inner",
                className: "flex h-full w-full flex-col bg-sidebar group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:border-sidebar-foreground",
                children: i
              }
            )
          }
        )
      ]
    }
  );
}
function Ts({
  className: e,
  onClick: t,
  ...r
}) {
  const { toggleSidebar: n } = re();
  return /* @__PURE__ */ l(
    D,
    {
      "data-sidebar": "trigger",
      "data-slot": "sidebar-trigger",
      variant: "ghost",
      size: "icon",
      className: o("size-7", e),
      onClick: (i) => {
        t?.(i), n();
      },
      ...r,
      children: [
        /* @__PURE__ */ a(Tt, {}),
        /* @__PURE__ */ a("span", { className: "sr-only", children: "Toggle Sidebar" })
      ]
    }
  );
}
function Ds({ className: e, ...t }) {
  const { toggleSidebar: r } = re();
  return /* @__PURE__ */ a(
    "button",
    {
      "data-sidebar": "rail",
      "data-slot": "sidebar-rail",
      "aria-label": "Toggle Sidebar",
      tabIndex: -1,
      onClick: r,
      title: "Toggle Sidebar",
      className: o(
        "absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear group-data-[side=left]:-right-4 group-data-[side=right]:left-0 after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] after:bg-muted hover:after:bg-sidebar-foreground sm:flex",
        "in-data-[side=left]:cursor-w-resize in-data-[side=right]:cursor-e-resize",
        "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize",
        "group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full hover:group-data-[collapsible=offcanvas]:bg-sidebar",
        "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2",
        "[[data-side=right][data-collapsible=offcanvas]_&]:-left-2",
        e
      ),
      ...t
    }
  );
}
function Ps({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "main",
    {
      "data-slot": "sidebar-inset",
      className: o(
        "relative flex w-full flex-1 flex-col bg-background",
        "md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow-sm md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2",
        e
      ),
      ...t
    }
  );
}
function js({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    L,
    {
      "data-slot": "sidebar-input",
      "data-sidebar": "input",
      className: o("h-8 w-full bg-background shadow-none", e),
      ...t
    }
  );
}
function Rs({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "sidebar-header",
      "data-sidebar": "header",
      className: o("flex flex-col gap-2 p-2", e),
      ...t
    }
  );
}
function As({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "sidebar-footer",
      "data-sidebar": "footer",
      className: o("flex flex-col gap-2 p-2", e),
      ...t
    }
  );
}
function Es({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    ee,
    {
      "data-slot": "sidebar-separator",
      "data-sidebar": "separator",
      className: o("mx-2 w-auto bg-sidebar-foreground", e),
      ...t
    }
  );
}
function Fs({
  className: e,
  children: t,
  ...r
}) {
  return /* @__PURE__ */ a(
    H,
    {
      "data-slot": "sidebar-content",
      "data-sidebar": "content",
      className: o(
        "min-h-0 flex-1 group-data-[collapsible=icon]:overflow-hidden",
        e
      ),
      ...r,
      children: /* @__PURE__ */ a("div", { className: "flex flex-col gap-2", children: t })
    }
  );
}
function Gs({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "sidebar-group",
      "data-sidebar": "group",
      className: o("relative flex w-full min-w-0 flex-col p-2", e),
      ...t
    }
  );
}
function $s({
  className: e,
  asChild: t = !1,
  ...r
}) {
  const n = t ? P.Root : "div";
  return /* @__PURE__ */ a(
    n,
    {
      "data-slot": "sidebar-group-label",
      "data-sidebar": "group-label",
      className: o(
        "flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium text-muted ring-sidebar-ring outline-hidden transition-[margin,opacity] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",
        e
      ),
      ...r
    }
  );
}
function Ls({
  className: e,
  asChild: t = !1,
  ...r
}) {
  const n = t ? P.Root : "button";
  return /* @__PURE__ */ a(
    n,
    {
      "data-slot": "sidebar-group-action",
      "data-sidebar": "group-action",
      className: o(
        "absolute top-3.5 right-3 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground ring-sidebar-ring outline-hidden transition-transform hover:text-black dark:hover:text-white focus-visible:bg-sidebar-accent focus-visible:text-sidebar-accent-foreground focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 md:after:hidden",
        "group-data-[collapsible=icon]:hidden",
        e
      ),
      ...r
    }
  );
}
function Bs({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "sidebar-group-content",
      "data-sidebar": "group-content",
      className: o("w-full text-sm", e),
      ...t
    }
  );
}
function Os({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "ul",
    {
      "data-slot": "sidebar-menu",
      "data-sidebar": "menu",
      className: o("flex w-full min-w-0 flex-col gap-1", e),
      ...t
    }
  );
}
function Vs({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "li",
    {
      "data-slot": "sidebar-menu-item",
      "data-sidebar": "menu-item",
      className: o("group/menu-item relative", e),
      ...t
    }
  );
}
const ar = T(
  "peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm ring-sidebar-ring outline-hidden transition-[width,height,padding] group-has-data-[sidebar=menu-action]/menu-item:pr-8 group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! hover:text-black dark:hover:text-white focus-visible:bg-sidebar-accent focus-visible:text-sidebar-accent-foreground focus-visible:ring-2 active:text-black dark:active:text-white disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "hover:bg-transparent",
        outline: "bg-background shadow-[0_0_0_1px_var(--sidebar-foreground)] hover:text-black dark:hover:text-white hover:shadow-[0_0_0_1px_var(--sidebar-foreground)]"
      },
      size: {
        default: "h-8 text-sm",
        sm: "h-7 text-xs",
        lg: "h-12 text-sm group-data-[collapsible=icon]:p-0!"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function Hs({
  asChild: e = !1,
  isActive: t = !1,
  variant: r = "default",
  size: n = "default",
  tooltip: i,
  className: s,
  ...c
}) {
  const u = e ? P.Root : "button", { isMobile: d, state: f } = re(), g = /* @__PURE__ */ a(
    u,
    {
      "data-slot": "sidebar-menu-button",
      "data-sidebar": "menu-button",
      "data-size": n,
      "data-active": t,
      className: o(ar({ variant: r, size: n }), s),
      ...c
    }
  );
  return i ? (typeof i == "string" && (i = {
    children: i
  }), /* @__PURE__ */ l(Ua, { children: [
    /* @__PURE__ */ a(Wa, { asChild: !0, children: g }),
    /* @__PURE__ */ a(
      Xa,
      {
        side: "right",
        align: "center",
        hidden: f !== "collapsed" || d,
        ...i
      }
    )
  ] })) : g;
}
function qs({
  className: e,
  asChild: t = !1,
  showOnHover: r = !1,
  ...n
}) {
  const i = t ? P.Root : "button";
  return /* @__PURE__ */ a(
    i,
    {
      "data-slot": "sidebar-menu-action",
      "data-sidebar": "menu-action",
      className: o(
        "absolute top-1.5 right-1 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground ring-sidebar-ring outline-hidden transition-transform peer-hover/menu-button:text-black dark:peer-hover/menu-button:text-white hover:text-black dark:hover:text-white focus-visible:bg-sidebar-accent focus-visible:text-sidebar-accent-foreground focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 md:after:hidden",
        "peer-data-[size=sm]/menu-button:top-1",
        "peer-data-[size=default]/menu-button:top-1.5",
        "peer-data-[size=lg]/menu-button:top-2.5",
        "group-data-[collapsible=icon]:hidden",
        r && "group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 peer-data-[active=true]/menu-button:text-sidebar-accent-foreground data-[state=open]:opacity-100 md:opacity-0",
        e
      ),
      ...n
    }
  );
}
function Ks({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "sidebar-menu-badge",
      "data-sidebar": "menu-badge",
      className: o(
        "pointer-events-none absolute right-1 flex h-5 min-w-5 items-center justify-center rounded-md px-1 text-xs font-medium text-sidebar-foreground tabular-nums select-none",
        "peer-hover/menu-button:text-black dark:peer-hover/menu-button:text-white peer-data-[active=true]/menu-button:text-sidebar-accent-foreground",
        "peer-data-[size=sm]/menu-button:top-1",
        "peer-data-[size=default]/menu-button:top-1.5",
        "peer-data-[size=lg]/menu-button:top-2.5",
        "group-data-[collapsible=icon]:hidden",
        e
      ),
      ...t
    }
  );
}
function Us({
  className: e,
  showIcon: t = !1,
  ...r
}) {
  const n = m.useMemo(() => `${Math.floor(Math.random() * 40) + 50}%`, []);
  return /* @__PURE__ */ l(
    "div",
    {
      "data-slot": "sidebar-menu-skeleton",
      "data-sidebar": "menu-skeleton",
      className: o("flex h-8 items-center gap-2 rounded-md px-2", e),
      ...r,
      children: [
        t && /* @__PURE__ */ a(
          Te,
          {
            className: "size-4 rounded-md",
            "data-sidebar": "menu-skeleton-icon"
          }
        ),
        /* @__PURE__ */ a(
          Te,
          {
            className: "h-4 max-w-(--skeleton-width) flex-1",
            "data-sidebar": "menu-skeleton-text",
            style: {
              "--skeleton-width": n
            }
          }
        )
      ]
    }
  );
}
function Ws({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "ul",
    {
      "data-slot": "sidebar-menu-sub",
      "data-sidebar": "menu-sub",
      className: o(
        "mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l border-sidebar-foreground px-2.5 py-0.5",
        "group-data-[collapsible=icon]:hidden",
        e
      ),
      ...t
    }
  );
}
function Xs({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    "li",
    {
      "data-slot": "sidebar-menu-sub-item",
      "data-sidebar": "menu-sub-item",
      className: o("group/menu-sub-item relative", e),
      ...t
    }
  );
}
function Ys({
  asChild: e = !1,
  size: t = "md",
  isActive: r = !1,
  className: n,
  ...i
}) {
  const s = e ? P.Root : "a";
  return /* @__PURE__ */ a(
    s,
    {
      "data-slot": "sidebar-menu-sub-button",
      "data-sidebar": "menu-sub-button",
      "data-size": t,
      "data-active": r,
      className: o(
        "flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 text-sidebar-foreground ring-sidebar-ring outline-hidden hover:text-black dark:hover:text-white focus-visible:bg-sidebar-accent focus-visible:text-sidebar-accent-foreground focus-visible:ring-2 active:text-black dark:active:text-white disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0 [&>svg]:text-current",
        "data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground",
        t === "sm" && "text-xs",
        t === "md" && "text-sm",
        "group-data-[collapsible=icon]:hidden",
        n
      ),
      ...i
    }
  );
}
function Js({
  className: e,
  defaultValue: t,
  value: r,
  min: n = 0,
  max: i = 100,
  ...s
}) {
  const c = m.useMemo(
    () => Array.isArray(r) ? r : Array.isArray(t) ? t : [n, i],
    [r, t, n, i]
  );
  return /* @__PURE__ */ l(
    X.Root,
    {
      "data-slot": "slider",
      defaultValue: t,
      value: r,
      min: n,
      max: i,
      className: o(
        "relative flex w-full touch-none items-center select-none data-[disabled]:opacity-50 data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col",
        e
      ),
      ...s,
      children: [
        /* @__PURE__ */ a(
          X.Track,
          {
            "data-slot": "slider-track",
            className: o(
              "relative grow overflow-hidden bg-muted data-[orientation=horizontal]:h-1.5 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1.5"
            ),
            children: /* @__PURE__ */ a(
              X.Range,
              {
                "data-slot": "slider-range",
                className: o(
                  "absolute bg-primary data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full"
                )
              }
            )
          }
        ),
        Array.from({ length: c.length }, (u, d) => /* @__PURE__ */ a(
          X.Thumb,
          {
            "data-slot": "slider-thumb",
            className: "block size-4 shrink-0 rounded-full border border-primary bg-white shadow-sm ring-ring/50 transition-[color,box-shadow] hover:ring-4 focus-visible:ring-4 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50"
          },
          d
        ))
      ]
    }
  );
}
function rr({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    Dt,
    {
      role: "status",
      "aria-label": "Loading",
      className: o("size-4 animate-spin text-primary", e),
      ...t
    }
  );
}
function Qs({
  className: e,
  size: t = "default",
  ...r
}) {
  return /* @__PURE__ */ a(
    Ie.Root,
    {
      "data-slot": "switch",
      "data-size": t,
      className: o(
        "peer group/switch inline-flex shrink-0 items-center border border-foreground p-0.5 transition-all outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-5 data-[size=default]:w-9 data-[size=sm]:h-4 data-[size=sm]:w-7 data-[state=checked]:bg-primary data-[state=unchecked]:bg-background",
        e
      ),
      ...r,
      children: /* @__PURE__ */ a(
        Ie.Thumb,
        {
          "data-slot": "switch-thumb",
          className: o(
            "pointer-events-none block h-full aspect-square bg-foreground ring-0 data-[state=checked]:bg-background transition-transform group-data-[size=default]/switch:data-[state=checked]:translate-x-4 group-data-[size=sm]/switch:data-[state=checked]:translate-x-3 data-[state=unchecked]:translate-x-0 dark:data-[state=unchecked]:bg-foreground"
          )
        }
      )
    }
  );
}
function Zs({ className: e, ...t }) {
  return /* @__PURE__ */ l(
    H,
    {
      "data-slot": "table-container",
      className: "relative w-full",
      children: [
        /* @__PURE__ */ a(
          "table",
          {
            "data-slot": "table",
            className: o("w-full caption-bottom text-sm", e),
            ...t
          }
        ),
        /* @__PURE__ */ a(qe, { orientation: "horizontal" })
      ]
    }
  );
}
function el({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "thead",
    {
      "data-slot": "table-header",
      className: o("[&_tr]:border-b", e),
      ...t
    }
  );
}
function tl({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "tbody",
    {
      "data-slot": "table-body",
      className: o("[&_tr:last-child]:border-0", e),
      ...t
    }
  );
}
function al({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "tfoot",
    {
      "data-slot": "table-footer",
      className: o(
        "border-t bg-card font-medium [&>tr]:last:border-b-0",
        e
      ),
      ...t
    }
  );
}
function rl({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "tr",
    {
      "data-slot": "table-row",
      className: o(
        "border-b transition-colors hover:bg-primary hover:text-background has-aria-expanded:bg-card data-[state=selected]:bg-card",
        e
      ),
      ...t
    }
  );
}
function ol({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "th",
    {
      "data-slot": "table-head",
      className: o(
        "h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        e
      ),
      ...t
    }
  );
}
function nl({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "td",
    {
      "data-slot": "table-cell",
      className: o(
        "p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        e
      ),
      ...t
    }
  );
}
function il({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    "caption",
    {
      "data-slot": "table-caption",
      className: o("mt-4 text-sm text-muted-foreground", e),
      ...t
    }
  );
}
function sl({
  className: e,
  orientation: t = "horizontal",
  ...r
}) {
  return /* @__PURE__ */ a(
    Q.Root,
    {
      "data-slot": "tabs",
      "data-orientation": t,
      orientation: t,
      className: o(
        "group/tabs flex gap-2 data-[orientation=horizontal]:flex-col",
        e
      ),
      ...r
    }
  );
}
const or = T(
  "group/tabs-list inline-flex w-fit items-center justify-center rounded-lg p-[3px] text-muted-foreground group-data-[orientation=horizontal]/tabs:h-9 group-data-[orientation=vertical]/tabs:h-fit group-data-[orientation=vertical]/tabs:flex-col data-[variant=line]:rounded-none",
  {
    variants: {
      variant: {
        default: "bg-card border border-foreground",
        line: "gap-1 bg-transparent"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function ll({
  className: e,
  variant: t = "default",
  ...r
}) {
  return /* @__PURE__ */ a(
    Q.List,
    {
      "data-slot": "tabs-list",
      "data-variant": t,
      className: o(or({ variant: t }), e),
      ...r
    }
  );
}
function dl({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    Q.Trigger,
    {
      "data-slot": "tabs-trigger",
      className: o(
        "relative inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap text-foreground transition-all group-data-[orientation=vertical]/tabs:w-full group-data-[orientation=vertical]/tabs:justify-start hover:text-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-1 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-50 group-data-[variant=default]/tabs-list:data-[state=active]:shadow-sm group-data-[variant=line]/tabs-list:data-[state=active]:shadow-none dark:text-muted-foreground dark:hover:text-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        "group-data-[variant=line]/tabs-list:bg-transparent group-data-[variant=line]/tabs-list:data-[state=active]:bg-transparent group-data-[variant=line]/tabs-list:data-[state=active]:text-foreground dark:group-data-[variant=line]/tabs-list:data-[state=active]:border-transparent dark:group-data-[variant=line]/tabs-list:data-[state=active]:bg-transparent",
        "data-[state=active]:bg-primary data-[state=active]:text-primary-foreground dark:data-[state=active]:border-input",
        "after:absolute after:bg-foreground after:opacity-0 after:transition-opacity group-data-[orientation=horizontal]/tabs:after:inset-x-0 group-data-[orientation=horizontal]/tabs:after:bottom-[-5px] group-data-[orientation=horizontal]/tabs:after:h-0.5 group-data-[orientation=vertical]/tabs:after:inset-y-0 group-data-[orientation=vertical]/tabs:after:-right-1 group-data-[orientation=vertical]/tabs:after:w-0.5 group-data-[variant=line]/tabs-list:data-[state=active]:after:opacity-100",
        e
      ),
      ...t
    }
  );
}
function cl({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    Q.Content,
    {
      "data-slot": "tabs-content",
      className: o("flex-1 outline-none", e),
      ...t
    }
  );
}
const nt = T(
  "inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium whitespace-nowrap transition-[color,background-color,border-color,box-shadow] outline-none hover:text-black dark:hover:text-white focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:bg-accent focus-visible:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 data-[state=on]:bg-primary data-[state=on]:text-primary-foreground data-[state=on]:hover:bg-primary/90 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline: "border border-input bg-transparent shadow-xs"
      },
      size: {
        default: "h-9 min-w-9 px-2",
        sm: "h-8 min-w-8 px-1.5",
        lg: "h-10 min-w-10 px-2.5"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function ul({
  className: e,
  variant: t,
  size: r,
  ...n
}) {
  return /* @__PURE__ */ a(
    bt.Root,
    {
      "data-slot": "toggle",
      className: o(nt({ variant: t, size: r, className: e })),
      ...n
    }
  );
}
const it = m.createContext({
  size: "default",
  variant: "default",
  spacing: 0
});
function ml({
  className: e,
  variant: t,
  size: r,
  spacing: n = 0,
  children: i,
  ...s
}) {
  return /* @__PURE__ */ a(
    Pe.Root,
    {
      "data-slot": "toggle-group",
      "data-variant": t,
      "data-size": r,
      "data-spacing": n,
      style: { "--gap": n },
      className: o(
        "group/toggle-group flex w-fit items-center gap-[--spacing(var(--gap))] rounded-md data-[spacing=default]:data-[variant=outline]:shadow-xs",
        e
      ),
      ...s,
      children: /* @__PURE__ */ a(it.Provider, { value: { variant: t, size: r, spacing: n }, children: i })
    }
  );
}
function fl({
  className: e,
  children: t,
  variant: r,
  size: n,
  ...i
}) {
  const s = m.useContext(it);
  return /* @__PURE__ */ a(
    Pe.Item,
    {
      "data-slot": "toggle-group-item",
      "data-variant": s.variant || r,
      "data-size": s.size || n,
      "data-spacing": s.spacing,
      className: o(
        nt({
          variant: s.variant || r,
          size: s.size || n
        }),
        "w-auto min-w-0 shrink-0 px-3 focus:z-10 focus-visible:z-10",
        "data-[spacing=0]:rounded-none data-[spacing=0]:shadow-none data-[spacing=0]:first:rounded-l-md data-[spacing=0]:last:rounded-r-md data-[spacing=0]:data-[variant=outline]:border-l-0 data-[spacing=0]:data-[variant=outline]:first:border-l",
        e
      ),
      ...i,
      children: t
    }
  );
}
function gl({
  title: e = /* @__PURE__ */ a(ue, { children: "Connect with me now—Let’s UDP or TCP." }),
  actionLabel: t = "Contact Me",
  icon: r = /* @__PURE__ */ a(ie, { className: "size-6 flex-shrink-0 text-background" }),
  className: n,
  ...i
}) {
  return /* @__PURE__ */ l(
    "a",
    {
      "data-slot": "contact-cta",
      "data-augmented-ui": "bl-rect br-clip-y both",
      className: h(
        "aug-contact-cta group relative mb-32 flex min-h-[calc(100vh-12rem)] flex-wrap items-center justify-between gap-8 bg-foreground px-12 py-12 md:px-24 lg:min-h-0 lg:flex-row lg:justify-center lg:p-20 lg:pl-24",
        n
      ),
      ...i,
      children: [
        /* @__PURE__ */ a("h2", { className: "w-full pt-16 font-display text-6xl font-medium text-background lg:max-w-xl lg:pt-0", children: e }),
        /* @__PURE__ */ l(
          "div",
          {
            "data-augmented-ui": "tr-clip bl-clip both",
            className: "aug-button flex max-w-lg cursor-pointer items-center justify-between gap-8 bg-background pl-8 text-lg group-focus:[--aug-border-bg:var(--accent)_!important]",
            children: [
              t,
              /* @__PURE__ */ a(
                "div",
                {
                  "data-augmented-ui": "tr-clip bl-clip both",
                  className: "aug-button-div p-4",
                  children: r
                }
              )
            ]
          }
        )
      ]
    }
  );
}
function pl({
  eyebrow: e,
  title: t,
  description: r,
  actions: n,
  className: i,
  ...s
}) {
  return /* @__PURE__ */ l(
    "section",
    {
      "data-slot": "hero-section",
      className: h(
        "flex w-full flex-col items-center gap-6 px-6 py-20 text-center sm:py-28",
        i
      ),
      ...s,
      children: [
        e && /* @__PURE__ */ a("p", { className: "font-mono text-sm tracking-widest text-muted-foreground uppercase", children: e }),
        /* @__PURE__ */ a("h1", { className: "max-w-3xl font-mono text-4xl font-semibold tracking-tight text-balance sm:text-6xl", children: t }),
        r && /* @__PURE__ */ a("p", { className: "max-w-xl text-lg text-balance text-muted-foreground", children: r }),
        n && /* @__PURE__ */ a("div", { className: "mt-4 flex flex-wrap items-center justify-center gap-3", children: n })
      ]
    }
  );
}
function bl({
  className: e,
  onSubmit: t,
  forgotPasswordHref: r = "#",
  signUpHref: n = "#",
  ...i
}) {
  const [s, c] = m.useState({
    email: "",
    password: ""
  }), [u, d] = m.useState({});
  function f(g) {
    g.preventDefault();
    const v = {};
    s.email || (v.email = "Email is required."), s.password || (v.password = "Password is required."), d(v), Object.keys(v).length === 0 && t?.(s);
  }
  return /* @__PURE__ */ l(he, { className: h("w-full max-w-sm", e), ...i, children: [
    /* @__PURE__ */ l(xe, { children: [
      /* @__PURE__ */ a(ve, { children: "Log in to your account" }),
      /* @__PURE__ */ a(we, { children: "Enter your credentials to continue." })
    ] }),
    /* @__PURE__ */ a(Ne, { children: /* @__PURE__ */ a("form", { onSubmit: f, noValidate: !0, children: /* @__PURE__ */ l(Ze, { children: [
      /* @__PURE__ */ l(K, { "data-invalid": !!u.email, children: [
        /* @__PURE__ */ a(de, { htmlFor: "login-email", children: "Email" }),
        /* @__PURE__ */ a(
          L,
          {
            id: "login-email",
            type: "email",
            autoComplete: "email",
            placeholder: "you@example.com",
            "aria-invalid": !!u.email,
            value: s.email,
            onChange: (g) => c((v) => ({
              ...v,
              email: g.target.value
            }))
          }
        ),
        /* @__PURE__ */ a(ce, { errors: [{ message: u.email }] })
      ] }),
      /* @__PURE__ */ l(K, { "data-invalid": !!u.password, children: [
        /* @__PURE__ */ l("div", { className: "flex items-center justify-between gap-2", children: [
          /* @__PURE__ */ a(de, { htmlFor: "login-password", children: "Password" }),
          /* @__PURE__ */ a(
            "a",
            {
              href: r,
              className: "text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline",
              children: "Forgot password?"
            }
          )
        ] }),
        /* @__PURE__ */ a(
          L,
          {
            id: "login-password",
            type: "password",
            autoComplete: "current-password",
            "aria-invalid": !!u.password,
            value: s.password,
            onChange: (g) => c((v) => ({
              ...v,
              password: g.target.value
            }))
          }
        ),
        /* @__PURE__ */ a(ce, { errors: [{ message: u.password }] })
      ] }),
      /* @__PURE__ */ a(K, { children: /* @__PURE__ */ a(
        D,
        {
          type: "submit",
          className: "w-full",
          children: "Log in"
        }
      ) })
    ] }) }) }),
    /* @__PURE__ */ a(Fe, { className: "justify-center", children: /* @__PURE__ */ l("p", { className: "text-sm text-muted-foreground", children: [
      "Don't have an account?",
      " ",
      /* @__PURE__ */ a(
        "a",
        {
          href: n,
          className: "text-foreground underline-offset-4 hover:underline",
          children: "Sign up"
        }
      )
    ] }) })
  ] });
}
function hl({
  columns: e = [],
  socials: t = [],
  copyright: r,
  className: n,
  ...i
}) {
  return /* @__PURE__ */ a(
    "footer",
    {
      "data-slot": "site-footer",
      className: h(
        "w-full border-t bg-background px-6 py-10 text-foreground",
        n
      ),
      ...i,
      children: /* @__PURE__ */ l("div", { className: "mx-auto flex w-full max-w-5xl flex-col gap-10", children: [
        e.length > 0 && /* @__PURE__ */ a("div", { className: "grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4", children: e.map((s) => /* @__PURE__ */ l("div", { className: "flex flex-col gap-3", children: [
          /* @__PURE__ */ a("h3", { className: "text-xs font-medium tracking-wide text-muted-foreground uppercase", children: s.title }),
          /* @__PURE__ */ a("ul", { className: "flex flex-col gap-2", children: s.links.map((c) => /* @__PURE__ */ a("li", { children: /* @__PURE__ */ a(
            "a",
            {
              href: c.href,
              className: "text-sm text-foreground transition-colors hover:text-link-primary-hover",
              children: c.label
            }
          ) }, c.label)) })
        ] }, s.title)) }),
        /* @__PURE__ */ l("div", { className: "flex flex-col items-center justify-between gap-4 border-t pt-6 sm:flex-row", children: [
          /* @__PURE__ */ a("p", { className: "text-sm text-muted-foreground", children: r ?? `© ${(/* @__PURE__ */ new Date()).getFullYear()} — All rights reserved.` }),
          t.length > 0 && /* @__PURE__ */ a("ul", { className: "flex items-center gap-4", children: t.map((s) => /* @__PURE__ */ a("li", { children: /* @__PURE__ */ l(
            "a",
            {
              href: s.href,
              target: "_blank",
              rel: "noreferrer",
              className: "flex items-center gap-1.5 text-sm text-foreground transition-colors hover:text-link-primary-hover",
              children: [
                s.icon,
                s.label
              ]
            }
          ) }, s.label)) })
        ] })
      ] })
    }
  );
}
function xl({
  logo: e,
  links: t = [],
  actions: r,
  className: n,
  ...i
}) {
  return /* @__PURE__ */ l(
    "header",
    {
      "data-slot": "site-header",
      className: h(
        "sticky top-0 z-50 flex w-full items-center justify-between gap-4 border-b bg-background px-6 py-3",
        n
      ),
      ...i,
      children: [
        /* @__PURE__ */ a("div", { className: "flex items-center gap-2", children: e ?? /* @__PURE__ */ a("span", { className: "text-sm font-semibold", children: "LFDS" }) }),
        t.length > 0 && /* @__PURE__ */ a(Ma, { className: "hidden lg:flex", children: /* @__PURE__ */ a(Ta, { children: t.map((s) => /* @__PURE__ */ a(Da, { children: s.children?.length ? /* @__PURE__ */ l(ue, { children: [
          /* @__PURE__ */ a(Pa, { children: s.label }),
          /* @__PURE__ */ a(ja, { children: /* @__PURE__ */ a("ul", { className: "grid w-64 gap-1 p-2", children: s.children.map((c) => /* @__PURE__ */ a("li", { children: /* @__PURE__ */ l(Me, { href: c.href, children: [
            /* @__PURE__ */ a("div", { className: "text-sm font-medium", children: c.label }),
            c.description && /* @__PURE__ */ a("p", { className: "text-sm text-muted-foreground", children: c.description })
          ] }) }, c.label)) }) })
        ] }) : /* @__PURE__ */ a(
          Me,
          {
            href: s.href,
            className: at(),
            children: s.label
          }
        ) }, s.label)) }) }),
        r && /* @__PURE__ */ a("div", { className: "flex items-center gap-2", children: r })
      ]
    }
  );
}
function ye({
  code: e = "404",
  heading: t,
  lines: r = ["The requested resource could not be found.", "It may have been moved, deleted, or never existed."],
  action: n,
  className: i,
  ...s
}) {
  return /* @__PURE__ */ l(
    "section",
    {
      "data-slot": "error-page",
      className: h(
        "flex min-h-[60vh] w-full flex-col items-center justify-center py-24",
        i
      ),
      ...s,
      children: [
        /* @__PURE__ */ a("div", { className: "z-10 mt-12 mb-48 w-full text-center lg:mt-0", children: /* @__PURE__ */ l("h1", { className: "font-flex text-9xl font-bold text-foreground", children: [
          e,
          t && /* @__PURE__ */ l("span", { className: "font-sans text-4xl font-normal", children: [
            "<",
            t,
            ">"
          ] })
        ] }) }),
        /* @__PURE__ */ a("div", { className: "mb-48 w-full space-y-8", children: /* @__PURE__ */ a("p", { className: "text-4xl leading-relaxed font-sans text-foreground", children: r.map((c, u) => /* @__PURE__ */ l(m.Fragment, { children: [
          u > 0 && /* @__PURE__ */ a("br", {}),
          c
        ] }, u)) }) }),
        n && /* @__PURE__ */ a("div", { className: "flex w-full flex-col gap-6", children: n })
      ]
    }
  );
}
function vl({
  groups: e = [],
  placeholder: t = "Type a command or search…",
  emptyText: r = "No results found.",
  title: n = "Command Palette",
  description: i = "Search for a command to run…",
  showCloseButton: s = !0,
  className: c,
  ...u
}) {
  return /* @__PURE__ */ l(Ke, { ...u, children: [
    /* @__PURE__ */ l(We, { className: "sr-only", children: [
      /* @__PURE__ */ a(Xe, { children: n }),
      /* @__PURE__ */ a(Ye, { children: i })
    ] }),
    /* @__PURE__ */ a(
      Ue,
      {
        "data-slot": "command-palette",
        className: h("overflow-hidden p-0", c),
        showCloseButton: s,
        augmented: !1,
        children: /* @__PURE__ */ l(Je, { className: "**:data-[slot=command-input-wrapper]:h-12 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]]:px-2 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5", children: [
          /* @__PURE__ */ a(da, { placeholder: t }),
          /* @__PURE__ */ l(ca, { children: [
            /* @__PURE__ */ a(ua, { children: r }),
            e.map((d, f) => /* @__PURE__ */ l(m.Fragment, { children: [
              f > 0 && /* @__PURE__ */ a(fa, {}),
              /* @__PURE__ */ a(ma, { heading: d.label, children: d.items.map((g, v) => /* @__PURE__ */ l(
                ga,
                {
                  value: g.value,
                  keywords: g.keywords,
                  disabled: g.disabled,
                  onSelect: g.onSelect,
                  children: [
                    g.icon,
                    g.label,
                    g.shortcut && /* @__PURE__ */ a(pa, { children: g.shortcut })
                  ]
                },
                `${d.label}-${v}`
              )) })
            ] }, d.label))
          ] })
        ] })
      }
    )
  ] });
}
const nr = [
  {
    name: "name",
    label: "Name",
    placeholder: "Jane Doe",
    autoComplete: "name"
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    placeholder: "you@example.com",
    autoComplete: "email"
  },
  {
    name: "message",
    label: "Message",
    placeholder: "How can I help?",
    multiline: !0
  }
];
function De(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function wl({
  title: e = "Contact me",
  description: t = "Fill out the form below and I'll get back to you.",
  fields: r = nr,
  actionLabel: n = "Send message",
  pending: i = !1,
  onSubmit: s,
  className: c,
  ...u
}) {
  const [d, f] = m.useState(
    () => Object.fromEntries(r.map((p) => [p.name, ""]))
  ), [g, v] = m.useState({});
  function k(p) {
    p.preventDefault();
    const w = {};
    for (const N of r)
      (N.required ?? !0) && !d[N.name]?.trim() && (w[N.name] = `${N.label ?? De(N.name)} is required.`);
    v(w), Object.keys(w).length === 0 && s?.(d);
  }
  return /* @__PURE__ */ l(he, { className: h("w-full max-w-md", c), ...u, children: [
    /* @__PURE__ */ l(xe, { children: [
      /* @__PURE__ */ a(ve, { children: e }),
      t && /* @__PURE__ */ a(we, { children: t })
    ] }),
    /* @__PURE__ */ a(Ne, { children: /* @__PURE__ */ a("form", { onSubmit: k, noValidate: !0, children: /* @__PURE__ */ l(Ze, { children: [
      r.map((p) => {
        const w = `contact-${p.name}`, N = p.label ?? De(p.name), b = g[p.name];
        return /* @__PURE__ */ l(K, { "data-invalid": !!b, children: [
          /* @__PURE__ */ a(de, { htmlFor: w, children: N }),
          p.multiline ? /* @__PURE__ */ a(
            Be,
            {
              id: w,
              placeholder: p.placeholder,
              rows: p.rows,
              disabled: i,
              "aria-invalid": !!b,
              value: d[p.name] ?? "",
              onChange: (x) => f((I) => ({
                ...I,
                [p.name]: x.target.value
              }))
            }
          ) : /* @__PURE__ */ a(
            L,
            {
              id: w,
              type: p.type,
              autoComplete: p.autoComplete,
              placeholder: p.placeholder,
              disabled: i,
              "aria-invalid": !!b,
              value: d[p.name] ?? "",
              onChange: (x) => f((I) => ({
                ...I,
                [p.name]: x.target.value
              }))
            }
          ),
          /* @__PURE__ */ a(ce, { errors: [{ message: b }] })
        ] }, p.name);
      }),
      /* @__PURE__ */ a(K, { children: /* @__PURE__ */ l(
        D,
        {
          type: "submit",
          className: "w-full",
          disabled: i,
          children: [
            i && /* @__PURE__ */ a(rr, {}),
            n
          ]
        }
      ) })
    ] }) }) })
  ] });
}
function ke({
  icon: e,
  title: t,
  description: r,
  actionLabel: n,
  actionIcon: i,
  actionVariant: s = "outline",
  onAction: c,
  className: u,
  ...d
}) {
  return /* @__PURE__ */ l(xa, { className: h("border", u), ...d, children: [
    /* @__PURE__ */ l(va, { children: [
      e && /* @__PURE__ */ a(Na, { variant: "icon", children: e }),
      t && /* @__PURE__ */ a(ya, { children: t }),
      r && /* @__PURE__ */ a(ka, { children: r })
    ] }),
    n && /* @__PURE__ */ a(za, { children: /* @__PURE__ */ l(D, { variant: s, size: "sm", onClick: c, children: [
      i,
      n
    ] }) })
  ] });
}
function Nl({
  icon: e = /* @__PURE__ */ a(Et, {}),
  title: t = "No results found",
  description: r = "Try adjusting your search terms or filters.",
  actionLabel: n = "Clear search",
  ...i
}) {
  return /* @__PURE__ */ a(
    ke,
    {
      "data-slot": "empty-search",
      icon: e,
      title: t,
      description: r,
      actionLabel: n,
      actionVariant: "outline",
      ...i
    }
  );
}
function yl({
  icon: e = /* @__PURE__ */ a(Rt, {}),
  title: t = "Nothing here yet",
  description: r = "Get started by creating your first item.",
  actionLabel: n = "Create item",
  actionIcon: i = /* @__PURE__ */ a(Pt, {}),
  ...s
}) {
  return /* @__PURE__ */ a(
    ke,
    {
      "data-slot": "empty-data",
      icon: e,
      title: t,
      description: r,
      actionLabel: n,
      actionIcon: i,
      actionVariant: "default",
      ...s
    }
  );
}
function kl({
  icon: e = /* @__PURE__ */ a(jt, {}),
  title: t = "Something went wrong",
  description: r = "An unexpected error occurred. Please try again.",
  actionLabel: n = "Try again",
  actionIcon: i = /* @__PURE__ */ a(At, {}),
  ...s
}) {
  return /* @__PURE__ */ a(
    ke,
    {
      "data-slot": "empty-error",
      icon: e,
      title: t,
      description: r,
      actionLabel: n,
      actionIcon: i,
      actionVariant: "outline",
      ...s
    }
  );
}
const ze = "w-fit font-mono text-sm text-foreground no-underline uppercase transition-opacity duration-300 hover:text-link-primary-hover";
function zl({
  code: e = "404",
  heading: t = "not found",
  lines: r = [
    "The page you are looking for could not be found.",
    "It may have been moved, deleted, or never existed."
  ],
  action: n = /* @__PURE__ */ a("a", { href: "/", className: ze, children: "[return home]" }),
  ...i
}) {
  return /* @__PURE__ */ a(
    ye,
    {
      code: e,
      heading: t,
      lines: r,
      action: n,
      ...i
    }
  );
}
function Cl({
  code: e = "500",
  heading: t = "server error",
  lines: r = [
    "Something went wrong on our end.",
    "Try again in a moment."
  ],
  action: n = /* @__PURE__ */ a("a", { href: "/", className: ze, children: "[return home]" }),
  ...i
}) {
  return /* @__PURE__ */ a(
    ye,
    {
      code: e,
      heading: t,
      lines: r,
      action: n,
      ...i
    }
  );
}
function _l({
  code: e = "503",
  heading: t = "under maintenance",
  lines: r = [
    "We are performing scheduled maintenance.",
    "Please check back soon."
  ],
  action: n = /* @__PURE__ */ a("a", { href: ".", className: ze, children: "[try again]" }),
  ...i
}) {
  return /* @__PURE__ */ a(
    ye,
    {
      code: e,
      heading: t,
      lines: r,
      action: n,
      ...i
    }
  );
}
const ir = {
  2: "lg:grid-cols-2",
  3: "lg:grid-cols-3",
  4: "lg:grid-cols-4"
};
function Sl({
  title: e,
  eyebrow: t,
  description: r,
  features: n,
  columns: i = 3,
  className: s,
  ...c
}) {
  return /* @__PURE__ */ a(
    "section",
    {
      "data-slot": "feature-grid",
      className: h("w-full px-6 py-16 sm:py-20", s),
      ...c,
      children: /* @__PURE__ */ l("div", { className: "mx-auto w-full max-w-5xl", children: [
        /* @__PURE__ */ l("div", { className: "flex max-w-2xl flex-col gap-2", children: [
          t && /* @__PURE__ */ a("p", { className: "font-mono text-xs tracking-widest text-muted-foreground uppercase", children: t }),
          /* @__PURE__ */ a("h2", { className: "font-display text-3xl font-medium text-balance sm:text-4xl", children: e }),
          r && /* @__PURE__ */ a("p", { className: "text-balance text-muted-foreground", children: r })
        ] }),
        /* @__PURE__ */ a(
          "div",
          {
            "data-slot": "feature-grid-grid",
            className: h(
              "mt-10 grid gap-px border border-foreground bg-foreground sm:grid-cols-2",
              ir[i]
            ),
            children: n.map((u, d) => /* @__PURE__ */ l(
              "div",
              {
                "data-slot": "feature-grid-cell",
                className: "flex flex-col gap-3 bg-background p-6",
                children: [
                  u.icon && /* @__PURE__ */ a("div", { className: "flex size-10 items-center justify-center bg-card text-card-foreground [&>svg]:size-5", children: u.icon }),
                  /* @__PURE__ */ a("h3", { className: "font-display text-lg font-medium", children: u.title }),
                  /* @__PURE__ */ a("p", { className: "text-sm text-muted-foreground", children: u.description })
                ]
              },
              d
            ))
          }
        )
      ] })
    }
  );
}
function Il({
  title: e,
  eyebrow: t = "// transmission",
  description: r,
  placeholder: n = "you@domain.net",
  actionLabel: i = "Subscribe",
  successMessage: s = "Signal received — check your inbox to confirm.",
  submitted: c,
  onSubmit: u,
  className: d,
  ...f
}) {
  const [g, v] = m.useState(""), [k, p] = m.useState(!1), w = c ?? k;
  function N(b) {
    b.preventDefault(), u?.(g), c === void 0 && p(!0);
  }
  return /* @__PURE__ */ l(
    "section",
    {
      "data-slot": "newsletter-signup",
      "data-augmented-ui": "tr-clip bl-clip both",
      className: h(
        "aug-surface aug-surface-card w-full bg-card px-6 py-10 text-card-foreground sm:px-10",
        d
      ),
      ...f,
      children: [
        t && /* @__PURE__ */ a("p", { className: "font-mono text-xs tracking-widest text-muted-foreground uppercase", children: t }),
        /* @__PURE__ */ a("h2", { className: "mt-2 font-display text-3xl font-medium text-balance sm:text-4xl", children: e }),
        r && /* @__PURE__ */ a("p", { className: "mt-3 max-w-xl text-balance text-muted-foreground", children: r }),
        w ? /* @__PURE__ */ l(
          "p",
          {
            "data-slot": "newsletter-signup-success",
            className: "mt-8 flex items-center gap-2 font-mono text-sm text-foreground",
            children: [
              /* @__PURE__ */ a(Ft, { className: "size-5 shrink-0 text-accent" }),
              s
            ]
          }
        ) : /* @__PURE__ */ l(
          "form",
          {
            "data-slot": "newsletter-signup-form",
            className: "mt-8 flex flex-col gap-3 sm:flex-row",
            onSubmit: N,
            children: [
              /* @__PURE__ */ a(
                L,
                {
                  type: "email",
                  required: !0,
                  autoComplete: "email",
                  "aria-label": "Email address",
                  placeholder: n,
                  value: g,
                  onChange: (b) => v(b.target.value),
                  className: "h-10 flex-1 border-foreground font-mono"
                }
              ),
              /* @__PURE__ */ l(D, { type: "submit", variant: "augmented", size: "lg", children: [
                i,
                /* @__PURE__ */ a(Gt, { className: "size-4" })
              ] })
            ]
          }
        )
      ]
    }
  );
}
function sr(e) {
  return typeof e == "number" ? String(e).padStart(2, "0") : e;
}
function Ml({
  index: e,
  title: t,
  description: r,
  tags: n = [],
  href: i,
  links: s = [],
  className: c,
  ...u
}) {
  return /* @__PURE__ */ l(
    he,
    {
      "data-slot": "project-card",
      className: h("group gap-0", c),
      ...u,
      children: [
        /* @__PURE__ */ l(xe, { className: "gap-1", children: [
          e != null && /* @__PURE__ */ a(
            "span",
            {
              "data-slot": "project-card-index",
              className: "font-mono text-sm text-muted-foreground",
              children: sr(e)
            }
          ),
          /* @__PURE__ */ a(ve, { className: "font-display text-3xl font-medium tracking-tight uppercase", children: i ? /* @__PURE__ */ a(
            "a",
            {
              href: i,
              className: "transition-colors duration-300 hover:text-link-primary-hover",
              children: t
            }
          ) : t }),
          i && /* @__PURE__ */ a(Zt, { children: /* @__PURE__ */ a(ie, { className: "size-5 text-muted-foreground transition-colors duration-300 group-hover:text-link-primary-hover" }) })
        ] }),
        (r || n.length > 0) && /* @__PURE__ */ l(Ne, { className: "flex flex-col gap-4", children: [
          r && /* @__PURE__ */ a(we, { className: "text-sm leading-relaxed", children: r }),
          n.length > 0 && /* @__PURE__ */ a("ul", { className: "flex flex-wrap gap-2", children: n.map((d) => /* @__PURE__ */ a("li", { children: /* @__PURE__ */ a(Yt, { variant: "outline", className: "font-mono", children: d }) }, d)) })
        ] }),
        s.length > 0 && /* @__PURE__ */ a(Fe, { className: "mt-auto flex-wrap gap-x-6 gap-y-2 pt-4", children: s.map((d) => /* @__PURE__ */ l(
          "a",
          {
            href: d.href,
            className: "inline-flex items-center gap-2 font-mono text-sm text-foreground uppercase transition-colors duration-300 hover:text-link-primary-hover",
            children: [
              /* @__PURE__ */ a(ie, { className: "size-4" }),
              /* @__PURE__ */ l("span", { className: "flex items-center", children: [
                /* @__PURE__ */ a("span", { "aria-hidden": "true", className: "font-mono", children: "[" }),
                d.label,
                /* @__PURE__ */ a("span", { "aria-hidden": "true", className: "font-mono", children: "]" })
              ] })
            ]
          },
          d.href
        )) })
      ]
    }
  );
}
function Tl({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "project-grid",
      className: h(
        "grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3",
        e
      ),
      ...t
    }
  );
}
function Dl({
  placeholder: e = "Search…",
  shortcut: t = "⌘K",
  icon: r = /* @__PURE__ */ a(Ee, {}),
  value: n,
  defaultValue: i,
  onValueChange: s,
  onOpen: c,
  onClick: u,
  disabled: d,
  className: f,
  ...g
}) {
  return s !== void 0 || n !== void 0 || i !== void 0 ? /* @__PURE__ */ l(
    Oe,
    {
      "data-slot": "search-bar",
      "data-disabled": d || void 0,
      onClick: u,
      className: f,
      ...g,
      children: [
        /* @__PURE__ */ a(le, { children: r }),
        /* @__PURE__ */ a(
          He,
          {
            placeholder: e,
            value: n,
            defaultValue: i,
            readOnly: n !== void 0 && s === void 0,
            disabled: d,
            onChange: (k) => s?.(k.target.value)
          }
        ),
        t != null && /* @__PURE__ */ a(le, { align: "inline-end", children: /* @__PURE__ */ a(B, { children: t }) })
      ]
    }
  ) : /* @__PURE__ */ l(
    "button",
    {
      type: "button",
      "data-slot": "search-bar",
      disabled: d,
      onClick: (k) => {
        u?.(k), c?.();
      },
      className: h(
        "group/search-bar relative flex h-9 w-full min-w-0 cursor-pointer items-center gap-2 rounded-md border border-input px-3 text-sm shadow-xs transition-[color,box-shadow] outline-none dark:bg-background",
        "focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50",
        "disabled:cursor-not-allowed disabled:opacity-50",
        f
      ),
      ...g,
      children: [
        /* @__PURE__ */ a("span", { className: "shrink-0 text-muted-foreground [&_svg:not([class*='size-'])]:size-4", children: r }),
        /* @__PURE__ */ a(
          "span",
          {
            "data-slot": "search-bar-placeholder",
            className: "flex-1 truncate text-left text-muted-foreground",
            children: e
          }
        ),
        t != null && /* @__PURE__ */ a(B, { children: t })
      ]
    }
  );
}
function Pl({
  title: e,
  groups: t = [],
  className: r,
  ...n
}) {
  return /* @__PURE__ */ l(
    "section",
    {
      "data-slot": "skills-list",
      className: h(
        "grid w-full grid-cols-1 gap-12 lg:grid-cols-4",
        r
      ),
      ...n,
      children: [
        e && /* @__PURE__ */ a("div", { className: "col-span-1", children: /* @__PURE__ */ a("h2", { className: "font-mono text-xl leading-relaxed font-normal tracking-[0.2em] text-foreground uppercase", children: e }) }),
        /* @__PURE__ */ a(
          "div",
          {
            className: h(
              "col-span-1 border-t border-foreground pt-8",
              e ? "lg:col-span-3" : "lg:col-span-4"
            ),
            children: /* @__PURE__ */ a("div", { className: "flex flex-col gap-10", children: t.map((i) => /* @__PURE__ */ l(
              "div",
              {
                "data-slot": "skills-list-group",
                className: "flex flex-col gap-4 sm:flex-row sm:gap-8",
                children: [
                  /* @__PURE__ */ a("h3", { className: "w-40 shrink-0 font-mono text-sm tracking-widest text-muted-foreground uppercase", children: i.title }),
                  /* @__PURE__ */ a("ul", { className: "flex flex-wrap content-start gap-2", children: i.items.map((s) => /* @__PURE__ */ a("li", { children: /* @__PURE__ */ a("span", { className: "inline-flex items-center border border-foreground px-2 py-0.5 font-mono text-xs whitespace-nowrap text-foreground", children: s }) }, s)) })
                ]
              },
              i.title
            )) })
          }
        )
      ]
    }
  );
}
const lr = {
  up: /* @__PURE__ */ a(Bt, { className: "size-4" }),
  down: /* @__PURE__ */ a($t, { className: "size-4" }),
  neutral: /* @__PURE__ */ a(Lt, { className: "size-4" })
}, dr = {
  up: "text-green",
  down: "text-red",
  neutral: "text-muted-foreground"
};
function jl({
  title: e,
  eyebrow: t,
  stats: r,
  className: n,
  ...i
}) {
  return /* @__PURE__ */ a(
    "section",
    {
      "data-slot": "stats-section",
      className: h("w-full px-6 py-16 sm:py-20", n),
      ...i,
      children: /* @__PURE__ */ l("div", { className: "mx-auto w-full max-w-5xl", children: [
        (t || e) && /* @__PURE__ */ l("div", { className: "mb-8 flex flex-col gap-2", children: [
          t && /* @__PURE__ */ a("p", { className: "font-mono text-xs tracking-widest text-muted-foreground uppercase", children: t }),
          e && /* @__PURE__ */ a("h2", { className: "font-display text-3xl font-medium text-balance sm:text-4xl", children: e })
        ] }),
        /* @__PURE__ */ a(
          "dl",
          {
            "data-slot": "stats-section-grid",
            className: "grid divide-y divide-foreground border border-foreground sm:grid-flow-col sm:auto-cols-fr sm:divide-x sm:divide-y-0",
            children: r.map((s, c) => /* @__PURE__ */ l(
              "div",
              {
                "data-slot": "stats-section-cell",
                className: "flex flex-col gap-2 px-6 py-8",
                children: [
                  /* @__PURE__ */ l("dt", { className: "flex items-baseline gap-2 font-mono text-xs tracking-widest text-muted-foreground uppercase", children: [
                    /* @__PURE__ */ a("span", { className: "text-accent", "aria-hidden": !0, children: ">" }),
                    s.label
                  ] }),
                  /* @__PURE__ */ a("dd", { className: "font-display text-4xl font-medium sm:text-5xl", children: s.value }),
                  s.delta && /* @__PURE__ */ l(
                    "dd",
                    {
                      className: h(
                        "flex items-center gap-1 font-mono text-xs",
                        dr[s.trend ?? "neutral"]
                      ),
                      children: [
                        lr[s.trend ?? "neutral"],
                        s.delta
                      ]
                    }
                  )
                ]
              },
              c
            ))
          }
        )
      ] })
    }
  );
}
function cr(e) {
  return typeof e != "string" ? null : e.split(/\s+/).map((t) => t[0]).filter(Boolean).slice(0, 2).join("").toUpperCase();
}
function ur({
  quote: e,
  author: t,
  role: r,
  company: n,
  avatarSrc: i,
  avatarFallback: s,
  className: c,
  children: u,
  ...d
}) {
  return /* @__PURE__ */ l(
    "figure",
    {
      "data-slot": "testimonial-card",
      "data-augmented-ui": "tr-clip bl-clip both",
      className: h(
        "aug-surface aug-surface-card flex flex-col gap-6 bg-card p-6 text-card-foreground",
        c
      ),
      ...d,
      children: [
        /* @__PURE__ */ a(Ot, { className: "size-6 text-accent", "aria-hidden": !0 }),
        /* @__PURE__ */ a("blockquote", { className: "text-base leading-relaxed text-pretty", children: e }),
        /* @__PURE__ */ l("figcaption", { className: "mt-auto flex items-center gap-3", children: [
          /* @__PURE__ */ l(Kt, { size: "lg", className: "rounded-none", children: [
            i && /* @__PURE__ */ a(Ut, { src: i, alt: "", className: "rounded-none" }),
            /* @__PURE__ */ a(Wt, { className: "rounded-none font-mono text-xs", children: s ?? cr(t) ?? "?" })
          ] }),
          /* @__PURE__ */ l("div", { className: "flex flex-col gap-0.5", children: [
            /* @__PURE__ */ a("span", { className: "text-sm font-medium", children: t }),
            (r || n) && /* @__PURE__ */ l("span", { className: "font-mono text-xs text-muted-foreground", children: [
              r,
              r && n && " // ",
              n
            ] })
          ] })
        ] }),
        u
      ]
    }
  );
}
function Rl({
  title: e,
  eyebrow: t,
  testimonials: r,
  className: n,
  ...i
}) {
  return /* @__PURE__ */ a(
    "section",
    {
      "data-slot": "testimonials",
      className: h("w-full px-6 py-16 sm:py-20", n),
      ...i,
      children: /* @__PURE__ */ l("div", { className: "mx-auto w-full max-w-5xl", children: [
        (t || e) && /* @__PURE__ */ l("div", { className: "mb-10 flex max-w-2xl flex-col gap-2", children: [
          t && /* @__PURE__ */ a("p", { className: "font-mono text-xs tracking-widest text-muted-foreground uppercase", children: t }),
          e && /* @__PURE__ */ a("h2", { className: "font-display text-3xl font-medium text-balance sm:text-4xl", children: e })
        ] }),
        /* @__PURE__ */ a(
          "div",
          {
            "data-slot": "testimonials-grid",
            className: "grid gap-6 grid-cols-[repeat(auto-fill,minmax(min(100%,18rem),1fr))]",
            children: r.map((s, c) => /* @__PURE__ */ a(ur, { ...s }, c))
          }
        )
      ] })
    }
  );
}
export {
  ro as Accordion,
  io as AccordionContent,
  oo as AccordionItem,
  no as AccordionTrigger,
  so as Alert,
  co as AlertDescription,
  uo as AlertDialog,
  vo as AlertDialogAction,
  wo as AlertDialogCancel,
  fo as AlertDialogContent,
  ho as AlertDialogDescription,
  po as AlertDialogFooter,
  go as AlertDialogHeader,
  xo as AlertDialogMedia,
  qt as AlertDialogOverlay,
  Ht as AlertDialogPortal,
  bo as AlertDialogTitle,
  mo as AlertDialogTrigger,
  lo as AlertTitle,
  No as AspectRatio,
  Kt as Avatar,
  yo as AvatarBadge,
  Wt as AvatarFallback,
  ko as AvatarGroup,
  zo as AvatarGroupCount,
  Ut as AvatarImage,
  Yt as Badge,
  Co as Breadcrumb,
  Do as BreadcrumbEllipsis,
  So as BreadcrumbItem,
  Io as BreadcrumbLink,
  _o as BreadcrumbList,
  Mo as BreadcrumbPage,
  To as BreadcrumbSeparator,
  D as Button,
  Po as ButtonGroup,
  Ro as ButtonGroupSeparator,
  jo as ButtonGroupText,
  Ao as Calendar,
  Qt as CalendarDayButton,
  he as Card,
  Zt as CardAction,
  Ne as CardContent,
  we as CardDescription,
  Fe as CardFooter,
  xe as CardHeader,
  ve as CardTitle,
  Eo as Carousel,
  Fo as CarouselContent,
  Go as CarouselItem,
  Lo as CarouselNext,
  $o as CarouselPrevious,
  Bo as ChartContainer,
  Ho as ChartLegend,
  qo as ChartLegendContent,
  aa as ChartStyle,
  Oo as ChartTooltip,
  Vo as ChartTooltipContent,
  Ko as Checkbox,
  Uo as Collapsible,
  Xo as CollapsibleContent,
  Wo as CollapsibleTrigger,
  Qo as Combobox,
  un as ComboboxChip,
  cn as ComboboxChips,
  mn as ComboboxChipsInput,
  sn as ComboboxCollection,
  tn as ComboboxContent,
  ln as ComboboxEmpty,
  on as ComboboxGroup,
  en as ComboboxInput,
  rn as ComboboxItem,
  nn as ComboboxLabel,
  an as ComboboxList,
  dn as ComboboxSeparator,
  na as ComboboxTrigger,
  Zo as ComboboxValue,
  Je as Command,
  xn as CommandDialog,
  ua as CommandEmpty,
  ma as CommandGroup,
  da as CommandInput,
  ga as CommandItem,
  ca as CommandList,
  vl as CommandPalette,
  fa as CommandSeparator,
  pa as CommandShortcut,
  gl as ContactCTA,
  wl as ContactForm,
  vn as ContextMenu,
  Mn as ContextMenuCheckboxItem,
  Sn as ContextMenuContent,
  Nn as ContextMenuGroup,
  In as ContextMenuItem,
  Dn as ContextMenuLabel,
  yn as ContextMenuPortal,
  zn as ContextMenuRadioGroup,
  Tn as ContextMenuRadioItem,
  Pn as ContextMenuSeparator,
  jn as ContextMenuShortcut,
  kn as ContextMenuSub,
  _n as ContextMenuSubContent,
  Cn as ContextMenuSubTrigger,
  wn as ContextMenuTrigger,
  Ke as Dialog,
  bn as DialogClose,
  Ue as DialogContent,
  Ye as DialogDescription,
  hn as DialogFooter,
  We as DialogHeader,
  la as DialogOverlay,
  sa as DialogPortal,
  Xe as DialogTitle,
  pn as DialogTrigger,
  Rn as Drawer,
  En as DrawerClose,
  Fn as DrawerContent,
  Bn as DrawerDescription,
  $n as DrawerFooter,
  Gn as DrawerHeader,
  ha as DrawerOverlay,
  ba as DrawerPortal,
  Ln as DrawerTitle,
  An as DrawerTrigger,
  On as DropdownMenu,
  Wn as DropdownMenuCheckboxItem,
  qn as DropdownMenuContent,
  Kn as DropdownMenuGroup,
  Un as DropdownMenuItem,
  Jn as DropdownMenuLabel,
  Vn as DropdownMenuPortal,
  Xn as DropdownMenuRadioGroup,
  Yn as DropdownMenuRadioItem,
  Qn as DropdownMenuSeparator,
  Zn as DropdownMenuShortcut,
  ei as DropdownMenuSub,
  ai as DropdownMenuSubContent,
  ti as DropdownMenuSubTrigger,
  Hn as DropdownMenuTrigger,
  xa as Empty,
  za as EmptyContent,
  yl as EmptyData,
  ka as EmptyDescription,
  kl as EmptyError,
  va as EmptyHeader,
  Na as EmptyMedia,
  Nl as EmptySearch,
  ya as EmptyTitle,
  ye as ErrorPage,
  zl as ErrorPage404,
  Cl as ErrorPage500,
  _l as ErrorPageMaintenance,
  Sl as FeatureGrid,
  K as Field,
  ni as FieldContent,
  si as FieldDescription,
  ce as FieldError,
  Ze as FieldGroup,
  de as FieldLabel,
  oi as FieldLegend,
  li as FieldSeparator,
  ri as FieldSet,
  ii as FieldTitle,
  di as Form,
  fi as FormControl,
  gi as FormDescription,
  ci as FormField,
  ui as FormItem,
  mi as FormLabel,
  pi as FormMessage,
  pl as HeroSection,
  bi as HoverCard,
  xi as HoverCardContent,
  hi as HoverCardTrigger,
  L as Input,
  Oe as InputGroup,
  le as InputGroupAddon,
  Ve as InputGroupButton,
  He as InputGroupInput,
  Yo as InputGroupText,
  Jo as InputGroupTextarea,
  vi as InputOTP,
  wi as InputOTPGroup,
  yi as InputOTPSeparator,
  Ni as InputOTPSlot,
  Ci as Item,
  Ti as ItemActions,
  Si as ItemContent,
  Mi as ItemDescription,
  Pi as ItemFooter,
  ki as ItemGroup,
  Di as ItemHeader,
  _i as ItemMedia,
  zi as ItemSeparator,
  Ii as ItemTitle,
  B as Kbd,
  gn as KbdGroup,
  Qe as Label,
  bl as LoginForm,
  ji as Menubar,
  Li as MenubarCheckboxItem,
  Gi as MenubarContent,
  Ai as MenubarGroup,
  $i as MenubarItem,
  Oi as MenubarLabel,
  Ri as MenubarMenu,
  Ia as MenubarPortal,
  Ei as MenubarRadioGroup,
  Bi as MenubarRadioItem,
  Vi as MenubarSeparator,
  Hi as MenubarShortcut,
  qi as MenubarSub,
  Ui as MenubarSubContent,
  Ki as MenubarSubTrigger,
  Fi as MenubarTrigger,
  Wi as NativeSelect,
  Yi as NativeSelectOptGroup,
  Xi as NativeSelectOption,
  Ma as NavigationMenu,
  ja as NavigationMenuContent,
  Ji as NavigationMenuIndicator,
  Da as NavigationMenuItem,
  Me as NavigationMenuLink,
  Ta as NavigationMenuList,
  Pa as NavigationMenuTrigger,
  Ra as NavigationMenuViewport,
  Il as NewsletterSignup,
  Qi as Pagination,
  Zi as PaginationContent,
  rs as PaginationEllipsis,
  es as PaginationItem,
  rt as PaginationLink,
  as as PaginationNext,
  ts as PaginationPrevious,
  os as Popover,
  ss as PopoverAnchor,
  is as PopoverContent,
  cs as PopoverDescription,
  ls as PopoverHeader,
  ds as PopoverTitle,
  ns as PopoverTrigger,
  us as Progress,
  Ml as ProjectCard,
  Tl as ProjectGrid,
  ms as RadioGroup,
  fs as RadioGroupItem,
  bs as ResizableHandle,
  ps as ResizablePanel,
  gs as ResizablePanelGroup,
  H as ScrollArea,
  qe as ScrollBar,
  Dl as SearchBar,
  hs as Select,
  Ns as SelectContent,
  xs as SelectGroup,
  ks as SelectItem,
  ys as SelectLabel,
  Ea as SelectScrollDownButton,
  Aa as SelectScrollUpButton,
  zs as SelectSeparator,
  ws as SelectTrigger,
  vs as SelectValue,
  ee as Separator,
  Fa as Sheet,
  _s as SheetClose,
  Ba as SheetContent,
  Ha as SheetDescription,
  Ss as SheetFooter,
  Oa as SheetHeader,
  Va as SheetTitle,
  Cs as SheetTrigger,
  Ms as Sidebar,
  Fs as SidebarContent,
  As as SidebarFooter,
  Gs as SidebarGroup,
  Ls as SidebarGroupAction,
  Bs as SidebarGroupContent,
  $s as SidebarGroupLabel,
  Rs as SidebarHeader,
  js as SidebarInput,
  Ps as SidebarInset,
  Os as SidebarMenu,
  qs as SidebarMenuAction,
  Ks as SidebarMenuBadge,
  Hs as SidebarMenuButton,
  Vs as SidebarMenuItem,
  Us as SidebarMenuSkeleton,
  Ws as SidebarMenuSub,
  Ys as SidebarMenuSubButton,
  Xs as SidebarMenuSubItem,
  Is as SidebarProvider,
  Ds as SidebarRail,
  Es as SidebarSeparator,
  Ts as SidebarTrigger,
  hl as SiteFooter,
  xl as SiteHeader,
  Te as Skeleton,
  Pl as SkillsList,
  Js as Slider,
  rr as Spinner,
  jl as StatsSection,
  Qs as Switch,
  Zs as Table,
  tl as TableBody,
  il as TableCaption,
  nl as TableCell,
  al as TableFooter,
  ol as TableHead,
  el as TableHeader,
  rl as TableRow,
  sl as Tabs,
  cl as TabsContent,
  ll as TabsList,
  dl as TabsTrigger,
  ur as TestimonialCard,
  Rl as Testimonials,
  Be as Textarea,
  ao as Toaster,
  ul as Toggle,
  ml as ToggleGroup,
  fl as ToggleGroupItem,
  Ua as Tooltip,
  Xa as TooltipContent,
  Ka as TooltipProvider,
  Wa as TooltipTrigger,
  Xt as badgeVariants,
  Jt as buttonGroupVariants,
  J as buttonVariants,
  h as cn,
  at as navigationMenuTriggerStyle,
  or as tabsListVariants,
  nt as toggleVariants,
  fn as useComboboxAnchor,
  ae as useFormField,
  qa as useIsMobile,
  re as useSidebar
};
