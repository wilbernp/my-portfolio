import About from './sections/About/About'
import { Banner } from './sections/Banner'
import { Contact } from './sections/Contact'
import { Navbar } from './sections/Navbar'
import { Projects } from './sections/Projects'
import { Skills } from './sections/Skills'


export default function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  )
}
