import React from "react";

export const NavBar = () => {
    return (
        <nav className="flex justify-between items-center fixed z-10 w-full py-4 px-8 bg-gradient-to-r from-blue-950 to-blue-900 shadow-lg">
            <div className="text-2xl font-bold text-white">JGT</div>
            <ul className="list-none flex gap-12">
                <li className="text-white font-medium hover:text-blue-300 transition-colors duration-300 cursor-pointer">Acerca de</li>
                <li className="text-white font-medium hover:text-blue-300 transition-colors duration-300 cursor-pointer">Proyectos</li>
                <li className="text-white font-medium hover:text-blue-300 transition-colors duration-300 cursor-pointer">Contacto</li>
            </ul>
        </nav>
    )
}