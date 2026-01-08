import React from "react";

export const ButtonRounded = ({ children }) => {
    return (
        <button className="w-12 h-12 rounded-full bg-black/20 border-2 border-gray-400 text-white font-bold text-lg hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
            { children }
        </button>
    )
}