import { Link } from 'react-router-dom'
import Style from './SectionTitle.module.css'

const SectionTitle = ({ title, viewAllUrl, gamePage, text }) => {
  return (
    <div className={Style['head-content']}>
      <h3 className={Style['title']}>{title}</h3>
      {gamePage && <Link to={viewAllUrl}>{text ? text : 'View All'}</Link>}
    </div>
  )
}

export default SectionTitle
