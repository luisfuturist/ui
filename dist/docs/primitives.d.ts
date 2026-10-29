import type { ReactNode } from 'react';
export declare function PageHeader({ eyebrow, title, children }: {
    eyebrow: string;
    title: string;
    children?: ReactNode;
}): import("react").JSX.Element;
export declare function Section({ title, children, className }: {
    title: string;
    children: ReactNode;
    className?: string;
}): import("react").JSX.Element;
export declare function ResolvedHex({ name, className }: {
    name: string;
    className?: string;
}): import("react").JSX.Element;
export declare function Swatch({ name, className, boxClassName }: {
    name: string;
    className?: string;
    boxClassName?: string;
}): import("react").JSX.Element;
export declare const TOKEN_ROW_COLS = "grid-cols-[2.5rem_17rem_14rem_minmax(0,1fr)]";
export declare function TokenRow({ name, chain, use }: {
    name: string;
    chain: ReactNode;
    use: ReactNode;
}): import("react").JSX.Element;
export declare function Code({ children, className }: {
    children: ReactNode;
    className?: string;
}): import("react").JSX.Element;
