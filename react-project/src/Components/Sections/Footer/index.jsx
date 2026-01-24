import React from "react";
import { ContentContext } from "../../../context/ContentContext";
import { LanguageContext } from "../../../context/LanguageContext";

export const Footer = () => {
    const { content } = React.useContext(ContentContext);
    const { isSpanish } = React.useContext(LanguageContext);
    const footerText = isSpanish ? content.footerContent.spanish : content.footerContent.english;
    return (
        <footer className="py-10 border-t border-blue-900 bg-blue-950 transition-colors flex flex-col justify-center items-center gap-6">
            <p className="text-md text-gray-300 text-center">© {new Date().getFullYear()} {footerText.copyrightText}</p>
            <div className="flex gap-6">
                <a className="text-sm text-gray-300 hover:text-primary transition-colors" href="https://github.com/JulianGT-2001">GitHub</a>
                <a className="text-sm text-gray-300 hover:text-primary transition-colors" href="https://www.linkedin.com/in/julian-dario-gonzalez-toledo/">LinkedIn</a>
            </div>
        </footer>
    )
}