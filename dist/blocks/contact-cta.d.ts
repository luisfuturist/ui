import * as React from 'react';
export interface ContactCTAProps extends Omit<React.ComponentProps<'section'>, 'title'> {
    title: React.ReactNode;
    description?: React.ReactNode;
    primaryAction: React.ReactNode;
    secondaryAction?: React.ReactNode;
}
export declare function ContactCTA({ title, description, primaryAction, secondaryAction, className, ...props }: ContactCTAProps): React.JSX.Element;
