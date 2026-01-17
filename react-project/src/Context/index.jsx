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
    const languageTags = ["JavaScript", "C#", "Python", "SQL", "HTML", "CSS"];
    const projects = [
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
    return (
        <PortfolioContext.Provider value={{
            projects,
            languageTags
        }}>
            { children }
        </PortfolioContext.Provider>
    )
}