import { CustomPortfolioProvider } from './Context'
import { NavBar } from './Components/NavBar'
import { ButtonSolidColor } from './Components/ButtonSolidColor'
import { Hero } from './Components/Hero'
import { Footer } from './Components/Footer'
import { Projects } from './Components/Projects'
import './App.css'

export default function App() {
  return (
    <>
    <CustomPortfolioProvider>
      <NavBar />
      <Hero />
      <Projects />
      <Footer />
    </CustomPortfolioProvider>
    </>
  )
}
