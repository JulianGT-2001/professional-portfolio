import React from "react";
import { getPortfolioContent } from "../utils/constants";

export const ContentContext = React.createContext();

export const CustomContentProvider = ({ children }) => {
    const [content] = React.useState(getPortfolioContent());

    return (
        <ContentContext.Provider value={{content}}>
            { children }
        </ContentContext.Provider>
    );
}