import type { ReactNode } from "react";

interface TypographyH1 {
    children: ReactNode;
    extraClassName?: string;
}

export default function TypographyH1(
    { children, extraClassName }: TypographyH1
) {
    return (
        <h1 className={"flex items-center gap-4 font-bold text-4xl " + extraClassName}>
            { children }
        </h1>
    );
}