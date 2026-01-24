import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { PortfolioContext } from "../../../Context";
import { LanguageContext } from "../../../context/LanguageContext";
import { LanguageButton } from "../../Common/Button/LanguageButton";

export const NavBar = () => {
    const { menuOptions } = React.useContext(PortfolioContext);
    const { isSpanish } = React.useContext(LanguageContext);
    const [isOpen, setIsOpen] = React.useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const options = isSpanish ? menuOptions.spanish : menuOptions.english;

    return (
        <nav className="flex justify-between items-center fixed z-10 w-full py-4 px-8 bg-gradient-to-r from-blue-950 to-blue-900 shadow-lg">
            <div className="text-2xl font-bold text-white">JGT</div>
            
            {/* Desktop Menu */}
            <ul className="hidden md:flex list-none gap-12">
                {options.map((option, index) => {
                    return (
                        <a key={index} href={`#${option.href}`}><li className={option.class}>{option.name}</li></a>
                    )
                })}
            </ul>

            <LanguageButton classes={"hidden md:flex"}/>

            {/* Mobile Menu Button */}
            <button 
                className="md:hidden text-white text-2xl focus:outline-none"
                onClick={toggleMenu}
            >
                {isOpen ? <IoClose /> : <RxHamburgerMenu />}
            </button>

            {/* Mobile Menu */}
            {isOpen && (
                <ul className="absolute top-full left-0 w-full bg-gradient-to-r from-blue-950 to-blue-900 flex flex-col gap-4 py-4 px-8 md:hidden">
                    {options.map((option, index) => {
                        return (
                            <a key={index} href={`#${option.href}`}><li className={option.class}>{option.name}</li></a>
                        )
                    })}
                    <div className="flex justify-center">
                        <LanguageButton classes={"w-50"}/>
                    </div>
                </ul>
            )}
        </nav>
    )
}