import React from "react";
import { ButtonSolidColor } from "../ButtonSolidColor";
import { ButtonTransparentColor } from "../ButtonTransparentColor";
import { Tag } from "../Tag";
import { ButtonRounded } from "../ButtonRounded";
import { RoundedImage } from "../RoundedImage";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import perfil from "../../Images/perfil.jpg"

export const Hero = () => {
    return (
        <section className="flex items-center justify-center min-h-screen pt-32 md:pt-16 px-6 md:px-8 pb-16 bg-gradient-to-r from-slate-900 to-slate-800" id="Hero">
            <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center justify-center max-w-6xl w-full">
                {/* Columna 1 - Contenido */}
                <div className="flex flex-col gap-6 flex-1 w-full md:w-auto">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">
                            Julian Darío
                        </h1>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                            González Toledo
                        </h1>
                        <p className="text-lg md:text-2xl font-semibold text-gray-400">
                            Developer
                        </p>
                    </div>

                    <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                        Desarrollador Colombiano de soluciones de software a la medida 
                        que se busca automatizar y agilizar su flujo de trabajo,
                        apasionado por crear soluciones web modernas y eficientes. 
                        Caracterizado por el compromiso, liderazgo y trabajo en equipo.
                    </p>

                    {/* Tags de lenguajes */}
                    <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                        <Tag>
                            C#
                        </Tag>
                        <Tag>
                            Python
                        </Tag>
                        <Tag>
                            JavaScript
                        </Tag>
                        <Tag>
                            SQL
                        </Tag>
                        <Tag>
                            HTML
                        </Tag>
                        <Tag>
                            CSS
                        </Tag>
                    </div>

                    {/* Botones */}
                    <div className="flex flex-col sm:flex-row gap-4 items-center w-full sm:w-auto">
                        <ButtonSolidColor url="#Projects">
                            Ver Proyectos
                        </ButtonSolidColor>
                        <ButtonTransparentColor pdfUrl="/documents/curriculum.pdf">
                            Descargar CV
                        </ButtonTransparentColor>
                    </div>

                    {/* Botones circulares con iconos */}
                    <div className="flex gap-4 items-center justify-center md:justify-start">
                        <ButtonRounded url="https://github.com/JulianGT-2001">
                            <IoLogoGithub />
                        </ButtonRounded>
                        <ButtonRounded url="https://www.linkedin.com/in/julian-dario-gonzalez-toledo/">
                            <FaLinkedin />
                        </ButtonRounded>
                    </div>
                </div>

                {/* Columna 2 - Imagen circular */}
                <div className="flex-1 flex justify-center w-full md:w-auto max-w-xs md:max-w-none">
                    <RoundedImage src={perfil} alt="Perfil" className="w-full h-full rounded-full object-cover" />
                </div>
            </div>
        </section>
    )
}