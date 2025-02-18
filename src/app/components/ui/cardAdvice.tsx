"use client";

import { faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
    text: string | null;
}

export const CardAdvice = ({text}: Props) => {
    return(
        <div className="w-96 h-80 rounded-lg flex flex-col justify-center items-center shadow-lg bg-gray-900 p-6 rounded-lg mt-10 mb-10 gap-8">

            <FontAwesomeIcon icon={faLightbulb} className="size-10 text-yellow-400" />

            <p className="text-4xl font-bold
                bg-gradient-to-r from-purple-900 to-purple-400
                bg-clip-text
                text-transparent
                text-center
                drop-shadow-lg
                text-4xl font-bold">{text}</p>

        </div>
    );
}