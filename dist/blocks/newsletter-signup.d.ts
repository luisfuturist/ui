import * as React from 'react';
export interface NewsletterSignupProps extends Omit<React.ComponentProps<'section'>, 'title' | 'onSubmit'> {
    title: React.ReactNode;
    eyebrow?: React.ReactNode;
    description?: React.ReactNode;
    placeholder?: string;
    actionLabel?: React.ReactNode;
    successMessage?: React.ReactNode;
    /**
     * Controlled success state. Leave `undefined` to let the block flip to
     * the success message internally after a valid submit.
     */
    submitted?: boolean;
    onSubmit?: (email: string) => void;
}
export declare function NewsletterSignup({ title, eyebrow, description, placeholder, actionLabel, successMessage, submitted, onSubmit, className, ...props }: NewsletterSignupProps): React.JSX.Element;
