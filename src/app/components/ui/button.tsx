"use client";

export type Props = {
    name: string;
    onClick?: () => void;
}

export const Button = ({name, onClick}: Props) => {
    return(
        <button className="w-96 bg-black/75 p-6 text-white rounded-lg cursor-pointer mb-8" onClick={onClick}>{name}</button>
    );
}