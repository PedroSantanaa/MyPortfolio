import Aboutme from '@/components/Aboutme'
import Contact from '@/components/Contact'
import Intro from '@/components/Intro'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'

export default function Home() {
 return(
  <div>
    <Intro/>
    <Projects titleIcon='#'/>
    <Skills/>
    <Aboutme titleIcon='#'/>
    <Contact titleIcon='#'/>
  </div>

 )   
}
