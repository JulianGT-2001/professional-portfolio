import React from "react";

export const RoundedImage = ({ src, alt, className }) => {
    return (
        <div className="w-96 h-96 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-2xl">
            <img 
                src={src}
                alt={alt}
                className={className}
            />
        </div>
    )
}