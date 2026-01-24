import React from 'react';
import { CustomPortfolioProvider } from './Context';
import { NavBar } from './Components/Sections/NavBar';
import { Hero } from './Components/Sections/Hero';
import { Footer } from './Components/Sections/Footer';
import { Projects } from './Components/Sections/Projects';
import { WorkExperience } from './Components/Sections/WorkExperience';
import { Studies } from './Components/Sections/Studies';

export default function App() {
  return (
    <>
    <CustomPortfolioProvider>
      <NavBar />
      <Hero />
      <Studies />
      <WorkExperience />
      <Projects />
      <Footer />
    </CustomPortfolioProvider>
    </>
  )
}
