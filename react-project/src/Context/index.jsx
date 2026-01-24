import React from "react";

export const PortfolioContext = React.createContext();

export const CustomPortfolioProvider = ({ children }) => {
    
    return (
        <PortfolioContext.Provider>
            { children }
        </PortfolioContext.Provider>
    )
}