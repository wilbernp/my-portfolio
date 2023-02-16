
import About from './components/About/About'
import { Banner } from './components/Banner'
import { Layout } from './components/Layout'
import Skills from './Skills/Skills'




export default function App() {
  return (
    <Layout>
      <Banner/>
      <About/>
      <Skills/>
    </Layout>
  )
}
