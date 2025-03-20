import Filter from '../../components/Portfolio/Filter/Filter'
import Projects from '../../components/Portfolio/Projects/Projects'
import './Portfolio.scss'
function Portfolio() {
  return (
    <div className='container'>
      <Filter />
      <Projects />
    </div>
  )
}

export default Portfolio