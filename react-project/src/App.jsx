import React from 'react';
import { CustomLanguageProvider } from './context/LanguageContext';
import { CustomContentProvider } from './context/ContentContext';
import { NavBar } from './Components/Sections/NavBar';
import { Hero } from './Components/Sections/Hero';
import { Footer } from './Components/Sections/Footer';
import { Projects } from './Components/Sections/Projects';
import { WorkExperience } from './Components/Sections/WorkExperience';
import { Studies } from './Components/Sections/Studies';

export default function App() {
  return (
    <>
      <CustomContentProvider>
        <CustomLanguageProvider>
          <NavBar />
          <Hero />
          <Studies />
          <WorkExperience />
          <Projects />
          <Footer />
        </CustomLanguageProvider>
      </CustomContentProvider>
    </>
  )
}
