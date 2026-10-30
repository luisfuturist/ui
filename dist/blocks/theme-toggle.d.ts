import * as React from 'react';
import type { VariantProps } from 'class-variance-authority';
import type { buttonVariants } from '../components/ui/button-variants';
import { type Theme } from '../hooks/use-theme';
export interface ThemeToggleLabels {
    theme?: string;
    light?: string;
    dark?: string;
    system?: string;
    toggle?: string;
}
export interface ThemeToggleProps extends Omit<React.ComponentProps<'button'>, 'onClick' | 'children'>, VariantProps<typeof buttonVariants> {
    'asChild'?: boolean;
    'data-augmented-ui'?: string;
    /** Themes the button cycles through. Default: light → dark → system. */
    cycle?: Theme[];
    labels?: ThemeToggleLabels;
    iconClassName?: string;
}
/**
 * Single-button theme toggle — cycles through `cycle` themes on click and
 * shows an icon for the *selected* theme. Renders the `system` icon until
 * mounted to avoid SSR/hydration mismatches.
 */
export declare function ThemeToggle({ cycle, labels, variant, size, className, iconClassName, ...props }: ThemeToggleProps): React.JSX.Element;
export interface ThemeToggleMenuItemsProps {
    labels?: ThemeToggleLabels;
    iconClassName?: string;
}
/**
 * Theme picker for composition inside a `DropdownMenuContent` — a labelled
 * light/dark/system radio group (the pattern used by settings menus).
 */
export declare function ThemeToggleMenuItems({ labels, iconClassName }: ThemeToggleMenuItemsProps): React.JSX.Element;
