"use client";

import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
    type: string;
    icon?: IconProp;
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
                        md:w-7/12
                        rounded-full
                        mt-8
                        bg-purple-950"
                aria-label="inputForSearch">

            <input
                type={type}
                className="flex-1 outline-none bg-transparent h-full px-4"
                placeholder={placeholder}
                onChange={e => onChange && onChange(e.target.value)}
                />
                { icon &&
                    <FontAwesomeIcon icon={icon} className="size-5 cursor-pointer" onClick={onClick}/>
                }
        </div>
    );
}