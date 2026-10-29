import * as React from "react";
import { Dialog as DialogPrimitive } from "radix-ui";
declare function Dialog({ ...props }: React.ComponentProps<typeof DialogPrimitive.Root>): React.JSX.Element;
declare function DialogTrigger({ ...props }: React.ComponentProps<typeof DialogPrimitive.Trigger>): React.JSX.Element;
declare function DialogPortal({ ...props }: React.ComponentProps<typeof DialogPrimitive.Portal>): React.JSX.Element;
declare function DialogClose({ ...props }: React.ComponentProps<typeof DialogPrimitive.Close>): React.JSX.Element;
declare function DialogOverlay({ className, ...props }: React.ComponentProps<typeof DialogPrimitive.Overlay>): React.JSX.Element;
declare function DialogContent({ className, children, showCloseButton, augmented, ...props }: React.ComponentProps<typeof DialogPrimitive.Content> & {
    showCloseButton?: boolean;
    /** Clipped-corner augmented-ui surface. CommandDialog opts out — the
     * command palette renders as a plain square panel. */
    augmented?: boolean;
}): React.JSX.Element;
declare function DialogHeader({ className, ...props }: React.ComponentProps<"div">): React.JSX.Element;
declare function DialogFooter({ className, showCloseButton, children, ...props }: React.ComponentProps<"div"> & {
    showCloseButton?: boolean;
}): React.JSX.Element;
declare function DialogTitle({ className, ...props }: React.ComponentProps<typeof DialogPrimitive.Title>): React.JSX.Element;
declare function DialogDescription({ className, ...props }: React.ComponentProps<typeof DialogPrimitive.Description>): React.JSX.Element;
export { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogOverlay, DialogPortal, DialogTitle, DialogTrigger, };
