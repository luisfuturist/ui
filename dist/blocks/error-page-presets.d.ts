import * as React from 'react';
import { type ErrorPageProps } from './error-page';
export interface ErrorPagePresetProps extends Omit<ErrorPageProps, 'code' | 'heading'> {
    /** Defaults to the preset's status code — override for custom pages. */
    code?: React.ReactNode;
    heading?: React.ReactNode;
}
export declare function ErrorPage404({ code, heading, lines, action, ...props }: ErrorPagePresetProps): React.JSX.Element;
export declare function ErrorPage500({ code, heading, lines, action, ...props }: ErrorPagePresetProps): React.JSX.Element;
export declare function ErrorPageMaintenance({ code, heading, lines, action, ...props }: ErrorPagePresetProps): React.JSX.Element;
