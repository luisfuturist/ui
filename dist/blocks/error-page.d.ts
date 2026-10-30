import * as React from 'react';
export interface ErrorPageProps extends Omit<React.ComponentProps<'section'>, 'title'> {
    code: React.ReactNode;
    heading?: React.ReactNode;
    lines?: React.ReactNode[];
    action?: React.ReactNode;
}
export declare function ErrorPage({ code, heading, lines, action, className, ...props }: ErrorPageProps): React.JSX.Element;
