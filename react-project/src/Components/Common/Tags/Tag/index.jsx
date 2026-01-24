import React from "react";

export const Tag = ({ children }) => {
    return (
        <span className="px-4 py-2 bg-blue-500 text-white rounded-full text-sm font-medium hover:scale-110 transition-all duration-300">
            { children }
        </span>
    )
}