import * as React from 'react';
export interface ProjectCardLink {
    label: React.ReactNode;
    href: string;
}
export interface ProjectCardProps extends Omit<React.ComponentProps<'div'>, 'title'> {
    index?: number | string;
    title: React.ReactNode;
    description?: React.ReactNode;
    tags?: string[];
    href?: string;
    links?: ProjectCardLink[];
}
export declare function ProjectCard({ index, title, description, tags, href, links, className, ...props }: ProjectCardProps): React.JSX.Element;
export interface ProjectGridProps extends React.ComponentProps<'div'> {
}
export declare function ProjectGrid({ className, ...props }: ProjectGridProps): React.JSX.Element;
