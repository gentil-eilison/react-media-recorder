import type { TypographyProps } from "../types/typography";

export default function TypographyH2({ children }: TypographyProps) {
    return <h2 className="font-bold text-3xl">{ children }</h2>
}