import React from "react";
import dotnetCapture from '../assets/photos/dotnet-fileportal-capture.png'
import dotnetWebCapture from '../assets/photos/dotnet-fileportal-web-capture.png'
import dotnetGateWayCapture from '../assets/photos/dotnet-fileportal-gateway-capture.png'
import hokmaLandingCapture from '../assets/photos/hokma-landing-capture.png'
import todoistCloneCapture from '../assets/photos/todoist-clone-capture.png'
import shopiCapture from '../assets/photos/shopi-capture.png'
import platziTravelCapture from '../assets/photos/platzi-travel-capture.png'
import sginlCapture from '../assets/photos/sginl-capture.png'

export const PortfolioContext = React.createContext();

export const CustomPortfolioProvider = ({ children }) => {
    // NavBar ~ Set Language
    const [ isSpanish, setIsSpanish ] = React.useState(() => {
        const savedLanguage = localStorage.getItem('portfolioLanguage');
        return savedLanguage ? JSON.parse(savedLanguage) : true;
    });

    // Guardar la preferencia de idioma en localStorage cuando cambia
    React.useEffect(() => {
        localStorage.setItem('portfolioLanguage', JSON.stringify(isSpanish));
    }, [isSpanish]);

    const languageTags = ["JavaScript", "C#", "Python", "SQL", "HTML", "CSS"];

    const menuOptions = {
        spanish: [
            {
                href: "Hero",
                class: "text-white font-medium hover:text-blue-300 transition-colors duration-300 cursor-pointer",
                name: "Acerca de"
            },
            {
                href: "Studies",
                class: "text-white font-medium hover:text-blue-300 transition-colors duration-300 cursor-pointer",
                name: "Estudios"
            },
            {
                href: "WorkExperience",
                class: "text-white font-medium hover:text-blue-300 transition-colors duration-300 cursor-pointer",
                name: "Experiencia Laboral"
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
                href: "Studies",
                class: "text-white font-medium hover:text-blue-300 transition-colors duration-300 cursor-pointer",
                name: "Studies"
            },
            {
                href: "WorkExperience",
                class: "text-white font-medium hover:text-blue-300 transition-colors duration-300 cursor-pointer",
                name: "Work Experience"
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
            textCVButton: "Descargar CV",
            curriculumUrl: '/documents/spanish_curriculum.pdf',
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
            textCVButton: "Download CV",
            curriculumUrl: '/documents/english_curriculum.pdf',
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
    };

    const spanishExperiences = [
        {
            title: 'Ingeniero FullStack',
            date: 'Oct 2022 - Actualidad',
            subtitle: 'Hokma Technologies',
            descriptions: [
                'Crear soluciones digitales accesibles desde navegadores, utilizando tecnologías modernas para resolver necesidades empresariales y de usuarios.',
                'Construir sistemas que automaticen tareas repetitivas, reduciendo errores humanos y aumentando la eficiencia operativa de los procesos.',
                'Arquitectar y programar la lógica del servidor, bases de datos y servicios que soportan el funcionamiento de las aplicaciones.',
                'Desarrollar componentes visuales interactivos que permiten a los usuarios comunicarse de forma clara y efectiva con el sistema.',
                'Analizar y mejorar flujos de trabajo y algoritmos para hacer más rápido, económico y eficiente el uso de recursos.',
                'Diseñar y ajustar funcionalidades que hagan que el uso del software sea intuitivo, agradable y fácil de entender.',
                'Colaborar con equipos multidisciplinarios para planificar, desarrollar, probar y entregar soluciones tecnológicas de alta calidad.'
            ]
        },
        {
            title: 'Lider de tecnología del cliente',
            date: 'Abr 2022 - Oct 2022',
            subtitle: 'Microsoft',
            descriptions: [
                'Proponer soluciones estratégicas y tecnológicas que ayuden a las empresas a mejorar su desempeño.',
                'Evaluar plataformas, software y sistemas para determinar cuáles se adaptan mejor a las necesidades del negocio.',
                'Detectar procesos lentos o ineficientes dentro de la empresa para proponer mejoras basadas en tecnología.',
                'Implementar herramientas y procesos que permitan ofrecer respuestas más rápidas, claras y eficientes a los clientes.',
                'Acompañar a la empresa en la elección de las soluciones tecnológicas más adecuadas según sus objetivos.',
                'Proveer información técnica y estratégica para que la empresa pueda tomar decisiones informadas.',
            ]
        },
        {
            title: 'Aprendiz de sistemas',
            date: 'Jul 2019 - Ene 2020',
            subtitle: 'Jorge Cortes y CIA',
            descriptions: [
                'Ejecutar revisiones periódicas para evitar fallas, optimizar el rendimiento y prolongar la vida útil de los equipos.',
                'Identificar, reparar y solucionar fallas de hardware y software que afectan el funcionamiento de los dispositivos.',
                'Atender solicitudes y problemas tecnológicos de los usuarios, asegurando que puedan trabajar sin interrupciones.',
                'Analizar errores, detectar causas y aplicar soluciones efectivas de manera oportuna.',
                'Verificar que los computadores y sistemas estén operando de forma estable y segura.',
                'Contribuir al buen desempeño del área de sistemas para que la empresa pueda cumplir sus objetivos.',
            ]
        },
    ];

    const englishExperiences = [
        {
            title: 'FullStack Developer',
            date: 'Oct 2022 - Actually',
            subtitle: 'Hokma Technologies',
            descriptions: [
                "Create digital solutions accessible through browsers, using modern technologies to solve business and user needs.",
                "Build systems that automate repetitive tasks, reducing human errors and increasing operational process efficiency.",
                "Design and program server-side logic, databases, and services that support application functionality.",
                "Develop interactive visual components that allow users to communicate clearly and effectively with the system.",
                "Analyze and improve workflows and algorithms to make resource usage faster, cheaper, and more efficient.",
                "Design and refine features that make software usage intuitive, pleasant, and easy to understand.",
                "Collaborate with multidisciplinary teams to plan, develop, test, and deliver high-quality technology solutions."
            ]
        },
        {
            title: "Client Technology Lead",
            date: "Apr 2022 - Oct 2022",
            subtitle: "Microsoft",
            descriptions: [
                "Propose strategic and technological solutions that help companies improve their performance.",
                "Evaluate platforms, software, and systems to determine which best fit business needs.",
                "Identify slow or inefficient processes within the company to propose technology-based improvements.",
                "Implement tools and processes that enable faster, clearer, and more efficient customer responses.",
                "Support the company in selecting the most appropriate technological solutions based on its objectives.",
                "Provide technical and strategic information so the company can make informed decisions."
            ]
        },
        {
            title: "Systems Apprentice",
            date: "Jul 2019 - Jan 2020",
            subtitle: "Jorge Cortes & Co",
            descriptions: [
                "Perform regular inspections to prevent failures, optimize performance, and extend the lifespan of equipment.",
                "Identify, repair, and resolve hardware and software issues that affect device operation.",
                "Handle user requests and technical issues, ensuring they can work without interruptions.",
                "Analyze errors, identify root causes, and apply effective solutions in a timely manner.",
                "Verify that computers and systems are operating in a stable and secure manner.",
                "Contribute to the effective performance of the IT department so the company can achieve its goals."
            ]
        }
    ];

    const workExperience = {
        spanish: {
            title: 'Experiencia Laboral',
            data: spanishExperiences
        },
        english: {
            title: 'Work Experience',
            data: englishExperiences
        }
    };

    const spanishStudies = [
        {
            title: 'Ingeniería de sistemas',
            date: 'Jan 2024 - Actualidad',
            subtitle: 'Universidad Nacional Abierta y a Distancia',
            description: 'Formación académica enfocada en el diseño, desarrollo y mantenimiento de sistemas de información, software y soluciones tecnológicas, incluyendo programación, bases de datos, redes, arquitectura de software y gestión de proyectos.'
        },
        {
            title: 'Tecnólogo en análisis y desarrollo de sistemas de información',
            date: 'Oct 2021 - Oct 2023',
            subtitle: 'Servicio Nacional de Aprendizaje (SENA)',
            description: 'Formación técnica orientada al ciclo completo de desarrollo de software, incluyendo análisis, diseño, desarrollo, implementación, pruebas y mantenimiento, junto con competencias en calidad de software y negociación tecnológica para crear soluciones eficientes y competitivas.'
        },
        {
            title: "Técnico en sistemas",
            date: "Feb 2019 - Feb 2020",
            subtitle: "Servicio Nacional de Aprendizaje (SENA)",
            description: "Formación técnica enfocada en el mantenimiento preventivo y correctivo de equipos de cómputo, instalación y configuración de redes de datos, soporte técnico a usuarios, operación de herramientas digitales, gestión de servicios TIC y seguridad de la información, complementada con competencias en inglés básico, cultura ambiental y ética profesional."
        }
    ];

    const englishStudies = [
        {
            title: "Systems Engineering",
            date: "Jan 2024 - Present",
            subtitle: "Universidad Nacional Abierta y a Distancia",
            description: "Academic training focused on the design, development, and maintenance of information systems, software, and technological solutions, including programming, databases, networks, software architecture, and project management."
        },
        {
            title: "Technologist in Analysis and Development of Information Systems",
            date: "Oct 2021 - Oct 2023",
            subtitle: "Servicio Nacional de Aprendizaje (SENA)",
            description: "Technical training focused on the complete software development life cycle, including analysis, design, development, implementation, testing, and maintenance, along with skills in software quality and technology negotiation to create efficient and competitive solutions."
        },
        {
            title: "Systems Technician",
            date: "Feb 2019 - Feb 2020",
            subtitle: "Servicio Nacional de Aprendizaje (SENA)",
            description: "Technical training focused on preventive and corrective maintenance of computer equipment, installation and configuration of data networks, user technical support, operation of digital tools, IT services management, and information security, complemented by basic English, environmental awareness, and professional ethics."
        }
    ];


    const studies = {
        spanish: {
            title: 'Estudios Académicos',
            data: spanishStudies
        },
        english: {
            title: 'Academic Studies',
            data: englishStudies
        }
    };
    return (
        <PortfolioContext.Provider value={{
            languageTags,
            menuOptions,
            isSpanish,
            setIsSpanish,
            heroContent,
            projectsContent,
            footerContent,
            workExperience,
            studies
        }}>
            { children }
        </PortfolioContext.Provider>
    )
}