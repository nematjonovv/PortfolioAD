import './AboutHead.scss'
import profileImg from '../../../../public/images/DAVRON.jpg'
import FormContact from '../../FormContact/FormContact'
import { useState } from 'react'
import { Link } from 'lucide-react'
function AboutHead() {
    const [showForm, setShowForm] = useState(false)
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
            <Link to={"/contact"} className='profile_contact'>Contact</Link>
        </div>
    </div>
  )
}

export default AboutHead