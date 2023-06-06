import Image from 'next/image'
import Navbar from './components/navbar'
import Hero from './components/Hero'
import Skills from './components/skills'
import Projects from './components/Projects'
import Contact from './components/contact'

export default function Home() {
  return (
    <div className="costom-image">
     <Hero/>
     <Skills/>
     <Projects/>
     <Contact/>
   </div>
  )
}
