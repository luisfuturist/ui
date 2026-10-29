import * as React from 'react';
export interface SiteHeaderSubLink {
    label: string;
    href: string;
    description?: string;
}
export interface SiteHeaderLink {
    label: string;
    href: string;
    children?: SiteHeaderSubLink[];
}
export interface SiteHeaderProps extends React.ComponentProps<'header'> {
    logo?: React.ReactNode;
    links?: SiteHeaderLink[];
    actions?: React.ReactNode;
}
export declare function SiteHeader({ logo, links, actions, className, ...props }: SiteHeaderProps): React.JSX.Element;
