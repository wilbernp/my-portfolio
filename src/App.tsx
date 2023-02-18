import About from './sections/About/About'
import { Banner } from './sections/Banner'
import { Layout } from './sections/Layout'
import Projects from './Projects/Projects'
import Skills from './Skills/Skills'
import { Contact } from './sections/Contact'




export default function App() {
  return (
    <Layout>
      <Banner/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
    </Layout>
  )
}
