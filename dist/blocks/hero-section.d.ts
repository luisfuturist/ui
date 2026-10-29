import * as React from 'react';
export interface HeroSectionProps extends Omit<React.ComponentProps<'section'>, 'title'> {
    eyebrow?: React.ReactNode;
    title: React.ReactNode;
    description?: React.ReactNode;
    actions?: React.ReactNode;
}
export declare function HeroSection({ eyebrow, title, description, actions, className, ...props }: HeroSectionProps): React.JSX.Element;
