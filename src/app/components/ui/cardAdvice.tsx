"use client";

import { faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
    text: string | null;
    numberAdvice?: number;
}

export const CardAdvice = ({text, numberAdvice}: Props) => {
    return(
        <div aria-label="cardResult" className="w-96 md:w-7/12 h-80 md:h-96 flex flex-col justify-center items-center shadow-lg bg-gray-900 p-14 rounded-lg mt-10 mb-10 gap-8">

            {numberAdvice && <span className="w-full font-bold lg:text-7xl text-4xl bg-gradient-to-r from-purple-900 to-purple-400 bg-clip-text text-transparent drop-shadow-lg">{numberAdvice}</span>}

            <FontAwesomeIcon icon={faLightbulb} className="size-10 lg:size-16 text-yellow-400" />

            <p className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold
                bg-gradient-to-r from-purple-900 to-purple-400
                bg-clip-text
                text-transparent
                text-center
                drop-shadow-lg">{text}</p>

        </div>
    );
}