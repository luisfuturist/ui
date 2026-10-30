import * as React from 'react';
export interface FeatureGridFeature {
    icon?: React.ReactNode;
    title: React.ReactNode;
    description: React.ReactNode;
}
export interface FeatureGridProps extends Omit<React.ComponentProps<'section'>, 'title'> {
    title: React.ReactNode;
    eyebrow?: React.ReactNode;
    description?: React.ReactNode;
    features: FeatureGridFeature[];
    columns?: 2 | 3 | 4;
}
export declare function FeatureGrid({ title, eyebrow, description, features, columns, className, ...props }: FeatureGridProps): React.JSX.Element;
