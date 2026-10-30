import * as React from 'react';
export interface SearchBarProps extends Omit<React.HTMLAttributes<HTMLElement>, 'onChange'> {
    placeholder?: string;
    /** Hint chip rendered in a `Kbd` on the trailing edge — pass `null` to hide. */
    shortcut?: React.ReactNode;
    /** Leading icon — defaults to the Material `search` glyph. */
    icon?: React.ReactNode;
    /** Input mode: controlled value. */
    value?: string;
    /** Input mode: uncontrolled initial value. */
    defaultValue?: string;
    /**
     * Input mode: change handler. Passing `value`, `defaultValue` or
     * `onValueChange` renders a real input; without any of them the block
     * renders a button-like trigger instead.
     */
    onValueChange?: (value: string) => void;
    /** Trigger mode: fired on click — wire it to a palette/dialog. */
    onOpen?: () => void;
    disabled?: boolean;
}
export declare function SearchBar({ placeholder, shortcut, icon, value, defaultValue, onValueChange, onOpen, onClick, disabled, className, ...props }: SearchBarProps): React.JSX.Element;
