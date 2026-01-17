import React from "react";
import dotnetCapture from '../Images/dotnet-fileportal-capture.png'
import dotnetWebCapture from '../Images/dotnet-fileportal-web-capture.png'
import dotnetGateWayCapture from '../Images/dotnet-fileportal-gateway-capture.png'
import hokmaLandingCapture from '../Images/hokma-landing-capture.png'
import todoistCloneCapture from '../Images/todoist-clone-capture.png'
import shopiCapture from '../Images/shopi-capture.png'
import platziTravelCapture from '../Images/platzi-travel-capture.png'
import sginlCapture from '../Images/sginl-capture.png'

export const PortfolioContext = React.createContext();

export const CustomPortfolioProvider = ({ children }) => {
    // NavBar ~ Set Language
    const [ isSpanish, setIsSpanish ] = React.useState(true);

    const languageTags = ["JavaScript", "C#", "Python", "SQL", "HTML", "CSS"];

    const menuOptions = {
        spanish: [
            {
                href: "Hero",
                class: "text-white font-medium hover:text-blue-300 transition-colors duration-300 cursor-pointer",
                name: "Acerca de"
            },
            {
                href: "Projects",
                class: "text-white font-medium hover:text-blue-300 transition-colors duration-300 cursor-pointer",
                name: "Proyectos"
            },
            {
                href: "",
                class: "text-white font-medium hover:text-blue-300 transition-colors duration-300 cursor-pointer hidden",
                name: "Contacto"
            },
        ],
        english: [
            {
                href: "Hero",
                class: "text-white font-medium hover:text-blue-300 transition-colors duration-300 cursor-pointer",
                name: "About"
            },
            {
                href: "Projects",
                class: "text-white font-medium hover:text-blue-300 transition-colors duration-300 cursor-pointer",
                name: "Projects"
            },
            {
                href: "",
                class: "text-white font-medium hover:text-blue-300 transition-colors duration-300 cursor-pointer hidden",
                name: "Contact"
            },
        ],
    };

    const heroContent = {
        spanish: {
            name: "Julian Darío",
            surname: "González Toledo",
            position: "Desarrollador",
            description: "Desarrollador Colombiano de soluciones de software a la medida \n" +
                        "que se busca automatizar y agilizar su flujo de trabajo, \n" +
                        "apasionado por crear soluciones web modernas y eficientes. \n" +
                        "Caracterizado por el compromiso, liderazgo y trabajo en equipo.",
            textProjectsButton: "Ver Proyectos",
            textCVButton: "Descargar CV"
        },
        english: {
            name: "Julian Darío",
            surname: "González Toledo",
            position: "Developer",
            description: "Colombian developer of custom software solutions \n" +
                        "focused on automating and streamlining workflows, \n" +
                        "passionate about creating modern and efficient web solutions. \n" +
                        "Characterized by commitment, leadership, and teamwork.",
            textProjectsButton: "View Projects",
            textCVButton: "Download CV"
        }
    };

    const spanishProjects = [
        {
            id: 1,
            title: "Hokma Landing Page",
            description: "Landing Page comercial desarrollada para Hokma Technologies Colombia, empresa colombiana reconocida en el sector de desarrollo de software. Este proyecto fue realizado conforme a los lineamientos institucionales y bajo la supervisión de la dirección ejecutiva, en mi calidad de colaborador vinculado profesionalmente a la organización.",
            languages: languageTags.filter(tag => tag == "JavaScript")
                            .map(tag => { return { name: tag }}),
            backgroundImage: hokmaLandingCapture,
            hasViewCode: false,
            hasLiveDemo: true,
            liveDemoUrl: "https://hokma.ai/"
        },
        {
            id: 2,
            title: "My Team Page Challenge",
            description: "Sitio construido con HTML y CSS puro, pretende mostrar de forma dinámica y amigable los miembros de un equipo al usuario final.",
            languages: languageTags.filter(tag => tag == "HTML" || tag == "CSS")
                            .map(tag => { return { name: tag }}),
            backgroundImage: "http://raw.githubusercontent.com/JulianGT-2001/my-team-page-challenge/main/Screenshoot.png",
            hasLiveDemo: true,
            viewCodeUrl: "https://github.com/JulianGT-2001/my-team-page-challenge",
            liveDemoUrl: "https://juliangt-2001.github.io/my-team-page-challenge/"
        },
        {
            id: 3,
            title: "404 Page Challenge",
            description: "El propósito de este sitio construido con HTML y CSS puro como desafío personal de la página DevChallenges, es mostrar un error 404 de forma amigable al usuario final.",
            languages: languageTags.filter(tag => tag == "HTML" || tag == "CSS")
                            .map(tag => { return { name: tag }}),
            backgroundImage: "https://raw.githubusercontent.com/JulianGT-2001/404-page-challenge/main/Img/404-page.png",
            hasLiveDemo: true,
            viewCodeUrl: "https://github.com/JulianGT-2001/404-page-challenge",
            liveDemoUrl: "https://juliangt-2001.github.io/404-page-challenge/"
        },
        {
            id: 4,
            title: "Recipe Page Challenge",
            description: "Sitio estatico construido con HTML y CSS puro, que pretende mostrar a detalle una receta de un pastel de queso / cheesecake.",
            languages: languageTags.filter(tag => tag == "HTML" || tag == "CSS")
                            .map(tag => { return { name: tag }}),
            backgroundImage: "https://raw.githubusercontent.com/JulianGT-2001/Recipe_Page_Challenge/main/Captura%20Escritorio.png",
            hasLiveDemo: true,
            viewCodeUrl: "https://github.com/JulianGT-2001/Recipe_Page_Challenge",
            liveDemoUrl: "https://juliangt-2001.github.io/Recipe_Page_Challenge/"
        },
        {
            id: 5,
            title: "Checkout Page Challenge",
            description: "Sitio estatico construido con HTML y CSS puro, que pretende mostrar un formulario de pasarela de pago.",
            languages: languageTags.filter(tag => tag == "HTML" || tag == "CSS")
                            .map(tag => { return { name: tag }}),
            backgroundImage: "https://raw.githubusercontent.com/JulianGT-2001/Checkout_Page_Challenge/main/Pagina2.png",
            hasLiveDemo: true,
            viewCodeUrl: "https://github.com/JulianGT-2001/Checkout_Page_Challenge",
            liveDemoUrl: "https://juliangt-2001.github.io/Checkout_Page_Challenge/"
        },
        {
            id: 6,
            title: "Interior Consultant Challenge",
            description: "Sitio estatico construido con HTML y CSS puro, que pretende ser un Hero para una página de una diseñadora de interiores.",
            languages: languageTags.filter(tag => tag == "HTML" || tag == "CSS")
                            .map(tag => { return { name: tag }}),
            backgroundImage: "https://raw.githubusercontent.com/JulianGT-2001/Interior_Consultant_Challenge/main/FondoIniciar.png",
            hasLiveDemo: true,
            viewCodeUrl: "https://github.com/JulianGT-2001/Interior_Consultant_Challenge",
            liveDemoUrl: "https://juliangt-2001.github.io/Interior_Consultant_Challenge/"
        },
        {
            id: 7,
            title: "Platzi Travel",
            description: "Sitio construido con TailwindCSS y HTML el cual pretende actuar como página de viajes",
            languages: languageTags.filter(tag => tag == "HTML")
                            .map(tag => { return { name: tag }}),
            backgroundImage: platziTravelCapture,
            hasLiveDemo: true,
            viewCodeUrl: "https://github.com/JulianGT-2001/TravelPagePlatzi",
            liveDemoUrl: "https://juliangt-2001.github.io/TravelPagePlatzi/"
        },
        {
            id: 8,
            title: "Single HomePage Alarado Challenge",
            description: "Pagina principal de la marca ficticia Alarado construida con HTML y CSS",
            languages: languageTags.filter(tag => tag == "HTML" || tag == "CSS")
                            .map(tag => { return { name: tag }}),
            backgroundImage: "https://github.com/JulianGT-2001/Single-HomePage-Alarado-DevChallenges/raw/main/src/img/Single_HomePage_Alarado_Preview.png",
            hasLiveDemo: true,
            viewCodeUrl: "https://github.com/JulianGT-2001/Single-HomePage-Alarado-DevChallenges",
            liveDemoUrl: "https://juliangt-2001.github.io/Single-HomePage-Alarado-DevChallenges/"
        },
        {
            id: 9,
            title: "SGINL",
            description: "Proyecto universitario que pretendía ser un sistema de gestión de inventarios para negocios locales",
            languages: languageTags.filter(tag => tag == "HTML" || tag == "CSS" || tag == "Python" || tag == "SQL")
                            .map(tag => { return { name: tag }}),
            backgroundImage: sginlCapture,
            hasLiveDemo: true,
            viewCodeUrl: "https://github.com/JulianGT-2001/SGINL",
            liveDemoUrl: "https://sginlapp-hhatbdbjfnh7ehfg.eastus-01.azurewebsites.net/"
        },
        {
            id: 10,
            title: "Shopi",
            description: "Tienda en línea multiproducto con carrito de compras y filtrado por nombre, diseñada para una experiencia de usuario clara y eficiente.",
            languages: languageTags.filter(tag => tag == "JavaScript")
                            .map(tag => { return { name: tag }}),
            backgroundImage: shopiCapture,
            hasLiveDemo: true,
            viewCodeUrl: "https://github.com/JulianGT-2001/Shopi-Project-Platzi",
            liveDemoUrl: "https://shopi-platzi-project.netlify.app/"
        },
        {
            id: 11,
            title: "Dotnet File Portal Web",
            description: "es una aplicación frontend construida en ASP.NET Core MVC (.NET 8) que actúa como la interfaz de usuario para la plataforma de gestión de archivos.",
            languages: languageTags.filter(tag => tag == "C#" || tag == "JavaScript")
                            .map(tag => { return { name: tag }}),
            backgroundImage: dotnetWebCapture,
            viewCodeUrl: "https://github.com/JulianGT-2001/DotNetFilePortalWeb"
        },
        {
            id: 12,
            title: "Dotnet File Portal GateWay API",
            description: "es una aplicación frontend construida en ASP.NET Core MVC (.NET 8) que actúa como la interfaz de usuario para la plataforma de gestión de archivos.",
            languages: languageTags.filter(tag => tag == "C#")
                            .map(tag => { return { name: tag }}),
            backgroundImage: dotnetGateWayCapture,
            viewCodeUrl: "https://github.com/JulianGT-2001/DotNetFilePortalGateway"
        },
        {
            id: 13,
            title: "Dotnet File Portal API",
            description: "Sistema de gestión documental empresarial que permite subir, almacenar, consultar, descargar y eliminar archivos, guardando metadatos en una base de datos PostgreSQL y gestionando los archivos de forma segura en el servidor.",
            languages: languageTags.filter(tag => tag == "C#" || tag == "SQL")
                            .map(tag => { return { name: tag }}),
            backgroundImage: dotnetCapture,
            viewCodeUrl: "https://github.com/JulianGT-2001/DotNetFilePortal"
        },
        {
            id: 14,
            title: "Todoist Clon",
            description: "Proyecto personal que pretende clonar la aplicación web más útil para gestionar las tareas diarias con el uso de tecnologías como React.js.",
            languages: languageTags.filter(tag => tag == "JavaScript")
                            .map(tag => { return { name: tag }}),
            backgroundImage: todoistCloneCapture,
            viewCodeUrl: "https://github.com/JulianGT-2001/todoist-react-clone"
        },
    ];

    const englishProjects = [
        {
            id: 1,
            title: "Hokma Landing Page",
            description: "Commercial landing page developed for Hokma Technologies Colombia, a Colombian company recognized in the software development sector. This project was carried out in accordance with institutional guidelines and under executive management supervision, in my role as a professionally affiliated collaborator within the organization.",
            languages: languageTags.filter(tag => tag == "JavaScript")
            .map(tag => { return { name: tag } }),
            backgroundImage: hokmaLandingCapture,
            hasViewCode: false,
            hasLiveDemo: true,
            liveDemoUrl: "https://hokma.ai/"
        },
        {
            id: 2,
            title: "My Team Page Challenge",
            description: "Website built with pure HTML and CSS, designed to dynamically and intuitively showcase team members to the end user.",
            languages: languageTags.filter(tag => tag == "HTML" || tag == "CSS")
            .map(tag => { return { name: tag } }),
            backgroundImage: "http://raw.githubusercontent.com/JulianGT-2001/my-team-page-challenge/main/Screenshoot.png",
            hasLiveDemo: true,
            viewCodeUrl: "https://github.com/JulianGT-2001/my-team-page-challenge",
            liveDemoUrl: "https://juliangt-2001.github.io/my-team-page-challenge/"
        },
        {
            id: 3,
            title: "404 Page Challenge",
            description: "The purpose of this website, built with pure HTML and CSS as a personal challenge from DevChallenges, is to display a user-friendly 404 error page.",
            languages: languageTags.filter(tag => tag == "HTML" || tag == "CSS")
            .map(tag => { return { name: tag } }),
            backgroundImage: "https://raw.githubusercontent.com/JulianGT-2001/404-page-challenge/main/Img/404-page.png",
            hasLiveDemo: true,
            viewCodeUrl: "https://github.com/JulianGT-2001/404-page-challenge",
            liveDemoUrl: "https://juliangt-2001.github.io/404-page-challenge/"
        },
        {
            id: 4,
            title: "Recipe Page Challenge",
            description: "Static website built with pure HTML and CSS, designed to present a cheesecake recipe in detail.",
            languages: languageTags.filter(tag => tag == "HTML" || tag == "CSS")
            .map(tag => { return { name: tag } }),
            backgroundImage: "https://raw.githubusercontent.com/JulianGT-2001/Recipe_Page_Challenge/main/Captura%20Escritorio.png",
            hasLiveDemo: true,
            viewCodeUrl: "https://github.com/JulianGT-2001/Recipe_Page_Challenge",
            liveDemoUrl: "https://juliangt-2001.github.io/Recipe_Page_Challenge/"
        },
        {
            id: 5,
            title: "Checkout Page Challenge",
            description: "Static website built with pure HTML and CSS, intended to showcase a payment gateway form.",
            languages: languageTags.filter(tag => tag == "HTML" || tag == "CSS")
            .map(tag => { return { name: tag } }),
            backgroundImage: "https://raw.githubusercontent.com/JulianGT-2001/Checkout_Page_Challenge/main/Pagina2.png",
            hasLiveDemo: true,
            viewCodeUrl: "https://github.com/JulianGT-2001/Checkout_Page_Challenge",
            liveDemoUrl: "https://juliangt-2001.github.io/Checkout_Page_Challenge/"
        },
        {
            id: 6,
            title: "Interior Consultant Challenge",
            description: "Static website built with pure HTML and CSS, designed as a hero section for an interior designer’s website.",
            languages: languageTags.filter(tag => tag == "HTML" || tag == "CSS")
            .map(tag => { return { name: tag } }),
            backgroundImage: "https://raw.githubusercontent.com/JulianGT-2001/Interior_Consultant_Challenge/main/FondoIniciar.png",
            hasLiveDemo: true,
            viewCodeUrl: "https://github.com/JulianGT-2001/Interior_Consultant_Challenge",
            liveDemoUrl: "https://juliangt-2001.github.io/Interior_Consultant_Challenge/"
        },
        {
            id: 7,
            title: "Platzi Travel",
            description: "Website built with TailwindCSS and HTML, designed to function as a travel landing page.",
            languages: languageTags.filter(tag => tag == "HTML")
            .map(tag => { return { name: tag } }),
            backgroundImage: platziTravelCapture,
            hasLiveDemo: true,
            viewCodeUrl: "https://github.com/JulianGT-2001/TravelPagePlatzi",
            liveDemoUrl: "https://juliangt-2001.github.io/TravelPagePlatzi/"
        },
        {
            id: 8,
            title: "Single HomePage Alarado Challenge",
            description: "Homepage for the fictional brand Alarado, built with HTML and CSS.",
            languages: languageTags.filter(tag => tag == "HTML" || tag == "CSS")
            .map(tag => { return { name: tag } }),
            backgroundImage: "https://github.com/JulianGT-2001/Single-HomePage-Alarado-DevChallenges/raw/main/src/img/Single_HomePage_Alarado_Preview.png",
            hasLiveDemo: true,
            viewCodeUrl: "https://github.com/JulianGT-2001/Single-HomePage-Alarado-DevChallenges",
            liveDemoUrl: "https://juliangt-2001.github.io/Single-HomePage-Alarado-DevChallenges/"
        },
        {
            id: 9,
            title: "SGINL",
            description: "University project intended to function as an inventory management system for local businesses.",
            languages: languageTags.filter(tag => tag == "HTML" || tag == "CSS" || tag == "Python" || tag == "SQL")
            .map(tag => { return { name: tag } }),
            backgroundImage: sginlCapture,
            hasLiveDemo: true,
            viewCodeUrl: "https://github.com/JulianGT-2001/SGINL",
            liveDemoUrl: "https://sginlapp-hhatbdbjfnh7ehfg.eastus-01.azurewebsites.net/"
        },
        {
            id: 10,
            title: "Shopi",
            description: "Multi-product online store with shopping cart and name-based filtering, designed for a clear and efficient user experience.",
            languages: languageTags.filter(tag => tag == "JavaScript")
            .map(tag => { return { name: tag } }),
            backgroundImage: shopiCapture,
            hasLiveDemo: true,
            viewCodeUrl: "https://github.com/JulianGT-2001/Shopi-Project-Platzi",
            liveDemoUrl: "https://shopi-platzi-project.netlify.app/"
        },
        {
            id: 11,
            title: "Dotnet File Portal Web",
            description: "Frontend application built with ASP.NET Core MVC (.NET 8) that serves as the user interface for a file management platform.",
            languages: languageTags.filter(tag => tag == "C#" || tag == "JavaScript")
            .map(tag => { return { name: tag } }),
            backgroundImage: dotnetWebCapture,
            viewCodeUrl: "https://github.com/JulianGT-2001/DotNetFilePortalWeb"
        },
        {
            id: 12,
            title: "Dotnet File Portal Gateway API",
            description: "Backend gateway application developed in ASP.NET Core (.NET 8) that manages communication between the frontend and the file management services.",
            languages: languageTags.filter(tag => tag == "C#")
            .map(tag => { return { name: tag } }),
            backgroundImage: dotnetGateWayCapture,
            viewCodeUrl: "https://github.com/JulianGT-2001/DotNetFilePortalGateway"
        },
        {
            id: 13,
            title: "Dotnet File Portal API",
            description: "Enterprise document management system that allows uploading, storing, querying, downloading, and deleting files, storing metadata in a PostgreSQL database and securely managing files on the server.",
            languages: languageTags.filter(tag => tag == "C#" || tag == "SQL")
            .map(tag => { return { name: tag } }),
            backgroundImage: dotnetCapture,
            viewCodeUrl: "https://github.com/JulianGT-2001/DotNetFilePortal"
        },
        {
            id: 14,
            title: "Todoist Clone",
            description: "Personal project aimed at cloning the popular task management web application using technologies such as React.js.",
            languages: languageTags.filter(tag => tag == "JavaScript")
            .map(tag => { return { name: tag } }),
            backgroundImage: todoistCloneCapture,
            viewCodeUrl: "https://github.com/JulianGT-2001/todoist-react-clone"
        }
    ];

    const projectsContent = {
        spanish: {
            title: "Proyectos",
            description: "Desarrollo soluciones digitales enfocadas en automatizar procesos, \n" +
                        "optimizar tiempos y escalar negocios. Cada proyecto demuestra eficiencia, \n" +
                        "impacto y enfoque estratégico. Explora mis proyectos y descubre cómo puedo \n" +
                        "transformar tus procesos en resultados medibles.",
            textFilterButton: "Filtrar",
            projects: spanishProjects,
            textLoadMoreProjects: "Cargar más proyectos"
        },
        english: {
            title: "Projects",
            description: "I develop digital solutions focused on automating processes, \n" +
                        "optimizing time, and scaling businesses. Each project demonstrates efficiency, \n" +
                        "impact, and a strategic approach. Explore my projects and discover how I can \n" +
                        "transform your processes into measurable results.",
            textFilterButton: "Filter",
            projects: englishProjects,
            textLoadMoreProjects: "Load more projects"
        }
    };

    const footerContent = {
        spanish: {
            copyrightText: "JGT Portafolio. Todos los derechos reservados."
        },
        english: {
            copyrightText: "JGT Portafolio. All rights reserved."
        }
    }
    return (
        <PortfolioContext.Provider value={{
            languageTags,
            menuOptions,
            isSpanish,
            setIsSpanish,
            heroContent,
            projectsContent,
            footerContent
        }}>
            { children }
        </PortfolioContext.Provider>
    )
}