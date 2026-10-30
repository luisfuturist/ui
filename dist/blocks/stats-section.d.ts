import * as React from 'react';
export interface StatsSectionStat {
    value: React.ReactNode;
    label: React.ReactNode;
    delta?: React.ReactNode;
    trend?: 'up' | 'down' | 'neutral';
}
export interface StatsSectionProps extends Omit<React.ComponentProps<'section'>, 'title'> {
    title?: React.ReactNode;
    eyebrow?: React.ReactNode;
    stats: StatsSectionStat[];
}
export declare function StatsSection({ title, eyebrow, stats, className, ...props }: StatsSectionProps): React.JSX.Element;
