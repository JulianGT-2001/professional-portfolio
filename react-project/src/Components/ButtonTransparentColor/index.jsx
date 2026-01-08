import React from "react";

export const ButtonTransparentColor = ({ children }) => {
    return (
        <>
        <button className="border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white font-bold px-6 py-2 rounded transition-all duration-300 cursor-pointer">
            { children }
        </button>
        </>
    )
}