import './Skills.scss'
import { useTranslation } from 'react-i18next';

function Skills() {
  const [t] = useTranslation("global")
  return (
    <div className='skills'>
        <h1>{t("about.skills.title")}</h1>
        <div className='which_skills'>
          {
            t("about.skills.skill", {returnObjects:true}).map((skill,index) => (
              <p>{skill}</p>
            ))
          }
        </div>
    </div>
  )
}

export default Skills