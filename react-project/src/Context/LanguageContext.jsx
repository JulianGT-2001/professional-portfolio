import React from "react";

export const LanguageContext = React.createContext();

export const CustomLanguageProvider = ({ children }) => {
    // NavBar ~ Set Language
    const [ isSpanish, setIsSpanish ] = React.useState(() => {
        const savedLanguage = localStorage.getItem('portfolioLanguage');
        return savedLanguage ? JSON.parse(savedLanguage) : true;
    });

    // Guardar la preferencia de idioma en localStorage cuando cambia
    React.useEffect(() => {
        localStorage.setItem('portfolioLanguage', JSON.stringify(isSpanish));
    }, [isSpanish]);

    return (
        <LanguageContext.Provider value={{
            isSpanish, setIsSpanish
        }}>
            { children }
        </LanguageContext.Provider>
    );
};