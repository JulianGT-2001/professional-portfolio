import React from "react";
import { NavBar } from './Components/Sections/NavBar';
import { Hero } from './Components/Sections/Hero';
import { Footer } from './Components/Sections/Footer';
import { Projects } from './Components/Sections/Projects';
import { WorkExperience } from './Components/Sections/WorkExperience';
import { Studies } from './Components/Sections/Studies';


export const AppContent = () => {
    return (
        <>
        <NavBar />
        <Hero />
        <Studies />
        <WorkExperience />
        <Projects />
        <Footer />
        </>
    )
}