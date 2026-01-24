import React from "react";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { ContentContext } from "../../../context/ContentContext";
import { LanguageContext } from "../../../context/LanguageContext";
import { ButtonSolidColor } from "../../Common/Button/ButtonSolidColor";
import { ButtonTransparentColor } from "../../Common/Button/ButtonTransparentColor";
import { Tag } from "../../Common/Tags/Tag";
import { ButtonRounded } from "../../Common/Button/ButtonRounded";
import { RoundedImage } from "../../Common/RoundedImage";
import perfil from "../../../assets/photos/perfil.webp";

export const Hero = () => {
    const { content } = React.useContext(ContentContext);
    const { isSpanish } = React.useContext(LanguageContext);

    const heroDescription = isSpanish ? content.heroContent.spanish : content.heroContent.english;
    return (
        <section className="flex items-center justify-center min-h-screen pt-32 md:pt-16 px-6 md:px-8 pb-16 bg-gradient-to-r from-slate-900 to-slate-800" id="Hero">
            <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center justify-center max-w-6xl w-full">
                {/* Columna 1 - Contenido */}
                <div className="flex flex-col gap-6 flex-1 w-full md:w-auto">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">
                            {heroDescription.name}
                        </h1>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                            {heroDescription.surname}
                        </h1>
                        <p className="text-lg md:text-2xl font-semibold text-gray-400">
                            {heroDescription.position}
                        </p>
                    </div>

                    <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                        {heroDescription.description}
                    </p>

                    {/* Tags de lenguajes */}
                    <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                        {content.languageTags.map((tag, index) => {
                            return (
                                <Tag key={index}>
                                    {tag}
                                </Tag>
                            )
                        })}
                    </div>

                    {/* Botones */}
                    <div className="flex flex-col sm:flex-row gap-4 items-center w-full sm:w-auto">
                        <ButtonSolidColor url="#Projects">
                            {heroDescription.textProjectsButton}
                        </ButtonSolidColor>
                        <ButtonTransparentColor pdfUrl={heroDescription.curriculumUrl}>
                            {heroDescription.textCVButton}
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