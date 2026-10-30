import * as React from 'react';
export interface EmptyStateProps extends Omit<React.ComponentProps<'div'>, 'title'> {
    icon?: React.ReactNode;
    title?: React.ReactNode;
    description?: React.ReactNode;
    actionLabel?: React.ReactNode;
    actionIcon?: React.ReactNode;
    onAction?: () => void;
}
export declare function EmptySearch({ icon, title, description, actionLabel, ...props }: EmptyStateProps): React.JSX.Element;
export declare function EmptyData({ icon, title, description, actionLabel, actionIcon, ...props }: EmptyStateProps): React.JSX.Element;
export declare function EmptyError({ icon, title, description, actionLabel, actionIcon, ...props }: EmptyStateProps): React.JSX.Element;
