import * as React from 'react';
export interface LoginFormValues {
    email: string;
    password: string;
}
export interface LoginFormProps extends Omit<React.ComponentProps<'div'>, 'onSubmit'> {
    onSubmit?: (values: LoginFormValues) => void;
    forgotPasswordHref?: string;
    signUpHref?: string;
}
export declare function LoginForm({ className, onSubmit, forgotPasswordHref, signUpHref, ...props }: LoginFormProps): React.JSX.Element;
