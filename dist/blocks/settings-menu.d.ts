import * as React from 'react';
import { type ThemeToggleLabels } from './theme-toggle';
export interface SettingsMenuLabels extends ThemeToggleLabels {
    settings?: string;
}
export interface SettingsMenuProps {
    labels?: SettingsMenuLabels;
    /** Render the theme radio group (separator included). Default: true. */
    showTheme?: boolean;
    /** Extra menu content appended after the theme group, e.g. language items. */
    children?: React.ReactNode;
    /** Override the trigger — default is an augmented settings icon button. */
    trigger?: React.ReactNode;
    align?: 'start' | 'center' | 'end';
    sideOffset?: number;
    className?: string;
    contentClassName?: string;
    iconClassName?: string;
}
/**
 * Settings dropdown — augmented gear trigger opening a menu with the
 * `ThemeToggleMenuItems` radio group plus whatever extra sections the
 * consumer slots in (language pickers, etc.). The pattern the website
 * composes by hand, packaged for reuse.
 */
export declare function SettingsMenu({ labels, showTheme, children, trigger, align, sideOffset, className, contentClassName, iconClassName, }: SettingsMenuProps): React.JSX.Element;
