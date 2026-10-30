import * as React from 'react';
export interface Testimonial {
    quote: React.ReactNode;
    author: React.ReactNode;
    role?: React.ReactNode;
    company?: React.ReactNode;
    avatarSrc?: string;
    avatarFallback?: React.ReactNode;
}
export type TestimonialCardProps = Testimonial & Omit<React.ComponentProps<'figure'>, 'role'>;
export interface TestimonialsProps extends Omit<React.ComponentProps<'section'>, 'title'> {
    title?: React.ReactNode;
    eyebrow?: React.ReactNode;
    testimonials: Testimonial[];
}
export declare function TestimonialCard({ quote, author, role, company, avatarSrc, avatarFallback, className, children, ...props }: TestimonialCardProps): React.JSX.Element;
export declare function Testimonials({ title, eyebrow, testimonials, className, ...props }: TestimonialsProps): React.JSX.Element;
