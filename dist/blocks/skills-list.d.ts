import * as React from 'react';
export interface SkillGroup {
    title: string;
    items: string[];
}
export interface SkillsListProps extends Omit<React.ComponentProps<'section'>, 'title'> {
    title?: React.ReactNode;
    groups?: SkillGroup[];
}
export declare function SkillsList({ title, groups, className, ...props }: SkillsListProps): React.JSX.Element;
