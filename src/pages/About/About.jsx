import AboutHead from '../../components/About/AboutHead/AboutHead'
import Description from '../../components/About/Description/Description'
import ProfessionalSkill from '../../components/About/ProfessionalSkill/ProfessionalSkill'
import Skills from '../../components/About/Skills/Skills'
import './About.scss'

function About() {
  return (
    <div className='container aboutStyle'>
      <AboutHead />
      <Description />
      <Skills />
      <ProfessionalSkill />
    </div>
  )
}

export default About