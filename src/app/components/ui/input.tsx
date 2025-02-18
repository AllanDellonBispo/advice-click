"use client";

import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
    type: string;
    icon: IconProp;
    placeholder: string;
    onChange?: (newValue: string) => void;
    onClick?: () => void;
}

export const Input = ({type, icon, placeholder, onChange, onClick}: Props) => {
    return(
        <div className="has-[:focus]:border-white
                        flex
                        justify-between
                        p-4
                        border-2
                        border-purple-950
                        shadow-2xl
                        w-96
                        rounded-full
                        mt-8
                        shadow-lg
                        p-4 
                        bg-purple-950
                        cursor-pointer">

            <input
                type={type}
                className="flex-1 outline-none bg-transparent h-full px-4"
                placeholder={placeholder}
                onChange={e => onChange && onChange(e.target.value)}
                onClick={onClick}/>
            <FontAwesomeIcon icon={icon} className="size-5" />
        </div>
    );
}