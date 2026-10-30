import * as React from 'react';
export type ContactFormValues = Record<string, string>;
export interface ContactFormField {
    /** Key the field's value is submitted under; also seeds the label/input id. */
    name: string;
    label?: React.ReactNode;
    placeholder?: string;
    /** `<input>` type — ignored when `multiline` is set. */
    type?: React.HTMLInputTypeAttribute;
    /** Render a `Textarea` instead of an `Input`. */
    multiline?: boolean;
    /** Defaults to `true` — empty required fields surface a `FieldError`. */
    required?: boolean;
    autoComplete?: string;
    rows?: number;
}
export interface ContactFormProps extends Omit<React.ComponentProps<'div'>, 'onSubmit' | 'title'> {
    title?: React.ReactNode;
    description?: React.ReactNode;
    /** Defaults to name / email / message. */
    fields?: ContactFormField[];
    actionLabel?: React.ReactNode;
    /** Disables the form and shows a spinner in the submit button. */
    pending?: boolean;
    onSubmit?: (values: ContactFormValues) => void;
}
export declare function ContactForm({ title, description, fields, actionLabel, pending, onSubmit, className, ...props }: ContactFormProps): React.JSX.Element;
