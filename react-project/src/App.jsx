import { CustomPortfolioProvider } from './Context';
import { NavBar } from './Components/NavBar';
import { Hero } from './Components/Hero';
import { Footer } from './Components/Footer';
import { Projects } from './Components/Projects';
import { WorkExperience } from './Components/WorkExperience';
import { Studies } from './Components/Studies';

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
