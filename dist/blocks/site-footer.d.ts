import * as React from 'react';
export interface SiteFooterLink {
    label: string;
    href: string;
}
export interface SiteFooterColumn {
    title: string;
    links: SiteFooterLink[];
}
export interface SiteFooterSocial {
    label: string;
    href: string;
    icon?: React.ReactNode;
}
export interface SiteFooterProps extends React.ComponentProps<'footer'> {
    columns?: SiteFooterColumn[];
    socials?: SiteFooterSocial[];
    copyright?: React.ReactNode;
}
export declare function SiteFooter({ columns, socials, copyright, className, ...props }: SiteFooterProps): React.JSX.Element;
