import * as React from 'react';
import { Dialog } from '../components/ui/dialog';
export interface CommandPaletteItem {
    label: React.ReactNode;
    icon?: React.ReactNode;
    shortcut?: React.ReactNode;
    /** Explicit filter value — set it when `label` isn't plain text. */
    value?: string;
    keywords?: string[];
    disabled?: boolean;
    onSelect?: (value: string) => void;
}
export interface CommandPaletteGroup {
    label: string;
    items: CommandPaletteItem[];
}
export interface CommandPaletteProps extends Omit<React.ComponentProps<typeof Dialog>, 'children'> {
    groups?: CommandPaletteGroup[];
    placeholder?: string;
    emptyText?: React.ReactNode;
    /** Screen-reader-only dialog title. */
    title?: React.ReactNode;
    /** Screen-reader-only dialog description. */
    description?: React.ReactNode;
    showCloseButton?: boolean;
    /** Forwarded to the `DialogContent` panel. */
    className?: string;
}
export declare function CommandPalette({ groups, placeholder, emptyText, title, description, showCloseButton, className, ...props }: CommandPaletteProps): React.JSX.Element;
