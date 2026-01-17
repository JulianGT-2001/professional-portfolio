import React from "react";
import { PortfolioContext } from "../../Context";

export const LanguageButton = ({ classes }) => {
    const { isSpanish, setIsSpanish } = React.useContext(PortfolioContext);

    const toggleLanguage = (state) => {
        setIsSpanish(state);
    }
    return (
        <>
        {/* Language Button */}
        <div className={`min-w-25 min-h-8 rounded flex items-center justify-between p-1 bg-slate-800 ${classes}`}>
            <button onClick={() => toggleLanguage(false)} className={`text-white text-sm font-bold w-[50%] h-auto cursor-pointer ${!isSpanish ? 'rounded bg-blue-500 hover:bg-blue-700' : ''}`}>EN</button>
            <button onClick={() => toggleLanguage(true)} className={`text-white text-sm font-bold w-[50%] h-auto cursor-pointer ${isSpanish ? 'rounded bg-blue-500 hover:bg-blue-700' : ''}`}>ES</button>
        </div>
        </>
    )
}