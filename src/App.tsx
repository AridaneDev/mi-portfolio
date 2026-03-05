import { Header } from './components/layout/Header'
import { Hero } from './components/layout/Hero'
import { Projects } from './components/layout/Projects'
import { About } from './components/layout/About'
import { CTA } from './components/layout/CTA'
import { Footer } from './components/layout/Footer'

function App() {
  return (
    <div className="overflow-x-hidden">
      <Header/>
      <Hero/>
      <Projects/>
      <About />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
