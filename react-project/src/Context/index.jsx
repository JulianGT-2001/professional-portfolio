import React from "react";
import { CustomLanguageProvider } from "./LanguageContext";
import { CustomContentProvider } from "./ContentContext";

export const CombinedProvider = ({ children }) => {
    
    return (
        <CustomLanguageProvider>
            <CustomContentProvider>
                { children }
            </CustomContentProvider>
        </CustomLanguageProvider>
    )
}