"use client";

export type Props = {
    text: string;
    onClick?: () => void;
}

export const Button = ({text, onClick}: Props) => {
    return(
        <button
            className="w-96 bg-black/75 hover:bg-black/50 hover:scale-105 transition-all p-6 text-white rounded-lg cursor-pointer mb-8 md:text-2xl"
            onClick={onClick}
            aria-label="buttonHandleSearch" >{text}</button>
    );
}