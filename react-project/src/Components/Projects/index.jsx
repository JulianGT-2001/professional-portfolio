import React, { useState } from "react";
import { ButtonTransparentColor } from "../ButtonTransparentColor";
import { ProjectCard } from "../ProjectCard";
import { IoFilter } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import dotnetCapture from '../../Images/dotnet-fileportal-capture.png'
import dotnetWebCapture from '../../Images/dotnet-fileportal-web-capture.png'
import dotnetGateWayCapture from '../../Images/dotnet-fileportal-gateway-capture.png'
import hokmaLandingCapture from '../../Images/hokma-landing-capture.png'
import todoistCloneCapture from '../../Images/todoist-clone-capture.png'
import shopiCapture from '../../Images/shopi-capture.png'
import platziTravelCapture from '../../Images/platzi-travel-capture.png'
import sginlCapture from '../../Images/sginl-capture.png'

const projects = [
    {
        id: 1,
        title: "Hokma Landing Page",
        description: "Landing Page Comercial de la empresa de desarrollo de software Colombiana reconocida, Hokma Technologies Colombia.",
        languages: [
            { name: "React.js" },
            { name: "JavaScript" }
        ],
        backgroundImage: hokmaLandingCapture,
        hasViewCode: false,
        hasLiveDemo: true,
        liveDemoUrl: "https://hokma.ai/"
    },
    {
        id: 2,
        title: "My Team Page Challenge",
        description: "Sitio construido con HTML y CSS puro, pretende mostrar de forma dinámica y amigable los miembros de un equipo al usuario final.",
        languages: [
            { name: "HTML" },
            { name: "CSS" }
        ],
        backgroundImage: "http://raw.githubusercontent.com/JulianGT-2001/my-team-page-challenge/main/Screenshoot.png",
        hasLiveDemo: true,
        viewCodeUrl: "https://github.com/JulianGT-2001/my-team-page-challenge",
        liveDemoUrl: "https://juliangt-2001.github.io/my-team-page-challenge/"
    },
    {
        id: 3,
        title: "404 Page Challenge",
        description: "El propósito de este sitio construido con HTML y CSS puro como desafío personal de la página DevChallenges, es mostrar un error 404 de forma amigable al usuario final.",
        languages: [
            { name: "HTML" },
            { name: "CSS" }
        ],
        backgroundImage: "https://raw.githubusercontent.com/JulianGT-2001/404-page-challenge/main/Img/404-page.png",
        hasLiveDemo: true,
        viewCodeUrl: "https://github.com/JulianGT-2001/404-page-challenge",
        liveDemoUrl: "https://juliangt-2001.github.io/404-page-challenge/"
    },
    {
        id: 4,
        title: "Recipe Page Challenge",
        description: "Sitio estatico construido con HTML y CSS puro, que pretende mostrar a detalle una receta de un pastel de queso / cheesecake.",
        languages: [
            { name: "HTML" },
            { name: "CSS" }
        ],
        backgroundImage: "https://raw.githubusercontent.com/JulianGT-2001/Recipe_Page_Challenge/main/Captura%20Escritorio.png",
        hasLiveDemo: true,
        viewCodeUrl: "https://github.com/JulianGT-2001/Recipe_Page_Challenge",
        liveDemoUrl: "https://juliangt-2001.github.io/Recipe_Page_Challenge/"
    },
    {
        id: 5,
        title: "Checkout Page Challenge",
        description: "Sitio estatico construido con HTML y CSS puro, que pretende mostrar un formulario de pasarela de pago.",
        languages: [
            { name: "HTML" },
            { name: "CSS" }
        ],
        backgroundImage: "https://raw.githubusercontent.com/JulianGT-2001/Checkout_Page_Challenge/main/Pagina2.png",
        hasLiveDemo: true,
        viewCodeUrl: "https://github.com/JulianGT-2001/Checkout_Page_Challenge",
        liveDemoUrl: "https://juliangt-2001.github.io/Checkout_Page_Challenge/"
    },
    {
        id: 6,
        title: "Interior Consultant Challenge",
        description: "Sitio estatico construido con HTML y CSS puro, que pretende ser un Hero para una página de una diseñadora de interiores.",
        languages: [
            { name: "HTML" },
            { name: "CSS" }
        ],
        backgroundImage: "https://raw.githubusercontent.com/JulianGT-2001/Interior_Consultant_Challenge/main/FondoIniciar.png",
        hasLiveDemo: true,
        viewCodeUrl: "https://github.com/JulianGT-2001/Interior_Consultant_Challenge",
        liveDemoUrl: "https://juliangt-2001.github.io/Interior_Consultant_Challenge/"
    },
    {
        id: 7,
        title: "Platzi Travel",
        description: "Sitio construido con TailwindCSS y HTML el cual pretende actuar como página de viajes",
        languages: [
            { name: "HTML" },
        ],
        backgroundImage: platziTravelCapture,
        hasLiveDemo: true,
        viewCodeUrl: "https://github.com/JulianGT-2001/TravelPagePlatzi",
        liveDemoUrl: "https://juliangt-2001.github.io/TravelPagePlatzi/"
    },
    {
        id: 8,
        title: "Single HomePage Alarado Challenge",
        description: "Pagina principal de la marca ficticia Alarado construida con HTML y CSS",
        languages: [
            { name: "HTML" },
            { name: "CSS" },
        ],
        backgroundImage: "https://github.com/JulianGT-2001/Single-HomePage-Alarado-DevChallenges/raw/main/src/img/Single_HomePage_Alarado_Preview.png",
        hasLiveDemo: true,
        viewCodeUrl: "https://github.com/JulianGT-2001/Single-HomePage-Alarado-DevChallenges",
        liveDemoUrl: "https://juliangt-2001.github.io/Single-HomePage-Alarado-DevChallenges/"
    },
    {
        id: 9,
        title: "SGINL",
        description: "Proyecto universitario que pretendía ser un sistema de gestión de inventarios para negocios locales",
        languages: [
            { name: "HTML" },
            { name: "CSS" },
            { name: "Python" },
            { name: "SQL" },
        ],
        backgroundImage: sginlCapture,
        hasLiveDemo: true,
        viewCodeUrl: "https://github.com/JulianGT-2001/SGINL",
        liveDemoUrl: "https://sginlapp-hhatbdbjfnh7ehfg.eastus-01.azurewebsites.net/"
    },
    {
        id: 10,
        title: "Shopi",
        description: "Tienda en línea multiproducto con carrito de compras y filtrado por nombre, diseñada para una experiencia de usuario clara y eficiente.",
        languages: [
            { name: "React.js" },
            { name: "Vite.js" },
            { name: "JavaScript" }
        ],
        backgroundImage: shopiCapture,
        hasLiveDemo: true,
        viewCodeUrl: "https://github.com/JulianGT-2001/Shopi-Project-Platzi",
        liveDemoUrl: "https://shopi-platzi-project.netlify.app/"
    },
    {
        id: 11,
        title: "Dotnet File Portal Web",
        description: "es una aplicación frontend construida en ASP.NET Core MVC (.NET 8) que actúa como la interfaz de usuario para la plataforma de gestión de archivos.",
        languages: [
            { name: "C#" },
            { name: "NET 8" },
            { name: "JavaScript" }
        ],
        backgroundImage: dotnetWebCapture,
        viewCodeUrl: "https://github.com/JulianGT-2001/DotNetFilePortalWeb"
    },
    {
        id: 12,
        title: "Dotnet File Portal GateWay API",
        description: "es una aplicación frontend construida en ASP.NET Core MVC (.NET 8) que actúa como la interfaz de usuario para la plataforma de gestión de archivos.",
        languages: [
            { name: "C#" },
            { name: "NET 8" }
        ],
        backgroundImage: dotnetGateWayCapture,
        viewCodeUrl: "https://github.com/JulianGT-2001/DotNetFilePortalGateway"
    },
    {
        id: 13,
        title: "Dotnet File Portal API",
        description: "Sistema de gestión documental empresarial que permite subir, almacenar, consultar, descargar y eliminar archivos, guardando metadatos en una base de datos PostgreSQL y gestionando los archivos de forma segura en el servidor.",
        languages: [
            { name: "C#" },
            { name: "NET 8" },
            { name: "SQL" },
        ],
        backgroundImage: dotnetCapture,
        viewCodeUrl: "https://github.com/JulianGT-2001/DotNetFilePortal"
    },
    {
        id: 14,
        title: "Todoist Clon",
        description: "Proyecto personal que pretende clonar la aplicación web más útil para gestionar las tareas diarias con el uso de tecnologías como React.js.",
        languages: [
            { name: "React.js" },
            { name: "Firebase" },
            { name: "SCSS" },
            { name: "JavaScript" },
        ],
        backgroundImage: todoistCloneCapture,
        viewCodeUrl: "https://github.com/JulianGT-2001/todoist-react-clone"
    },
];

export const Projects = () => {
    const [projectsToShow, setProjectsToShow] = useState(5);
    const [showFilters, setShowFilters] = useState(false);
    const [selectedFilter, setSelectedFilter] = useState(null);

    const filterTags = ["JavaScript", "C#", "Python", "SQL", "HTML", "CSS"];

    const handleLoadMore = () => {
        setProjectsToShow(projectsToShow + 4);
    };

    const handleFilterClick = () => {
        setShowFilters(!showFilters);
    };

    const handleFilterTagClick = (tag) => {
        setSelectedFilter(selectedFilter === tag ? null : tag);
    };

    const filteredProjects = selectedFilter
        ? projects.filter(project => 
            project.languages.some(lang => lang.name.includes(selectedFilter))
          )
        : projects;

    return (
        <section className="bg-gradient-to-r from-slate-900 to-slate-800 py-4" id="Projects">
            <div className="w-4/5 mx-auto flex flex-col md:flex-row items-center md:items-end justify-between gap-8 mb-12">
                <div className="flex flex-col gap-2">
                    <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Proyectos</h1>
                    <p className="text-gray-300 text-lg leading-relaxed max-w-5xl">
                        Desarrollo soluciones digitales enfocadas en automatizar procesos, 
                        optimizar tiempos y escalar negocios. Cada proyecto demuestra eficiencia, 
                        impacto y enfoque estratégico. Explora mis proyectos y descubre cómo puedo 
                        transformar tus procesos en resultados medibles.
                    </p>
                </div>
                <div className="flex gap-2">
                    <ButtonTransparentColor classes={"flex items-center"} onClick={handleFilterClick}>
                        <IoFilter className="me-2"/> Filtrar
                    </ButtonTransparentColor>
                </div>
            </div>
            {/* Filter Tags */}
            {showFilters && (
                <div className="w-4/5 mx-auto flex flex-wrap gap-3 mb-8">
                    {filterTags.map((tag, index) => (
                        <button
                            key={index}
                            onClick={() => handleFilterTagClick(tag)}
                            className={`rounded-full border transition-colors cursor-pointer px-6 py-2 text-sm font-medium ${
                                selectedFilter === tag
                                    ? "border-blue-500 bg-blue-500 text-white"
                                    : "border-gray-700 bg-transparent text-slate-300 hover:border-gray-500 hover:text-white hover:bg-gray-800"
                            }`}
                        >
                            {tag}
                        </button>
                    ))}
                </div>
            )}
            <div className="w-4/5 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(280px,auto)]">
                {filteredProjects.slice(0, projectsToShow).map((project) => {
                    const isFeatured = project.id == 1 || project.id == 4
                    return (
                        <ProjectCard
                            key={project.id}
                            title={project.title}
                            description={project.description}
                            tags={project.languages}
                            backgroundImage={project.backgroundImage}
                            colSpan={isFeatured ? "md:col-span-2" : ""}
                            rowSpan={project.id === 1 ? "md:row-span-2" : ""}
                            titleSize={isFeatured ? "text-3xl" : "text-2xl"}
                            viewCodeUrl={project.viewCodeUrl}
                            liveDemoUrl={project.liveDemoUrl}
                            hasLiveDemo={project.hasLiveDemo}
                            hasViewCode={project.hasViewCode}
                        />
                    );
                })}
            </div>
            {/* Load More button - only show if there are more projects */}
            {projectsToShow < filteredProjects.length && (
                <div className="flex justify-center py-8">
                    <button
                        onClick={handleLoadMore}
                        className="flex items-center gap-2 rounded-full border border-gray-700 bg-transparent px-8 py-3 text-sm font-medium text-slate-300 transition-colors hover:border-gray-500 hover:text-white hover:bg-gray-800">
                        Cargar más proyectos
                        <IoIosArrowDown />
                    </button>
                </div>
            )}
        </section>
    )
}