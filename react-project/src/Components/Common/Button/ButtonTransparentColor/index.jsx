import React from "react";

export const ButtonTransparentColor = ({ children, classes, onClick, pdfUrl }) => {
    const handleDownload = () => {
        const baseUrl = import.meta.env.BASE_URL;
        const fullPath = baseUrl + pdfUrl.replace(/^\//, "");
        
        const link = document.createElement("a");
        link.href = fullPath;
        link.download = pdfUrl.split("/").pop();
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handleClick = () => {
        if (pdfUrl) {
            handleDownload();
        }
        if (onClick) {
            onClick();
        }
    };


    return (
        <button 
        onClick={handleClick} 
        className={`border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white font-bold px-6 py-2 rounded transition-all duration-300 cursor-pointer ${classes}`}>
            { children }
        </button>
    )
}