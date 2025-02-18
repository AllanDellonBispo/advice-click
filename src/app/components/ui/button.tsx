"use client";

export type Props = {
    name: string;
    onClick?: () => void;
}

export const Button = ({name, onClick}: Props) => {
    return(
        <button className="w-96 bg-black/75 hover:bg-black/50 hover:scale-105 transition-all p-6 text-white rounded-lg cursor-pointer mb-8 md:text-2xl" onClick={onClick}>{name}</button>
    );
}