import './AboutHead.scss'
import profileImg from '../../../../public/images/DAVRON.jpg'
import FormContact from '../../FormContact/FormContact'
import { useState } from 'react'
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
            <button className='profile_contact' onClick={()=> setShowForm(true)}>Contact</button>
        </div>
        <div className={showForm ? 'about_contact active' : 'about_contact'}>
            <FormContact />
            <button className='goback' onClick={()=> setShowForm(false)}>Go to back</button>
        </div>
    </div>
  )
}

export default AboutHead