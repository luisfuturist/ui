import * as React from 'react';
export interface ContactCTAProps extends Omit<React.ComponentProps<'a'>, 'title'> {
    title?: React.ReactNode;
    actionLabel?: React.ReactNode;
    icon?: React.ReactNode;
}
export declare function ContactCTA({ title, actionLabel, icon, className, ...props }: ContactCTAProps): React.JSX.Element;
