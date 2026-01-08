import React from "react";

export const ButtonSolidColor = ({ children }) => {
    return (
        <button className="bg-blue-500 hover:bg-blue-700 font-bold px-6 py-2 rounded transition-all duration-300 text-white border-2 border-blue-500 cursor-pointer">
            { children }
        </button>
    )
}