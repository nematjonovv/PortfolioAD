import './AboutHead.scss'
import profileImg from '../../../../public/images/DAVRON.jpg'
import { Link } from 'react-router-dom'
function AboutHead() {
  return (
    <div className='aboutHead'>
        <div className="aboutProfile">
            <div className="profile_img">
                <img src={profileImg} alt="" />
                <span className='profile_name'>
                    <h1>Davron A</h1>
                    <p>Graphic Designer</p>
                </span>
            </div>
            <Link to={"/contact"} className='profile_contact'><button>Contact</button></Link>
        </div>
    </div>
  )
}

export default AboutHead