import React from "react";

export const Footer = () => {
    return (
        <footer className="py-10 border-t border-blue-900 bg-blue-950 transition-colors flex flex-col justify-center items-center gap-6">
            <p class="text-md text-gray-300">© {new Date().getFullYear()} JGT Portafolio. Todos los derechos reservados.</p>
            <div className="flex gap-6">
                <a className="text-sm text-gray-300 hover:text-primary transition-colors" href="#">GitHub</a>
                <a className="text-sm text-gray-300 hover:text-primary transition-colors" href="#">LinkedIn</a>
            </div>
        </footer>
    )
}