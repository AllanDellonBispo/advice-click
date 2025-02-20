"use client";

import { faCircleNotch} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export type Props = {
    text: string;
    onClick?: () => void;
    isLoading?: boolean;
}

export const Button = ({text, onClick, isLoading}: Props) => {
    return(
        <button
            className="w-96 bg-black/75 hover:bg-black/50 hover:scale-105 transition-all p-6 text-white rounded-lg cursor-pointer mb-8 md:text-2xl"
            onClick={!isLoading ? onClick : undefined}
            aria-label="buttonHandleSearch"
            disabled={isLoading}>
            
            {isLoading ? (
                <>
                    <FontAwesomeIcon icon={faCircleNotch} className="animate-spin" />
                </>
                ): (
                    text
                )}

            </button>
    );
}