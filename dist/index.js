import { jsx as a, jsxs as l, Fragment as X } from "react/jsx-runtime";
import { Slot as wt } from "@radix-ui/react-slot";
import * as g from "react";
import { useMemo as Nt, useState as Me, useEffect as Te, useCallback as Ie } from "react";
import { clsx as yt } from "clsx";
import { twMerge as kt } from "tailwind-merge";
import { cva as D } from "class-variance-authority";
import { useTheme as zt } from "next-themes";
import { Toaster as Ct } from "sonner";
import { cn as o } from "cn";
import $ from "~icons/material-symbols/keyboard-arrow-down";
import { Accordion as U, AlertDialog as j, AspectRatio as _t, Avatar as ge, Slot as P, Separator as St, Checkbox as De, Collapsible as fe, ScrollArea as q, Dialog as z, ContextMenu as C, Label as Mt, HoverCard as J, Menubar as _, NavigationMenu as R, Popover as W, Progress as Pe, RadioGroup as se, Select as T, Tooltip as F, Slider as Y, Switch as je, Tabs as Z, Toggle as Tt, ToggleGroup as Fe } from "radix-ui";
import O from "~icons/material-symbols/chevron-right";
import Ge from "~icons/material-symbols/more-horiz";
import Be from "~icons/material-symbols/chevron-left";
import { getDefaultClassNames as Oe, DayPicker as It } from "react-day-picker";
import Dt from "embla-carousel-react";
import Pt from "~icons/material-symbols/arrow-back";
import jt from "~icons/material-symbols/arrow-forward";
import * as pe from "recharts";
import V from "~icons/material-symbols/check";
import { Combobox as k } from "@base-ui/react";
import ee from "~icons/material-symbols/close";
import { Command as L } from "cmdk";
import Ve from "~icons/material-symbols/search";
import be from "~icons/material-symbols/circle";
import { Drawer as A } from "vaul";
import * as S from "@radix-ui/react-dropdown-menu";
import { FormProvider as Rt, Controller as At, useFormContext as Et, useFormState as $t } from "react-hook-form";
import { OTPInput as Lt, OTPInputContext as Ft } from "input-otp";
import Gt from "~icons/material-symbols/remove";
import Bt from "~icons/material-symbols/drag-indicator";
import * as he from "react-resizable-panels";
import Ot from "~icons/material-symbols/keyboard-arrow-up";
import Vt from "~icons/material-symbols/view-sidebar";
import Ht from "~icons/material-symbols/progress-activity";
import le from "~icons/material-symbols/arrow-outward";
import qt from "~icons/material-symbols/add";
import Kt from "~icons/material-symbols/error";
import Ut from "~icons/material-symbols/inbox";
import Wt from "~icons/material-symbols/refresh";
import Xt from "~icons/material-symbols/search-off";
import Yt from "~icons/material-symbols/check-circle";
import Jt from "~icons/material-symbols/send";
import Qt from "~icons/material-symbols/trending-down";
import Zt from "~icons/material-symbols/trending-flat";
import ea from "~icons/material-symbols/trending-up";
import ta from "~icons/material-symbols/format-quote";
import He from "~icons/material-symbols/computer-sharp";
import qe from "~icons/material-symbols/dark-mode";
import Ke from "~icons/material-symbols/light-mode";
import aa from "~icons/material-symbols/settings-sharp";
function b(...e) {
  return kt(yt(e));
}
const Q = D(
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
function I({
  className: e,
  variant: t,
  size: r,
  "data-augmented-ui": n,
  asChild: i = !1,
  ...s
}) {
  const d = i ? wt : "button", u = n ?? (t?.startsWith("augmented") ? "tr-clip bl-clip both" : void 0);
  return /* @__PURE__ */ a(
    d,
    {
      "data-slot": "button",
      className: b(Q({ variant: t, size: r, className: e })),
      "data-augmented-ui": u,
      ...s
    }
  );
}
function jo({ toastOptions: e, ...t }) {
  const { theme: r = "system" } = zt();
  return /* @__PURE__ */ a(
    Ct,
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
function Ro({
  ...e
}) {
  return /* @__PURE__ */ a(U.Root, { "data-slot": "accordion", ...e });
}
function Ao({
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
function Eo({
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
        /* @__PURE__ */ a($, { className: "pointer-events-none size-4 shrink-0 translate-y-0.5 text-muted-foreground transition-transform duration-200" })
      ]
    }
  ) });
}
function $o({
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
const ra = D(
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
function Lo({
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
      className: o(ra({ variant: t }), e),
      ...r
    }
  );
}
function Fo({ className: e, ...t }) {
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
function Go({
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
function Bo({
  ...e
}) {
  return /* @__PURE__ */ a(j.Root, { "data-slot": "alert-dialog", ...e });
}
function Oo({
  ...e
}) {
  return /* @__PURE__ */ a(j.Trigger, { "data-slot": "alert-dialog-trigger", ...e });
}
function oa({
  ...e
}) {
  return /* @__PURE__ */ a(j.Portal, { "data-slot": "alert-dialog-portal", ...e });
}
function na({
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
function Vo({
  className: e,
  size: t = "default",
  ...r
}) {
  return /* @__PURE__ */ l(oa, { children: [
    /* @__PURE__ */ a(na, {}),
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
function Ho({
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
function qo({
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
function Ko({
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
function Uo({
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
function Wo({
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
function Xo({
  className: e,
  variant: t = "default",
  size: r = "default",
  ...n
}) {
  return /* @__PURE__ */ a(I, { variant: t, size: r, asChild: !0, children: /* @__PURE__ */ a(
    j.Action,
    {
      "data-slot": "alert-dialog-action",
      className: o(e),
      ...n
    }
  ) });
}
function Yo({
  className: e,
  variant: t = "outline",
  size: r = "default",
  ...n
}) {
  return /* @__PURE__ */ a(I, { variant: t, size: r, asChild: !0, children: /* @__PURE__ */ a(
    j.Cancel,
    {
      "data-slot": "alert-dialog-cancel",
      className: o(e),
      ...n
    }
  ) });
}
function Jo({
  ...e
}) {
  return /* @__PURE__ */ a(_t.Root, { "data-slot": "aspect-ratio", ...e });
}
function ia({
  className: e,
  size: t = "default",
  ...r
}) {
  return /* @__PURE__ */ a(
    ge.Root,
    {
      "data-slot": "avatar",
      "data-size": t,
      className: o(
        "group/avatar relative flex size-8 shrink-0 rounded-none select-none data-[size=lg]:size-10 data-[size=sm]:size-6",
        e
      ),
      ...r
    }
  );
}
function sa({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    ge.Image,
    {
      "data-slot": "avatar-image",
      className: o("aspect-square size-full rounded-none", e),
      ...t
    }
  );
}
function la({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    ge.Fallback,
    {
      "data-slot": "avatar-fallback",
      className: o(
        "flex size-full items-center justify-center rounded-none bg-foreground text-sm font-medium text-background group-data-[size=sm]/avatar:text-xs",
        e
      ),
      ...t
    }
  );
}
function Qo({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "span",
    {
      "data-slot": "avatar-badge",
      className: o(
        "absolute right-0 bottom-0 z-10 inline-flex items-center justify-center rounded-none bg-accent text-accent-foreground ring-2 ring-background select-none",
        "group-data-[size=sm]/avatar:size-2 group-data-[size=sm]/avatar:[&>svg]:hidden",
        "group-data-[size=default]/avatar:size-2.5 group-data-[size=default]/avatar:[&>svg]:size-2",
        "group-data-[size=lg]/avatar:size-3 group-data-[size=lg]/avatar:[&>svg]:size-2",
        e
      ),
      ...t
    }
  );
}
function Zo({ className: e, ...t }) {
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
function en({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "avatar-group-count",
      className: o(
        "relative flex size-8 shrink-0 items-center justify-center rounded-none bg-foreground text-sm font-medium text-background ring-2 ring-background group-has-data-[size=lg]/avatar-group:size-10 group-has-data-[size=sm]/avatar-group:size-6 [&>svg]:size-4 group-has-data-[size=lg]/avatar-group:[&>svg]:size-5 group-has-data-[size=sm]/avatar-group:[&>svg]:size-3",
        e
      ),
      ...t
    }
  );
}
const da = D(
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
function ca({
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
      className: o(da({ variant: t }), e),
      ...n
    }
  );
}
function tn({ ...e }) {
  return /* @__PURE__ */ a("nav", { "aria-label": "breadcrumb", "data-slot": "breadcrumb", ...e });
}
function an({ className: e, ...t }) {
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
function rn({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "li",
    {
      "data-slot": "breadcrumb-item",
      className: o("inline-flex items-center gap-1.5", e),
      ...t
    }
  );
}
function on({
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
function nn({ className: e, ...t }) {
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
function sn({
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
function ln({
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
        /* @__PURE__ */ a(Ge, { className: "size-4" }),
        /* @__PURE__ */ a("span", { className: "sr-only", children: "More" })
      ]
    }
  );
}
function te({
  className: e,
  orientation: t = "horizontal",
  decorative: r = !0,
  ...n
}) {
  return /* @__PURE__ */ a(
    St.Root,
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
const ua = D(
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
function dn({
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
      className: o(ua({ orientation: t }), e),
      ...r
    }
  );
}
function cn({
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
function un({
  className: e,
  orientation: t = "vertical",
  ...r
}) {
  return /* @__PURE__ */ a(
    te,
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
function mn({
  className: e,
  classNames: t,
  showOutsideDays: r = !0,
  captionLayout: n = "label",
  buttonVariant: i = "ghost",
  formatters: s,
  components: d,
  ...u
}) {
  const c = Oe();
  return /* @__PURE__ */ a(
    It,
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
        formatMonthDropdown: (m) => m.toLocaleString("default", { month: "short" }),
        ...s
      },
      classNames: {
        root: o("w-fit", c.root),
        months: o(
          "relative flex flex-col gap-4 md:flex-row",
          c.months
        ),
        month: o("flex w-full flex-col gap-4", c.month),
        nav: o(
          "absolute inset-x-0 top-0 flex w-full items-center justify-between gap-1",
          c.nav
        ),
        button_previous: o(
          Q({ variant: i }),
          "size-(--cell-size) p-0 select-none aria-disabled:opacity-50",
          c.button_previous
        ),
        button_next: o(
          Q({ variant: i }),
          "size-(--cell-size) p-0 select-none aria-disabled:opacity-50",
          c.button_next
        ),
        month_caption: o(
          "flex h-(--cell-size) w-full items-center justify-center px-(--cell-size)",
          c.month_caption
        ),
        dropdowns: o(
          "flex h-(--cell-size) w-full items-center justify-center gap-1.5 text-sm font-medium",
          c.dropdowns
        ),
        dropdown_root: o(
          "relative rounded-md border border-input shadow-xs has-focus:border-ring has-focus:ring-[3px] has-focus:ring-ring/50",
          c.dropdown_root
        ),
        dropdown: o(
          "absolute inset-0 bg-popover opacity-0",
          c.dropdown
        ),
        caption_label: o(
          "font-medium select-none",
          n === "label" ? "text-sm" : "flex h-8 items-center gap-1 rounded-md pr-1 pl-2 text-sm [&>svg]:size-3.5 [&>svg]:text-muted-foreground",
          c.caption_label
        ),
        month_grid: o("w-full border-collapse", c.month_grid),
        weekdays: o("flex", c.weekdays),
        weekday: o(
          "flex-1 rounded-md text-[0.8rem] font-normal text-muted-foreground select-none",
          c.weekday
        ),
        week: o("mt-2 flex w-full", c.week),
        week_number_header: o(
          "w-(--cell-size) select-none",
          c.week_number_header
        ),
        week_number: o(
          "text-[0.8rem] text-muted-foreground select-none",
          c.week_number
        ),
        day: o(
          "group/day relative aspect-square h-full w-full p-0 text-center select-none [&:last-child[data-selected=true]_button]:rounded-r-md",
          u.showWeekNumber ? "[&:nth-child(2)[data-selected=true]_button]:rounded-l-md" : "[&:first-child[data-selected=true]_button]:rounded-l-md",
          c.day
        ),
        range_start: o(
          "rounded-l-md bg-accent",
          c.range_start
        ),
        range_middle: o("rounded-none", c.range_middle),
        range_end: o("rounded-r-md bg-accent", c.range_end),
        today: o(
          "rounded-md bg-accent text-accent-foreground data-[selected=true]:rounded-none",
          c.today
        ),
        outside: o(
          "text-muted-foreground aria-selected:text-muted-foreground",
          c.outside
        ),
        disabled: o(
          "text-muted-foreground opacity-50",
          c.disabled
        ),
        hidden: o("invisible", c.hidden),
        ...t
      },
      components: {
        Root: ({ className: m, rootRef: f, ...x }) => /* @__PURE__ */ a(
          "div",
          {
            "data-slot": "calendar",
            ref: f,
            className: o(m),
            ...x
          }
        ),
        Chevron: ({ className: m, orientation: f, ...x }) => f === "left" ? /* @__PURE__ */ a(Be, { className: o("size-4", m), ...x }) : f === "right" ? /* @__PURE__ */ a(
          O,
          {
            className: o("size-4", m),
            ...x
          }
        ) : /* @__PURE__ */ a($, { className: o("size-4", m), ...x }),
        DayButton: ma,
        WeekNumber: ({ children: m, ...f }) => /* @__PURE__ */ a("td", { ...f, children: /* @__PURE__ */ a("div", { className: "flex size-(--cell-size) items-center justify-center text-center", children: m }) }),
        ...d
      },
      ...u
    }
  );
}
function ma({
  className: e,
  day: t,
  modifiers: r,
  ...n
}) {
  const i = Oe(), s = g.useRef(null);
  return g.useEffect(() => {
    r.focused && s.current?.focus();
  }, [r.focused]), /* @__PURE__ */ a(
    I,
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
function xe({ className: e, ...t }) {
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
function ve({ className: e, ...t }) {
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
function we({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "card-title",
      className: o("leading-none font-semibold", e),
      ...t
    }
  );
}
function Ne({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "card-description",
      className: o("text-sm text-muted-foreground", e),
      ...t
    }
  );
}
function ga({ className: e, ...t }) {
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
function ye({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "card-content",
      className: o("px-6", e),
      ...t
    }
  );
}
function Ue({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "card-footer",
      className: o("flex items-center px-6 [.border-t]:pt-6", e),
      ...t
    }
  );
}
const We = g.createContext(null);
function ae() {
  const e = g.useContext(We);
  if (!e)
    throw new Error("useCarousel must be used within a <Carousel />");
  return e;
}
function gn({
  orientation: e = "horizontal",
  opts: t,
  setApi: r,
  plugins: n,
  className: i,
  children: s,
  ...d
}) {
  const [u, c] = Dt(
    {
      ...t,
      axis: e === "horizontal" ? "x" : "y"
    },
    n
  ), [m, f] = g.useState(!1), [x, w] = g.useState(!1), p = g.useCallback((v) => {
    v && (f(v.canScrollPrev()), w(v.canScrollNext()));
  }, []), N = g.useCallback(() => {
    c?.scrollPrev();
  }, [c]), y = g.useCallback(() => {
    c?.scrollNext();
  }, [c]), h = g.useCallback(
    (v) => {
      v.key === "ArrowLeft" ? (v.preventDefault(), N()) : v.key === "ArrowRight" && (v.preventDefault(), y());
    },
    [N, y]
  );
  return g.useEffect(() => {
    !c || !r || r(c);
  }, [c, r]), g.useEffect(() => {
    if (c)
      return p(c), c.on("reInit", p), c.on("select", p), () => {
        c?.off("select", p);
      };
  }, [c, p]), /* @__PURE__ */ a(
    We.Provider,
    {
      value: {
        carouselRef: u,
        api: c,
        opts: t,
        orientation: e || (t?.axis === "y" ? "vertical" : "horizontal"),
        scrollPrev: N,
        scrollNext: y,
        canScrollPrev: m,
        canScrollNext: x
      },
      children: /* @__PURE__ */ a(
        "div",
        {
          onKeyDownCapture: h,
          className: o("relative", i),
          role: "region",
          "aria-roledescription": "carousel",
          "data-slot": "carousel",
          ...d,
          children: s
        }
      )
    }
  );
}
function fn({ className: e, ...t }) {
  const { carouselRef: r, orientation: n } = ae();
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
function pn({ className: e, ...t }) {
  const { orientation: r } = ae();
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
function bn({
  className: e,
  variant: t = "outline",
  size: r = "icon",
  ...n
}) {
  const { orientation: i, scrollPrev: s, canScrollPrev: d } = ae();
  return /* @__PURE__ */ l(
    I,
    {
      "data-slot": "carousel-previous",
      variant: t,
      size: r,
      className: o(
        "absolute size-8",
        i === "horizontal" ? "top-1/2 -left-12 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
        e
      ),
      disabled: !d,
      onClick: s,
      ...n,
      children: [
        /* @__PURE__ */ a(Pt, {}),
        /* @__PURE__ */ a("span", { className: "sr-only", children: "Previous slide" })
      ]
    }
  );
}
function hn({
  className: e,
  variant: t = "outline",
  size: r = "icon",
  ...n
}) {
  const { orientation: i, scrollNext: s, canScrollNext: d } = ae();
  return /* @__PURE__ */ l(
    I,
    {
      "data-slot": "carousel-next",
      variant: t,
      size: r,
      className: o(
        "absolute size-8",
        i === "horizontal" ? "top-1/2 -right-12 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        e
      ),
      disabled: !d,
      onClick: s,
      ...n,
      children: [
        /* @__PURE__ */ a(jt, {}),
        /* @__PURE__ */ a("span", { className: "sr-only", children: "Next slide" })
      ]
    }
  );
}
const fa = { light: "", dark: ".dark" }, pa = { width: 320, height: 200 }, Xe = g.createContext(null);
function Ye() {
  const e = g.useContext(Xe);
  if (!e)
    throw new Error("useChart must be used within a <ChartContainer />");
  return e;
}
function xn({
  id: e,
  className: t,
  children: r,
  config: n,
  initialDimension: i = pa,
  ...s
}) {
  const d = g.useId(), u = `chart-${e ?? d.replace(/:/g, "")}`;
  return /* @__PURE__ */ a(Xe.Provider, { value: { config: n }, children: /* @__PURE__ */ l(
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
        /* @__PURE__ */ a(ba, { id: u, config: n }),
        /* @__PURE__ */ a(
          pe.ResponsiveContainer,
          {
            initialDimension: i,
            children: r
          }
        )
      ]
    }
  ) });
}
const ba = ({ id: e, config: t }) => {
  const r = Object.entries(t).filter(
    ([, n]) => n.theme ?? n.color
  );
  return r.length ? /* @__PURE__ */ a(
    "style",
    {
      dangerouslySetInnerHTML: {
        __html: Object.entries(fa).map(
          ([n, i]) => `
${i} [data-chart=${e}] {
${r.map(([s, d]) => {
            const u = d.theme?.[n] ?? d.color;
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
}, vn = pe.Tooltip;
function wn({
  active: e,
  payload: t,
  className: r,
  indicator: n = "dot",
  hideLabel: i = !1,
  hideIndicator: s = !1,
  label: d,
  labelFormatter: u,
  labelClassName: c,
  formatter: m,
  color: f,
  nameKey: x,
  labelKey: w
}) {
  const { config: p } = Ye(), N = g.useMemo(() => {
    if (i || !t?.length)
      return null;
    const [h] = t, v = `${w ?? h?.dataKey ?? h?.name ?? "value"}`, M = de(p, h, v), E = !w && typeof d == "string" ? p[d]?.label ?? d : M?.label;
    return u ? /* @__PURE__ */ a("div", { className: o("font-medium", c), children: u(E, t) }) : E ? /* @__PURE__ */ a("div", { className: o("font-medium", c), children: E }) : null;
  }, [
    d,
    u,
    t,
    i,
    c,
    p,
    w
  ]);
  if (!e || !t?.length)
    return null;
  const y = t.length === 1 && n !== "dot";
  return /* @__PURE__ */ l(
    "div",
    {
      className: o(
        "grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl",
        r
      ),
      children: [
        y ? null : N,
        /* @__PURE__ */ a("div", { className: "grid gap-1.5", children: t.filter((h) => h.type !== "none").map((h, v) => {
          const M = `${x ?? h.name ?? h.dataKey ?? "value"}`, E = de(p, h, M), Se = f ?? h.payload?.fill ?? h.color;
          return /* @__PURE__ */ a(
            "div",
            {
              className: o(
                "flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-muted-foreground",
                n === "dot" && "items-center"
              ),
              children: m && h?.value !== void 0 && h.name ? m(h.value, h.name, h, v, h.payload) : /* @__PURE__ */ l(X, { children: [
                E?.icon ? /* @__PURE__ */ a(E.icon, {}) : !s && /* @__PURE__ */ a(
                  "div",
                  {
                    className: o(
                      "shrink-0 border-(--color-border) bg-(--color-bg)",
                      {
                        "h-2.5 w-2.5": n === "dot",
                        "w-1": n === "line",
                        "w-0 border-[1.5px] border-dashed bg-transparent": n === "dashed",
                        "my-0.5": y && n === "dashed"
                      }
                    ),
                    style: {
                      "--color-bg": Se,
                      "--color-border": Se
                    }
                  }
                ),
                /* @__PURE__ */ l(
                  "div",
                  {
                    className: o(
                      "flex flex-1 justify-between leading-none",
                      y ? "items-end" : "items-center"
                    ),
                    children: [
                      /* @__PURE__ */ l("div", { className: "grid gap-1.5", children: [
                        y ? N : null,
                        /* @__PURE__ */ a("span", { className: "text-muted-foreground", children: E?.label ?? h.name })
                      ] }),
                      h.value != null && /* @__PURE__ */ a("span", { className: "font-mono font-medium text-foreground tabular-nums", children: typeof h.value == "number" ? h.value.toLocaleString() : String(h.value) })
                    ]
                  }
                )
              ] })
            },
            v
          );
        }) })
      ]
    }
  );
}
const Nn = pe.Legend;
function yn({
  className: e,
  hideIcon: t = !1,
  payload: r,
  verticalAlign: n = "bottom",
  nameKey: i
}) {
  const { config: s } = Ye();
  return r?.length ? /* @__PURE__ */ a(
    "div",
    {
      className: o(
        "flex items-center justify-center gap-4",
        n === "top" ? "pb-3" : "pt-3",
        e
      ),
      children: r.filter((d) => d.type !== "none").map((d, u) => {
        const c = `${i ?? d.dataKey ?? "value"}`, m = de(s, d, c);
        return /* @__PURE__ */ l(
          "div",
          {
            className: o(
              "flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-muted-foreground"
            ),
            children: [
              m?.icon && !t ? /* @__PURE__ */ a(m.icon, {}) : /* @__PURE__ */ a(
                "div",
                {
                  className: "h-2 w-2 shrink-0",
                  style: {
                    backgroundColor: d.color
                  }
                }
              ),
              m?.label
            ]
          },
          u
        );
      })
    }
  ) : null;
}
function de(e, t, r) {
  if (typeof t != "object" || t === null)
    return;
  const n = "payload" in t && typeof t.payload == "object" && t.payload !== null ? t.payload : void 0;
  let i = r;
  return r in t && typeof t[r] == "string" ? i = t[r] : n && r in n && typeof n[r] == "string" && (i = n[r]), i in e ? e[i] : e[r];
}
function kn({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    De.Root,
    {
      "data-slot": "checkbox",
      className: o(
        "peer size-4 shrink-0 border border-input shadow-xs transition-shadow outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 data-[state=checked]:border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:bg-background dark:aria-invalid:ring-destructive/40 dark:data-[state=checked]:bg-primary",
        e
      ),
      ...t,
      children: /* @__PURE__ */ a(
        De.Indicator,
        {
          "data-slot": "checkbox-indicator",
          className: "grid place-content-center text-current transition-none",
          children: /* @__PURE__ */ a(V, { className: "size-3.5" })
        }
      )
    }
  );
}
function zn({
  ...e
}) {
  return /* @__PURE__ */ a(fe.Root, { "data-slot": "collapsible", ...e });
}
function Cn({
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
function _n({
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
function G({ className: e, type: t, ...r }) {
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
function Je({ className: e, ...t }) {
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
function Qe({ className: e, ...t }) {
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
const ha = D(
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
function ce({
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
      className: o(ha({ align: t }), e),
      onClick: (n) => {
        n.target.closest("button") || n.currentTarget.parentElement?.querySelector("input")?.focus();
      },
      ...r
    }
  );
}
const xa = D(
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
function Ze({
  className: e,
  type: t = "button",
  variant: r = "ghost",
  size: n = "xs",
  ...i
}) {
  return /* @__PURE__ */ a(
    I,
    {
      type: t,
      "data-size": n,
      variant: r,
      className: o(xa({ size: n }), e),
      ...i
    }
  );
}
function Sn({ className: e, ...t }) {
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
function et({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    G,
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
function Mn({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    Je,
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
        /* @__PURE__ */ a(tt, {}),
        /* @__PURE__ */ a(q.Corner, {})
      ]
    }
  );
}
function tt({
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
const Tn = k.Root;
function In({ ...e }) {
  return /* @__PURE__ */ a(k.Value, { "data-slot": "combobox-value", ...e });
}
function va({
  className: e,
  children: t,
  ...r
}) {
  return /* @__PURE__ */ l(
    k.Trigger,
    {
      "data-slot": "combobox-trigger",
      className: o("[&_svg:not([class*='size-'])]:size-4", e),
      ...r,
      children: [
        t,
        /* @__PURE__ */ a(
          $,
          {
            "data-slot": "combobox-trigger-icon",
            className: "pointer-events-none size-4 text-muted-foreground"
          }
        )
      ]
    }
  );
}
function wa({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    k.Clear,
    {
      "data-slot": "combobox-clear",
      render: /* @__PURE__ */ a(Ze, { variant: "ghost", size: "icon-xs" }),
      className: o(e),
      ...t,
      children: /* @__PURE__ */ a(ee, { className: "pointer-events-none" })
    }
  );
}
function Dn({
  className: e,
  children: t,
  disabled: r = !1,
  showTrigger: n = !0,
  showClear: i = !1,
  ...s
}) {
  return /* @__PURE__ */ l(Qe, { className: o("w-auto", e), children: [
    /* @__PURE__ */ a(
      k.Input,
      {
        render: /* @__PURE__ */ a(et, { disabled: r }),
        ...s
      }
    ),
    /* @__PURE__ */ l(ce, { align: "inline-end", children: [
      n && /* @__PURE__ */ a(
        Ze,
        {
          size: "icon-xs",
          variant: "ghost",
          asChild: !0,
          "data-slot": "input-group-button",
          className: "group-has-data-[slot=combobox-clear]/input-group:hidden data-pressed:bg-transparent",
          disabled: r,
          children: /* @__PURE__ */ a(va, {})
        }
      ),
      i && /* @__PURE__ */ a(wa, { disabled: r })
    ] }),
    t
  ] });
}
function Pn({
  className: e,
  side: t = "bottom",
  sideOffset: r = 6,
  align: n = "start",
  alignOffset: i = 0,
  anchor: s,
  ...d
}) {
  return /* @__PURE__ */ a(k.Portal, { children: /* @__PURE__ */ a(
    k.Positioner,
    {
      side: t,
      sideOffset: r,
      align: n,
      alignOffset: i,
      anchor: s,
      className: "isolate z-50",
      children: /* @__PURE__ */ a(
        k.Popup,
        {
          "data-slot": "combobox-content",
          "data-chips": !!s,
          className: o(
            "group/combobox-content relative max-h-96 w-(--anchor-width) max-w-(--available-width) min-w-[calc(var(--anchor-width)+--spacing(7))] origin-(--transform-origin) overflow-hidden rounded-md bg-popover text-popover-foreground duration-100 data-[chips=true]:min-w-(--anchor-width) data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 *:data-[slot=input-group]:m-1 *:data-[slot=input-group]:mb-0 *:data-[slot=input-group]:h-8 *:data-[slot=input-group]:-input/30 *:data-[slot=input-group]:bg-input/30 *:data-[slot=input-group]:-none data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95",
            e
          ),
          ...d
        }
      )
    }
  ) });
}
function jn({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(H, { className: "max-h-[min(calc(--spacing(96)---spacing(9)),calc(var(--available-height)---spacing(9)))]", children: /* @__PURE__ */ a(
    k.List,
    {
      "data-slot": "combobox-list",
      className: o("p-1 data-empty:p-0", e),
      ...t
    }
  ) });
}
function Rn({
  className: e,
  children: t,
  ...r
}) {
  return /* @__PURE__ */ l(
    k.Item,
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
          k.ItemIndicator,
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
function An({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    k.Group,
    {
      "data-slot": "combobox-group",
      className: o(e),
      ...t
    }
  );
}
function En({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    k.GroupLabel,
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
function $n({ ...e }) {
  return /* @__PURE__ */ a(k.Collection, { "data-slot": "combobox-collection", ...e });
}
function Ln({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    k.Empty,
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
function Fn({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    k.Separator,
    {
      "data-slot": "combobox-separator",
      className: o("-mx-1 my-1 h-px bg-foreground", e),
      ...t
    }
  );
}
function Gn({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    k.Chips,
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
function Bn({
  className: e,
  children: t,
  showRemove: r = !0,
  ...n
}) {
  return /* @__PURE__ */ l(
    k.Chip,
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
          k.ChipRemove,
          {
            render: /* @__PURE__ */ a(I, { variant: "ghost", size: "icon-xs" }),
            className: "-ml-1 text-background/70 hover:bg-background/20 hover:text-background focus-visible:ring-background/60",
            "data-slot": "combobox-chip-remove",
            children: /* @__PURE__ */ a(ee, { className: "pointer-events-none" })
          }
        )
      ]
    }
  );
}
function On({
  className: e,
  children: t,
  ...r
}) {
  return /* @__PURE__ */ a(
    k.Input,
    {
      "data-slot": "combobox-chip-input",
      className: o("min-w-16 flex-1 outline-none", e),
      ...r
    }
  );
}
function Vn() {
  return g.useRef(null);
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
function Hn({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "kbd",
    {
      "data-slot": "kbd-group",
      className: o("inline-flex items-center gap-1", e),
      ...t
    }
  );
}
function at({
  ...e
}) {
  return /* @__PURE__ */ a(z.Root, { "data-slot": "dialog", ...e });
}
function qn({
  ...e
}) {
  return /* @__PURE__ */ a(z.Trigger, { "data-slot": "dialog-trigger", ...e });
}
function Na({
  ...e
}) {
  return /* @__PURE__ */ a(z.Portal, { "data-slot": "dialog-portal", ...e });
}
function Kn({
  ...e
}) {
  return /* @__PURE__ */ a(z.Close, { "data-slot": "dialog-close", ...e });
}
function ya({
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
function rt({
  className: e,
  children: t,
  showCloseButton: r = !0,
  augmented: n = !0,
  ...i
}) {
  return /* @__PURE__ */ l(Na, { "data-slot": "dialog-portal", children: [
    /* @__PURE__ */ a(ya, {}),
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
                /* @__PURE__ */ a(ee, {}),
                /* @__PURE__ */ a("span", { className: "sr-only", children: "Close" })
              ]
            }
          )
        ]
      }
    )
  ] });
}
function ot({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "dialog-header",
      className: o("flex flex-col gap-2 text-center sm:text-left", e),
      ...t
    }
  );
}
function Un({
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
        t && /* @__PURE__ */ a(z.Close, { asChild: !0, children: /* @__PURE__ */ a(I, { variant: "outline", children: "Close" }) })
      ]
    }
  );
}
function nt({
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
function it({
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
function st({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    L,
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
function Wn({
  title: e = "Command Palette",
  description: t = "Search for a command to run...",
  children: r,
  className: n,
  showCloseButton: i = !0,
  ...s
}) {
  return /* @__PURE__ */ l(at, { ...s, children: [
    /* @__PURE__ */ l(ot, { className: "sr-only", children: [
      /* @__PURE__ */ a(nt, { children: e }),
      /* @__PURE__ */ a(it, { children: t })
    ] }),
    /* @__PURE__ */ a(
      rt,
      {
        className: o("overflow-hidden p-0", n),
        showCloseButton: i,
        augmented: !1,
        children: /* @__PURE__ */ a(
          st,
          {
            className: "**:data-[slot=command-input-wrapper]:h-12 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]]:px-2 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5",
            children: r
          }
        )
      }
    )
  ] });
}
function ka({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ l(
    "div",
    {
      "data-slot": "command-input-wrapper",
      className: "flex h-9 items-center gap-2 border-b px-3",
      children: [
        /* @__PURE__ */ a(Ve, { className: "size-4 shrink-0" }),
        /* @__PURE__ */ a(
          L.Input,
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
function za({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(H, { className: "max-h-[300px]", children: /* @__PURE__ */ a(
    L.List,
    {
      "data-slot": "command-list",
      className: o("overflow-x-hidden", e),
      ...t
    }
  ) });
}
function Ca({
  ...e
}) {
  return /* @__PURE__ */ a(
    L.Empty,
    {
      "data-slot": "command-empty",
      className: "py-6 text-center text-sm",
      ...e
    }
  );
}
function _a({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    L.Group,
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
function Sa({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    L.Separator,
    {
      "data-slot": "command-separator",
      className: o("-mx-1 h-px bg-foreground", e),
      ...t
    }
  );
}
function Ma({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    L.Item,
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
function Ta({
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
function Xn({
  ...e
}) {
  return /* @__PURE__ */ a(C.Root, { "data-slot": "context-menu", ...e });
}
function Yn({
  ...e
}) {
  return /* @__PURE__ */ a(C.Trigger, { "data-slot": "context-menu-trigger", ...e });
}
function Jn({
  ...e
}) {
  return /* @__PURE__ */ a(C.Group, { "data-slot": "context-menu-group", ...e });
}
function Qn({
  ...e
}) {
  return /* @__PURE__ */ a(C.Portal, { "data-slot": "context-menu-portal", ...e });
}
function Zn({
  ...e
}) {
  return /* @__PURE__ */ a(C.Sub, { "data-slot": "context-menu-sub", ...e });
}
function ei({
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
function ti({
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
function ai({
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
function ri({
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
function oi({
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
function ni({
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
function ii({
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
        /* @__PURE__ */ a("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ a(C.ItemIndicator, { children: /* @__PURE__ */ a(be, { className: "size-2 fill-current" }) }) }),
        t
      ]
    }
  );
}
function si({
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
function li({
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
function di({
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
function ci({
  ...e
}) {
  return /* @__PURE__ */ a(A.Root, { "data-slot": "drawer", ...e });
}
function ui({
  ...e
}) {
  return /* @__PURE__ */ a(A.Trigger, { "data-slot": "drawer-trigger", ...e });
}
function Ia({
  ...e
}) {
  return /* @__PURE__ */ a(A.Portal, { "data-slot": "drawer-portal", ...e });
}
function mi({
  ...e
}) {
  return /* @__PURE__ */ a(A.Close, { "data-slot": "drawer-close", ...e });
}
function Da({
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
function gi({
  className: e,
  children: t,
  ...r
}) {
  return /* @__PURE__ */ l(Ia, { "data-slot": "drawer-portal", children: [
    /* @__PURE__ */ a(Da, {}),
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
function fi({ className: e, ...t }) {
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
function pi({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "drawer-footer",
      className: o("mt-auto flex flex-col gap-2 p-4", e),
      ...t
    }
  );
}
function bi({
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
function hi({
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
function Pa({
  ...e
}) {
  return /* @__PURE__ */ a(S.Root, { "data-slot": "dropdown-menu", ...e });
}
function xi({
  ...e
}) {
  return /* @__PURE__ */ a(S.Portal, { "data-slot": "dropdown-menu-portal", ...e });
}
function ja({
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
function Ra({
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
      className: b(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-hidden",
        e
      ),
      ...n,
      children: /* @__PURE__ */ a(H, { className: "max-h-(--radix-dropdown-menu-content-available-height)", children: /* @__PURE__ */ a("div", { className: "p-1", children: t }) })
    }
  ) });
}
function vi({
  ...e
}) {
  return /* @__PURE__ */ a(S.Group, { "data-slot": "dropdown-menu-group", ...e });
}
function wi({
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
      className: b(
        "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-current relative flex cursor-default items-center gap-2 px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...n
    }
  );
}
function Ni({
  className: e,
  children: t,
  checked: r,
  ...n
}) {
  return /* @__PURE__ */ l(
    S.CheckboxItem,
    {
      "data-slot": "dropdown-menu-checkbox-item",
      className: b(
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
function Aa({
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
function ne({
  className: e,
  children: t,
  ...r
}) {
  return /* @__PURE__ */ l(
    S.RadioItem,
    {
      "data-slot": "dropdown-menu-radio-item",
      className: b(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...r,
      children: [
        /* @__PURE__ */ a("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ a(S.ItemIndicator, { children: /* @__PURE__ */ a(be, { className: "size-2 fill-current" }) }) }),
        t
      ]
    }
  );
}
function lt({
  className: e,
  inset: t,
  ...r
}) {
  return /* @__PURE__ */ a(
    S.Label,
    {
      "data-slot": "dropdown-menu-label",
      "data-inset": t,
      className: b(
        "px-2 py-1.5 text-sm font-medium data-[inset]:pl-8",
        e
      ),
      ...r
    }
  );
}
function Ea({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    S.Separator,
    {
      "data-slot": "dropdown-menu-separator",
      className: b("bg-foreground -mx-1 my-1 h-px", e),
      ...t
    }
  );
}
function yi({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    B,
    {
      "data-slot": "dropdown-menu-shortcut",
      className: b("ml-auto", e),
      ...t
    }
  );
}
function ki({
  ...e
}) {
  return /* @__PURE__ */ a(S.Sub, { "data-slot": "dropdown-menu-sub", ...e });
}
function zi({
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
      className: b(
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
function Ci({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    S.SubContent,
    {
      "data-slot": "dropdown-menu-sub-content",
      className: b(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-hidden p-1",
        e
      ),
      ...t
    }
  );
}
function $a({ className: e, ...t }) {
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
function La({ className: e, ...t }) {
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
const Fa = D(
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
function Ga({
  className: e,
  variant: t = "default",
  ...r
}) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "empty-icon",
      "data-variant": t,
      className: o(Fa({ variant: t, className: e })),
      ...r
    }
  );
}
function Ba({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "empty-title",
      className: o("text-lg font-medium tracking-tight", e),
      ...t
    }
  );
}
function Oa({ className: e, ...t }) {
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
function Va({ className: e, ...t }) {
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
function dt({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    Mt.Root,
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
function _i({ className: e, ...t }) {
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
function Si({
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
function ct({ className: e, ...t }) {
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
const Ha = D(
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
      className: o(Ha({ orientation: t }), e),
      ...r
    }
  );
}
function Mi({ className: e, ...t }) {
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
function ue({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    dt,
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
function Ti({ className: e, ...t }) {
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
function Ii({ className: e, ...t }) {
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
function Di({
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
        /* @__PURE__ */ a(te, { className: "absolute inset-0 top-1/2" }),
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
function me({
  className: e,
  children: t,
  errors: r,
  ...n
}) {
  const i = Nt(() => {
    if (t)
      return t;
    if (!r?.length)
      return null;
    const s = [
      ...new Map(r.map((d) => [d?.message, d])).values()
    ];
    return s?.length == 1 ? s[0]?.message : /* @__PURE__ */ a("ul", { className: "ml-4 flex list-disc flex-col gap-1", children: s.map(
      (d, u) => d?.message && /* @__PURE__ */ a("li", { children: d.message }, u)
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
const Pi = Rt, ut = g.createContext(
  {}
), ji = ({
  ...e
}) => /* @__PURE__ */ a(ut.Provider, { value: { name: e.name }, children: /* @__PURE__ */ a(At, { ...e }) }), re = () => {
  const e = g.useContext(ut), t = g.useContext(mt), { getFieldState: r } = Et(), n = $t({ name: e.name }), i = r(e.name, n);
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
}, mt = g.createContext(
  {}
);
function Ri({ className: e, ...t }) {
  const r = g.useId();
  return /* @__PURE__ */ a(mt.Provider, { value: { id: r }, children: /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "form-item",
      className: o("grid gap-2", e),
      ...t
    }
  ) });
}
function Ai({
  className: e,
  ...t
}) {
  const { error: r, formItemId: n } = re();
  return /* @__PURE__ */ a(
    dt,
    {
      "data-slot": "form-label",
      "data-error": !!r,
      className: o("data-[error=true]:text-destructive", e),
      htmlFor: n,
      ...t
    }
  );
}
function Ei({ ...e }) {
  const { error: t, formItemId: r, formDescriptionId: n, formMessageId: i } = re();
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
function $i({ className: e, ...t }) {
  const { formDescriptionId: r } = re();
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
function Li({ className: e, ...t }) {
  const { error: r, formMessageId: n } = re(), i = r ? String(r?.message ?? "") : t.children;
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
function Fi({
  ...e
}) {
  return /* @__PURE__ */ a(J.Root, { "data-slot": "hover-card", ...e });
}
function Gi({
  ...e
}) {
  return /* @__PURE__ */ a(J.Trigger, { "data-slot": "hover-card-trigger", ...e });
}
function Bi({
  className: e,
  align: t = "center",
  sideOffset: r = 4,
  ...n
}) {
  return /* @__PURE__ */ a(J.Portal, { "data-slot": "hover-card-portal", children: /* @__PURE__ */ a(
    J.Content,
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
function Oi({
  className: e,
  containerClassName: t,
  ...r
}) {
  return /* @__PURE__ */ a(
    Lt,
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
function Vi({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "input-otp-group",
      className: o("flex items-center", e),
      ...t
    }
  );
}
function Hi({
  index: e,
  className: t,
  ...r
}) {
  const n = g.useContext(Ft), { char: i, hasFakeCaret: s, isActive: d } = n?.slots[e] ?? {};
  return /* @__PURE__ */ l(
    "div",
    {
      "data-slot": "input-otp-slot",
      "data-active": d,
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
function qi({ ...e }) {
  return /* @__PURE__ */ a("div", { "data-slot": "input-otp-separator", role: "separator", ...e, children: /* @__PURE__ */ a(Gt, {}) });
}
function Ki({ className: e, ...t }) {
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
function Ui({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    te,
    {
      "data-slot": "item-separator",
      orientation: "horizontal",
      className: o("my-0", e),
      ...t
    }
  );
}
const qa = D(
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
function Wi({
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
      className: o(qa({ variant: t, size: r, className: e })),
      ...i
    }
  );
}
const Ka = D(
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
function Xi({
  className: e,
  variant: t = "default",
  ...r
}) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "item-media",
      "data-variant": t,
      className: o(Ka({ variant: t, className: e })),
      ...r
    }
  );
}
function Yi({ className: e, ...t }) {
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
function Ji({ className: e, ...t }) {
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
function Qi({ className: e, ...t }) {
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
function Zi({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "item-actions",
      className: o("flex items-center gap-2", e),
      ...t
    }
  );
}
function es({ className: e, ...t }) {
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
function ts({ className: e, ...t }) {
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
function as({
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
function rs({
  ...e
}) {
  return /* @__PURE__ */ a(_.Menu, { "data-slot": "menubar-menu", ...e });
}
function os({
  ...e
}) {
  return /* @__PURE__ */ a(_.Group, { "data-slot": "menubar-group", ...e });
}
function Ua({
  ...e
}) {
  return /* @__PURE__ */ a(_.Portal, { "data-slot": "menubar-portal", ...e });
}
function ns({
  ...e
}) {
  return /* @__PURE__ */ a(_.RadioGroup, { "data-slot": "menubar-radio-group", ...e });
}
function is({
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
function ss({
  className: e,
  align: t = "start",
  alignOffset: r = -4,
  sideOffset: n = 8,
  ...i
}) {
  return /* @__PURE__ */ a(Ua, { children: /* @__PURE__ */ a(
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
function ls({
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
function ds({
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
function cs({
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
        /* @__PURE__ */ a("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ a(_.ItemIndicator, { children: /* @__PURE__ */ a(be, { className: "size-2 fill-current" }) }) }),
        t
      ]
    }
  );
}
function us({
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
function ms({
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
function gs({
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
function fs({
  ...e
}) {
  return /* @__PURE__ */ a(_.Sub, { "data-slot": "menubar-sub", ...e });
}
function ps({
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
function bs({
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
function hs({
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
          $,
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
function xs({
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
function vs({
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
function Wa({
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
        r && /* @__PURE__ */ a(Za, {})
      ]
    }
  );
}
function Xa({
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
function Ya({
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
const gt = D(
  "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-[color,box-shadow] outline-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=open]:bg-accent data-[state=open]:text-accent-foreground"
);
function Ja({
  className: e,
  children: t,
  ...r
}) {
  return /* @__PURE__ */ l(
    R.Trigger,
    {
      "data-slot": "navigation-menu-trigger",
      className: o(gt(), "group", e),
      ...r,
      children: [
        t,
        " ",
        /* @__PURE__ */ a(
          $,
          {
            className: "relative top-[1px] ml-1 size-4 shrink-0 transition duration-300 group-data-[state=open]:rotate-180",
            "aria-hidden": "true"
          }
        )
      ]
    }
  );
}
function Qa({
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
function Za({
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
function Re({
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
function ws({
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
function Ns({ className: e, ...t }) {
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
function ys({
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
function ks({ ...e }) {
  return /* @__PURE__ */ a("li", { "data-slot": "pagination-item", ...e });
}
function ft({
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
        Q({
          variant: t ? "outline" : "ghost",
          size: r
        }),
        e
      ),
      ...n
    }
  );
}
function zs({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ l(
    ft,
    {
      "aria-label": "Go to previous page",
      size: "default",
      className: o("gap-1 px-2.5 sm:pl-2.5", e),
      ...t,
      children: [
        /* @__PURE__ */ a(Be, {}),
        /* @__PURE__ */ a("span", { className: "hidden sm:block", children: "Previous" })
      ]
    }
  );
}
function Cs({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ l(
    ft,
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
function _s({
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
        /* @__PURE__ */ a(Ge, { className: "size-4" }),
        /* @__PURE__ */ a("span", { className: "sr-only", children: "More pages" })
      ]
    }
  );
}
function Ss({
  ...e
}) {
  return /* @__PURE__ */ a(W.Root, { "data-slot": "popover", ...e });
}
function Ms({
  ...e
}) {
  return /* @__PURE__ */ a(W.Trigger, { "data-slot": "popover-trigger", ...e });
}
function Ts({
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
function Is({
  ...e
}) {
  return /* @__PURE__ */ a(W.Anchor, { "data-slot": "popover-anchor", ...e });
}
function Ds({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "popover-header",
      className: o("flex flex-col gap-1 text-sm", e),
      ...t
    }
  );
}
function Ps({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "popover-title",
      className: o("font-medium", e),
      ...t
    }
  );
}
function js({
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
function Rs({
  className: e,
  value: t,
  ...r
}) {
  return /* @__PURE__ */ a(
    Pe.Root,
    {
      "data-slot": "progress",
      className: o(
        "relative h-2 w-full overflow-hidden bg-primary/20",
        e
      ),
      ...r,
      children: /* @__PURE__ */ a(
        Pe.Indicator,
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
function As({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    se.Root,
    {
      "data-slot": "radio-group",
      className: o("grid gap-3", e),
      ...t
    }
  );
}
function Es({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    se.Item,
    {
      "data-slot": "radio-group-item",
      className: o(
        "aspect-square size-4 shrink-0 border border-input text-primary shadow-xs transition-[color,box-shadow] outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:bg-background dark:aria-invalid:ring-destructive/40",
        e
      ),
      ...t,
      children: /* @__PURE__ */ a(
        se.Indicator,
        {
          "data-slot": "radio-group-indicator",
          className: "relative flex items-center justify-center",
          children: /* @__PURE__ */ a("span", { className: "absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2 bg-primary" })
        }
      )
    }
  );
}
function $s({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    he.Group,
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
function Ls({ ...e }) {
  return /* @__PURE__ */ a(he.Panel, { "data-slot": "resizable-panel", ...e });
}
function Fs({
  withHandle: e,
  className: t,
  ...r
}) {
  return /* @__PURE__ */ a(
    he.Separator,
    {
      "data-slot": "resizable-handle",
      className: o(
        "relative flex w-px items-center justify-center bg-foreground after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:outline-hidden aria-[orientation=horizontal]:h-px aria-[orientation=horizontal]:w-full aria-[orientation=horizontal]:after:left-0 aria-[orientation=horizontal]:after:h-1 aria-[orientation=horizontal]:after:w-full aria-[orientation=horizontal]:after:translate-x-0 aria-[orientation=horizontal]:after:-translate-y-1/2 [&[aria-orientation=horizontal]>div]:rotate-90",
        t
      ),
      ...r,
      children: e && /* @__PURE__ */ a("div", { className: "z-10 flex h-4 w-3 items-center justify-center rounded-xs border border-foreground bg-foreground text-background", children: /* @__PURE__ */ a(Bt, { className: "size-2.5" }) })
    }
  );
}
function Gs({
  ...e
}) {
  return /* @__PURE__ */ a(T.Root, { "data-slot": "select", ...e });
}
function Bs({
  ...e
}) {
  return /* @__PURE__ */ a(T.Group, { "data-slot": "select-group", ...e });
}
function Os({
  ...e
}) {
  return /* @__PURE__ */ a(T.Value, { "data-slot": "select-value", ...e });
}
function Vs({
  className: e,
  size: t = "default",
  children: r,
  ...n
}) {
  return /* @__PURE__ */ l(
    T.Trigger,
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
        /* @__PURE__ */ a(T.Icon, { asChild: !0, children: /* @__PURE__ */ a($, { className: "size-4 opacity-50" }) })
      ]
    }
  );
}
function Hs({
  className: e,
  children: t,
  position: r = "popper",
  align: n = "center",
  ...i
}) {
  return /* @__PURE__ */ a(T.Portal, { children: /* @__PURE__ */ l(
    T.Content,
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
        /* @__PURE__ */ a(er, {}),
        /* @__PURE__ */ a(
          T.Viewport,
          {
            className: o(
              "p-1",
              r === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"
            ),
            children: t
          }
        ),
        /* @__PURE__ */ a(tr, {})
      ]
    }
  ) });
}
function qs({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    T.Label,
    {
      "data-slot": "select-label",
      className: o("px-2 py-1.5 text-xs text-muted-foreground", e),
      ...t
    }
  );
}
function Ks({
  className: e,
  children: t,
  ...r
}) {
  return /* @__PURE__ */ l(
    T.Item,
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
            children: /* @__PURE__ */ a(T.ItemIndicator, { children: /* @__PURE__ */ a(V, { className: "size-4" }) })
          }
        ),
        /* @__PURE__ */ a(T.ItemText, { children: t })
      ]
    }
  );
}
function Us({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    T.Separator,
    {
      "data-slot": "select-separator",
      className: o("pointer-events-none -mx-1 my-1 h-px bg-foreground", e),
      ...t
    }
  );
}
function er({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    T.ScrollUpButton,
    {
      "data-slot": "select-scroll-up-button",
      className: o(
        "flex cursor-default items-center justify-center py-1",
        e
      ),
      ...t,
      children: /* @__PURE__ */ a(Ot, { className: "size-4" })
    }
  );
}
function tr({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    T.ScrollDownButton,
    {
      "data-slot": "select-scroll-down-button",
      className: o(
        "flex cursor-default items-center justify-center py-1",
        e
      ),
      ...t,
      children: /* @__PURE__ */ a($, { className: "size-4" })
    }
  );
}
function ar({ ...e }) {
  return /* @__PURE__ */ a(z.Root, { "data-slot": "sheet", ...e });
}
function Ws({
  ...e
}) {
  return /* @__PURE__ */ a(z.Trigger, { "data-slot": "sheet-trigger", ...e });
}
function Xs({
  ...e
}) {
  return /* @__PURE__ */ a(z.Close, { "data-slot": "sheet-close", ...e });
}
function rr({
  ...e
}) {
  return /* @__PURE__ */ a(z.Portal, { "data-slot": "sheet-portal", ...e });
}
function or({
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
const nr = {
  right: "tl-clip bl-clip both",
  left: "tr-clip br-clip both",
  top: "bl-clip br-clip both",
  bottom: "tl-clip tr-clip both"
};
function ir({
  className: e,
  children: t,
  side: r = "right",
  showCloseButton: n = !0,
  ...i
}) {
  return /* @__PURE__ */ l(rr, { children: [
    /* @__PURE__ */ a(or, {}),
    /* @__PURE__ */ l(
      z.Content,
      {
        "data-slot": "sheet-content",
        "data-augmented-ui": nr[r],
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
            /* @__PURE__ */ a(ee, { className: "size-4" }),
            /* @__PURE__ */ a("span", { className: "sr-only", children: "Close" })
          ] })
        ]
      }
    )
  ] });
}
function sr({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "sheet-header",
      className: o("flex flex-col gap-1.5 p-4", e),
      ...t
    }
  );
}
function Ys({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "sheet-footer",
      className: o("mt-auto flex flex-col gap-2 p-4", e),
      ...t
    }
  );
}
function lr({
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
function dr({
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
const ie = 768;
function cr() {
  const [e, t] = g.useState(void 0);
  return g.useEffect(() => {
    const r = window.matchMedia(`(max-width: ${ie - 1}px)`), n = () => {
      t(window.innerWidth < ie);
    };
    return r.addEventListener("change", n), t(window.innerWidth < ie), () => r.removeEventListener("change", n);
  }, []), !!e;
}
function Ae({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "skeleton",
      className: o("animate-pulse rounded-md bg-card", e),
      ...t
    }
  );
}
function ur({
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
function mr({
  ...e
}) {
  return /* @__PURE__ */ a(F.Root, { "data-slot": "tooltip", ...e });
}
function gr({
  ...e
}) {
  return /* @__PURE__ */ a(F.Trigger, { "data-slot": "tooltip-trigger", ...e });
}
function fr({
  className: e,
  sideOffset: t = 0,
  children: r,
  ...n
}) {
  return /* @__PURE__ */ a(F.Portal, { children: /* @__PURE__ */ l(
    F.Content,
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
        /* @__PURE__ */ a(F.Arrow, { className: "z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 bg-foreground fill-foreground" })
      ]
    }
  ) });
}
const pr = "sidebar_state", br = 3600 * 24 * 7, hr = "16rem", xr = "18rem", vr = "3rem", wr = "b", pt = g.createContext(null);
function oe() {
  const e = g.useContext(pt);
  if (!e)
    throw new Error("useSidebar must be used within a SidebarProvider.");
  return e;
}
function Js({
  defaultOpen: e = !0,
  open: t,
  onOpenChange: r,
  className: n,
  style: i,
  children: s,
  ...d
}) {
  const u = cr(), [c, m] = g.useState(!1), [f, x] = g.useState(e), w = t ?? f, p = g.useCallback(
    (v) => {
      const M = typeof v == "function" ? v(w) : v;
      r ? r(M) : x(M), document.cookie = `${pr}=${M}; path=/; max-age=${br}`;
    },
    [r, w]
  ), N = g.useCallback(() => u ? m((v) => !v) : p((v) => !v), [u, p, m]);
  g.useEffect(() => {
    const v = (M) => {
      M.key === wr && (M.metaKey || M.ctrlKey) && (M.preventDefault(), N());
    };
    return window.addEventListener("keydown", v), () => window.removeEventListener("keydown", v);
  }, [N]);
  const y = w ? "expanded" : "collapsed", h = g.useMemo(
    () => ({
      state: y,
      open: w,
      setOpen: p,
      isMobile: u,
      openMobile: c,
      setOpenMobile: m,
      toggleSidebar: N
    }),
    [y, w, p, u, c, m, N]
  );
  return /* @__PURE__ */ a(pt.Provider, { value: h, children: /* @__PURE__ */ a(ur, { delayDuration: 0, children: /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "sidebar-wrapper",
      style: {
        "--sidebar-width": hr,
        "--sidebar-width-icon": vr,
        ...i
      },
      className: o(
        "group/sidebar-wrapper flex min-h-svh w-full has-data-[variant=inset]:bg-sidebar",
        n
      ),
      ...d,
      children: s
    }
  ) }) });
}
function Qs({
  side: e = "left",
  variant: t = "sidebar",
  collapsible: r = "offcanvas",
  className: n,
  children: i,
  ...s
}) {
  const { isMobile: d, state: u, openMobile: c, setOpenMobile: m } = oe();
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
  ) : d ? /* @__PURE__ */ a(ar, { open: c, onOpenChange: m, ...s, children: /* @__PURE__ */ l(
    ir,
    {
      "data-sidebar": "sidebar",
      "data-slot": "sidebar",
      "data-mobile": "true",
      className: "w-(--sidebar-width) bg-sidebar p-0 text-sidebar-foreground [&>button]:hidden",
      style: {
        "--sidebar-width": xr
      },
      side: e,
      children: [
        /* @__PURE__ */ l(sr, { className: "sr-only", children: [
          /* @__PURE__ */ a(lr, { children: "Sidebar" }),
          /* @__PURE__ */ a(dr, { children: "Displays the mobile sidebar." })
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
function Zs({
  className: e,
  onClick: t,
  ...r
}) {
  const { toggleSidebar: n } = oe();
  return /* @__PURE__ */ l(
    I,
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
        /* @__PURE__ */ a(Vt, {}),
        /* @__PURE__ */ a("span", { className: "sr-only", children: "Toggle Sidebar" })
      ]
    }
  );
}
function el({ className: e, ...t }) {
  const { toggleSidebar: r } = oe();
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
function tl({ className: e, ...t }) {
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
function al({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    G,
    {
      "data-slot": "sidebar-input",
      "data-sidebar": "input",
      className: o("h-8 w-full bg-background shadow-none", e),
      ...t
    }
  );
}
function rl({ className: e, ...t }) {
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
function ol({ className: e, ...t }) {
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
function nl({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    te,
    {
      "data-slot": "sidebar-separator",
      "data-sidebar": "separator",
      className: o("mx-2 w-auto bg-sidebar-foreground", e),
      ...t
    }
  );
}
function il({
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
function sl({ className: e, ...t }) {
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
function ll({
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
function dl({
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
function cl({
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
function ul({ className: e, ...t }) {
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
function ml({ className: e, ...t }) {
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
const Nr = D(
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
function gl({
  asChild: e = !1,
  isActive: t = !1,
  variant: r = "default",
  size: n = "default",
  tooltip: i,
  className: s,
  ...d
}) {
  const u = e ? P.Root : "button", { isMobile: c, state: m } = oe(), f = /* @__PURE__ */ a(
    u,
    {
      "data-slot": "sidebar-menu-button",
      "data-sidebar": "menu-button",
      "data-size": n,
      "data-active": t,
      className: o(Nr({ variant: r, size: n }), s),
      ...d
    }
  );
  return i ? (typeof i == "string" && (i = {
    children: i
  }), /* @__PURE__ */ l(mr, { children: [
    /* @__PURE__ */ a(gr, { asChild: !0, children: f }),
    /* @__PURE__ */ a(
      fr,
      {
        side: "right",
        align: "center",
        hidden: m !== "collapsed" || c,
        ...i
      }
    )
  ] })) : f;
}
function fl({
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
function pl({
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
function bl({
  className: e,
  showIcon: t = !1,
  ...r
}) {
  const n = g.useMemo(() => `${Math.floor(Math.random() * 40) + 50}%`, []);
  return /* @__PURE__ */ l(
    "div",
    {
      "data-slot": "sidebar-menu-skeleton",
      "data-sidebar": "menu-skeleton",
      className: o("flex h-8 items-center gap-2 rounded-md px-2", e),
      ...r,
      children: [
        t && /* @__PURE__ */ a(
          Ae,
          {
            className: "size-4 rounded-md",
            "data-sidebar": "menu-skeleton-icon"
          }
        ),
        /* @__PURE__ */ a(
          Ae,
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
function hl({ className: e, ...t }) {
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
function xl({
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
function vl({
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
function wl({
  className: e,
  defaultValue: t,
  value: r,
  min: n = 0,
  max: i = 100,
  ...s
}) {
  const d = g.useMemo(
    () => Array.isArray(r) ? r : Array.isArray(t) ? t : [n, i],
    [r, t, n, i]
  );
  return /* @__PURE__ */ l(
    Y.Root,
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
          Y.Track,
          {
            "data-slot": "slider-track",
            className: o(
              "relative grow overflow-hidden bg-muted data-[orientation=horizontal]:h-1.5 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1.5"
            ),
            children: /* @__PURE__ */ a(
              Y.Range,
              {
                "data-slot": "slider-range",
                className: o(
                  "absolute bg-primary data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full"
                )
              }
            )
          }
        ),
        Array.from({ length: d.length }, (u, c) => /* @__PURE__ */ a(
          Y.Thumb,
          {
            "data-slot": "slider-thumb",
            className: "block size-4 shrink-0 rounded-full border border-primary bg-white shadow-sm ring-ring/50 transition-[color,box-shadow] hover:ring-4 focus-visible:ring-4 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50"
          },
          c
        ))
      ]
    }
  );
}
function yr({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    Ht,
    {
      role: "status",
      "aria-label": "Loading",
      className: o("size-4 animate-spin text-primary", e),
      ...t
    }
  );
}
function Nl({
  className: e,
  size: t = "default",
  ...r
}) {
  return /* @__PURE__ */ a(
    je.Root,
    {
      "data-slot": "switch",
      "data-size": t,
      className: o(
        "peer group/switch inline-flex shrink-0 items-center border border-foreground p-0.5 transition-all outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-5 data-[size=default]:w-9 data-[size=sm]:h-4 data-[size=sm]:w-7 data-[state=checked]:bg-primary data-[state=unchecked]:bg-background",
        e
      ),
      ...r,
      children: /* @__PURE__ */ a(
        je.Thumb,
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
function yl({ className: e, ...t }) {
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
        /* @__PURE__ */ a(tt, { orientation: "horizontal" })
      ]
    }
  );
}
function kl({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "thead",
    {
      "data-slot": "table-header",
      className: o("[&_tr]:border-b", e),
      ...t
    }
  );
}
function zl({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "tbody",
    {
      "data-slot": "table-body",
      className: o("[&_tr:last-child]:border-0", e),
      ...t
    }
  );
}
function Cl({ className: e, ...t }) {
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
function _l({ className: e, ...t }) {
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
function Sl({ className: e, ...t }) {
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
function Ml({ className: e, ...t }) {
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
function Tl({
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
function Il({
  className: e,
  orientation: t = "horizontal",
  ...r
}) {
  return /* @__PURE__ */ a(
    Z.Root,
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
const kr = D(
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
function Dl({
  className: e,
  variant: t = "default",
  ...r
}) {
  return /* @__PURE__ */ a(
    Z.List,
    {
      "data-slot": "tabs-list",
      "data-variant": t,
      className: o(kr({ variant: t }), e),
      ...r
    }
  );
}
function Pl({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    Z.Trigger,
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
function jl({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    Z.Content,
    {
      "data-slot": "tabs-content",
      className: o("flex-1 outline-none", e),
      ...t
    }
  );
}
const bt = D(
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
function Rl({
  className: e,
  variant: t,
  size: r,
  ...n
}) {
  return /* @__PURE__ */ a(
    Tt.Root,
    {
      "data-slot": "toggle",
      className: o(bt({ variant: t, size: r, className: e })),
      ...n
    }
  );
}
const ht = g.createContext({
  size: "default",
  variant: "default",
  spacing: 0
});
function Al({
  className: e,
  variant: t,
  size: r,
  spacing: n = 0,
  children: i,
  ...s
}) {
  return /* @__PURE__ */ a(
    Fe.Root,
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
      children: /* @__PURE__ */ a(ht.Provider, { value: { variant: t, size: r, spacing: n }, children: i })
    }
  );
}
function El({
  className: e,
  children: t,
  variant: r,
  size: n,
  ...i
}) {
  const s = g.useContext(ht);
  return /* @__PURE__ */ a(
    Fe.Item,
    {
      "data-slot": "toggle-group-item",
      "data-variant": s.variant || r,
      "data-size": s.size || n,
      "data-spacing": s.spacing,
      className: o(
        bt({
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
const ke = "theme", $l = `(function(){var t=null;try{var m=document.cookie.match(/(?:^|;)\\s*${ke}=([^;]*)/);t=m?m[1]:null}catch(e){}if(t!=='light'&&t!=='dark'&&t!=='system')t='system';var d=t==='dark'||(t==='system'&&matchMedia('(prefers-color-scheme: dark)').matches);document.documentElement.classList.toggle('dark',d)})()`;
function zr(e) {
  return e === "light" || e === "dark" || e === "system";
}
function Cr() {
  if (typeof location > "u")
    return null;
  const e = location.hostname;
  return e === "localhost" || /^\d{1,3}(\.\d{1,3}){3}$/.test(e) || !e.includes(".") ? null : `.${e.split(".").slice(-2).join(".")}`;
}
function _r() {
  if (typeof document > "u")
    return null;
  const e = document.cookie.match(new RegExp(`(?:^|;)\\s*${ke}=([^;]*)`));
  return e && zr(e[1]) ? e[1] : null;
}
function Sr(e) {
  if (typeof document > "u")
    return;
  const t = Cr(), r = t ? ` domain=${t};` : "";
  document.cookie = `${ke}=${e};${r} path=/; max-age=31536000; samesite=lax`;
}
function Mr() {
  return _r() ?? "system";
}
function Ee(e) {
  return e !== "system" ? e : typeof window > "u" ? "light" : window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function $e(e) {
  document.documentElement.classList.toggle("dark", e === "dark");
}
function xt() {
  const [e, t] = Me("system"), [r, n] = Me("light");
  Te(() => {
    t(Mr());
  }, []), Te(() => {
    const d = Ee(e);
    if ($e(d), n(d), e !== "system")
      return;
    const u = window.matchMedia("(prefers-color-scheme: dark)"), c = () => {
      const m = Ee("system");
      $e(m), n(m);
    };
    return u.addEventListener("change", c), () => u.removeEventListener("change", c);
  }, [e]);
  const i = Ie((d) => {
    t(d), Sr(d);
  }, []), s = Ie(
    (d = ["light", "dark", "system"]) => {
      i(d[(d.indexOf(e) + 1) % d.length]);
    },
    [e, i]
  );
  return { theme: e, resolvedTheme: r, setTheme: i, cycleTheme: s };
}
function Ll({
  title: e = /* @__PURE__ */ a(X, { children: "Connect with me now—Let’s UDP or TCP." }),
  actionLabel: t = "Contact Me",
  icon: r = /* @__PURE__ */ a(le, { className: "size-6 flex-shrink-0 text-background" }),
  className: n,
  ...i
}) {
  return /* @__PURE__ */ l(
    "a",
    {
      "data-slot": "contact-cta",
      "data-augmented-ui": "bl-rect br-clip-y both",
      className: b(
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
function Fl({
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
      className: b(
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
function Gl({
  className: e,
  onSubmit: t,
  forgotPasswordHref: r = "#",
  signUpHref: n = "#",
  ...i
}) {
  const [s, d] = g.useState({
    email: "",
    password: ""
  }), [u, c] = g.useState({});
  function m(f) {
    f.preventDefault();
    const x = {};
    s.email || (x.email = "Email is required."), s.password || (x.password = "Password is required."), c(x), Object.keys(x).length === 0 && t?.(s);
  }
  return /* @__PURE__ */ l(xe, { className: b("w-full max-w-sm", e), ...i, children: [
    /* @__PURE__ */ l(ve, { children: [
      /* @__PURE__ */ a(we, { children: "Log in to your account" }),
      /* @__PURE__ */ a(Ne, { children: "Enter your credentials to continue." })
    ] }),
    /* @__PURE__ */ a(ye, { children: /* @__PURE__ */ a("form", { onSubmit: m, noValidate: !0, children: /* @__PURE__ */ l(ct, { children: [
      /* @__PURE__ */ l(K, { "data-invalid": !!u.email, children: [
        /* @__PURE__ */ a(ue, { htmlFor: "login-email", children: "Email" }),
        /* @__PURE__ */ a(
          G,
          {
            id: "login-email",
            type: "email",
            autoComplete: "email",
            placeholder: "you@example.com",
            "aria-invalid": !!u.email,
            value: s.email,
            onChange: (f) => d((x) => ({
              ...x,
              email: f.target.value
            }))
          }
        ),
        /* @__PURE__ */ a(me, { errors: [{ message: u.email }] })
      ] }),
      /* @__PURE__ */ l(K, { "data-invalid": !!u.password, children: [
        /* @__PURE__ */ l("div", { className: "flex items-center justify-between gap-2", children: [
          /* @__PURE__ */ a(ue, { htmlFor: "login-password", children: "Password" }),
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
          G,
          {
            id: "login-password",
            type: "password",
            autoComplete: "current-password",
            "aria-invalid": !!u.password,
            value: s.password,
            onChange: (f) => d((x) => ({
              ...x,
              password: f.target.value
            }))
          }
        ),
        /* @__PURE__ */ a(me, { errors: [{ message: u.password }] })
      ] }),
      /* @__PURE__ */ a(K, { children: /* @__PURE__ */ a(
        I,
        {
          type: "submit",
          className: "w-full",
          children: "Log in"
        }
      ) })
    ] }) }) }),
    /* @__PURE__ */ a(Ue, { className: "justify-center", children: /* @__PURE__ */ l("p", { className: "text-sm text-muted-foreground", children: [
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
function Bl({
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
      className: b(
        "w-full border-t bg-background px-6 py-10 text-foreground",
        n
      ),
      ...i,
      children: /* @__PURE__ */ l("div", { className: "mx-auto flex w-full max-w-5xl flex-col gap-10", children: [
        e.length > 0 && /* @__PURE__ */ a("div", { className: "grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4", children: e.map((s) => /* @__PURE__ */ l("div", { className: "flex flex-col gap-3", children: [
          /* @__PURE__ */ a("h3", { className: "text-xs font-medium tracking-wide text-muted-foreground uppercase", children: s.title }),
          /* @__PURE__ */ a("ul", { className: "flex flex-col gap-2", children: s.links.map((d) => /* @__PURE__ */ a("li", { children: /* @__PURE__ */ a(
            "a",
            {
              href: d.href,
              className: "text-sm text-foreground transition-colors hover:text-link-primary-hover",
              children: d.label
            }
          ) }, d.label)) })
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
function Ol({
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
      className: b(
        "sticky top-0 z-50 flex w-full items-center justify-between gap-4 border-b bg-background px-6 py-3",
        n
      ),
      ...i,
      children: [
        /* @__PURE__ */ a("div", { className: "flex items-center gap-2", children: e ?? /* @__PURE__ */ a("span", { className: "text-sm font-semibold", children: "LFDS" }) }),
        t.length > 0 && /* @__PURE__ */ a(Wa, { className: "hidden lg:flex", children: /* @__PURE__ */ a(Xa, { children: t.map((s) => /* @__PURE__ */ a(Ya, { children: s.children?.length ? /* @__PURE__ */ l(X, { children: [
          /* @__PURE__ */ a(Ja, { children: s.label }),
          /* @__PURE__ */ a(Qa, { children: /* @__PURE__ */ a("ul", { className: "grid w-64 gap-1 p-2", children: s.children.map((d) => /* @__PURE__ */ a("li", { children: /* @__PURE__ */ l(Re, { href: d.href, children: [
            /* @__PURE__ */ a("div", { className: "text-sm font-medium", children: d.label }),
            d.description && /* @__PURE__ */ a("p", { className: "text-sm text-muted-foreground", children: d.description })
          ] }) }, d.label)) }) })
        ] }) : /* @__PURE__ */ a(
          Re,
          {
            href: s.href,
            className: gt(),
            children: s.label
          }
        ) }, s.label)) }) }),
        r && /* @__PURE__ */ a("div", { className: "flex items-center gap-2", children: r })
      ]
    }
  );
}
function ze({
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
      className: b(
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
        /* @__PURE__ */ a("div", { className: "mb-48 w-full space-y-8", children: /* @__PURE__ */ a("p", { className: "text-4xl leading-relaxed font-sans text-foreground", children: r.map((d, u) => /* @__PURE__ */ l(g.Fragment, { children: [
          u > 0 && /* @__PURE__ */ a("br", {}),
          d
        ] }, u)) }) }),
        n && /* @__PURE__ */ a("div", { className: "flex w-full flex-col gap-6", children: n })
      ]
    }
  );
}
function Vl({
  groups: e = [],
  placeholder: t = "Type a command or search…",
  emptyText: r = "No results found.",
  title: n = "Command Palette",
  description: i = "Search for a command to run…",
  showCloseButton: s = !0,
  className: d,
  ...u
}) {
  return /* @__PURE__ */ l(at, { ...u, children: [
    /* @__PURE__ */ l(ot, { className: "sr-only", children: [
      /* @__PURE__ */ a(nt, { children: n }),
      /* @__PURE__ */ a(it, { children: i })
    ] }),
    /* @__PURE__ */ a(
      rt,
      {
        "data-slot": "command-palette",
        className: b("overflow-hidden p-0", d),
        showCloseButton: s,
        augmented: !1,
        children: /* @__PURE__ */ l(st, { className: "**:data-[slot=command-input-wrapper]:h-12 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]]:px-2 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5", children: [
          /* @__PURE__ */ a(ka, { placeholder: t }),
          /* @__PURE__ */ l(za, { children: [
            /* @__PURE__ */ a(Ca, { children: r }),
            e.map((c, m) => /* @__PURE__ */ l(g.Fragment, { children: [
              m > 0 && /* @__PURE__ */ a(Sa, {}),
              /* @__PURE__ */ a(_a, { heading: c.label, children: c.items.map((f, x) => /* @__PURE__ */ l(
                Ma,
                {
                  value: f.value,
                  keywords: f.keywords,
                  disabled: f.disabled,
                  onSelect: f.onSelect,
                  children: [
                    f.icon,
                    f.label,
                    f.shortcut && /* @__PURE__ */ a(Ta, { children: f.shortcut })
                  ]
                },
                `${c.label}-${x}`
              )) })
            ] }, c.label))
          ] })
        ] })
      }
    )
  ] });
}
const Tr = [
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
function Le(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Hl({
  title: e = "Contact me",
  description: t = "Fill out the form below and I'll get back to you.",
  fields: r = Tr,
  actionLabel: n = "Send message",
  pending: i = !1,
  onSubmit: s,
  className: d,
  ...u
}) {
  const [c, m] = g.useState(
    () => Object.fromEntries(r.map((p) => [p.name, ""]))
  ), [f, x] = g.useState({});
  function w(p) {
    p.preventDefault();
    const N = {};
    for (const y of r)
      (y.required ?? !0) && !c[y.name]?.trim() && (N[y.name] = `${y.label ?? Le(y.name)} is required.`);
    x(N), Object.keys(N).length === 0 && s?.(c);
  }
  return /* @__PURE__ */ l(xe, { className: b("w-full max-w-md", d), ...u, children: [
    /* @__PURE__ */ l(ve, { children: [
      /* @__PURE__ */ a(we, { children: e }),
      t && /* @__PURE__ */ a(Ne, { children: t })
    ] }),
    /* @__PURE__ */ a(ye, { children: /* @__PURE__ */ a("form", { onSubmit: w, noValidate: !0, children: /* @__PURE__ */ l(ct, { children: [
      r.map((p) => {
        const N = `contact-${p.name}`, y = p.label ?? Le(p.name), h = f[p.name];
        return /* @__PURE__ */ l(K, { "data-invalid": !!h, children: [
          /* @__PURE__ */ a(ue, { htmlFor: N, children: y }),
          p.multiline ? /* @__PURE__ */ a(
            Je,
            {
              id: N,
              placeholder: p.placeholder,
              rows: p.rows,
              disabled: i,
              "aria-invalid": !!h,
              value: c[p.name] ?? "",
              onChange: (v) => m((M) => ({
                ...M,
                [p.name]: v.target.value
              }))
            }
          ) : /* @__PURE__ */ a(
            G,
            {
              id: N,
              type: p.type,
              autoComplete: p.autoComplete,
              placeholder: p.placeholder,
              disabled: i,
              "aria-invalid": !!h,
              value: c[p.name] ?? "",
              onChange: (v) => m((M) => ({
                ...M,
                [p.name]: v.target.value
              }))
            }
          ),
          /* @__PURE__ */ a(me, { errors: [{ message: h }] })
        ] }, p.name);
      }),
      /* @__PURE__ */ a(K, { children: /* @__PURE__ */ l(
        I,
        {
          type: "submit",
          className: "w-full",
          disabled: i,
          children: [
            i && /* @__PURE__ */ a(yr, {}),
            n
          ]
        }
      ) })
    ] }) }) })
  ] });
}
function Ce({
  icon: e,
  title: t,
  description: r,
  actionLabel: n,
  actionIcon: i,
  actionVariant: s = "outline",
  onAction: d,
  className: u,
  ...c
}) {
  return /* @__PURE__ */ l($a, { className: b("border", u), ...c, children: [
    /* @__PURE__ */ l(La, { children: [
      e && /* @__PURE__ */ a(Ga, { variant: "icon", children: e }),
      t && /* @__PURE__ */ a(Ba, { children: t }),
      r && /* @__PURE__ */ a(Oa, { children: r })
    ] }),
    n && /* @__PURE__ */ a(Va, { children: /* @__PURE__ */ l(I, { variant: s, size: "sm", onClick: d, children: [
      i,
      n
    ] }) })
  ] });
}
function ql({
  icon: e = /* @__PURE__ */ a(Xt, {}),
  title: t = "No results found",
  description: r = "Try adjusting your search terms or filters.",
  actionLabel: n = "Clear search",
  ...i
}) {
  return /* @__PURE__ */ a(
    Ce,
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
function Kl({
  icon: e = /* @__PURE__ */ a(Ut, {}),
  title: t = "Nothing here yet",
  description: r = "Get started by creating your first item.",
  actionLabel: n = "Create item",
  actionIcon: i = /* @__PURE__ */ a(qt, {}),
  ...s
}) {
  return /* @__PURE__ */ a(
    Ce,
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
function Ul({
  icon: e = /* @__PURE__ */ a(Kt, {}),
  title: t = "Something went wrong",
  description: r = "An unexpected error occurred. Please try again.",
  actionLabel: n = "Try again",
  actionIcon: i = /* @__PURE__ */ a(Wt, {}),
  ...s
}) {
  return /* @__PURE__ */ a(
    Ce,
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
const _e = "w-fit font-mono text-sm text-foreground no-underline uppercase transition-opacity duration-300 hover:text-link-primary-hover";
function Wl({
  code: e = "404",
  heading: t = "not found",
  lines: r = [
    "The page you are looking for could not be found.",
    "It may have been moved, deleted, or never existed."
  ],
  action: n = /* @__PURE__ */ a("a", { href: "/", className: _e, children: "[return home]" }),
  ...i
}) {
  return /* @__PURE__ */ a(
    ze,
    {
      code: e,
      heading: t,
      lines: r,
      action: n,
      ...i
    }
  );
}
function Xl({
  code: e = "500",
  heading: t = "server error",
  lines: r = [
    "Something went wrong on our end.",
    "Try again in a moment."
  ],
  action: n = /* @__PURE__ */ a("a", { href: "/", className: _e, children: "[return home]" }),
  ...i
}) {
  return /* @__PURE__ */ a(
    ze,
    {
      code: e,
      heading: t,
      lines: r,
      action: n,
      ...i
    }
  );
}
function Yl({
  code: e = "503",
  heading: t = "under maintenance",
  lines: r = [
    "We are performing scheduled maintenance.",
    "Please check back soon."
  ],
  action: n = /* @__PURE__ */ a("a", { href: ".", className: _e, children: "[try again]" }),
  ...i
}) {
  return /* @__PURE__ */ a(
    ze,
    {
      code: e,
      heading: t,
      lines: r,
      action: n,
      ...i
    }
  );
}
const Ir = {
  2: "lg:grid-cols-2",
  3: "lg:grid-cols-3",
  4: "lg:grid-cols-4"
};
function Jl({
  title: e,
  eyebrow: t,
  description: r,
  features: n,
  columns: i = 3,
  className: s,
  ...d
}) {
  return /* @__PURE__ */ a(
    "section",
    {
      "data-slot": "feature-grid",
      className: b("w-full px-6 py-16 sm:py-20", s),
      ...d,
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
            className: b(
              "mt-10 grid gap-px border border-foreground bg-foreground sm:grid-cols-2",
              Ir[i]
            ),
            children: n.map((u, c) => /* @__PURE__ */ l(
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
              c
            ))
          }
        )
      ] })
    }
  );
}
function Ql({
  title: e,
  eyebrow: t = "// transmission",
  description: r,
  placeholder: n = "you@domain.net",
  actionLabel: i = "Subscribe",
  successMessage: s = "Signal received — check your inbox to confirm.",
  submitted: d,
  onSubmit: u,
  className: c,
  ...m
}) {
  const [f, x] = g.useState(""), [w, p] = g.useState(!1), N = d ?? w;
  function y(h) {
    h.preventDefault(), u?.(f), d === void 0 && p(!0);
  }
  return /* @__PURE__ */ l(
    "section",
    {
      "data-slot": "newsletter-signup",
      "data-augmented-ui": "tr-clip bl-clip both",
      className: b(
        "aug-surface aug-surface-card w-full bg-card px-6 py-10 text-card-foreground sm:px-10",
        c
      ),
      ...m,
      children: [
        t && /* @__PURE__ */ a("p", { className: "font-mono text-xs tracking-widest text-muted-foreground uppercase", children: t }),
        /* @__PURE__ */ a("h2", { className: "mt-2 font-display text-3xl font-medium text-balance sm:text-4xl", children: e }),
        r && /* @__PURE__ */ a("p", { className: "mt-3 max-w-xl text-balance text-muted-foreground", children: r }),
        N ? /* @__PURE__ */ l(
          "p",
          {
            "data-slot": "newsletter-signup-success",
            className: "mt-8 flex items-center gap-2 font-mono text-sm text-foreground",
            children: [
              /* @__PURE__ */ a(Yt, { className: "size-5 shrink-0 text-accent" }),
              s
            ]
          }
        ) : /* @__PURE__ */ l(
          "form",
          {
            "data-slot": "newsletter-signup-form",
            className: "mt-8 flex flex-col gap-3 sm:flex-row",
            onSubmit: y,
            children: [
              /* @__PURE__ */ a(
                G,
                {
                  type: "email",
                  required: !0,
                  autoComplete: "email",
                  "aria-label": "Email address",
                  placeholder: n,
                  value: f,
                  onChange: (h) => x(h.target.value),
                  className: "h-10 flex-1 border-foreground font-mono"
                }
              ),
              /* @__PURE__ */ l(I, { type: "submit", variant: "augmented", size: "lg", children: [
                i,
                /* @__PURE__ */ a(Jt, { className: "size-4" })
              ] })
            ]
          }
        )
      ]
    }
  );
}
function Dr(e) {
  return typeof e == "number" ? String(e).padStart(2, "0") : e;
}
function Zl({
  index: e,
  title: t,
  description: r,
  tags: n = [],
  href: i,
  links: s = [],
  className: d,
  ...u
}) {
  return /* @__PURE__ */ l(
    xe,
    {
      "data-slot": "project-card",
      className: b("group gap-0", d),
      ...u,
      children: [
        /* @__PURE__ */ l(ve, { className: "gap-1", children: [
          e != null && /* @__PURE__ */ a(
            "span",
            {
              "data-slot": "project-card-index",
              className: "font-mono text-sm text-muted-foreground",
              children: Dr(e)
            }
          ),
          /* @__PURE__ */ a(we, { className: "font-display text-3xl font-medium tracking-tight uppercase", children: i ? /* @__PURE__ */ a(
            "a",
            {
              href: i,
              className: "transition-colors duration-300 hover:text-link-primary-hover",
              children: t
            }
          ) : t }),
          i && /* @__PURE__ */ a(ga, { children: /* @__PURE__ */ a(le, { className: "size-5 text-muted-foreground transition-colors duration-300 group-hover:text-link-primary-hover" }) })
        ] }),
        (r || n.length > 0) && /* @__PURE__ */ l(ye, { className: "flex flex-col gap-4", children: [
          r && /* @__PURE__ */ a(Ne, { className: "text-sm leading-relaxed", children: r }),
          n.length > 0 && /* @__PURE__ */ a("ul", { className: "flex flex-wrap gap-2", children: n.map((c) => /* @__PURE__ */ a("li", { children: /* @__PURE__ */ a(ca, { variant: "outline", className: "font-mono", children: c }) }, c)) })
        ] }),
        s.length > 0 && /* @__PURE__ */ a(Ue, { className: "mt-auto flex-wrap gap-x-6 gap-y-2 pt-4", children: s.map((c) => /* @__PURE__ */ l(
          "a",
          {
            href: c.href,
            className: "inline-flex items-center gap-2 font-mono text-sm text-foreground uppercase transition-colors duration-300 hover:text-link-primary-hover",
            children: [
              /* @__PURE__ */ a(le, { className: "size-4" }),
              /* @__PURE__ */ l("span", { className: "flex items-center", children: [
                /* @__PURE__ */ a("span", { "aria-hidden": "true", className: "font-mono", children: "[" }),
                c.label,
                /* @__PURE__ */ a("span", { "aria-hidden": "true", className: "font-mono", children: "]" })
              ] })
            ]
          },
          c.href
        )) })
      ]
    }
  );
}
function ed({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "project-grid",
      className: b(
        "grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3",
        e
      ),
      ...t
    }
  );
}
function td({
  placeholder: e = "Search…",
  shortcut: t = "⌘K",
  icon: r = /* @__PURE__ */ a(Ve, {}),
  value: n,
  defaultValue: i,
  onValueChange: s,
  onOpen: d,
  onClick: u,
  disabled: c,
  className: m,
  ...f
}) {
  return s !== void 0 || n !== void 0 || i !== void 0 ? /* @__PURE__ */ l(
    Qe,
    {
      "data-slot": "search-bar",
      "data-disabled": c || void 0,
      onClick: u,
      className: m,
      ...f,
      children: [
        /* @__PURE__ */ a(ce, { children: r }),
        /* @__PURE__ */ a(
          et,
          {
            placeholder: e,
            value: n,
            defaultValue: i,
            readOnly: n !== void 0 && s === void 0,
            disabled: c,
            onChange: (w) => s?.(w.target.value)
          }
        ),
        t != null && /* @__PURE__ */ a(ce, { align: "inline-end", children: /* @__PURE__ */ a(B, { children: t }) })
      ]
    }
  ) : /* @__PURE__ */ l(
    "button",
    {
      type: "button",
      "data-slot": "search-bar",
      disabled: c,
      onClick: (w) => {
        u?.(w), d?.();
      },
      className: b(
        "group/search-bar relative flex h-9 w-full min-w-0 cursor-pointer items-center gap-2 rounded-md border border-input px-3 text-sm shadow-xs transition-[color,box-shadow] outline-none dark:bg-background",
        "focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50",
        "disabled:cursor-not-allowed disabled:opacity-50",
        m
      ),
      ...f,
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
function ad({
  title: e,
  groups: t = [],
  className: r,
  ...n
}) {
  return /* @__PURE__ */ l(
    "section",
    {
      "data-slot": "skills-list",
      className: b(
        "grid w-full grid-cols-1 gap-12 lg:grid-cols-4",
        r
      ),
      ...n,
      children: [
        e && /* @__PURE__ */ a("div", { className: "col-span-1", children: /* @__PURE__ */ a("h2", { className: "font-mono text-xl leading-relaxed font-normal tracking-[0.2em] text-foreground uppercase", children: e }) }),
        /* @__PURE__ */ a(
          "div",
          {
            className: b(
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
const Pr = {
  up: /* @__PURE__ */ a(ea, { className: "size-4" }),
  down: /* @__PURE__ */ a(Qt, { className: "size-4" }),
  neutral: /* @__PURE__ */ a(Zt, { className: "size-4" })
}, jr = {
  up: "text-green",
  down: "text-red",
  neutral: "text-muted-foreground"
};
function rd({
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
      className: b("w-full px-6 py-16 sm:py-20", n),
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
            children: r.map((s, d) => /* @__PURE__ */ l(
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
                      className: b(
                        "flex items-center gap-1 font-mono text-xs",
                        jr[s.trend ?? "neutral"]
                      ),
                      children: [
                        Pr[s.trend ?? "neutral"],
                        s.delta
                      ]
                    }
                  )
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
function Rr(e) {
  return typeof e != "string" ? null : e.split(/\s+/).map((t) => t[0]).filter(Boolean).slice(0, 2).join("").toUpperCase();
}
function Ar({
  quote: e,
  author: t,
  role: r,
  company: n,
  avatarSrc: i,
  avatarFallback: s,
  className: d,
  children: u,
  ...c
}) {
  return /* @__PURE__ */ l(
    "figure",
    {
      "data-slot": "testimonial-card",
      "data-augmented-ui": "tr-clip bl-clip both",
      className: b(
        "aug-surface aug-surface-card flex flex-col gap-6 bg-card p-6 text-card-foreground",
        d
      ),
      ...c,
      children: [
        /* @__PURE__ */ a(ta, { className: "size-6 text-accent", "aria-hidden": !0 }),
        /* @__PURE__ */ a("blockquote", { className: "text-base leading-relaxed text-pretty", children: e }),
        /* @__PURE__ */ l("figcaption", { className: "mt-auto flex items-center gap-3", children: [
          /* @__PURE__ */ l(ia, { size: "lg", className: "rounded-none", children: [
            i && /* @__PURE__ */ a(sa, { src: i, alt: "", className: "rounded-none" }),
            /* @__PURE__ */ a(la, { className: "rounded-none font-mono text-xs", children: s ?? Rr(t) ?? "?" })
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
function od({
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
      className: b("w-full px-6 py-16 sm:py-20", n),
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
            children: r.map((s, d) => /* @__PURE__ */ a(Ar, { ...s }, d))
          }
        )
      ] })
    }
  );
}
const vt = {
  theme: "Theme",
  light: "Light",
  dark: "Dark",
  system: "System",
  toggle: "Toggle theme"
}, Er = {
  light: Ke,
  dark: qe,
  system: He
};
function nd({
  cycle: e = ["light", "dark", "system"],
  labels: t,
  variant: r = "ghost",
  size: n = "icon",
  className: i,
  iconClassName: s,
  ...d
}) {
  const { theme: u, cycleTheme: c } = xt(), [m, f] = g.useState(!1);
  g.useEffect(() => f(!0), []);
  const x = { ...vt, ...t }, w = m ? u : "system", p = Er[w];
  return /* @__PURE__ */ a(
    I,
    {
      "data-slot": "theme-toggle",
      "data-theme": w,
      variant: r,
      size: n,
      className: b(i),
      "aria-label": x.toggle,
      title: x.toggle,
      onClick: () => c(e),
      ...d,
      children: /* @__PURE__ */ a(p, { className: b("size-5", s) })
    }
  );
}
function $r({ labels: e, iconClassName: t }) {
  const { theme: r, setTheme: n } = xt(), i = { ...vt, ...e };
  return /* @__PURE__ */ l(X, { children: [
    /* @__PURE__ */ a(lt, { children: i.theme }),
    /* @__PURE__ */ l(
      Aa,
      {
        value: r,
        onValueChange: (s) => n(s),
        children: [
          /* @__PURE__ */ l(ne, { value: "system", children: [
            /* @__PURE__ */ a(He, { className: b("size-6", t) }),
            i.system
          ] }),
          /* @__PURE__ */ l(ne, { value: "light", children: [
            /* @__PURE__ */ a(Ke, { className: b("size-6", t) }),
            i.light
          ] }),
          /* @__PURE__ */ l(ne, { value: "dark", children: [
            /* @__PURE__ */ a(qe, { className: b("size-6", t) }),
            i.dark
          ] })
        ]
      }
    )
  ] });
}
function id({
  labels: e,
  showTheme: t = !0,
  children: r,
  trigger: n,
  align: i = "end",
  sideOffset: s = 8,
  className: d,
  contentClassName: u,
  iconClassName: c
}) {
  const m = { settings: "Settings", ...e };
  return /* @__PURE__ */ l(Pa, { children: [
    /* @__PURE__ */ a(ja, { asChild: !0, children: n ?? /* @__PURE__ */ a(
      I,
      {
        "data-slot": "settings-menu-trigger",
        variant: "augmented",
        size: "icon-xl",
        className: b(d),
        "aria-label": m.settings,
        title: m.settings,
        children: /* @__PURE__ */ a(aa, { className: "size-6" })
      }
    ) }),
    /* @__PURE__ */ l(
      Ra,
      {
        className: b("w-56", u),
        align: i,
        sideOffset: s,
        children: [
          /* @__PURE__ */ a(lt, { children: m.settings }),
          t && /* @__PURE__ */ l(X, { children: [
            /* @__PURE__ */ a(Ea, {}),
            /* @__PURE__ */ a($r, { labels: e, iconClassName: c })
          ] }),
          r
        ]
      }
    )
  ] });
}
export {
  Ro as Accordion,
  $o as AccordionContent,
  Ao as AccordionItem,
  Eo as AccordionTrigger,
  Lo as Alert,
  Go as AlertDescription,
  Bo as AlertDialog,
  Xo as AlertDialogAction,
  Yo as AlertDialogCancel,
  Vo as AlertDialogContent,
  Uo as AlertDialogDescription,
  qo as AlertDialogFooter,
  Ho as AlertDialogHeader,
  Wo as AlertDialogMedia,
  na as AlertDialogOverlay,
  oa as AlertDialogPortal,
  Ko as AlertDialogTitle,
  Oo as AlertDialogTrigger,
  Fo as AlertTitle,
  Jo as AspectRatio,
  ia as Avatar,
  Qo as AvatarBadge,
  la as AvatarFallback,
  Zo as AvatarGroup,
  en as AvatarGroupCount,
  sa as AvatarImage,
  ca as Badge,
  tn as Breadcrumb,
  ln as BreadcrumbEllipsis,
  rn as BreadcrumbItem,
  on as BreadcrumbLink,
  an as BreadcrumbList,
  nn as BreadcrumbPage,
  sn as BreadcrumbSeparator,
  I as Button,
  dn as ButtonGroup,
  un as ButtonGroupSeparator,
  cn as ButtonGroupText,
  mn as Calendar,
  ma as CalendarDayButton,
  xe as Card,
  ga as CardAction,
  ye as CardContent,
  Ne as CardDescription,
  Ue as CardFooter,
  ve as CardHeader,
  we as CardTitle,
  gn as Carousel,
  fn as CarouselContent,
  pn as CarouselItem,
  hn as CarouselNext,
  bn as CarouselPrevious,
  xn as ChartContainer,
  Nn as ChartLegend,
  yn as ChartLegendContent,
  ba as ChartStyle,
  vn as ChartTooltip,
  wn as ChartTooltipContent,
  kn as Checkbox,
  zn as Collapsible,
  _n as CollapsibleContent,
  Cn as CollapsibleTrigger,
  Tn as Combobox,
  Bn as ComboboxChip,
  Gn as ComboboxChips,
  On as ComboboxChipsInput,
  $n as ComboboxCollection,
  Pn as ComboboxContent,
  Ln as ComboboxEmpty,
  An as ComboboxGroup,
  Dn as ComboboxInput,
  Rn as ComboboxItem,
  En as ComboboxLabel,
  jn as ComboboxList,
  Fn as ComboboxSeparator,
  va as ComboboxTrigger,
  In as ComboboxValue,
  st as Command,
  Wn as CommandDialog,
  Ca as CommandEmpty,
  _a as CommandGroup,
  ka as CommandInput,
  Ma as CommandItem,
  za as CommandList,
  Vl as CommandPalette,
  Sa as CommandSeparator,
  Ta as CommandShortcut,
  Ll as ContactCTA,
  Hl as ContactForm,
  Xn as ContextMenu,
  ni as ContextMenuCheckboxItem,
  ri as ContextMenuContent,
  Jn as ContextMenuGroup,
  oi as ContextMenuItem,
  si as ContextMenuLabel,
  Qn as ContextMenuPortal,
  ei as ContextMenuRadioGroup,
  ii as ContextMenuRadioItem,
  li as ContextMenuSeparator,
  di as ContextMenuShortcut,
  Zn as ContextMenuSub,
  ai as ContextMenuSubContent,
  ti as ContextMenuSubTrigger,
  Yn as ContextMenuTrigger,
  at as Dialog,
  Kn as DialogClose,
  rt as DialogContent,
  it as DialogDescription,
  Un as DialogFooter,
  ot as DialogHeader,
  ya as DialogOverlay,
  Na as DialogPortal,
  nt as DialogTitle,
  qn as DialogTrigger,
  ci as Drawer,
  mi as DrawerClose,
  gi as DrawerContent,
  hi as DrawerDescription,
  pi as DrawerFooter,
  fi as DrawerHeader,
  Da as DrawerOverlay,
  Ia as DrawerPortal,
  bi as DrawerTitle,
  ui as DrawerTrigger,
  Pa as DropdownMenu,
  Ni as DropdownMenuCheckboxItem,
  Ra as DropdownMenuContent,
  vi as DropdownMenuGroup,
  wi as DropdownMenuItem,
  lt as DropdownMenuLabel,
  xi as DropdownMenuPortal,
  Aa as DropdownMenuRadioGroup,
  ne as DropdownMenuRadioItem,
  Ea as DropdownMenuSeparator,
  yi as DropdownMenuShortcut,
  ki as DropdownMenuSub,
  Ci as DropdownMenuSubContent,
  zi as DropdownMenuSubTrigger,
  ja as DropdownMenuTrigger,
  $a as Empty,
  Va as EmptyContent,
  Kl as EmptyData,
  Oa as EmptyDescription,
  Ul as EmptyError,
  La as EmptyHeader,
  Ga as EmptyMedia,
  ql as EmptySearch,
  Ba as EmptyTitle,
  ze as ErrorPage,
  Wl as ErrorPage404,
  Xl as ErrorPage500,
  Yl as ErrorPageMaintenance,
  Jl as FeatureGrid,
  K as Field,
  Mi as FieldContent,
  Ii as FieldDescription,
  me as FieldError,
  ct as FieldGroup,
  ue as FieldLabel,
  Si as FieldLegend,
  Di as FieldSeparator,
  _i as FieldSet,
  Ti as FieldTitle,
  Pi as Form,
  Ei as FormControl,
  $i as FormDescription,
  ji as FormField,
  Ri as FormItem,
  Ai as FormLabel,
  Li as FormMessage,
  Fl as HeroSection,
  Fi as HoverCard,
  Bi as HoverCardContent,
  Gi as HoverCardTrigger,
  G as Input,
  Qe as InputGroup,
  ce as InputGroupAddon,
  Ze as InputGroupButton,
  et as InputGroupInput,
  Sn as InputGroupText,
  Mn as InputGroupTextarea,
  Oi as InputOTP,
  Vi as InputOTPGroup,
  qi as InputOTPSeparator,
  Hi as InputOTPSlot,
  Wi as Item,
  Zi as ItemActions,
  Yi as ItemContent,
  Qi as ItemDescription,
  ts as ItemFooter,
  Ki as ItemGroup,
  es as ItemHeader,
  Xi as ItemMedia,
  Ui as ItemSeparator,
  Ji as ItemTitle,
  B as Kbd,
  Hn as KbdGroup,
  dt as Label,
  Gl as LoginForm,
  as as Menubar,
  ds as MenubarCheckboxItem,
  ss as MenubarContent,
  os as MenubarGroup,
  ls as MenubarItem,
  us as MenubarLabel,
  rs as MenubarMenu,
  Ua as MenubarPortal,
  ns as MenubarRadioGroup,
  cs as MenubarRadioItem,
  ms as MenubarSeparator,
  gs as MenubarShortcut,
  fs as MenubarSub,
  bs as MenubarSubContent,
  ps as MenubarSubTrigger,
  is as MenubarTrigger,
  hs as NativeSelect,
  vs as NativeSelectOptGroup,
  xs as NativeSelectOption,
  Wa as NavigationMenu,
  Qa as NavigationMenuContent,
  ws as NavigationMenuIndicator,
  Ya as NavigationMenuItem,
  Re as NavigationMenuLink,
  Xa as NavigationMenuList,
  Ja as NavigationMenuTrigger,
  Za as NavigationMenuViewport,
  Ql as NewsletterSignup,
  Ns as Pagination,
  ys as PaginationContent,
  _s as PaginationEllipsis,
  ks as PaginationItem,
  ft as PaginationLink,
  Cs as PaginationNext,
  zs as PaginationPrevious,
  Ss as Popover,
  Is as PopoverAnchor,
  Ts as PopoverContent,
  js as PopoverDescription,
  Ds as PopoverHeader,
  Ps as PopoverTitle,
  Ms as PopoverTrigger,
  Rs as Progress,
  Zl as ProjectCard,
  ed as ProjectGrid,
  As as RadioGroup,
  Es as RadioGroupItem,
  Fs as ResizableHandle,
  Ls as ResizablePanel,
  $s as ResizablePanelGroup,
  H as ScrollArea,
  tt as ScrollBar,
  td as SearchBar,
  Gs as Select,
  Hs as SelectContent,
  Bs as SelectGroup,
  Ks as SelectItem,
  qs as SelectLabel,
  tr as SelectScrollDownButton,
  er as SelectScrollUpButton,
  Us as SelectSeparator,
  Vs as SelectTrigger,
  Os as SelectValue,
  te as Separator,
  id as SettingsMenu,
  ar as Sheet,
  Xs as SheetClose,
  ir as SheetContent,
  dr as SheetDescription,
  Ys as SheetFooter,
  sr as SheetHeader,
  lr as SheetTitle,
  Ws as SheetTrigger,
  Qs as Sidebar,
  il as SidebarContent,
  ol as SidebarFooter,
  sl as SidebarGroup,
  dl as SidebarGroupAction,
  cl as SidebarGroupContent,
  ll as SidebarGroupLabel,
  rl as SidebarHeader,
  al as SidebarInput,
  tl as SidebarInset,
  ul as SidebarMenu,
  fl as SidebarMenuAction,
  pl as SidebarMenuBadge,
  gl as SidebarMenuButton,
  ml as SidebarMenuItem,
  bl as SidebarMenuSkeleton,
  hl as SidebarMenuSub,
  vl as SidebarMenuSubButton,
  xl as SidebarMenuSubItem,
  Js as SidebarProvider,
  el as SidebarRail,
  nl as SidebarSeparator,
  Zs as SidebarTrigger,
  Bl as SiteFooter,
  Ol as SiteHeader,
  Ae as Skeleton,
  ad as SkillsList,
  wl as Slider,
  yr as Spinner,
  rd as StatsSection,
  Nl as Switch,
  ke as THEME_COOKIE,
  $l as THEME_INIT_SCRIPT,
  yl as Table,
  zl as TableBody,
  Tl as TableCaption,
  Ml as TableCell,
  Cl as TableFooter,
  Sl as TableHead,
  kl as TableHeader,
  _l as TableRow,
  Il as Tabs,
  jl as TabsContent,
  Dl as TabsList,
  Pl as TabsTrigger,
  Ar as TestimonialCard,
  od as Testimonials,
  Je as Textarea,
  nd as ThemeToggle,
  $r as ThemeToggleMenuItems,
  jo as Toaster,
  Rl as Toggle,
  Al as ToggleGroup,
  El as ToggleGroupItem,
  mr as Tooltip,
  fr as TooltipContent,
  ur as TooltipProvider,
  gr as TooltipTrigger,
  da as badgeVariants,
  ua as buttonGroupVariants,
  Q as buttonVariants,
  b as cn,
  Mr as getStoredTheme,
  gt as navigationMenuTriggerStyle,
  Ee as resolveTheme,
  kr as tabsListVariants,
  bt as toggleVariants,
  Vn as useComboboxAnchor,
  re as useFormField,
  cr as useIsMobile,
  oe as useSidebar,
  xt as useTheme
};
