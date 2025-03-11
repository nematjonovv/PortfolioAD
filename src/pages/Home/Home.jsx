import Hero from '../../components/Home/Hero/Hero'
import Service from '../../components/Home/Services/Service'
import Testimonials from '../../components/Home/Testimonials/Testimonials'
import TopProjects from '../../components/Home/TopProjects/TopProjects'
import './Home.scss'

function Home() {
  return (
    <div className='container'>
      <Hero />
      <Service />
      <TopProjects />
      <Testimonials />
    </div>
  )
}

export default Home