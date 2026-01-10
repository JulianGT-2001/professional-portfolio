import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";

export const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="flex justify-between items-center fixed z-10 w-full py-4 px-8 bg-gradient-to-r from-blue-950 to-blue-900 shadow-lg">
            <div className="text-2xl font-bold text-white">JGT</div>
            
            {/* Desktop Menu */}
            <ul className="hidden md:flex list-none gap-12">
                <a href="#Hero"><li className="text-white font-medium hover:text-blue-300 transition-colors duration-300 cursor-pointer">Acerca de</li></a>
                <a href="#Projects"><li className="text-white font-medium hover:text-blue-300 transition-colors duration-300 cursor-pointer">Proyectos</li></a>
                <li className="text-white font-medium hover:text-blue-300 transition-colors duration-300 cursor-pointer hidden">Contacto</li>
            </ul>

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
                    <li className="text-white font-medium hover:text-blue-300 transition-colors duration-300 cursor-pointer">Acerca de</li>
                    <li className="text-white font-medium hover:text-blue-300 transition-colors duration-300 cursor-pointer">Proyectos</li>
                    <li className="text-white font-medium hover:text-blue-300 transition-colors duration-300 cursor-pointer hidden">Contacto</li>
                </ul>
            )}
        </nav>
    )
}