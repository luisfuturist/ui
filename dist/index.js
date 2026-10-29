import { jsx as a, jsxs as d, Fragment as se } from "react/jsx-runtime";
import { Slot as $e } from "@radix-ui/react-slot";
import * as u from "react";
import { useMemo as Fe } from "react";
import { clsx as Ee } from "clsx";
import { twMerge as Be } from "tailwind-merge";
import { cva as _ } from "class-variance-authority";
import { useTheme as Oe } from "next-themes";
import { Toaster as Ve } from "sonner";
import { cn as r } from "cn";
import L from "~icons/material-symbols/keyboard-arrow-down";
import { Accordion as H, AlertDialog as R, AspectRatio as He, Avatar as de, Slot as D, Separator as Ke, Checkbox as fe, Collapsible as le, ScrollArea as V, Dialog as x, ContextMenu as w, Label as qe, HoverCard as W, Menubar as N, NavigationMenu as j, Popover as K, Progress as pe, RadioGroup as ne, Select as k, Tooltip as F, Slider as q, Switch as be, Tabs as Y, Toggle as We, ToggleGroup as Ne } from "radix-ui";
import E from "~icons/material-symbols/chevron-right";
import ye from "~icons/material-symbols/more-horiz";
import ze from "~icons/material-symbols/chevron-left";
import { getDefaultClassNames as ke, DayPicker as Ue } from "react-day-picker";
import Xe from "embla-carousel-react";
import Ye from "~icons/material-symbols/arrow-back";
import Je from "~icons/material-symbols/arrow-forward";
import * as ce from "recharts";
import B from "~icons/material-symbols/check";
import { Combobox as h } from "@base-ui/react";
import J from "~icons/material-symbols/close";
import { Command as $ } from "cmdk";
import Qe from "~icons/material-symbols/search";
import ue from "~icons/material-symbols/circle";
import { Drawer as A } from "vaul";
import * as y from "@radix-ui/react-dropdown-menu";
import { FormProvider as Ze, Controller as et, useFormContext as tt, useFormState as at } from "react-hook-form";
import { OTPInput as rt, OTPInputContext as ot } from "input-otp";
import nt from "~icons/material-symbols/remove";
import it from "~icons/material-symbols/drag-indicator";
import * as me from "react-resizable-panels";
import st from "~icons/material-symbols/keyboard-arrow-up";
import dt from "~icons/material-symbols/view-sidebar";
import lt from "~icons/material-symbols/progress-activity";
import ct from "~icons/material-symbols/arrow-outward";
function C(...e) {
  return Be(Ee(e));
}
const U = _(
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
        "icon-lg": "size-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function P({
  className: e,
  variant: t,
  size: o,
  "data-augmented-ui": n,
  asChild: i = !1,
  ...s
}) {
  const c = i ? $e : "button", m = n ?? (t?.startsWith("augmented") ? "tr-clip bl-clip both" : void 0);
  return /* @__PURE__ */ a(
    c,
    {
      "data-slot": "button",
      className: C(U({ variant: t, size: o, className: e })),
      "data-augmented-ui": m,
      ...s
    }
  );
}
function or({ toastOptions: e, ...t }) {
  const { theme: o = "system" } = Oe();
  return /* @__PURE__ */ a(
    Ve,
    {
      theme: o,
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
function nr({
  ...e
}) {
  return /* @__PURE__ */ a(H.Root, { "data-slot": "accordion", ...e });
}
function ir({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    H.Item,
    {
      "data-slot": "accordion-item",
      className: r("border-b last:border-b-0", e),
      ...t
    }
  );
}
function sr({
  className: e,
  children: t,
  ...o
}) {
  return /* @__PURE__ */ a(H.Header, { className: "flex", children: /* @__PURE__ */ d(
    H.Trigger,
    {
      "data-slot": "accordion-trigger",
      className: r(
        "flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180",
        e
      ),
      ...o,
      children: [
        t,
        /* @__PURE__ */ a(L, { className: "pointer-events-none size-4 shrink-0 translate-y-0.5 text-muted-foreground transition-transform duration-200" })
      ]
    }
  ) });
}
function dr({
  className: e,
  children: t,
  ...o
}) {
  return /* @__PURE__ */ a(
    H.Content,
    {
      "data-slot": "accordion-content",
      className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
      ...o,
      children: /* @__PURE__ */ a("div", { className: r("pt-0 pb-4", e), children: t })
    }
  );
}
const ut = _(
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
function lr({
  className: e,
  variant: t,
  ...o
}) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "alert",
      "data-augmented-ui": "tr-clip bl-clip both",
      role: "alert",
      className: r(ut({ variant: t }), e),
      ...o
    }
  );
}
function cr({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "alert-title",
      className: r(
        "col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight",
        e
      ),
      ...t
    }
  );
}
function ur({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "alert-description",
      className: r(
        "col-start-2 grid justify-items-start gap-1 text-sm text-muted-foreground [&_p]:leading-relaxed",
        e
      ),
      ...t
    }
  );
}
function mr({
  ...e
}) {
  return /* @__PURE__ */ a(R.Root, { "data-slot": "alert-dialog", ...e });
}
function gr({
  ...e
}) {
  return /* @__PURE__ */ a(R.Trigger, { "data-slot": "alert-dialog-trigger", ...e });
}
function mt({
  ...e
}) {
  return /* @__PURE__ */ a(R.Portal, { "data-slot": "alert-dialog-portal", ...e });
}
function gt({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    R.Overlay,
    {
      "data-slot": "alert-dialog-overlay",
      className: r(
        "fixed inset-0 z-50 bg-black/50 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0",
        e
      ),
      ...t
    }
  );
}
function fr({
  className: e,
  size: t = "default",
  ...o
}) {
  return /* @__PURE__ */ d(mt, { children: [
    /* @__PURE__ */ a(gt, {}),
    /* @__PURE__ */ a(
      R.Content,
      {
        "data-slot": "alert-dialog-content",
        "data-augmented-ui": "tr-clip bl-clip both",
        "data-size": t,
        className: r(
          "aug-surface aug-surface-bg aug-pos-fixed group/alert-dialog-content fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg bg-background p-6 duration-200 data-[size=sm]:max-w-xs data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 data-[size=default]:sm:max-w-lg",
          e
        ),
        ...o
      }
    )
  ] });
}
function pr({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "alert-dialog-header",
      className: r(
        "grid grid-rows-[auto_1fr] place-items-center gap-1.5 text-center has-data-[slot=alert-dialog-media]:grid-rows-[auto_auto_1fr] has-data-[slot=alert-dialog-media]:gap-x-6 sm:group-data-[size=default]/alert-dialog-content:place-items-start sm:group-data-[size=default]/alert-dialog-content:text-left sm:group-data-[size=default]/alert-dialog-content:has-data-[slot=alert-dialog-media]:grid-rows-[auto_1fr]",
        e
      ),
      ...t
    }
  );
}
function br({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "alert-dialog-footer",
      className: r(
        "flex flex-col-reverse gap-2 group-data-[size=sm]/alert-dialog-content:grid group-data-[size=sm]/alert-dialog-content:grid-cols-2 sm:flex-row sm:justify-end",
        e
      ),
      ...t
    }
  );
}
function vr({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    R.Title,
    {
      "data-slot": "alert-dialog-title",
      className: r(
        "text-lg font-semibold sm:group-data-[size=default]/alert-dialog-content:group-has-data-[slot=alert-dialog-media]/alert-dialog-content:col-start-2",
        e
      ),
      ...t
    }
  );
}
function hr({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    R.Description,
    {
      "data-slot": "alert-dialog-description",
      className: r("text-sm text-muted-foreground", e),
      ...t
    }
  );
}
function xr({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "alert-dialog-media",
      className: r(
        "mb-2 inline-flex size-16 items-center justify-center rounded-md bg-muted sm:group-data-[size=default]/alert-dialog-content:row-span-2 *:[svg:not([class*='size-'])]:size-8",
        e
      ),
      ...t
    }
  );
}
function wr({
  className: e,
  variant: t = "default",
  size: o = "default",
  ...n
}) {
  return /* @__PURE__ */ a(P, { variant: t, size: o, asChild: !0, children: /* @__PURE__ */ a(
    R.Action,
    {
      "data-slot": "alert-dialog-action",
      className: r(e),
      ...n
    }
  ) });
}
function Nr({
  className: e,
  variant: t = "outline",
  size: o = "default",
  ...n
}) {
  return /* @__PURE__ */ a(P, { variant: t, size: o, asChild: !0, children: /* @__PURE__ */ a(
    R.Cancel,
    {
      "data-slot": "alert-dialog-cancel",
      className: r(e),
      ...n
    }
  ) });
}
function yr({
  ...e
}) {
  return /* @__PURE__ */ a(He.Root, { "data-slot": "aspect-ratio", ...e });
}
function zr({
  className: e,
  size: t = "default",
  ...o
}) {
  return /* @__PURE__ */ a(
    de.Root,
    {
      "data-slot": "avatar",
      "data-size": t,
      className: r(
        "group/avatar relative flex size-8 shrink-0 rounded-full select-none data-[size=lg]:size-10 data-[size=sm]:size-6",
        e
      ),
      ...o
    }
  );
}
function kr({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    de.Image,
    {
      "data-slot": "avatar-image",
      className: r("aspect-square size-full rounded-full", e),
      ...t
    }
  );
}
function Cr({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    de.Fallback,
    {
      "data-slot": "avatar-fallback",
      className: r(
        "flex size-full items-center justify-center rounded-full bg-foreground text-sm font-medium text-background group-data-[size=sm]/avatar:text-xs",
        e
      ),
      ...t
    }
  );
}
function _r({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "span",
    {
      "data-slot": "avatar-badge",
      className: r(
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
function Sr({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "avatar-group",
      className: r(
        "group/avatar-group flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:ring-background",
        e
      ),
      ...t
    }
  );
}
function Ir({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "avatar-group-count",
      className: r(
        "relative flex size-8 shrink-0 items-center justify-center rounded-full bg-foreground text-sm font-medium text-background ring-2 ring-background group-has-data-[size=lg]/avatar-group:size-10 group-has-data-[size=sm]/avatar-group:size-6 [&>svg]:size-4 group-has-data-[size=lg]/avatar-group:[&>svg]:size-5 group-has-data-[size=sm]/avatar-group:[&>svg]:size-3",
        e
      ),
      ...t
    }
  );
}
const ft = _(
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
function Mr({
  className: e,
  variant: t = "default",
  asChild: o = !1,
  ...n
}) {
  const i = o ? D.Root : "span";
  return /* @__PURE__ */ a(
    i,
    {
      "data-slot": "badge",
      "data-variant": t,
      className: r(ft({ variant: t }), e),
      ...n
    }
  );
}
function Tr({ ...e }) {
  return /* @__PURE__ */ a("nav", { "aria-label": "breadcrumb", "data-slot": "breadcrumb", ...e });
}
function Dr({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "ol",
    {
      "data-slot": "breadcrumb-list",
      className: r(
        "flex flex-wrap items-center gap-1.5 text-sm break-words text-muted-foreground sm:gap-2.5",
        e
      ),
      ...t
    }
  );
}
function Pr({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "li",
    {
      "data-slot": "breadcrumb-item",
      className: r("inline-flex items-center gap-1.5", e),
      ...t
    }
  );
}
function Rr({
  asChild: e,
  className: t,
  ...o
}) {
  const n = e ? D.Root : "a";
  return /* @__PURE__ */ a(
    n,
    {
      "data-slot": "breadcrumb-link",
      className: r("transition-colors hover:text-foreground", t),
      ...o
    }
  );
}
function jr({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "span",
    {
      "data-slot": "breadcrumb-page",
      role: "link",
      "aria-disabled": "true",
      "aria-current": "page",
      className: r("font-normal text-foreground", e),
      ...t
    }
  );
}
function Ar({
  children: e,
  className: t,
  ...o
}) {
  return /* @__PURE__ */ a(
    "li",
    {
      "data-slot": "breadcrumb-separator",
      role: "presentation",
      "aria-hidden": "true",
      className: r("[&>svg]:size-3.5", t),
      ...o,
      children: e ?? /* @__PURE__ */ a(E, {})
    }
  );
}
function Gr({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ d(
    "span",
    {
      "data-slot": "breadcrumb-ellipsis",
      role: "presentation",
      "aria-hidden": "true",
      className: r("flex size-9 items-center justify-center", e),
      ...t,
      children: [
        /* @__PURE__ */ a(ye, { className: "size-4" }),
        /* @__PURE__ */ a("span", { className: "sr-only", children: "More" })
      ]
    }
  );
}
function Q({
  className: e,
  orientation: t = "horizontal",
  decorative: o = !0,
  ...n
}) {
  return /* @__PURE__ */ a(
    Ke.Root,
    {
      "data-slot": "separator",
      decorative: o,
      orientation: t,
      className: r(
        "shrink-0 bg-foreground data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        e
      ),
      ...n
    }
  );
}
const pt = _(
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
function Lr({
  className: e,
  orientation: t,
  ...o
}) {
  return /* @__PURE__ */ a(
    "div",
    {
      role: "group",
      "data-slot": "button-group",
      "data-orientation": t,
      className: r(pt({ orientation: t }), e),
      ...o
    }
  );
}
function $r({
  className: e,
  asChild: t = !1,
  ...o
}) {
  const n = t ? D.Root : "div";
  return /* @__PURE__ */ a(
    n,
    {
      className: r(
        "flex items-center gap-2 rounded-md border border-foreground bg-card px-4 text-sm font-medium shadow-xs [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...o
    }
  );
}
function Fr({
  className: e,
  orientation: t = "vertical",
  ...o
}) {
  return /* @__PURE__ */ a(
    Q,
    {
      "data-slot": "button-group-separator",
      orientation: t,
      className: r(
        "relative m-0! self-stretch bg-foreground data-[orientation=vertical]:h-auto",
        e
      ),
      ...o
    }
  );
}
function Er({
  className: e,
  classNames: t,
  showOutsideDays: o = !0,
  captionLayout: n = "label",
  buttonVariant: i = "ghost",
  formatters: s,
  components: c,
  ...m
}) {
  const l = ke();
  return /* @__PURE__ */ a(
    Ue,
    {
      showOutsideDays: o,
      className: r(
        "group/calendar bg-background p-3 [--cell-size:--spacing(8)] [[data-slot=card-content]_&]:bg-transparent [[data-slot=popover-content]_&]:bg-transparent",
        String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`,
        String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`,
        e
      ),
      captionLayout: n,
      formatters: {
        formatMonthDropdown: (g) => g.toLocaleString("default", { month: "short" }),
        ...s
      },
      classNames: {
        root: r("w-fit", l.root),
        months: r(
          "relative flex flex-col gap-4 md:flex-row",
          l.months
        ),
        month: r("flex w-full flex-col gap-4", l.month),
        nav: r(
          "absolute inset-x-0 top-0 flex w-full items-center justify-between gap-1",
          l.nav
        ),
        button_previous: r(
          U({ variant: i }),
          "size-(--cell-size) p-0 select-none aria-disabled:opacity-50",
          l.button_previous
        ),
        button_next: r(
          U({ variant: i }),
          "size-(--cell-size) p-0 select-none aria-disabled:opacity-50",
          l.button_next
        ),
        month_caption: r(
          "flex h-(--cell-size) w-full items-center justify-center px-(--cell-size)",
          l.month_caption
        ),
        dropdowns: r(
          "flex h-(--cell-size) w-full items-center justify-center gap-1.5 text-sm font-medium",
          l.dropdowns
        ),
        dropdown_root: r(
          "relative rounded-md border border-input shadow-xs has-focus:border-ring has-focus:ring-[3px] has-focus:ring-ring/50",
          l.dropdown_root
        ),
        dropdown: r(
          "absolute inset-0 bg-popover opacity-0",
          l.dropdown
        ),
        caption_label: r(
          "font-medium select-none",
          n === "label" ? "text-sm" : "flex h-8 items-center gap-1 rounded-md pr-1 pl-2 text-sm [&>svg]:size-3.5 [&>svg]:text-muted-foreground",
          l.caption_label
        ),
        month_grid: r("w-full border-collapse", l.month_grid),
        weekdays: r("flex", l.weekdays),
        weekday: r(
          "flex-1 rounded-md text-[0.8rem] font-normal text-muted-foreground select-none",
          l.weekday
        ),
        week: r("mt-2 flex w-full", l.week),
        week_number_header: r(
          "w-(--cell-size) select-none",
          l.week_number_header
        ),
        week_number: r(
          "text-[0.8rem] text-muted-foreground select-none",
          l.week_number
        ),
        day: r(
          "group/day relative aspect-square h-full w-full p-0 text-center select-none [&:last-child[data-selected=true]_button]:rounded-r-md",
          m.showWeekNumber ? "[&:nth-child(2)[data-selected=true]_button]:rounded-l-md" : "[&:first-child[data-selected=true]_button]:rounded-l-md",
          l.day
        ),
        range_start: r(
          "rounded-l-md bg-accent",
          l.range_start
        ),
        range_middle: r("rounded-none", l.range_middle),
        range_end: r("rounded-r-md bg-accent", l.range_end),
        today: r(
          "rounded-md bg-accent text-accent-foreground data-[selected=true]:rounded-none",
          l.today
        ),
        outside: r(
          "text-muted-foreground aria-selected:text-muted-foreground",
          l.outside
        ),
        disabled: r(
          "text-muted-foreground opacity-50",
          l.disabled
        ),
        hidden: r("invisible", l.hidden),
        ...t
      },
      components: {
        Root: ({ className: g, rootRef: b, ...v }) => /* @__PURE__ */ a(
          "div",
          {
            "data-slot": "calendar",
            ref: b,
            className: r(g),
            ...v
          }
        ),
        Chevron: ({ className: g, orientation: b, ...v }) => b === "left" ? /* @__PURE__ */ a(ze, { className: r("size-4", g), ...v }) : b === "right" ? /* @__PURE__ */ a(
          E,
          {
            className: r("size-4", g),
            ...v
          }
        ) : /* @__PURE__ */ a(L, { className: r("size-4", g), ...v }),
        DayButton: bt,
        WeekNumber: ({ children: g, ...b }) => /* @__PURE__ */ a("td", { ...b, children: /* @__PURE__ */ a("div", { className: "flex size-(--cell-size) items-center justify-center text-center", children: g }) }),
        ...c
      },
      ...m
    }
  );
}
function bt({
  className: e,
  day: t,
  modifiers: o,
  ...n
}) {
  const i = ke(), s = u.useRef(null);
  return u.useEffect(() => {
    o.focused && s.current?.focus();
  }, [o.focused]), /* @__PURE__ */ a(
    P,
    {
      ref: s,
      variant: "ghost",
      size: "icon",
      "data-day": t.date.toLocaleDateString(),
      "data-selected-single": o.selected && !o.range_start && !o.range_end && !o.range_middle,
      "data-range-start": o.range_start,
      "data-range-end": o.range_end,
      "data-range-middle": o.range_middle,
      className: r(
        "flex aspect-square size-auto w-full min-w-(--cell-size) flex-col gap-1 leading-none font-normal group-data-[focused=true]/day:relative group-data-[focused=true]/day:z-10 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 data-[range-end=true]:rounded-md data-[range-end=true]:rounded-r-md data-[range-end=true]:bg-primary data-[range-end=true]:text-primary-foreground data-[range-middle=true]:rounded-none data-[range-middle=true]:bg-accent data-[range-middle=true]:text-accent-foreground data-[range-start=true]:rounded-md data-[range-start=true]:rounded-l-md data-[range-start=true]:bg-primary data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground hover:bg-foreground hover:text-background [&>span]:text-xs [&>span]:opacity-70",
        i.day,
        e
      ),
      ...n
    }
  );
}
function vt({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "card",
      "data-augmented-ui": "tr-clip bl-clip both",
      className: r(
        "aug-surface aug-surface-card flex flex-col gap-6 rounded-xl bg-card py-6 text-card-foreground ",
        e
      ),
      ...t
    }
  );
}
function ht({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "card-header",
      className: r(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        e
      ),
      ...t
    }
  );
}
function xt({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "card-title",
      className: r("leading-none font-semibold", e),
      ...t
    }
  );
}
function wt({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "card-description",
      className: r("text-sm text-muted-foreground", e),
      ...t
    }
  );
}
function Br({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "card-action",
      className: r(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        e
      ),
      ...t
    }
  );
}
function Nt({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "card-content",
      className: r("px-6", e),
      ...t
    }
  );
}
function yt({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "card-footer",
      className: r("flex items-center px-6 [.border-t]:pt-6", e),
      ...t
    }
  );
}
const Ce = u.createContext(null);
function Z() {
  const e = u.useContext(Ce);
  if (!e)
    throw new Error("useCarousel must be used within a <Carousel />");
  return e;
}
function Or({
  orientation: e = "horizontal",
  opts: t,
  setApi: o,
  plugins: n,
  className: i,
  children: s,
  ...c
}) {
  const [m, l] = Xe(
    {
      ...t,
      axis: e === "horizontal" ? "x" : "y"
    },
    n
  ), [g, b] = u.useState(!1), [v, I] = u.useState(!1), z = u.useCallback((p) => {
    p && (b(p.canScrollPrev()), I(p.canScrollNext()));
  }, []), M = u.useCallback(() => {
    l?.scrollPrev();
  }, [l]), T = u.useCallback(() => {
    l?.scrollNext();
  }, [l]), f = u.useCallback(
    (p) => {
      p.key === "ArrowLeft" ? (p.preventDefault(), M()) : p.key === "ArrowRight" && (p.preventDefault(), T());
    },
    [M, T]
  );
  return u.useEffect(() => {
    !l || !o || o(l);
  }, [l, o]), u.useEffect(() => {
    if (l)
      return z(l), l.on("reInit", z), l.on("select", z), () => {
        l?.off("select", z);
      };
  }, [l, z]), /* @__PURE__ */ a(
    Ce.Provider,
    {
      value: {
        carouselRef: m,
        api: l,
        opts: t,
        orientation: e || (t?.axis === "y" ? "vertical" : "horizontal"),
        scrollPrev: M,
        scrollNext: T,
        canScrollPrev: g,
        canScrollNext: v
      },
      children: /* @__PURE__ */ a(
        "div",
        {
          onKeyDownCapture: f,
          className: r("relative", i),
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
function Vr({ className: e, ...t }) {
  const { carouselRef: o, orientation: n } = Z();
  return /* @__PURE__ */ a(
    "div",
    {
      ref: o,
      className: "overflow-hidden",
      "data-slot": "carousel-content",
      children: /* @__PURE__ */ a(
        "div",
        {
          className: r(
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
function Hr({ className: e, ...t }) {
  const { orientation: o } = Z();
  return /* @__PURE__ */ a(
    "div",
    {
      role: "group",
      "aria-roledescription": "slide",
      "data-slot": "carousel-item",
      className: r(
        "min-w-0 shrink-0 grow-0 basis-full",
        o === "horizontal" ? "pl-4" : "pt-4",
        e
      ),
      ...t
    }
  );
}
function Kr({
  className: e,
  variant: t = "outline",
  size: o = "icon",
  ...n
}) {
  const { orientation: i, scrollPrev: s, canScrollPrev: c } = Z();
  return /* @__PURE__ */ d(
    P,
    {
      "data-slot": "carousel-previous",
      variant: t,
      size: o,
      className: r(
        "absolute size-8",
        i === "horizontal" ? "top-1/2 -left-12 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
        e
      ),
      disabled: !c,
      onClick: s,
      ...n,
      children: [
        /* @__PURE__ */ a(Ye, {}),
        /* @__PURE__ */ a("span", { className: "sr-only", children: "Previous slide" })
      ]
    }
  );
}
function qr({
  className: e,
  variant: t = "outline",
  size: o = "icon",
  ...n
}) {
  const { orientation: i, scrollNext: s, canScrollNext: c } = Z();
  return /* @__PURE__ */ d(
    P,
    {
      "data-slot": "carousel-next",
      variant: t,
      size: o,
      className: r(
        "absolute size-8",
        i === "horizontal" ? "top-1/2 -right-12 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        e
      ),
      disabled: !c,
      onClick: s,
      ...n,
      children: [
        /* @__PURE__ */ a(Je, {}),
        /* @__PURE__ */ a("span", { className: "sr-only", children: "Next slide" })
      ]
    }
  );
}
const zt = { light: "", dark: ".dark" }, kt = { width: 320, height: 200 }, _e = u.createContext(null);
function Se() {
  const e = u.useContext(_e);
  if (!e)
    throw new Error("useChart must be used within a <ChartContainer />");
  return e;
}
function Wr({
  id: e,
  className: t,
  children: o,
  config: n,
  initialDimension: i = kt,
  ...s
}) {
  const c = u.useId(), m = `chart-${e ?? c.replace(/:/g, "")}`;
  return /* @__PURE__ */ a(_e.Provider, { value: { config: n }, children: /* @__PURE__ */ d(
    "div",
    {
      "data-slot": "chart",
      "data-chart": m,
      className: r(
        "flex aspect-video justify-center text-xs [&_.recharts-cartesian-axis-tick_text]:fill-card-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-card [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-card [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector]:outline-hidden [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-surface]:outline-hidden",
        t
      ),
      ...s,
      children: [
        /* @__PURE__ */ a(Ct, { id: m, config: n }),
        /* @__PURE__ */ a(
          ce.ResponsiveContainer,
          {
            initialDimension: i,
            children: o
          }
        )
      ]
    }
  ) });
}
const Ct = ({ id: e, config: t }) => {
  const o = Object.entries(t).filter(
    ([, n]) => n.theme ?? n.color
  );
  return o.length ? /* @__PURE__ */ a(
    "style",
    {
      dangerouslySetInnerHTML: {
        __html: Object.entries(zt).map(
          ([n, i]) => `
${i} [data-chart=${e}] {
${o.map(([s, c]) => {
            const m = c.theme?.[n] ?? c.color;
            return m ? `  --color-${s}: ${m};` : null;
          }).join(`
`)}
}
`
        ).join(`
`)
      }
    }
  ) : null;
}, Ur = ce.Tooltip;
function Xr({
  active: e,
  payload: t,
  className: o,
  indicator: n = "dot",
  hideLabel: i = !1,
  hideIndicator: s = !1,
  label: c,
  labelFormatter: m,
  labelClassName: l,
  formatter: g,
  color: b,
  nameKey: v,
  labelKey: I
}) {
  const { config: z } = Se(), M = u.useMemo(() => {
    if (i || !t?.length)
      return null;
    const [f] = t, p = `${I ?? f?.dataKey ?? f?.name ?? "value"}`, S = ie(z, f, p), G = !I && typeof c == "string" ? z[c]?.label ?? c : S?.label;
    return m ? /* @__PURE__ */ a("div", { className: r("font-medium", l), children: m(G, t) }) : G ? /* @__PURE__ */ a("div", { className: r("font-medium", l), children: G }) : null;
  }, [
    c,
    m,
    t,
    i,
    l,
    z,
    I
  ]);
  if (!e || !t?.length)
    return null;
  const T = t.length === 1 && n !== "dot";
  return /* @__PURE__ */ d(
    "div",
    {
      className: r(
        "grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl",
        o
      ),
      children: [
        T ? null : M,
        /* @__PURE__ */ a("div", { className: "grid gap-1.5", children: t.filter((f) => f.type !== "none").map((f, p) => {
          const S = `${v ?? f.name ?? f.dataKey ?? "value"}`, G = ie(z, f, S), ge = b ?? f.payload?.fill ?? f.color;
          return /* @__PURE__ */ a(
            "div",
            {
              className: r(
                "flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-muted-foreground",
                n === "dot" && "items-center"
              ),
              children: g && f?.value !== void 0 && f.name ? g(f.value, f.name, f, p, f.payload) : /* @__PURE__ */ d(se, { children: [
                G?.icon ? /* @__PURE__ */ a(G.icon, {}) : !s && /* @__PURE__ */ a(
                  "div",
                  {
                    className: r(
                      "shrink-0 border-(--color-border) bg-(--color-bg)",
                      {
                        "h-2.5 w-2.5": n === "dot",
                        "w-1": n === "line",
                        "w-0 border-[1.5px] border-dashed bg-transparent": n === "dashed",
                        "my-0.5": T && n === "dashed"
                      }
                    ),
                    style: {
                      "--color-bg": ge,
                      "--color-border": ge
                    }
                  }
                ),
                /* @__PURE__ */ d(
                  "div",
                  {
                    className: r(
                      "flex flex-1 justify-between leading-none",
                      T ? "items-end" : "items-center"
                    ),
                    children: [
                      /* @__PURE__ */ d("div", { className: "grid gap-1.5", children: [
                        T ? M : null,
                        /* @__PURE__ */ a("span", { className: "text-muted-foreground", children: G?.label ?? f.name })
                      ] }),
                      f.value != null && /* @__PURE__ */ a("span", { className: "font-mono font-medium text-foreground tabular-nums", children: typeof f.value == "number" ? f.value.toLocaleString() : String(f.value) })
                    ]
                  }
                )
              ] })
            },
            p
          );
        }) })
      ]
    }
  );
}
const Yr = ce.Legend;
function Jr({
  className: e,
  hideIcon: t = !1,
  payload: o,
  verticalAlign: n = "bottom",
  nameKey: i
}) {
  const { config: s } = Se();
  return o?.length ? /* @__PURE__ */ a(
    "div",
    {
      className: r(
        "flex items-center justify-center gap-4",
        n === "top" ? "pb-3" : "pt-3",
        e
      ),
      children: o.filter((c) => c.type !== "none").map((c, m) => {
        const l = `${i ?? c.dataKey ?? "value"}`, g = ie(s, c, l);
        return /* @__PURE__ */ d(
          "div",
          {
            className: r(
              "flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-muted-foreground"
            ),
            children: [
              g?.icon && !t ? /* @__PURE__ */ a(g.icon, {}) : /* @__PURE__ */ a(
                "div",
                {
                  className: "h-2 w-2 shrink-0",
                  style: {
                    backgroundColor: c.color
                  }
                }
              ),
              g?.label
            ]
          },
          m
        );
      })
    }
  ) : null;
}
function ie(e, t, o) {
  if (typeof t != "object" || t === null)
    return;
  const n = "payload" in t && typeof t.payload == "object" && t.payload !== null ? t.payload : void 0;
  let i = o;
  return o in t && typeof t[o] == "string" ? i = t[o] : n && o in n && typeof n[o] == "string" && (i = n[o]), i in e ? e[i] : e[o];
}
function Qr({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    fe.Root,
    {
      "data-slot": "checkbox",
      className: r(
        "peer size-4 shrink-0 border border-input shadow-xs transition-shadow outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 data-[state=checked]:border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:bg-background dark:aria-invalid:ring-destructive/40 dark:data-[state=checked]:bg-primary",
        e
      ),
      ...t,
      children: /* @__PURE__ */ a(
        fe.Indicator,
        {
          "data-slot": "checkbox-indicator",
          className: "grid place-content-center text-current transition-none",
          children: /* @__PURE__ */ a(B, { className: "size-3.5" })
        }
      )
    }
  );
}
function Zr({
  ...e
}) {
  return /* @__PURE__ */ a(le.Root, { "data-slot": "collapsible", ...e });
}
function eo({
  ...e
}) {
  return /* @__PURE__ */ a(
    le.CollapsibleTrigger,
    {
      "data-slot": "collapsible-trigger",
      ...e
    }
  );
}
function to({
  ...e
}) {
  return /* @__PURE__ */ a(
    le.CollapsibleContent,
    {
      "data-slot": "collapsible-content",
      ...e
    }
  );
}
function X({ className: e, type: t, ...o }) {
  return /* @__PURE__ */ a(
    "input",
    {
      type: t,
      "data-slot": "input",
      className: r(
        "h-9 w-full min-w-0 rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none selection:bg-primary selection:text-primary-foreground file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:bg-background",
        "focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50",
        "aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40",
        e
      ),
      ...o
    }
  );
}
function _t({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "textarea",
    {
      "data-slot": "textarea",
      className: r(
        "flex field-sizing-content min-h-16 w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 md:text-sm dark:bg-background dark:aria-invalid:ring-destructive/40",
        e
      ),
      ...t
    }
  );
}
function St({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "input-group",
      role: "group",
      className: r(
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
const It = _(
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
function Mt({
  className: e,
  align: t = "inline-start",
  ...o
}) {
  return /* @__PURE__ */ a(
    "div",
    {
      role: "group",
      "data-slot": "input-group-addon",
      "data-align": t,
      className: r(It({ align: t }), e),
      onClick: (n) => {
        n.target.closest("button") || n.currentTarget.parentElement?.querySelector("input")?.focus();
      },
      ...o
    }
  );
}
const Tt = _(
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
function Ie({
  className: e,
  type: t = "button",
  variant: o = "ghost",
  size: n = "xs",
  ...i
}) {
  return /* @__PURE__ */ a(
    P,
    {
      type: t,
      "data-size": n,
      variant: o,
      className: r(Tt({ size: n }), e),
      ...i
    }
  );
}
function ao({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "span",
    {
      className: r(
        "flex items-center gap-2 text-sm text-muted-foreground [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...t
    }
  );
}
function Dt({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    X,
    {
      "data-slot": "input-group-control",
      className: r(
        "flex-1 rounded-none border-0 bg-transparent shadow-none focus-visible:ring-0 dark:bg-transparent",
        e
      ),
      ...t
    }
  );
}
function ro({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    _t,
    {
      "data-slot": "input-group-control",
      className: r(
        "flex-1 resize-none rounded-none border-0 bg-transparent py-3 shadow-none focus-visible:ring-0 dark:bg-transparent",
        e
      ),
      ...t
    }
  );
}
function O({
  className: e,
  children: t,
  ...o
}) {
  return /* @__PURE__ */ d(
    V.Root,
    {
      "data-slot": "scroll-area",
      className: r("relative", e),
      ...o,
      children: [
        /* @__PURE__ */ a(
          V.Viewport,
          {
            "data-slot": "scroll-area-viewport",
            className: "size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-1",
            children: t
          }
        ),
        /* @__PURE__ */ a(Me, {}),
        /* @__PURE__ */ a(V.Corner, {})
      ]
    }
  );
}
function Me({
  className: e,
  orientation: t = "vertical",
  ...o
}) {
  return /* @__PURE__ */ a(
    V.ScrollAreaScrollbar,
    {
      "data-slot": "scroll-area-scrollbar",
      orientation: t,
      className: r(
        "flex touch-none p-px transition-colors select-none",
        t === "vertical" && "h-full w-2.5 border-l border-l-transparent",
        t === "horizontal" && "h-2.5 flex-col border-t border-t-transparent",
        e
      ),
      ...o,
      children: /* @__PURE__ */ a(
        V.ScrollAreaThumb,
        {
          "data-slot": "scroll-area-thumb",
          className: "relative flex-1 bg-primary"
        }
      )
    }
  );
}
const oo = h.Root;
function no({ ...e }) {
  return /* @__PURE__ */ a(h.Value, { "data-slot": "combobox-value", ...e });
}
function Pt({
  className: e,
  children: t,
  ...o
}) {
  return /* @__PURE__ */ d(
    h.Trigger,
    {
      "data-slot": "combobox-trigger",
      className: r("[&_svg:not([class*='size-'])]:size-4", e),
      ...o,
      children: [
        t,
        /* @__PURE__ */ a(
          L,
          {
            "data-slot": "combobox-trigger-icon",
            className: "pointer-events-none size-4 text-muted-foreground"
          }
        )
      ]
    }
  );
}
function Rt({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    h.Clear,
    {
      "data-slot": "combobox-clear",
      render: /* @__PURE__ */ a(Ie, { variant: "ghost", size: "icon-xs" }),
      className: r(e),
      ...t,
      children: /* @__PURE__ */ a(J, { className: "pointer-events-none" })
    }
  );
}
function io({
  className: e,
  children: t,
  disabled: o = !1,
  showTrigger: n = !0,
  showClear: i = !1,
  ...s
}) {
  return /* @__PURE__ */ d(St, { className: r("w-auto", e), children: [
    /* @__PURE__ */ a(
      h.Input,
      {
        render: /* @__PURE__ */ a(Dt, { disabled: o }),
        ...s
      }
    ),
    /* @__PURE__ */ d(Mt, { align: "inline-end", children: [
      n && /* @__PURE__ */ a(
        Ie,
        {
          size: "icon-xs",
          variant: "ghost",
          asChild: !0,
          "data-slot": "input-group-button",
          className: "group-has-data-[slot=combobox-clear]/input-group:hidden data-pressed:bg-transparent",
          disabled: o,
          children: /* @__PURE__ */ a(Pt, {})
        }
      ),
      i && /* @__PURE__ */ a(Rt, { disabled: o })
    ] }),
    t
  ] });
}
function so({
  className: e,
  side: t = "bottom",
  sideOffset: o = 6,
  align: n = "start",
  alignOffset: i = 0,
  anchor: s,
  ...c
}) {
  return /* @__PURE__ */ a(h.Portal, { children: /* @__PURE__ */ a(
    h.Positioner,
    {
      side: t,
      sideOffset: o,
      align: n,
      alignOffset: i,
      anchor: s,
      className: "isolate z-50",
      children: /* @__PURE__ */ a(
        h.Popup,
        {
          "data-slot": "combobox-content",
          "data-chips": !!s,
          className: r(
            "group/combobox-content relative max-h-96 w-(--anchor-width) max-w-(--available-width) min-w-[calc(var(--anchor-width)+--spacing(7))] origin-(--transform-origin) overflow-hidden rounded-md bg-popover text-popover-foreground duration-100 data-[chips=true]:min-w-(--anchor-width) data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 *:data-[slot=input-group]:m-1 *:data-[slot=input-group]:mb-0 *:data-[slot=input-group]:h-8 *:data-[slot=input-group]:-input/30 *:data-[slot=input-group]:bg-input/30 *:data-[slot=input-group]:-none data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95",
            e
          ),
          ...c
        }
      )
    }
  ) });
}
function lo({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(O, { className: "max-h-[min(calc(--spacing(96)---spacing(9)),calc(var(--available-height)---spacing(9)))]", children: /* @__PURE__ */ a(
    h.List,
    {
      "data-slot": "combobox-list",
      className: r("p-1 data-empty:p-0", e),
      ...t
    }
  ) });
}
function co({
  className: e,
  children: t,
  ...o
}) {
  return /* @__PURE__ */ d(
    h.Item,
    {
      "data-slot": "combobox-item",
      className: r(
        "relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...o,
      children: [
        t,
        /* @__PURE__ */ a(
          h.ItemIndicator,
          {
            "data-slot": "combobox-item-indicator",
            render: /* @__PURE__ */ a("span", { className: "pointer-events-none absolute right-2 flex size-4 items-center justify-center" }),
            children: /* @__PURE__ */ a(B, { className: "pointer-events-none size-4 pointer-coarse:size-5" })
          }
        )
      ]
    }
  );
}
function uo({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    h.Group,
    {
      "data-slot": "combobox-group",
      className: r(e),
      ...t
    }
  );
}
function mo({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    h.GroupLabel,
    {
      "data-slot": "combobox-label",
      className: r(
        "px-2 py-1.5 text-xs text-muted-foreground pointer-coarse:px-3 pointer-coarse:py-2 pointer-coarse:text-sm",
        e
      ),
      ...t
    }
  );
}
function go({ ...e }) {
  return /* @__PURE__ */ a(h.Collection, { "data-slot": "combobox-collection", ...e });
}
function fo({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    h.Empty,
    {
      "data-slot": "combobox-empty",
      className: r(
        "hidden w-full justify-center py-2 text-center text-sm text-muted-foreground group-data-empty/combobox-content:flex",
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
    h.Separator,
    {
      "data-slot": "combobox-separator",
      className: r("-mx-1 my-1 h-px bg-foreground", e),
      ...t
    }
  );
}
function bo({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    h.Chips,
    {
      "data-slot": "combobox-chips",
      className: r(
        "flex min-h-9 flex-wrap items-center gap-1.5 rounded-md border border-input bg-transparent bg-clip-padding px-2.5 py-1.5 text-sm shadow-xs transition-[color,box-shadow] focus-within:border-ring focus-within:ring-[3px] focus-within:ring-ring/50 has-aria-invalid:border-destructive has-aria-invalid:ring-[3px] has-aria-invalid:ring-destructive/20 has-data-[slot=combobox-chip]:px-1.5 dark:bg-background dark:has-aria-invalid:border-destructive/50 dark:has-aria-invalid:ring-destructive/40",
        e
      ),
      ...t
    }
  );
}
function vo({
  className: e,
  children: t,
  showRemove: o = !0,
  ...n
}) {
  return /* @__PURE__ */ d(
    h.Chip,
    {
      "data-slot": "combobox-chip",
      className: r(
        "flex h-[calc(--spacing(5.5))] w-fit items-center justify-center gap-1 rounded-sm bg-foreground px-1.5 text-xs font-medium whitespace-nowrap text-background has-disabled:pointer-events-none has-disabled:cursor-not-allowed has-disabled:opacity-50 has-data-[slot=combobox-chip-remove]:pr-0",
        e
      ),
      ...n,
      children: [
        t,
        o && /* @__PURE__ */ a(
          h.ChipRemove,
          {
            render: /* @__PURE__ */ a(P, { variant: "ghost", size: "icon-xs" }),
            className: "-ml-1 text-background/70 hover:bg-background/20 hover:text-background focus-visible:ring-background/60",
            "data-slot": "combobox-chip-remove",
            children: /* @__PURE__ */ a(J, { className: "pointer-events-none" })
          }
        )
      ]
    }
  );
}
function ho({
  className: e,
  children: t,
  ...o
}) {
  return /* @__PURE__ */ a(
    h.Input,
    {
      "data-slot": "combobox-chip-input",
      className: r("min-w-16 flex-1 outline-none", e),
      ...o
    }
  );
}
function xo() {
  return u.useRef(null);
}
function ee({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "kbd",
    {
      "data-slot": "kbd",
      className: r(
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
function wo({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "kbd",
    {
      "data-slot": "kbd-group",
      className: r("inline-flex items-center gap-1", e),
      ...t
    }
  );
}
function jt({
  ...e
}) {
  return /* @__PURE__ */ a(x.Root, { "data-slot": "dialog", ...e });
}
function No({
  ...e
}) {
  return /* @__PURE__ */ a(x.Trigger, { "data-slot": "dialog-trigger", ...e });
}
function At({
  ...e
}) {
  return /* @__PURE__ */ a(x.Portal, { "data-slot": "dialog-portal", ...e });
}
function yo({
  ...e
}) {
  return /* @__PURE__ */ a(x.Close, { "data-slot": "dialog-close", ...e });
}
function Gt({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    x.Overlay,
    {
      "data-slot": "dialog-overlay",
      className: r(
        "fixed inset-0 z-50 bg-black/50 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0",
        e
      ),
      ...t
    }
  );
}
function Lt({
  className: e,
  children: t,
  showCloseButton: o = !0,
  augmented: n = !0,
  ...i
}) {
  return /* @__PURE__ */ d(At, { "data-slot": "dialog-portal", children: [
    /* @__PURE__ */ a(Gt, {}),
    /* @__PURE__ */ d(
      x.Content,
      {
        "data-slot": "dialog-content",
        "data-augmented-ui": n ? "tr-clip bl-clip both" : void 0,
        className: r(
          "fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg bg-background p-6 duration-200 outline-none data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 sm:max-w-lg",
          n && "aug-surface aug-surface-bg aug-pos-fixed",
          e
        ),
        ...i,
        children: [
          t,
          o && /* @__PURE__ */ d(
            x.Close,
            {
              "data-slot": "dialog-close",
              className: "absolute top-4 right-4 rounded-xs opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
              children: [
                /* @__PURE__ */ a(J, {}),
                /* @__PURE__ */ a("span", { className: "sr-only", children: "Close" })
              ]
            }
          )
        ]
      }
    )
  ] });
}
function $t({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "dialog-header",
      className: r("flex flex-col gap-2 text-center sm:text-left", e),
      ...t
    }
  );
}
function zo({
  className: e,
  showCloseButton: t = !1,
  children: o,
  ...n
}) {
  return /* @__PURE__ */ d(
    "div",
    {
      "data-slot": "dialog-footer",
      className: r(
        "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
        e
      ),
      ...n,
      children: [
        o,
        t && /* @__PURE__ */ a(x.Close, { asChild: !0, children: /* @__PURE__ */ a(P, { variant: "outline", children: "Close" }) })
      ]
    }
  );
}
function Ft({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    x.Title,
    {
      "data-slot": "dialog-title",
      className: r("text-lg leading-none font-semibold", e),
      ...t
    }
  );
}
function Et({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    x.Description,
    {
      "data-slot": "dialog-description",
      className: r("text-sm text-muted-foreground", e),
      ...t
    }
  );
}
function Bt({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    $,
    {
      "data-slot": "command",
      className: r(
        "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
        e
      ),
      ...t
    }
  );
}
function ko({
  title: e = "Command Palette",
  description: t = "Search for a command to run...",
  children: o,
  className: n,
  showCloseButton: i = !0,
  ...s
}) {
  return /* @__PURE__ */ d(jt, { ...s, children: [
    /* @__PURE__ */ d($t, { className: "sr-only", children: [
      /* @__PURE__ */ a(Ft, { children: e }),
      /* @__PURE__ */ a(Et, { children: t })
    ] }),
    /* @__PURE__ */ a(
      Lt,
      {
        className: r("overflow-hidden p-0", n),
        showCloseButton: i,
        augmented: !1,
        children: /* @__PURE__ */ a(
          Bt,
          {
            className: "**:data-[slot=command-input-wrapper]:h-12 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]]:px-2 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5",
            children: o
          }
        )
      }
    )
  ] });
}
function Co({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ d(
    "div",
    {
      "data-slot": "command-input-wrapper",
      className: "flex h-9 items-center gap-2 border-b px-3",
      children: [
        /* @__PURE__ */ a(Qe, { className: "size-4 shrink-0" }),
        /* @__PURE__ */ a(
          $.Input,
          {
            "data-slot": "command-input",
            className: r(
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
function _o({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(O, { className: "max-h-[300px]", children: /* @__PURE__ */ a(
    $.List,
    {
      "data-slot": "command-list",
      className: r("overflow-x-hidden", e),
      ...t
    }
  ) });
}
function So({
  ...e
}) {
  return /* @__PURE__ */ a(
    $.Empty,
    {
      "data-slot": "command-empty",
      className: "py-6 text-center text-sm",
      ...e
    }
  );
}
function Io({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    $.Group,
    {
      "data-slot": "command-group",
      className: r(
        "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
        e
      ),
      ...t
    }
  );
}
function Mo({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    $.Separator,
    {
      "data-slot": "command-separator",
      className: r("-mx-1 h-px bg-foreground", e),
      ...t
    }
  );
}
function To({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    $.Item,
    {
      "data-slot": "command-item",
      className: r(
        "relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-current",
        e
      ),
      ...t
    }
  );
}
function Do({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    ee,
    {
      "data-slot": "command-shortcut",
      className: r("ml-auto", e),
      ...t
    }
  );
}
function Po({
  ...e
}) {
  return /* @__PURE__ */ a(w.Root, { "data-slot": "context-menu", ...e });
}
function Ro({
  ...e
}) {
  return /* @__PURE__ */ a(w.Trigger, { "data-slot": "context-menu-trigger", ...e });
}
function jo({
  ...e
}) {
  return /* @__PURE__ */ a(w.Group, { "data-slot": "context-menu-group", ...e });
}
function Ao({
  ...e
}) {
  return /* @__PURE__ */ a(w.Portal, { "data-slot": "context-menu-portal", ...e });
}
function Go({
  ...e
}) {
  return /* @__PURE__ */ a(w.Sub, { "data-slot": "context-menu-sub", ...e });
}
function Lo({
  ...e
}) {
  return /* @__PURE__ */ a(
    w.RadioGroup,
    {
      "data-slot": "context-menu-radio-group",
      ...e
    }
  );
}
function $o({
  className: e,
  inset: t,
  children: o,
  ...n
}) {
  return /* @__PURE__ */ d(
    w.SubTrigger,
    {
      "data-slot": "context-menu-sub-trigger",
      "data-inset": t,
      className: r(
        "flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-[inset]:pl-8 data-[state=open]:bg-accent data-[state=open]:text-accent-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-current",
        e
      ),
      ...n,
      children: [
        o,
        /* @__PURE__ */ a(E, { className: "ml-auto" })
      ]
    }
  );
}
function Fo({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    w.SubContent,
    {
      "data-slot": "context-menu-sub-content",
      className: r(
        "z-50 min-w-[8rem] origin-(--radix-context-menu-content-transform-origin) overflow-hidden rounded-md bg-popover p-1 text-popover-foreground data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
        e
      ),
      ...t
    }
  );
}
function Eo({
  className: e,
  children: t,
  ...o
}) {
  return /* @__PURE__ */ a(w.Portal, { children: /* @__PURE__ */ a(
    w.Content,
    {
      "data-slot": "context-menu-content",
      className: r(
        "z-50 max-h-(--radix-context-menu-content-available-height) min-w-[8rem] origin-(--radix-context-menu-content-transform-origin) overflow-hidden rounded-md bg-popover text-popover-foreground data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
        e
      ),
      ...o,
      children: /* @__PURE__ */ a(O, { className: "max-h-(--radix-context-menu-content-available-height)", children: /* @__PURE__ */ a("div", { className: "p-1", children: t }) })
    }
  ) });
}
function Bo({
  className: e,
  inset: t,
  variant: o = "default",
  ...n
}) {
  return /* @__PURE__ */ a(
    w.Item,
    {
      "data-slot": "context-menu-item",
      "data-inset": t,
      "data-variant": o,
      className: r(
        "relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 data-[variant=destructive]:focus:text-destructive dark:data-[variant=destructive]:focus:bg-destructive/20 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-current data-[variant=destructive]:*:[svg]:text-destructive!",
        e
      ),
      ...n
    }
  );
}
function Oo({
  className: e,
  children: t,
  checked: o,
  ...n
}) {
  return /* @__PURE__ */ d(
    w.CheckboxItem,
    {
      "data-slot": "context-menu-checkbox-item",
      className: r(
        "relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      checked: o,
      ...n,
      children: [
        /* @__PURE__ */ a("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ a(w.ItemIndicator, { children: /* @__PURE__ */ a(B, { className: "size-4" }) }) }),
        t
      ]
    }
  );
}
function Vo({
  className: e,
  children: t,
  ...o
}) {
  return /* @__PURE__ */ d(
    w.RadioItem,
    {
      "data-slot": "context-menu-radio-item",
      className: r(
        "relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...o,
      children: [
        /* @__PURE__ */ a("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ a(w.ItemIndicator, { children: /* @__PURE__ */ a(ue, { className: "size-2 fill-current" }) }) }),
        t
      ]
    }
  );
}
function Ho({
  className: e,
  inset: t,
  ...o
}) {
  return /* @__PURE__ */ a(
    w.Label,
    {
      "data-slot": "context-menu-label",
      "data-inset": t,
      className: r(
        "px-2 py-1.5 text-sm font-medium text-foreground data-[inset]:pl-8",
        e
      ),
      ...o
    }
  );
}
function Ko({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    w.Separator,
    {
      "data-slot": "context-menu-separator",
      className: r("-mx-1 my-1 h-px bg-foreground", e),
      ...t
    }
  );
}
function qo({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    ee,
    {
      "data-slot": "context-menu-shortcut",
      className: r("ml-auto", e),
      ...t
    }
  );
}
function Wo({
  ...e
}) {
  return /* @__PURE__ */ a(A.Root, { "data-slot": "drawer", ...e });
}
function Uo({
  ...e
}) {
  return /* @__PURE__ */ a(A.Trigger, { "data-slot": "drawer-trigger", ...e });
}
function Ot({
  ...e
}) {
  return /* @__PURE__ */ a(A.Portal, { "data-slot": "drawer-portal", ...e });
}
function Xo({
  ...e
}) {
  return /* @__PURE__ */ a(A.Close, { "data-slot": "drawer-close", ...e });
}
function Vt({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    A.Overlay,
    {
      "data-slot": "drawer-overlay",
      className: r(
        "fixed inset-0 z-50 bg-black/50 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0",
        e
      ),
      ...t
    }
  );
}
function Yo({
  className: e,
  children: t,
  ...o
}) {
  return /* @__PURE__ */ d(Ot, { "data-slot": "drawer-portal", children: [
    /* @__PURE__ */ a(Vt, {}),
    /* @__PURE__ */ d(
      A.Content,
      {
        "data-slot": "drawer-content",
        "data-augmented-ui": "tl-clip tr-clip bl-clip br-clip both",
        className: r(
          "aug-surface aug-surface-bg aug-pos-fixed aug-drawer group/drawer-content fixed z-50 flex h-auto flex-col bg-background",
          "data-[vaul-drawer-direction=top]:inset-x-0 data-[vaul-drawer-direction=top]:top-0 data-[vaul-drawer-direction=top]:mb-24 data-[vaul-drawer-direction=top]:max-h-[80vh] data-[vaul-drawer-direction=top]:rounded-b-lg ",
          "data-[vaul-drawer-direction=bottom]:inset-x-0 data-[vaul-drawer-direction=bottom]:bottom-0 data-[vaul-drawer-direction=bottom]:mt-24 data-[vaul-drawer-direction=bottom]:max-h-[80vh] data-[vaul-drawer-direction=bottom]:rounded-t-lg ",
          "data-[vaul-drawer-direction=right]:inset-y-0 data-[vaul-drawer-direction=right]:right-0 data-[vaul-drawer-direction=right]:w-3/4 data-[vaul-drawer-direction=right]:sm:max-w-sm",
          "data-[vaul-drawer-direction=left]:inset-y-0 data-[vaul-drawer-direction=left]:left-0 data-[vaul-drawer-direction=left]:w-3/4 data-[vaul-drawer-direction=left]:sm:max-w-sm",
          e
        ),
        ...o,
        children: [
          /* @__PURE__ */ a("div", { className: "mx-auto mt-4 hidden h-2 w-[100px] shrink-0 bg-muted group-data-[vaul-drawer-direction=bottom]/drawer-content:block" }),
          t
        ]
      }
    )
  ] });
}
function Jo({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "drawer-header",
      className: r(
        "flex flex-col gap-0.5 p-4 group-data-[vaul-drawer-direction=bottom]/drawer-content:text-center group-data-[vaul-drawer-direction=top]/drawer-content:text-center md:gap-1.5 md:text-left",
        e
      ),
      ...t
    }
  );
}
function Qo({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "drawer-footer",
      className: r("mt-auto flex flex-col gap-2 p-4", e),
      ...t
    }
  );
}
function Zo({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    A.Title,
    {
      "data-slot": "drawer-title",
      className: r("font-semibold text-foreground", e),
      ...t
    }
  );
}
function en({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    A.Description,
    {
      "data-slot": "drawer-description",
      className: r("text-sm text-muted-foreground", e),
      ...t
    }
  );
}
function tn({
  ...e
}) {
  return /* @__PURE__ */ a(y.Root, { "data-slot": "dropdown-menu", ...e });
}
function an({
  ...e
}) {
  return /* @__PURE__ */ a(y.Portal, { "data-slot": "dropdown-menu-portal", ...e });
}
function rn({
  ...e
}) {
  return /* @__PURE__ */ a(
    y.Trigger,
    {
      "data-slot": "dropdown-menu-trigger",
      ...e
    }
  );
}
function on({
  className: e,
  children: t,
  sideOffset: o = 4,
  ...n
}) {
  return /* @__PURE__ */ a(y.Portal, { children: /* @__PURE__ */ a(
    y.Content,
    {
      "data-slot": "dropdown-menu-content",
      sideOffset: o,
      className: C(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-hidden",
        e
      ),
      ...n,
      children: /* @__PURE__ */ a(O, { className: "max-h-(--radix-dropdown-menu-content-available-height)", children: /* @__PURE__ */ a("div", { className: "p-1", children: t }) })
    }
  ) });
}
function nn({
  ...e
}) {
  return /* @__PURE__ */ a(y.Group, { "data-slot": "dropdown-menu-group", ...e });
}
function sn({
  className: e,
  inset: t,
  variant: o = "default",
  ...n
}) {
  return /* @__PURE__ */ a(
    y.Item,
    {
      "data-slot": "dropdown-menu-item",
      "data-inset": t,
      "data-variant": o,
      className: C(
        "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-current relative flex cursor-default items-center gap-2 px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...n
    }
  );
}
function dn({
  className: e,
  children: t,
  checked: o,
  ...n
}) {
  return /* @__PURE__ */ d(
    y.CheckboxItem,
    {
      "data-slot": "dropdown-menu-checkbox-item",
      className: C(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      checked: o,
      ...n,
      children: [
        /* @__PURE__ */ a("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ a(y.ItemIndicator, { children: /* @__PURE__ */ a(B, { className: "size-5" }) }) }),
        t
      ]
    }
  );
}
function ln({
  ...e
}) {
  return /* @__PURE__ */ a(
    y.RadioGroup,
    {
      "data-slot": "dropdown-menu-radio-group",
      ...e
    }
  );
}
function cn({
  className: e,
  children: t,
  ...o
}) {
  return /* @__PURE__ */ d(
    y.RadioItem,
    {
      "data-slot": "dropdown-menu-radio-item",
      className: C(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...o,
      children: [
        /* @__PURE__ */ a("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ a(y.ItemIndicator, { children: /* @__PURE__ */ a(ue, { className: "size-2 fill-current" }) }) }),
        t
      ]
    }
  );
}
function un({
  className: e,
  inset: t,
  ...o
}) {
  return /* @__PURE__ */ a(
    y.Label,
    {
      "data-slot": "dropdown-menu-label",
      "data-inset": t,
      className: C(
        "px-2 py-1.5 text-sm font-medium data-[inset]:pl-8",
        e
      ),
      ...o
    }
  );
}
function mn({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    y.Separator,
    {
      "data-slot": "dropdown-menu-separator",
      className: C("bg-foreground -mx-1 my-1 h-px", e),
      ...t
    }
  );
}
function gn({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    ee,
    {
      "data-slot": "dropdown-menu-shortcut",
      className: C("ml-auto", e),
      ...t
    }
  );
}
function fn({
  ...e
}) {
  return /* @__PURE__ */ a(y.Sub, { "data-slot": "dropdown-menu-sub", ...e });
}
function pn({
  className: e,
  inset: t,
  children: o,
  ...n
}) {
  return /* @__PURE__ */ d(
    y.SubTrigger,
    {
      "data-slot": "dropdown-menu-sub-trigger",
      "data-inset": t,
      className: C(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex cursor-default items-center gap-2 px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...n,
      children: [
        o,
        /* @__PURE__ */ a(E, { className: "ml-auto size-5" })
      ]
    }
  );
}
function bn({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    y.SubContent,
    {
      "data-slot": "dropdown-menu-sub-content",
      className: C(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-hidden p-1",
        e
      ),
      ...t
    }
  );
}
function vn({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "empty",
      className: r(
        "flex min-w-0 flex-1 flex-col items-center justify-center gap-6 rounded-lg border-dashed p-6 text-center text-balance md:p-12",
        e
      ),
      ...t
    }
  );
}
function hn({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "empty-header",
      className: r(
        "flex max-w-sm flex-col items-center gap-2 text-center",
        e
      ),
      ...t
    }
  );
}
const Ht = _(
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
function xn({
  className: e,
  variant: t = "default",
  ...o
}) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "empty-icon",
      "data-variant": t,
      className: r(Ht({ variant: t, className: e })),
      ...o
    }
  );
}
function wn({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "empty-title",
      className: r("text-lg font-medium tracking-tight", e),
      ...t
    }
  );
}
function Nn({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "empty-description",
      className: r(
        "text-sm/relaxed text-muted-foreground [&>a]:underline [&>a]:underline-offset-4 [&>a:hover]:text-primary",
        e
      ),
      ...t
    }
  );
}
function yn({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "empty-content",
      className: r(
        "flex w-full max-w-sm min-w-0 flex-col items-center gap-4 text-sm text-balance",
        e
      ),
      ...t
    }
  );
}
function Te({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    qe.Root,
    {
      "data-slot": "label",
      className: r(
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        e
      ),
      ...t
    }
  );
}
function zn({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "fieldset",
    {
      "data-slot": "field-set",
      className: r(
        "flex flex-col gap-6",
        "has-[>[data-slot=checkbox-group]]:gap-3 has-[>[data-slot=radio-group]]:gap-3",
        e
      ),
      ...t
    }
  );
}
function kn({
  className: e,
  variant: t = "legend",
  ...o
}) {
  return /* @__PURE__ */ a(
    "legend",
    {
      "data-slot": "field-legend",
      "data-variant": t,
      className: r(
        "mb-3 font-medium",
        "data-[variant=legend]:text-base",
        "data-[variant=label]:text-sm",
        e
      ),
      ...o
    }
  );
}
function Kt({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "field-group",
      className: r(
        "group/field-group @container/field-group flex w-full flex-col gap-7 data-[slot=checkbox-group]:gap-3 [&>[data-slot=field-group]]:gap-4",
        e
      ),
      ...t
    }
  );
}
const qt = _(
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
function re({
  className: e,
  orientation: t = "vertical",
  ...o
}) {
  return /* @__PURE__ */ a(
    "div",
    {
      role: "group",
      "data-slot": "field",
      "data-orientation": t,
      className: r(qt({ orientation: t }), e),
      ...o
    }
  );
}
function Cn({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "field-content",
      className: r(
        "group/field-content flex flex-1 flex-col gap-1.5 leading-snug",
        e
      ),
      ...t
    }
  );
}
function ve({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    Te,
    {
      "data-slot": "field-label",
      className: r(
        "group/field-label peer/field-label flex w-fit gap-2 leading-snug group-data-[disabled=true]/field:opacity-50",
        "has-[>[data-slot=field]]:w-full has-[>[data-slot=field]]:flex-col has-[>[data-slot=field]]:rounded-md has-[>[data-slot=field]]:border [&>*]:data-[slot=field]:p-4",
        "has-data-[state=checked]:border-primary has-data-[state=checked]:bg-primary/5 dark:has-data-[state=checked]:bg-primary/10",
        e
      ),
      ...t
    }
  );
}
function _n({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "field-label",
      className: r(
        "flex w-fit items-center gap-2 text-sm leading-snug font-medium group-data-[disabled=true]/field:opacity-50",
        e
      ),
      ...t
    }
  );
}
function Sn({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "p",
    {
      "data-slot": "field-description",
      className: r(
        "text-sm leading-normal font-normal text-muted-foreground group-has-[[data-orientation=horizontal]]/field:text-balance",
        "last:mt-0 nth-last-2:-mt-1 [[data-variant=legend]+&]:-mt-1.5",
        "[&>a]:underline [&>a]:underline-offset-4 [&>a:hover]:text-primary",
        e
      ),
      ...t
    }
  );
}
function In({
  children: e,
  className: t,
  ...o
}) {
  return /* @__PURE__ */ d(
    "div",
    {
      "data-slot": "field-separator",
      "data-content": !!e,
      className: r(
        "relative -my-2 h-5 text-sm group-data-[variant=outline]/field-group:-mb-2",
        t
      ),
      ...o,
      children: [
        /* @__PURE__ */ a(Q, { className: "absolute inset-0 top-1/2" }),
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
function he({
  className: e,
  children: t,
  errors: o,
  ...n
}) {
  const i = Fe(() => {
    if (t)
      return t;
    if (!o?.length)
      return null;
    const s = [
      ...new Map(o.map((c) => [c?.message, c])).values()
    ];
    return s?.length == 1 ? s[0]?.message : /* @__PURE__ */ a("ul", { className: "ml-4 flex list-disc flex-col gap-1", children: s.map(
      (c, m) => c?.message && /* @__PURE__ */ a("li", { children: c.message }, m)
    ) });
  }, [t, o]);
  return i ? /* @__PURE__ */ a(
    "div",
    {
      role: "alert",
      "data-slot": "field-error",
      className: r("text-sm font-normal text-destructive", e),
      ...n,
      children: i
    }
  ) : null;
}
const Mn = Ze, De = u.createContext(
  {}
), Tn = ({
  ...e
}) => /* @__PURE__ */ a(De.Provider, { value: { name: e.name }, children: /* @__PURE__ */ a(et, { ...e }) }), te = () => {
  const e = u.useContext(De), t = u.useContext(Pe), { getFieldState: o } = tt(), n = at({ name: e.name }), i = o(e.name, n);
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
}, Pe = u.createContext(
  {}
);
function Dn({ className: e, ...t }) {
  const o = u.useId();
  return /* @__PURE__ */ a(Pe.Provider, { value: { id: o }, children: /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "form-item",
      className: r("grid gap-2", e),
      ...t
    }
  ) });
}
function Pn({
  className: e,
  ...t
}) {
  const { error: o, formItemId: n } = te();
  return /* @__PURE__ */ a(
    Te,
    {
      "data-slot": "form-label",
      "data-error": !!o,
      className: r("data-[error=true]:text-destructive", e),
      htmlFor: n,
      ...t
    }
  );
}
function Rn({ ...e }) {
  const { error: t, formItemId: o, formDescriptionId: n, formMessageId: i } = te();
  return /* @__PURE__ */ a(
    D.Root,
    {
      "data-slot": "form-control",
      id: o,
      "aria-describedby": t ? `${n} ${i}` : `${n}`,
      "aria-invalid": !!t,
      ...e
    }
  );
}
function jn({ className: e, ...t }) {
  const { formDescriptionId: o } = te();
  return /* @__PURE__ */ a(
    "p",
    {
      "data-slot": "form-description",
      id: o,
      className: r("text-sm text-muted-foreground", e),
      ...t
    }
  );
}
function An({ className: e, ...t }) {
  const { error: o, formMessageId: n } = te(), i = o ? String(o?.message ?? "") : t.children;
  return i ? /* @__PURE__ */ a(
    "p",
    {
      "data-slot": "form-message",
      id: n,
      className: r("text-sm text-destructive", e),
      ...t,
      children: i
    }
  ) : null;
}
function Gn({
  ...e
}) {
  return /* @__PURE__ */ a(W.Root, { "data-slot": "hover-card", ...e });
}
function Ln({
  ...e
}) {
  return /* @__PURE__ */ a(W.Trigger, { "data-slot": "hover-card-trigger", ...e });
}
function $n({
  className: e,
  align: t = "center",
  sideOffset: o = 4,
  ...n
}) {
  return /* @__PURE__ */ a(W.Portal, { "data-slot": "hover-card-portal", children: /* @__PURE__ */ a(
    W.Content,
    {
      "data-slot": "hover-card-content",
      "data-augmented-ui": "tr-clip bl-clip both",
      align: t,
      sideOffset: o,
      className: r(
        "aug-surface aug-surface-sm z-50 w-64 origin-(--radix-hover-card-content-transform-origin) rounded-md bg-popover p-4 text-popover-foreground outline-hidden data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
        e
      ),
      ...n
    }
  ) });
}
function Fn({
  className: e,
  containerClassName: t,
  ...o
}) {
  return /* @__PURE__ */ a(
    rt,
    {
      "data-slot": "input-otp",
      containerClassName: r(
        "flex items-center gap-2 has-disabled:opacity-50",
        t
      ),
      className: r("disabled:cursor-not-allowed", e),
      ...o
    }
  );
}
function En({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "input-otp-group",
      className: r("flex items-center", e),
      ...t
    }
  );
}
function Bn({
  index: e,
  className: t,
  ...o
}) {
  const n = u.useContext(ot), { char: i, hasFakeCaret: s, isActive: c } = n?.slots[e] ?? {};
  return /* @__PURE__ */ d(
    "div",
    {
      "data-slot": "input-otp-slot",
      "data-active": c,
      className: r(
        "relative flex h-9 w-9 items-center justify-center border-y border-r border-input text-sm shadow-xs transition-all outline-none first:rounded-l-md first:border-l last:rounded-r-md aria-invalid:border-destructive data-[active=true]:z-10 data-[active=true]:border-ring data-[active=true]:ring-[3px] data-[active=true]:ring-ring/50 data-[active=true]:aria-invalid:border-destructive data-[active=true]:aria-invalid:ring-destructive/20 dark:bg-background dark:data-[active=true]:aria-invalid:ring-destructive/40",
        t
      ),
      ...o,
      children: [
        i,
        s && /* @__PURE__ */ a("div", { className: "pointer-events-none absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ a("div", { className: "h-4 w-px animate-caret-blink bg-foreground duration-1000" }) })
      ]
    }
  );
}
function On({ ...e }) {
  return /* @__PURE__ */ a("div", { "data-slot": "input-otp-separator", role: "separator", ...e, children: /* @__PURE__ */ a(nt, {}) });
}
function Vn({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      role: "list",
      "data-slot": "item-group",
      className: r("group/item-group flex flex-col", e),
      ...t
    }
  );
}
function Hn({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    Q,
    {
      "data-slot": "item-separator",
      orientation: "horizontal",
      className: r("my-0", e),
      ...t
    }
  );
}
const Wt = _(
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
function Kn({
  className: e,
  variant: t = "default",
  size: o = "default",
  asChild: n = !1,
  ...i
}) {
  const s = n ? D.Root : "div";
  return /* @__PURE__ */ a(
    s,
    {
      "data-slot": "item",
      "data-variant": t,
      "data-size": o,
      className: r(Wt({ variant: t, size: o, className: e })),
      ...i
    }
  );
}
const Ut = _(
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
function qn({
  className: e,
  variant: t = "default",
  ...o
}) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "item-media",
      "data-variant": t,
      className: r(Ut({ variant: t, className: e })),
      ...o
    }
  );
}
function Wn({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "item-content",
      className: r(
        "flex flex-1 flex-col gap-1 [&+[data-slot=item-content]]:flex-none",
        e
      ),
      ...t
    }
  );
}
function Un({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "item-title",
      className: r(
        "flex w-fit items-center gap-2 text-sm leading-snug font-medium",
        e
      ),
      ...t
    }
  );
}
function Xn({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "p",
    {
      "data-slot": "item-description",
      className: r(
        "line-clamp-2 text-sm leading-normal font-normal text-balance text-muted-foreground",
        "[&>a]:underline [&>a]:underline-offset-4 [&>a:hover]:text-primary",
        e
      ),
      ...t
    }
  );
}
function Yn({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "item-actions",
      className: r("flex items-center gap-2", e),
      ...t
    }
  );
}
function Jn({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "item-header",
      className: r(
        "flex basis-full items-center justify-between gap-2",
        e
      ),
      ...t
    }
  );
}
function Qn({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "item-footer",
      className: r(
        "flex basis-full items-center justify-between gap-2",
        e
      ),
      ...t
    }
  );
}
function Zn({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    N.Root,
    {
      "data-slot": "menubar",
      className: r(
        "flex h-9 items-center gap-1 rounded-md border bg-background p-1 shadow-xs",
        e
      ),
      ...t
    }
  );
}
function ei({
  ...e
}) {
  return /* @__PURE__ */ a(N.Menu, { "data-slot": "menubar-menu", ...e });
}
function ti({
  ...e
}) {
  return /* @__PURE__ */ a(N.Group, { "data-slot": "menubar-group", ...e });
}
function Xt({
  ...e
}) {
  return /* @__PURE__ */ a(N.Portal, { "data-slot": "menubar-portal", ...e });
}
function ai({
  ...e
}) {
  return /* @__PURE__ */ a(N.RadioGroup, { "data-slot": "menubar-radio-group", ...e });
}
function ri({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    N.Trigger,
    {
      "data-slot": "menubar-trigger",
      className: r(
        "flex items-center rounded-sm px-2 py-1 text-sm font-medium outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
        e
      ),
      ...t
    }
  );
}
function oi({
  className: e,
  align: t = "start",
  alignOffset: o = -4,
  sideOffset: n = 8,
  ...i
}) {
  return /* @__PURE__ */ a(Xt, { children: /* @__PURE__ */ a(
    N.Content,
    {
      "data-slot": "menubar-content",
      align: t,
      alignOffset: o,
      sideOffset: n,
      className: r(
        "z-50 min-w-[12rem] origin-(--radix-menubar-content-transform-origin) overflow-hidden rounded-md bg-popover p-1 text-popover-foreground data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
        e
      ),
      ...i
    }
  ) });
}
function ni({
  className: e,
  inset: t,
  variant: o = "default",
  ...n
}) {
  return /* @__PURE__ */ a(
    N.Item,
    {
      "data-slot": "menubar-item",
      "data-inset": t,
      "data-variant": o,
      className: r(
        "relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 data-[variant=destructive]:focus:text-destructive dark:data-[variant=destructive]:focus:bg-destructive/20 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-current data-[variant=destructive]:*:[svg]:text-destructive!",
        e
      ),
      ...n
    }
  );
}
function ii({
  className: e,
  children: t,
  checked: o,
  ...n
}) {
  return /* @__PURE__ */ d(
    N.CheckboxItem,
    {
      "data-slot": "menubar-checkbox-item",
      className: r(
        "relative flex cursor-default items-center gap-2 rounded-xs py-1.5 pr-2 pl-8 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      checked: o,
      ...n,
      children: [
        /* @__PURE__ */ a("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ a(N.ItemIndicator, { children: /* @__PURE__ */ a(B, { className: "size-4" }) }) }),
        t
      ]
    }
  );
}
function si({
  className: e,
  children: t,
  ...o
}) {
  return /* @__PURE__ */ d(
    N.RadioItem,
    {
      "data-slot": "menubar-radio-item",
      className: r(
        "relative flex cursor-default items-center gap-2 rounded-xs py-1.5 pr-2 pl-8 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...o,
      children: [
        /* @__PURE__ */ a("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ a(N.ItemIndicator, { children: /* @__PURE__ */ a(ue, { className: "size-2 fill-current" }) }) }),
        t
      ]
    }
  );
}
function di({
  className: e,
  inset: t,
  ...o
}) {
  return /* @__PURE__ */ a(
    N.Label,
    {
      "data-slot": "menubar-label",
      "data-inset": t,
      className: r(
        "px-2 py-1.5 text-sm font-medium data-[inset]:pl-8",
        e
      ),
      ...o
    }
  );
}
function li({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    N.Separator,
    {
      "data-slot": "menubar-separator",
      className: r("-mx-1 my-1 h-px bg-foreground", e),
      ...t
    }
  );
}
function ci({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    ee,
    {
      "data-slot": "menubar-shortcut",
      className: r("ml-auto", e),
      ...t
    }
  );
}
function ui({
  ...e
}) {
  return /* @__PURE__ */ a(N.Sub, { "data-slot": "menubar-sub", ...e });
}
function mi({
  className: e,
  inset: t,
  children: o,
  ...n
}) {
  return /* @__PURE__ */ d(
    N.SubTrigger,
    {
      "data-slot": "menubar-sub-trigger",
      "data-inset": t,
      className: r(
        "flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-none select-none focus:bg-accent focus:text-accent-foreground data-[inset]:pl-8 data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
        e
      ),
      ...n,
      children: [
        o,
        /* @__PURE__ */ a(E, { className: "ml-auto h-4 w-4" })
      ]
    }
  );
}
function gi({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    N.SubContent,
    {
      "data-slot": "menubar-sub-content",
      className: r(
        "z-50 min-w-[8rem] origin-(--radix-menubar-content-transform-origin) overflow-hidden rounded-md bg-popover p-1 text-popover-foreground data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
        e
      ),
      ...t
    }
  );
}
function fi({
  className: e,
  size: t = "default",
  ...o
}) {
  return /* @__PURE__ */ d(
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
            className: r(
              "h-9 w-full min-w-0 appearance-none rounded-md border border-input bg-transparent px-3 py-2 pr-9 text-sm shadow-xs transition-[color,box-shadow] outline-none selection:bg-primary selection:text-primary-foreground placeholder:text-muted-foreground disabled:pointer-events-none disabled:cursor-not-allowed data-[size=sm]:h-8 data-[size=sm]:py-1 dark:bg-background dark:hover:bg-input/50",
              "focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50",
              "aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40",
              e
            ),
            ...o
          }
        ),
        /* @__PURE__ */ a(
          L,
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
function pi({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    "option",
    {
      "data-slot": "native-select-option",
      className: r("bg-[Canvas] text-[CanvasText]", e),
      ...t
    }
  );
}
function bi({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    "optgroup",
    {
      "data-slot": "native-select-optgroup",
      className: r("bg-[Canvas] text-[CanvasText]", e),
      ...t
    }
  );
}
function Yt({
  className: e,
  children: t,
  viewport: o = !0,
  ...n
}) {
  return /* @__PURE__ */ d(
    j.Root,
    {
      "data-slot": "navigation-menu",
      "data-viewport": o,
      className: r(
        "group/navigation-menu relative flex max-w-max flex-1 items-center justify-center",
        e
      ),
      ...n,
      children: [
        t,
        o && /* @__PURE__ */ a(ta, {})
      ]
    }
  );
}
function Jt({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    j.List,
    {
      "data-slot": "navigation-menu-list",
      className: r(
        "group flex flex-1 list-none items-center justify-center gap-1",
        e
      ),
      ...t
    }
  );
}
function Qt({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    j.Item,
    {
      "data-slot": "navigation-menu-item",
      className: r("relative", e),
      ...t
    }
  );
}
const Re = _(
  "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-[color,box-shadow] outline-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=open]:bg-accent data-[state=open]:text-accent-foreground"
);
function Zt({
  className: e,
  children: t,
  ...o
}) {
  return /* @__PURE__ */ d(
    j.Trigger,
    {
      "data-slot": "navigation-menu-trigger",
      className: r(Re(), "group", e),
      ...o,
      children: [
        t,
        " ",
        /* @__PURE__ */ a(
          L,
          {
            className: "relative top-[1px] ml-1 size-4 shrink-0 transition duration-300 group-data-[state=open]:rotate-180",
            "aria-hidden": "true"
          }
        )
      ]
    }
  );
}
function ea({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    j.Content,
    {
      "data-slot": "navigation-menu-content",
      className: r(
        "absolute top-0 left-0 w-full p-2 pr-2.5 data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 data-[motion^=from-]:animate-in data-[motion^=from-]:fade-in data-[motion^=to-]:animate-out data-[motion^=to-]:fade-out md:w-auto",
        "group-data-[viewport=false]/navigation-menu:top-full group-data-[viewport=false]/navigation-menu:mt-1.5 group-data-[viewport=false]/navigation-menu:overflow-hidden group-data-[viewport=false]/navigation-menu:rounded-md group-data-[viewport=false]/navigation-menu:bg-popover group-data-[viewport=false]/navigation-menu:text-popover-foreground group-data-[viewport=false]/navigation-menu:duration-200 **:data-[slot=navigation-menu-link]:focus:ring-0 **:data-[slot=navigation-menu-link]:focus:outline-none group-data-[viewport=false]/navigation-menu:data-[state=closed]:animate-out group-data-[viewport=false]/navigation-menu:data-[state=closed]:fade-out-0 group-data-[viewport=false]/navigation-menu:data-[state=closed]:zoom-out-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:animate-in group-data-[viewport=false]/navigation-menu:data-[state=open]:fade-in-0 group-data-[viewport=false]/navigation-menu:data-[state=open]:zoom-in-95",
        e
      ),
      ...t
    }
  );
}
function ta({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    "div",
    {
      className: r(
        "absolute top-full left-0 isolate z-50 flex justify-center"
      ),
      children: /* @__PURE__ */ a(
        j.Viewport,
        {
          "data-slot": "navigation-menu-viewport",
          className: r(
            "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md bg-popover text-popover-foreground data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",
            e
          ),
          ...t
        }
      )
    }
  );
}
function xe({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    j.Link,
    {
      "data-slot": "navigation-menu-link",
      className: r(
        "flex flex-col gap-1 rounded-sm p-2 text-sm transition-all outline-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-1 data-[active=true]:bg-primary data-[active=true]:text-primary-foreground data-[active=true]:hover:bg-accent data-[active=true]:hover:text-accent-foreground data-[active=true]:focus:bg-accent [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-current",
        e
      ),
      ...t
    }
  );
}
function vi({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    j.Indicator,
    {
      "data-slot": "navigation-menu-indicator",
      className: r(
        "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:animate-in data-[state=visible]:fade-in",
        e
      ),
      ...t,
      children: /* @__PURE__ */ a("div", { className: "relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-foreground" })
    }
  );
}
function hi({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "nav",
    {
      role: "navigation",
      "aria-label": "pagination",
      "data-slot": "pagination",
      className: r("mx-auto flex w-full justify-center", e),
      ...t
    }
  );
}
function xi({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    "ul",
    {
      "data-slot": "pagination-content",
      className: r("flex flex-row items-center gap-1", e),
      ...t
    }
  );
}
function wi({ ...e }) {
  return /* @__PURE__ */ a("li", { "data-slot": "pagination-item", ...e });
}
function je({
  className: e,
  isActive: t,
  size: o = "icon",
  ...n
}) {
  return /* @__PURE__ */ a(
    "a",
    {
      "aria-current": t ? "page" : void 0,
      "data-slot": "pagination-link",
      "data-active": t,
      className: r(
        U({
          variant: t ? "outline" : "ghost",
          size: o
        }),
        e
      ),
      ...n
    }
  );
}
function Ni({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ d(
    je,
    {
      "aria-label": "Go to previous page",
      size: "default",
      className: r("gap-1 px-2.5 sm:pl-2.5", e),
      ...t,
      children: [
        /* @__PURE__ */ a(ze, {}),
        /* @__PURE__ */ a("span", { className: "hidden sm:block", children: "Previous" })
      ]
    }
  );
}
function yi({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ d(
    je,
    {
      "aria-label": "Go to next page",
      size: "default",
      className: r("gap-1 px-2.5 sm:pr-2.5", e),
      ...t,
      children: [
        /* @__PURE__ */ a("span", { className: "hidden sm:block", children: "Next" }),
        /* @__PURE__ */ a(E, {})
      ]
    }
  );
}
function zi({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ d(
    "span",
    {
      "aria-hidden": !0,
      "data-slot": "pagination-ellipsis",
      className: r("flex size-9 items-center justify-center", e),
      ...t,
      children: [
        /* @__PURE__ */ a(ye, { className: "size-4" }),
        /* @__PURE__ */ a("span", { className: "sr-only", children: "More pages" })
      ]
    }
  );
}
function ki({
  ...e
}) {
  return /* @__PURE__ */ a(K.Root, { "data-slot": "popover", ...e });
}
function Ci({
  ...e
}) {
  return /* @__PURE__ */ a(K.Trigger, { "data-slot": "popover-trigger", ...e });
}
function _i({
  className: e,
  align: t = "center",
  sideOffset: o = 4,
  ...n
}) {
  return /* @__PURE__ */ a(K.Portal, { children: /* @__PURE__ */ a(
    K.Content,
    {
      "data-slot": "popover-content",
      "data-augmented-ui": "tr-clip bl-clip both",
      align: t,
      sideOffset: o,
      className: r(
        "aug-surface z-50 w-72 origin-(--radix-popover-content-transform-origin) rounded-md bg-popover p-4 text-popover-foreground outline-hidden data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
        e
      ),
      ...n
    }
  ) });
}
function Si({
  ...e
}) {
  return /* @__PURE__ */ a(K.Anchor, { "data-slot": "popover-anchor", ...e });
}
function Ii({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "popover-header",
      className: r("flex flex-col gap-1 text-sm", e),
      ...t
    }
  );
}
function Mi({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "popover-title",
      className: r("font-medium", e),
      ...t
    }
  );
}
function Ti({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    "p",
    {
      "data-slot": "popover-description",
      className: r("text-muted-foreground", e),
      ...t
    }
  );
}
function Di({
  className: e,
  value: t,
  ...o
}) {
  return /* @__PURE__ */ a(
    pe.Root,
    {
      "data-slot": "progress",
      className: r(
        "relative h-2 w-full overflow-hidden bg-primary/20",
        e
      ),
      ...o,
      children: /* @__PURE__ */ a(
        pe.Indicator,
        {
          "data-slot": "progress-indicator",
          className: r(
            "h-full w-full flex-1 bg-primary",
            t == null ? "origin-left animate-progress" : "transition-transform"
          ),
          style: t == null ? void 0 : { transform: `translateX(-${100 - (t || 0)}%)` }
        }
      )
    }
  );
}
function Pi({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    ne.Root,
    {
      "data-slot": "radio-group",
      className: r("grid gap-3", e),
      ...t
    }
  );
}
function Ri({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    ne.Item,
    {
      "data-slot": "radio-group-item",
      className: r(
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
function ji({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    me.Group,
    {
      "data-slot": "resizable-panel-group",
      className: r(
        "flex h-full w-full aria-[orientation=vertical]:flex-col",
        e
      ),
      ...t
    }
  );
}
function Ai({ ...e }) {
  return /* @__PURE__ */ a(me.Panel, { "data-slot": "resizable-panel", ...e });
}
function Gi({
  withHandle: e,
  className: t,
  ...o
}) {
  return /* @__PURE__ */ a(
    me.Separator,
    {
      "data-slot": "resizable-handle",
      className: r(
        "relative flex w-px items-center justify-center bg-foreground after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:outline-hidden aria-[orientation=horizontal]:h-px aria-[orientation=horizontal]:w-full aria-[orientation=horizontal]:after:left-0 aria-[orientation=horizontal]:after:h-1 aria-[orientation=horizontal]:after:w-full aria-[orientation=horizontal]:after:translate-x-0 aria-[orientation=horizontal]:after:-translate-y-1/2 [&[aria-orientation=horizontal]>div]:rotate-90",
        t
      ),
      ...o,
      children: e && /* @__PURE__ */ a("div", { className: "z-10 flex h-4 w-3 items-center justify-center rounded-xs border border-foreground bg-foreground text-background", children: /* @__PURE__ */ a(it, { className: "size-2.5" }) })
    }
  );
}
function Li({
  ...e
}) {
  return /* @__PURE__ */ a(k.Root, { "data-slot": "select", ...e });
}
function $i({
  ...e
}) {
  return /* @__PURE__ */ a(k.Group, { "data-slot": "select-group", ...e });
}
function Fi({
  ...e
}) {
  return /* @__PURE__ */ a(k.Value, { "data-slot": "select-value", ...e });
}
function Ei({
  className: e,
  size: t = "default",
  children: o,
  ...n
}) {
  return /* @__PURE__ */ d(
    k.Trigger,
    {
      "data-slot": "select-trigger",
      "data-size": t,
      className: r(
        "flex w-fit items-center justify-between gap-2 rounded-md border border-input bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 data-[placeholder]:text-muted-foreground data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 dark:bg-background dark:hover:bg-input/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground",
        e
      ),
      ...n,
      children: [
        o,
        /* @__PURE__ */ a(k.Icon, { asChild: !0, children: /* @__PURE__ */ a(L, { className: "size-4 opacity-50" }) })
      ]
    }
  );
}
function Bi({
  className: e,
  children: t,
  position: o = "popper",
  align: n = "center",
  ...i
}) {
  return /* @__PURE__ */ a(k.Portal, { children: /* @__PURE__ */ d(
    k.Content,
    {
      "data-slot": "select-content",
      className: r(
        "relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-hidden rounded-md bg-popover text-popover-foreground data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
        o === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        e
      ),
      position: o,
      align: n,
      ...i,
      children: [
        /* @__PURE__ */ a(aa, {}),
        /* @__PURE__ */ a(
          k.Viewport,
          {
            className: r(
              "p-1",
              o === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"
            ),
            children: t
          }
        ),
        /* @__PURE__ */ a(ra, {})
      ]
    }
  ) });
}
function Oi({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    k.Label,
    {
      "data-slot": "select-label",
      className: r("px-2 py-1.5 text-xs text-muted-foreground", e),
      ...t
    }
  );
}
function Vi({
  className: e,
  children: t,
  ...o
}) {
  return /* @__PURE__ */ d(
    k.Item,
    {
      "data-slot": "select-item",
      className: r(
        "relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-current *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        e
      ),
      ...o,
      children: [
        /* @__PURE__ */ a(
          "span",
          {
            "data-slot": "select-item-indicator",
            className: "absolute right-2 flex size-3.5 items-center justify-center",
            children: /* @__PURE__ */ a(k.ItemIndicator, { children: /* @__PURE__ */ a(B, { className: "size-4" }) })
          }
        ),
        /* @__PURE__ */ a(k.ItemText, { children: t })
      ]
    }
  );
}
function Hi({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    k.Separator,
    {
      "data-slot": "select-separator",
      className: r("pointer-events-none -mx-1 my-1 h-px bg-foreground", e),
      ...t
    }
  );
}
function aa({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    k.ScrollUpButton,
    {
      "data-slot": "select-scroll-up-button",
      className: r(
        "flex cursor-default items-center justify-center py-1",
        e
      ),
      ...t,
      children: /* @__PURE__ */ a(st, { className: "size-4" })
    }
  );
}
function ra({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    k.ScrollDownButton,
    {
      "data-slot": "select-scroll-down-button",
      className: r(
        "flex cursor-default items-center justify-center py-1",
        e
      ),
      ...t,
      children: /* @__PURE__ */ a(L, { className: "size-4" })
    }
  );
}
function oa({ ...e }) {
  return /* @__PURE__ */ a(x.Root, { "data-slot": "sheet", ...e });
}
function Ki({
  ...e
}) {
  return /* @__PURE__ */ a(x.Trigger, { "data-slot": "sheet-trigger", ...e });
}
function qi({
  ...e
}) {
  return /* @__PURE__ */ a(x.Close, { "data-slot": "sheet-close", ...e });
}
function na({
  ...e
}) {
  return /* @__PURE__ */ a(x.Portal, { "data-slot": "sheet-portal", ...e });
}
function ia({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    x.Overlay,
    {
      "data-slot": "sheet-overlay",
      className: r(
        "fixed inset-0 z-50 bg-black/50 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0",
        e
      ),
      ...t
    }
  );
}
const sa = {
  right: "tl-clip bl-clip both",
  left: "tr-clip br-clip both",
  top: "bl-clip br-clip both",
  bottom: "tl-clip tr-clip both"
};
function da({
  className: e,
  children: t,
  side: o = "right",
  showCloseButton: n = !0,
  ...i
}) {
  return /* @__PURE__ */ d(na, { children: [
    /* @__PURE__ */ a(ia, {}),
    /* @__PURE__ */ d(
      x.Content,
      {
        "data-slot": "sheet-content",
        "data-augmented-ui": sa[o],
        className: r(
          "aug-surface aug-surface-bg aug-pos-fixed fixed z-50 flex flex-col gap-4 bg-background transition ease-in-out data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:animate-in data-[state=open]:duration-500",
          o === "right" && "inset-y-0 right-0 h-full w-3/4 data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm",
          o === "left" && "inset-y-0 left-0 h-full w-3/4 data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
          o === "top" && "inset-x-0 top-0 h-auto data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
          o === "bottom" && "inset-x-0 bottom-0 h-auto data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
          e
        ),
        ...i,
        children: [
          t,
          n && /* @__PURE__ */ d(x.Close, { className: "absolute top-4 right-4 rounded-xs opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none data-[state=open]:bg-secondary", children: [
            /* @__PURE__ */ a(J, { className: "size-4" }),
            /* @__PURE__ */ a("span", { className: "sr-only", children: "Close" })
          ] })
        ]
      }
    )
  ] });
}
function la({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "sheet-header",
      className: r("flex flex-col gap-1.5 p-4", e),
      ...t
    }
  );
}
function Wi({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "sheet-footer",
      className: r("mt-auto flex flex-col gap-2 p-4", e),
      ...t
    }
  );
}
function ca({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    x.Title,
    {
      "data-slot": "sheet-title",
      className: r("font-semibold text-foreground", e),
      ...t
    }
  );
}
function ua({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    x.Description,
    {
      "data-slot": "sheet-description",
      className: r("text-sm text-muted-foreground", e),
      ...t
    }
  );
}
const oe = 768;
function ma() {
  const [e, t] = u.useState(void 0);
  return u.useEffect(() => {
    const o = window.matchMedia(`(max-width: ${oe - 1}px)`), n = () => {
      t(window.innerWidth < oe);
    };
    return o.addEventListener("change", n), t(window.innerWidth < oe), () => o.removeEventListener("change", n);
  }, []), !!e;
}
function we({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "skeleton",
      className: r("animate-pulse rounded-md bg-card", e),
      ...t
    }
  );
}
function ga({
  delayDuration: e = 0,
  ...t
}) {
  return /* @__PURE__ */ a(
    F.Provider,
    {
      "data-slot": "tooltip-provider",
      delayDuration: e,
      ...t
    }
  );
}
function fa({
  ...e
}) {
  return /* @__PURE__ */ a(F.Root, { "data-slot": "tooltip", ...e });
}
function pa({
  ...e
}) {
  return /* @__PURE__ */ a(F.Trigger, { "data-slot": "tooltip-trigger", ...e });
}
function ba({
  className: e,
  sideOffset: t = 0,
  children: o,
  ...n
}) {
  return /* @__PURE__ */ a(F.Portal, { children: /* @__PURE__ */ d(
    F.Content,
    {
      "data-slot": "tooltip-content",
      sideOffset: t,
      className: r(
        "z-50 w-fit origin-(--radix-tooltip-content-transform-origin) animate-in rounded-md bg-foreground px-3 py-1.5 text-xs text-balance text-background fade-in-0 zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
        e
      ),
      ...n,
      children: [
        o,
        /* @__PURE__ */ a(F.Arrow, { className: "z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 bg-foreground fill-foreground" })
      ]
    }
  ) });
}
const va = "sidebar_state", ha = 3600 * 24 * 7, xa = "16rem", wa = "18rem", Na = "3rem", ya = "b", Ae = u.createContext(null);
function ae() {
  const e = u.useContext(Ae);
  if (!e)
    throw new Error("useSidebar must be used within a SidebarProvider.");
  return e;
}
function Ui({
  defaultOpen: e = !0,
  open: t,
  onOpenChange: o,
  className: n,
  style: i,
  children: s,
  ...c
}) {
  const m = ma(), [l, g] = u.useState(!1), [b, v] = u.useState(e), I = t ?? b, z = u.useCallback(
    (p) => {
      const S = typeof p == "function" ? p(I) : p;
      o ? o(S) : v(S), document.cookie = `${va}=${S}; path=/; max-age=${ha}`;
    },
    [o, I]
  ), M = u.useCallback(() => m ? g((p) => !p) : z((p) => !p), [m, z, g]);
  u.useEffect(() => {
    const p = (S) => {
      S.key === ya && (S.metaKey || S.ctrlKey) && (S.preventDefault(), M());
    };
    return window.addEventListener("keydown", p), () => window.removeEventListener("keydown", p);
  }, [M]);
  const T = I ? "expanded" : "collapsed", f = u.useMemo(
    () => ({
      state: T,
      open: I,
      setOpen: z,
      isMobile: m,
      openMobile: l,
      setOpenMobile: g,
      toggleSidebar: M
    }),
    [T, I, z, m, l, g, M]
  );
  return /* @__PURE__ */ a(Ae.Provider, { value: f, children: /* @__PURE__ */ a(ga, { delayDuration: 0, children: /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "sidebar-wrapper",
      style: {
        "--sidebar-width": xa,
        "--sidebar-width-icon": Na,
        ...i
      },
      className: r(
        "group/sidebar-wrapper flex min-h-svh w-full has-data-[variant=inset]:bg-sidebar",
        n
      ),
      ...c,
      children: s
    }
  ) }) });
}
function Xi({
  side: e = "left",
  variant: t = "sidebar",
  collapsible: o = "offcanvas",
  className: n,
  children: i,
  ...s
}) {
  const { isMobile: c, state: m, openMobile: l, setOpenMobile: g } = ae();
  return o === "none" ? /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "sidebar",
      className: r(
        "flex h-full w-(--sidebar-width) flex-col bg-sidebar text-sidebar-foreground",
        n
      ),
      ...s,
      children: i
    }
  ) : c ? /* @__PURE__ */ a(oa, { open: l, onOpenChange: g, ...s, children: /* @__PURE__ */ d(
    da,
    {
      "data-sidebar": "sidebar",
      "data-slot": "sidebar",
      "data-mobile": "true",
      className: "w-(--sidebar-width) bg-sidebar p-0 text-sidebar-foreground [&>button]:hidden",
      style: {
        "--sidebar-width": wa
      },
      side: e,
      children: [
        /* @__PURE__ */ d(la, { className: "sr-only", children: [
          /* @__PURE__ */ a(ca, { children: "Sidebar" }),
          /* @__PURE__ */ a(ua, { children: "Displays the mobile sidebar." })
        ] }),
        /* @__PURE__ */ a("div", { className: "flex h-full w-full flex-col", children: i })
      ]
    }
  ) }) : /* @__PURE__ */ d(
    "div",
    {
      className: "group peer hidden text-sidebar-foreground md:block",
      "data-state": m,
      "data-collapsible": m === "collapsed" ? o : "",
      "data-variant": t,
      "data-side": e,
      "data-slot": "sidebar",
      children: [
        /* @__PURE__ */ a(
          "div",
          {
            "data-slot": "sidebar-gap",
            className: r(
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
            className: r(
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
function Yi({
  className: e,
  onClick: t,
  ...o
}) {
  const { toggleSidebar: n } = ae();
  return /* @__PURE__ */ d(
    P,
    {
      "data-sidebar": "trigger",
      "data-slot": "sidebar-trigger",
      variant: "ghost",
      size: "icon",
      className: r("size-7", e),
      onClick: (i) => {
        t?.(i), n();
      },
      ...o,
      children: [
        /* @__PURE__ */ a(dt, {}),
        /* @__PURE__ */ a("span", { className: "sr-only", children: "Toggle Sidebar" })
      ]
    }
  );
}
function Ji({ className: e, ...t }) {
  const { toggleSidebar: o } = ae();
  return /* @__PURE__ */ a(
    "button",
    {
      "data-sidebar": "rail",
      "data-slot": "sidebar-rail",
      "aria-label": "Toggle Sidebar",
      tabIndex: -1,
      onClick: o,
      title: "Toggle Sidebar",
      className: r(
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
function Qi({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "main",
    {
      "data-slot": "sidebar-inset",
      className: r(
        "relative flex w-full flex-1 flex-col bg-background",
        "md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow-sm md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2",
        e
      ),
      ...t
    }
  );
}
function Zi({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    X,
    {
      "data-slot": "sidebar-input",
      "data-sidebar": "input",
      className: r("h-8 w-full bg-background shadow-none", e),
      ...t
    }
  );
}
function es({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "sidebar-header",
      "data-sidebar": "header",
      className: r("flex flex-col gap-2 p-2", e),
      ...t
    }
  );
}
function ts({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "sidebar-footer",
      "data-sidebar": "footer",
      className: r("flex flex-col gap-2 p-2", e),
      ...t
    }
  );
}
function as({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    Q,
    {
      "data-slot": "sidebar-separator",
      "data-sidebar": "separator",
      className: r("mx-2 w-auto bg-sidebar-foreground", e),
      ...t
    }
  );
}
function rs({
  className: e,
  children: t,
  ...o
}) {
  return /* @__PURE__ */ a(
    O,
    {
      "data-slot": "sidebar-content",
      "data-sidebar": "content",
      className: r(
        "min-h-0 flex-1 group-data-[collapsible=icon]:overflow-hidden",
        e
      ),
      ...o,
      children: /* @__PURE__ */ a("div", { className: "flex flex-col gap-2", children: t })
    }
  );
}
function os({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "sidebar-group",
      "data-sidebar": "group",
      className: r("relative flex w-full min-w-0 flex-col p-2", e),
      ...t
    }
  );
}
function ns({
  className: e,
  asChild: t = !1,
  ...o
}) {
  const n = t ? D.Root : "div";
  return /* @__PURE__ */ a(
    n,
    {
      "data-slot": "sidebar-group-label",
      "data-sidebar": "group-label",
      className: r(
        "flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium text-muted ring-sidebar-ring outline-hidden transition-[margin,opacity] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",
        e
      ),
      ...o
    }
  );
}
function is({
  className: e,
  asChild: t = !1,
  ...o
}) {
  const n = t ? D.Root : "button";
  return /* @__PURE__ */ a(
    n,
    {
      "data-slot": "sidebar-group-action",
      "data-sidebar": "group-action",
      className: r(
        "absolute top-3.5 right-3 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground ring-sidebar-ring outline-hidden transition-transform hover:text-black dark:hover:text-white focus-visible:bg-sidebar-accent focus-visible:text-sidebar-accent-foreground focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 md:after:hidden",
        "group-data-[collapsible=icon]:hidden",
        e
      ),
      ...o
    }
  );
}
function ss({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "sidebar-group-content",
      "data-sidebar": "group-content",
      className: r("w-full text-sm", e),
      ...t
    }
  );
}
function ds({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "ul",
    {
      "data-slot": "sidebar-menu",
      "data-sidebar": "menu",
      className: r("flex w-full min-w-0 flex-col gap-1", e),
      ...t
    }
  );
}
function ls({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "li",
    {
      "data-slot": "sidebar-menu-item",
      "data-sidebar": "menu-item",
      className: r("group/menu-item relative", e),
      ...t
    }
  );
}
const za = _(
  "peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm ring-sidebar-ring outline-hidden transition-[width,height,padding] group-has-data-[sidebar=menu-action]/menu-item:pr-8 group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! hover:text-black dark:hover:text-white focus-visible:bg-sidebar-accent focus-visible:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-foreground active:text-sidebar disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-foreground data-[state=open]:hover:text-sidebar [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "hover:bg-sidebar-foreground hover:text-sidebar",
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
function cs({
  asChild: e = !1,
  isActive: t = !1,
  variant: o = "default",
  size: n = "default",
  tooltip: i,
  className: s,
  ...c
}) {
  const m = e ? D.Root : "button", { isMobile: l, state: g } = ae(), b = /* @__PURE__ */ a(
    m,
    {
      "data-slot": "sidebar-menu-button",
      "data-sidebar": "menu-button",
      "data-size": n,
      "data-active": t,
      className: r(za({ variant: o, size: n }), s),
      ...c
    }
  );
  return i ? (typeof i == "string" && (i = {
    children: i
  }), /* @__PURE__ */ d(fa, { children: [
    /* @__PURE__ */ a(pa, { asChild: !0, children: b }),
    /* @__PURE__ */ a(
      ba,
      {
        side: "right",
        align: "center",
        hidden: g !== "collapsed" || l,
        ...i
      }
    )
  ] })) : b;
}
function us({
  className: e,
  asChild: t = !1,
  showOnHover: o = !1,
  ...n
}) {
  const i = t ? D.Root : "button";
  return /* @__PURE__ */ a(
    i,
    {
      "data-slot": "sidebar-menu-action",
      "data-sidebar": "menu-action",
      className: r(
        "absolute top-1.5 right-1 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground ring-sidebar-ring outline-hidden transition-transform peer-hover/menu-button:text-sidebar hover:text-black dark:hover:text-white focus-visible:bg-sidebar-accent focus-visible:text-sidebar-accent-foreground focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 md:after:hidden",
        "peer-data-[size=sm]/menu-button:top-1",
        "peer-data-[size=default]/menu-button:top-1.5",
        "peer-data-[size=lg]/menu-button:top-2.5",
        "group-data-[collapsible=icon]:hidden",
        o && "group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 peer-data-[active=true]/menu-button:text-sidebar-accent-foreground data-[state=open]:opacity-100 md:opacity-0",
        e
      ),
      ...n
    }
  );
}
function ms({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "sidebar-menu-badge",
      "data-sidebar": "menu-badge",
      className: r(
        "pointer-events-none absolute right-1 flex h-5 min-w-5 items-center justify-center rounded-md px-1 text-xs font-medium text-sidebar-foreground tabular-nums select-none",
        "peer-hover/menu-button:text-sidebar peer-data-[active=true]/menu-button:text-sidebar-accent-foreground",
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
function gs({
  className: e,
  showIcon: t = !1,
  ...o
}) {
  const n = u.useMemo(() => `${Math.floor(Math.random() * 40) + 50}%`, []);
  return /* @__PURE__ */ d(
    "div",
    {
      "data-slot": "sidebar-menu-skeleton",
      "data-sidebar": "menu-skeleton",
      className: r("flex h-8 items-center gap-2 rounded-md px-2", e),
      ...o,
      children: [
        t && /* @__PURE__ */ a(
          we,
          {
            className: "size-4 rounded-md",
            "data-sidebar": "menu-skeleton-icon"
          }
        ),
        /* @__PURE__ */ a(
          we,
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
function fs({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "ul",
    {
      "data-slot": "sidebar-menu-sub",
      "data-sidebar": "menu-sub",
      className: r(
        "mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l border-sidebar-foreground px-2.5 py-0.5",
        "group-data-[collapsible=icon]:hidden",
        e
      ),
      ...t
    }
  );
}
function ps({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    "li",
    {
      "data-slot": "sidebar-menu-sub-item",
      "data-sidebar": "menu-sub-item",
      className: r("group/menu-sub-item relative", e),
      ...t
    }
  );
}
function bs({
  asChild: e = !1,
  size: t = "md",
  isActive: o = !1,
  className: n,
  ...i
}) {
  const s = e ? D.Root : "a";
  return /* @__PURE__ */ a(
    s,
    {
      "data-slot": "sidebar-menu-sub-button",
      "data-sidebar": "menu-sub-button",
      "data-size": t,
      "data-active": o,
      className: r(
        "flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 text-sidebar-foreground ring-sidebar-ring outline-hidden hover:text-black dark:hover:text-white focus-visible:bg-sidebar-accent focus-visible:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-foreground active:text-sidebar disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0 [&>svg]:text-current",
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
function vs({
  className: e,
  defaultValue: t,
  value: o,
  min: n = 0,
  max: i = 100,
  ...s
}) {
  const c = u.useMemo(
    () => Array.isArray(o) ? o : Array.isArray(t) ? t : [n, i],
    [o, t, n, i]
  );
  return /* @__PURE__ */ d(
    q.Root,
    {
      "data-slot": "slider",
      defaultValue: t,
      value: o,
      min: n,
      max: i,
      className: r(
        "relative flex w-full touch-none items-center select-none data-[disabled]:opacity-50 data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col",
        e
      ),
      ...s,
      children: [
        /* @__PURE__ */ a(
          q.Track,
          {
            "data-slot": "slider-track",
            className: r(
              "relative grow overflow-hidden bg-muted data-[orientation=horizontal]:h-1.5 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1.5"
            ),
            children: /* @__PURE__ */ a(
              q.Range,
              {
                "data-slot": "slider-range",
                className: r(
                  "absolute bg-primary data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full"
                )
              }
            )
          }
        ),
        Array.from({ length: c.length }, (m, l) => /* @__PURE__ */ a(
          q.Thumb,
          {
            "data-slot": "slider-thumb",
            className: "block size-4 shrink-0 rounded-full border border-primary bg-white shadow-sm ring-ring/50 transition-[color,box-shadow] hover:ring-4 focus-visible:ring-4 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50"
          },
          l
        ))
      ]
    }
  );
}
function hs({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    lt,
    {
      role: "status",
      "aria-label": "Loading",
      className: r("size-4 animate-spin text-primary", e),
      ...t
    }
  );
}
function xs({
  className: e,
  size: t = "default",
  ...o
}) {
  return /* @__PURE__ */ a(
    be.Root,
    {
      "data-slot": "switch",
      "data-size": t,
      className: r(
        "peer group/switch inline-flex shrink-0 items-center border border-foreground p-0.5 transition-all outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-5 data-[size=default]:w-9 data-[size=sm]:h-4 data-[size=sm]:w-7 data-[state=checked]:bg-primary data-[state=unchecked]:bg-background",
        e
      ),
      ...o,
      children: /* @__PURE__ */ a(
        be.Thumb,
        {
          "data-slot": "switch-thumb",
          className: r(
            "pointer-events-none block h-full aspect-square bg-foreground ring-0 data-[state=checked]:bg-background transition-transform group-data-[size=default]/switch:data-[state=checked]:translate-x-4 group-data-[size=sm]/switch:data-[state=checked]:translate-x-3 data-[state=unchecked]:translate-x-0 dark:data-[state=unchecked]:bg-foreground"
          )
        }
      )
    }
  );
}
function ws({ className: e, ...t }) {
  return /* @__PURE__ */ d(
    O,
    {
      "data-slot": "table-container",
      className: "relative w-full",
      children: [
        /* @__PURE__ */ a(
          "table",
          {
            "data-slot": "table",
            className: r("w-full caption-bottom text-sm", e),
            ...t
          }
        ),
        /* @__PURE__ */ a(Me, { orientation: "horizontal" })
      ]
    }
  );
}
function Ns({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "thead",
    {
      "data-slot": "table-header",
      className: r("[&_tr]:border-b", e),
      ...t
    }
  );
}
function ys({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "tbody",
    {
      "data-slot": "table-body",
      className: r("[&_tr:last-child]:border-0", e),
      ...t
    }
  );
}
function zs({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "tfoot",
    {
      "data-slot": "table-footer",
      className: r(
        "border-t bg-card font-medium [&>tr]:last:border-b-0",
        e
      ),
      ...t
    }
  );
}
function ks({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "tr",
    {
      "data-slot": "table-row",
      className: r(
        "border-b transition-colors hover:bg-primary hover:text-background has-aria-expanded:bg-card data-[state=selected]:bg-card",
        e
      ),
      ...t
    }
  );
}
function Cs({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "th",
    {
      "data-slot": "table-head",
      className: r(
        "h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        e
      ),
      ...t
    }
  );
}
function _s({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "td",
    {
      "data-slot": "table-cell",
      className: r(
        "p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        e
      ),
      ...t
    }
  );
}
function Ss({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    "caption",
    {
      "data-slot": "table-caption",
      className: r("mt-4 text-sm text-muted-foreground", e),
      ...t
    }
  );
}
function Is({
  className: e,
  orientation: t = "horizontal",
  ...o
}) {
  return /* @__PURE__ */ a(
    Y.Root,
    {
      "data-slot": "tabs",
      "data-orientation": t,
      orientation: t,
      className: r(
        "group/tabs flex gap-2 data-[orientation=horizontal]:flex-col",
        e
      ),
      ...o
    }
  );
}
const ka = _(
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
function Ms({
  className: e,
  variant: t = "default",
  ...o
}) {
  return /* @__PURE__ */ a(
    Y.List,
    {
      "data-slot": "tabs-list",
      "data-variant": t,
      className: r(ka({ variant: t }), e),
      ...o
    }
  );
}
function Ts({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    Y.Trigger,
    {
      "data-slot": "tabs-trigger",
      className: r(
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
function Ds({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    Y.Content,
    {
      "data-slot": "tabs-content",
      className: r("flex-1 outline-none", e),
      ...t
    }
  );
}
const Ge = _(
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
function Ps({
  className: e,
  variant: t,
  size: o,
  ...n
}) {
  return /* @__PURE__ */ a(
    We.Root,
    {
      "data-slot": "toggle",
      className: r(Ge({ variant: t, size: o, className: e })),
      ...n
    }
  );
}
const Le = u.createContext({
  size: "default",
  variant: "default",
  spacing: 0
});
function Rs({
  className: e,
  variant: t,
  size: o,
  spacing: n = 0,
  children: i,
  ...s
}) {
  return /* @__PURE__ */ a(
    Ne.Root,
    {
      "data-slot": "toggle-group",
      "data-variant": t,
      "data-size": o,
      "data-spacing": n,
      style: { "--gap": n },
      className: r(
        "group/toggle-group flex w-fit items-center gap-[--spacing(var(--gap))] rounded-md data-[spacing=default]:data-[variant=outline]:shadow-xs",
        e
      ),
      ...s,
      children: /* @__PURE__ */ a(Le.Provider, { value: { variant: t, size: o, spacing: n }, children: i })
    }
  );
}
function js({
  className: e,
  children: t,
  variant: o,
  size: n,
  ...i
}) {
  const s = u.useContext(Le);
  return /* @__PURE__ */ a(
    Ne.Item,
    {
      "data-slot": "toggle-group-item",
      "data-variant": s.variant || o,
      "data-size": s.size || n,
      "data-spacing": s.spacing,
      className: r(
        Ge({
          variant: s.variant || o,
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
function As({
  title: e = /* @__PURE__ */ a(se, { children: "Connect with me now—Let’s UDP or TCP." }),
  actionLabel: t = "Contact Me",
  icon: o = /* @__PURE__ */ a(ct, { className: "size-6 flex-shrink-0 text-background" }),
  className: n,
  ...i
}) {
  return /* @__PURE__ */ d(
    "a",
    {
      "data-slot": "contact-cta",
      "data-augmented-ui": "bl-rect br-clip-y both",
      className: C(
        "aug-contact-cta group relative mb-32 flex min-h-[calc(100vh-12rem)] flex-wrap items-center justify-between gap-8 bg-foreground px-12 py-12 md:px-24 lg:min-h-0 lg:flex-row lg:justify-center lg:p-20 lg:pl-24",
        n
      ),
      ...i,
      children: [
        /* @__PURE__ */ a("h2", { className: "w-full pt-16 font-display text-6xl font-medium text-background lg:max-w-xl lg:pt-0", children: e }),
        /* @__PURE__ */ d(
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
                  children: o
                }
              )
            ]
          }
        )
      ]
    }
  );
}
function Gs({
  eyebrow: e,
  title: t,
  description: o,
  actions: n,
  className: i,
  ...s
}) {
  return /* @__PURE__ */ d(
    "section",
    {
      "data-slot": "hero-section",
      className: C(
        "flex w-full flex-col items-center gap-6 px-6 py-20 text-center sm:py-28",
        i
      ),
      ...s,
      children: [
        e && /* @__PURE__ */ a("p", { className: "font-mono text-sm tracking-widest text-muted-foreground uppercase", children: e }),
        /* @__PURE__ */ a("h1", { className: "max-w-3xl font-mono text-4xl font-semibold tracking-tight text-balance sm:text-6xl", children: t }),
        o && /* @__PURE__ */ a("p", { className: "max-w-xl text-lg text-balance text-muted-foreground", children: o }),
        n && /* @__PURE__ */ a("div", { className: "mt-4 flex flex-wrap items-center justify-center gap-3", children: n })
      ]
    }
  );
}
function Ls({
  className: e,
  onSubmit: t,
  forgotPasswordHref: o = "#",
  signUpHref: n = "#",
  ...i
}) {
  const [s, c] = u.useState({
    email: "",
    password: ""
  }), [m, l] = u.useState({});
  function g(b) {
    b.preventDefault();
    const v = {};
    s.email || (v.email = "Email is required."), s.password || (v.password = "Password is required."), l(v), Object.keys(v).length === 0 && t?.(s);
  }
  return /* @__PURE__ */ d(vt, { className: C("w-full max-w-sm", e), ...i, children: [
    /* @__PURE__ */ d(ht, { children: [
      /* @__PURE__ */ a(xt, { children: "Log in to your account" }),
      /* @__PURE__ */ a(wt, { children: "Enter your credentials to continue." })
    ] }),
    /* @__PURE__ */ a(Nt, { children: /* @__PURE__ */ a("form", { onSubmit: g, noValidate: !0, children: /* @__PURE__ */ d(Kt, { children: [
      /* @__PURE__ */ d(re, { "data-invalid": !!m.email, children: [
        /* @__PURE__ */ a(ve, { htmlFor: "login-email", children: "Email" }),
        /* @__PURE__ */ a(
          X,
          {
            id: "login-email",
            type: "email",
            autoComplete: "email",
            placeholder: "you@example.com",
            "aria-invalid": !!m.email,
            value: s.email,
            onChange: (b) => c((v) => ({
              ...v,
              email: b.target.value
            }))
          }
        ),
        /* @__PURE__ */ a(he, { errors: [{ message: m.email }] })
      ] }),
      /* @__PURE__ */ d(re, { "data-invalid": !!m.password, children: [
        /* @__PURE__ */ d("div", { className: "flex items-center justify-between gap-2", children: [
          /* @__PURE__ */ a(ve, { htmlFor: "login-password", children: "Password" }),
          /* @__PURE__ */ a(
            "a",
            {
              href: o,
              className: "text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline",
              children: "Forgot password?"
            }
          )
        ] }),
        /* @__PURE__ */ a(
          X,
          {
            id: "login-password",
            type: "password",
            autoComplete: "current-password",
            "aria-invalid": !!m.password,
            value: s.password,
            onChange: (b) => c((v) => ({
              ...v,
              password: b.target.value
            }))
          }
        ),
        /* @__PURE__ */ a(he, { errors: [{ message: m.password }] })
      ] }),
      /* @__PURE__ */ a(re, { children: /* @__PURE__ */ a(
        P,
        {
          type: "submit",
          className: "w-full",
          children: "Log in"
        }
      ) })
    ] }) }) }),
    /* @__PURE__ */ a(yt, { className: "justify-center", children: /* @__PURE__ */ d("p", { className: "text-sm text-muted-foreground", children: [
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
function $s({
  columns: e = [],
  socials: t = [],
  copyright: o,
  className: n,
  ...i
}) {
  return /* @__PURE__ */ a(
    "footer",
    {
      "data-slot": "site-footer",
      className: C(
        "w-full border-t bg-background px-6 py-10 text-foreground",
        n
      ),
      ...i,
      children: /* @__PURE__ */ d("div", { className: "mx-auto flex w-full max-w-5xl flex-col gap-10", children: [
        e.length > 0 && /* @__PURE__ */ a("div", { className: "grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4", children: e.map((s) => /* @__PURE__ */ d("div", { className: "flex flex-col gap-3", children: [
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
        /* @__PURE__ */ d("div", { className: "flex flex-col items-center justify-between gap-4 border-t pt-6 sm:flex-row", children: [
          /* @__PURE__ */ a("p", { className: "text-sm text-muted-foreground", children: o ?? `© ${(/* @__PURE__ */ new Date()).getFullYear()} — All rights reserved.` }),
          t.length > 0 && /* @__PURE__ */ a("ul", { className: "flex items-center gap-4", children: t.map((s) => /* @__PURE__ */ a("li", { children: /* @__PURE__ */ d(
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
function Fs({
  logo: e,
  links: t = [],
  actions: o,
  className: n,
  ...i
}) {
  return /* @__PURE__ */ d(
    "header",
    {
      "data-slot": "site-header",
      className: C(
        "sticky top-0 z-50 flex w-full items-center justify-between gap-4 border-b bg-background px-6 py-3",
        n
      ),
      ...i,
      children: [
        /* @__PURE__ */ a("div", { className: "flex items-center gap-2", children: e ?? /* @__PURE__ */ a("span", { className: "text-sm font-semibold", children: "LFDS" }) }),
        t.length > 0 && /* @__PURE__ */ a(Yt, { className: "hidden lg:flex", children: /* @__PURE__ */ a(Jt, { children: t.map((s) => /* @__PURE__ */ a(Qt, { children: s.children?.length ? /* @__PURE__ */ d(se, { children: [
          /* @__PURE__ */ a(Zt, { children: s.label }),
          /* @__PURE__ */ a(ea, { children: /* @__PURE__ */ a("ul", { className: "grid w-64 gap-1 p-2", children: s.children.map((c) => /* @__PURE__ */ a("li", { children: /* @__PURE__ */ d(xe, { href: c.href, children: [
            /* @__PURE__ */ a("div", { className: "text-sm font-medium", children: c.label }),
            c.description && /* @__PURE__ */ a("p", { className: "text-sm text-muted-foreground", children: c.description })
          ] }) }, c.label)) }) })
        ] }) : /* @__PURE__ */ a(
          xe,
          {
            href: s.href,
            className: Re(),
            children: s.label
          }
        ) }, s.label)) }) }),
        o && /* @__PURE__ */ a("div", { className: "flex items-center gap-2", children: o })
      ]
    }
  );
}
export {
  nr as Accordion,
  dr as AccordionContent,
  ir as AccordionItem,
  sr as AccordionTrigger,
  lr as Alert,
  ur as AlertDescription,
  mr as AlertDialog,
  wr as AlertDialogAction,
  Nr as AlertDialogCancel,
  fr as AlertDialogContent,
  hr as AlertDialogDescription,
  br as AlertDialogFooter,
  pr as AlertDialogHeader,
  xr as AlertDialogMedia,
  gt as AlertDialogOverlay,
  mt as AlertDialogPortal,
  vr as AlertDialogTitle,
  gr as AlertDialogTrigger,
  cr as AlertTitle,
  yr as AspectRatio,
  zr as Avatar,
  _r as AvatarBadge,
  Cr as AvatarFallback,
  Sr as AvatarGroup,
  Ir as AvatarGroupCount,
  kr as AvatarImage,
  Mr as Badge,
  Tr as Breadcrumb,
  Gr as BreadcrumbEllipsis,
  Pr as BreadcrumbItem,
  Rr as BreadcrumbLink,
  Dr as BreadcrumbList,
  jr as BreadcrumbPage,
  Ar as BreadcrumbSeparator,
  P as Button,
  Lr as ButtonGroup,
  Fr as ButtonGroupSeparator,
  $r as ButtonGroupText,
  Er as Calendar,
  bt as CalendarDayButton,
  vt as Card,
  Br as CardAction,
  Nt as CardContent,
  wt as CardDescription,
  yt as CardFooter,
  ht as CardHeader,
  xt as CardTitle,
  Or as Carousel,
  Vr as CarouselContent,
  Hr as CarouselItem,
  qr as CarouselNext,
  Kr as CarouselPrevious,
  Wr as ChartContainer,
  Yr as ChartLegend,
  Jr as ChartLegendContent,
  Ct as ChartStyle,
  Ur as ChartTooltip,
  Xr as ChartTooltipContent,
  Qr as Checkbox,
  Zr as Collapsible,
  to as CollapsibleContent,
  eo as CollapsibleTrigger,
  oo as Combobox,
  vo as ComboboxChip,
  bo as ComboboxChips,
  ho as ComboboxChipsInput,
  go as ComboboxCollection,
  so as ComboboxContent,
  fo as ComboboxEmpty,
  uo as ComboboxGroup,
  io as ComboboxInput,
  co as ComboboxItem,
  mo as ComboboxLabel,
  lo as ComboboxList,
  po as ComboboxSeparator,
  Pt as ComboboxTrigger,
  no as ComboboxValue,
  Bt as Command,
  ko as CommandDialog,
  So as CommandEmpty,
  Io as CommandGroup,
  Co as CommandInput,
  To as CommandItem,
  _o as CommandList,
  Mo as CommandSeparator,
  Do as CommandShortcut,
  As as ContactCTA,
  Po as ContextMenu,
  Oo as ContextMenuCheckboxItem,
  Eo as ContextMenuContent,
  jo as ContextMenuGroup,
  Bo as ContextMenuItem,
  Ho as ContextMenuLabel,
  Ao as ContextMenuPortal,
  Lo as ContextMenuRadioGroup,
  Vo as ContextMenuRadioItem,
  Ko as ContextMenuSeparator,
  qo as ContextMenuShortcut,
  Go as ContextMenuSub,
  Fo as ContextMenuSubContent,
  $o as ContextMenuSubTrigger,
  Ro as ContextMenuTrigger,
  jt as Dialog,
  yo as DialogClose,
  Lt as DialogContent,
  Et as DialogDescription,
  zo as DialogFooter,
  $t as DialogHeader,
  Gt as DialogOverlay,
  At as DialogPortal,
  Ft as DialogTitle,
  No as DialogTrigger,
  Wo as Drawer,
  Xo as DrawerClose,
  Yo as DrawerContent,
  en as DrawerDescription,
  Qo as DrawerFooter,
  Jo as DrawerHeader,
  Vt as DrawerOverlay,
  Ot as DrawerPortal,
  Zo as DrawerTitle,
  Uo as DrawerTrigger,
  tn as DropdownMenu,
  dn as DropdownMenuCheckboxItem,
  on as DropdownMenuContent,
  nn as DropdownMenuGroup,
  sn as DropdownMenuItem,
  un as DropdownMenuLabel,
  an as DropdownMenuPortal,
  ln as DropdownMenuRadioGroup,
  cn as DropdownMenuRadioItem,
  mn as DropdownMenuSeparator,
  gn as DropdownMenuShortcut,
  fn as DropdownMenuSub,
  bn as DropdownMenuSubContent,
  pn as DropdownMenuSubTrigger,
  rn as DropdownMenuTrigger,
  vn as Empty,
  yn as EmptyContent,
  Nn as EmptyDescription,
  hn as EmptyHeader,
  xn as EmptyMedia,
  wn as EmptyTitle,
  re as Field,
  Cn as FieldContent,
  Sn as FieldDescription,
  he as FieldError,
  Kt as FieldGroup,
  ve as FieldLabel,
  kn as FieldLegend,
  In as FieldSeparator,
  zn as FieldSet,
  _n as FieldTitle,
  Mn as Form,
  Rn as FormControl,
  jn as FormDescription,
  Tn as FormField,
  Dn as FormItem,
  Pn as FormLabel,
  An as FormMessage,
  Gs as HeroSection,
  Gn as HoverCard,
  $n as HoverCardContent,
  Ln as HoverCardTrigger,
  X as Input,
  St as InputGroup,
  Mt as InputGroupAddon,
  Ie as InputGroupButton,
  Dt as InputGroupInput,
  ao as InputGroupText,
  ro as InputGroupTextarea,
  Fn as InputOTP,
  En as InputOTPGroup,
  On as InputOTPSeparator,
  Bn as InputOTPSlot,
  Kn as Item,
  Yn as ItemActions,
  Wn as ItemContent,
  Xn as ItemDescription,
  Qn as ItemFooter,
  Vn as ItemGroup,
  Jn as ItemHeader,
  qn as ItemMedia,
  Hn as ItemSeparator,
  Un as ItemTitle,
  ee as Kbd,
  wo as KbdGroup,
  Te as Label,
  Ls as LoginForm,
  Zn as Menubar,
  ii as MenubarCheckboxItem,
  oi as MenubarContent,
  ti as MenubarGroup,
  ni as MenubarItem,
  di as MenubarLabel,
  ei as MenubarMenu,
  Xt as MenubarPortal,
  ai as MenubarRadioGroup,
  si as MenubarRadioItem,
  li as MenubarSeparator,
  ci as MenubarShortcut,
  ui as MenubarSub,
  gi as MenubarSubContent,
  mi as MenubarSubTrigger,
  ri as MenubarTrigger,
  fi as NativeSelect,
  bi as NativeSelectOptGroup,
  pi as NativeSelectOption,
  Yt as NavigationMenu,
  ea as NavigationMenuContent,
  vi as NavigationMenuIndicator,
  Qt as NavigationMenuItem,
  xe as NavigationMenuLink,
  Jt as NavigationMenuList,
  Zt as NavigationMenuTrigger,
  ta as NavigationMenuViewport,
  hi as Pagination,
  xi as PaginationContent,
  zi as PaginationEllipsis,
  wi as PaginationItem,
  je as PaginationLink,
  yi as PaginationNext,
  Ni as PaginationPrevious,
  ki as Popover,
  Si as PopoverAnchor,
  _i as PopoverContent,
  Ti as PopoverDescription,
  Ii as PopoverHeader,
  Mi as PopoverTitle,
  Ci as PopoverTrigger,
  Di as Progress,
  Pi as RadioGroup,
  Ri as RadioGroupItem,
  Gi as ResizableHandle,
  Ai as ResizablePanel,
  ji as ResizablePanelGroup,
  O as ScrollArea,
  Me as ScrollBar,
  Li as Select,
  Bi as SelectContent,
  $i as SelectGroup,
  Vi as SelectItem,
  Oi as SelectLabel,
  ra as SelectScrollDownButton,
  aa as SelectScrollUpButton,
  Hi as SelectSeparator,
  Ei as SelectTrigger,
  Fi as SelectValue,
  Q as Separator,
  oa as Sheet,
  qi as SheetClose,
  da as SheetContent,
  ua as SheetDescription,
  Wi as SheetFooter,
  la as SheetHeader,
  ca as SheetTitle,
  Ki as SheetTrigger,
  Xi as Sidebar,
  rs as SidebarContent,
  ts as SidebarFooter,
  os as SidebarGroup,
  is as SidebarGroupAction,
  ss as SidebarGroupContent,
  ns as SidebarGroupLabel,
  es as SidebarHeader,
  Zi as SidebarInput,
  Qi as SidebarInset,
  ds as SidebarMenu,
  us as SidebarMenuAction,
  ms as SidebarMenuBadge,
  cs as SidebarMenuButton,
  ls as SidebarMenuItem,
  gs as SidebarMenuSkeleton,
  fs as SidebarMenuSub,
  bs as SidebarMenuSubButton,
  ps as SidebarMenuSubItem,
  Ui as SidebarProvider,
  Ji as SidebarRail,
  as as SidebarSeparator,
  Yi as SidebarTrigger,
  $s as SiteFooter,
  Fs as SiteHeader,
  we as Skeleton,
  vs as Slider,
  hs as Spinner,
  xs as Switch,
  ws as Table,
  ys as TableBody,
  Ss as TableCaption,
  _s as TableCell,
  zs as TableFooter,
  Cs as TableHead,
  Ns as TableHeader,
  ks as TableRow,
  Is as Tabs,
  Ds as TabsContent,
  Ms as TabsList,
  Ts as TabsTrigger,
  _t as Textarea,
  or as Toaster,
  Ps as Toggle,
  Rs as ToggleGroup,
  js as ToggleGroupItem,
  fa as Tooltip,
  ba as TooltipContent,
  ga as TooltipProvider,
  pa as TooltipTrigger,
  ft as badgeVariants,
  pt as buttonGroupVariants,
  U as buttonVariants,
  C as cn,
  Re as navigationMenuTriggerStyle,
  ka as tabsListVariants,
  Ge as toggleVariants,
  xo as useComboboxAnchor,
  te as useFormField,
  ma as useIsMobile,
  ae as useSidebar
};
