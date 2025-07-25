import type { ReactNode } from "react";

interface ButtonProps {
    children: ReactNode;
    onClickHandler: () => void;
}

export default function Button({ children, onClickHandler }: ButtonProps) {
    return (
        <button 
            className="bg-red-400 px-4 py-2 h-fit font-bold rounded hover:cursor-pointer"
            onClick={ onClickHandler }
        >
            { children }
        </button>
    );
}