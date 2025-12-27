import {Link} from 'react-router-dom'
import BtnCyanNoBg from '../../../Ui/BtnCyanNoBg'
import styles from './GoToItem.module.css'

const GoToItem = (props) => {
    return (
        <div className={styles['game-box-container-out']}>
            <div className={styles['game-box-container']}>
                <div className={styles['game-image']} style={{backgroundImage: `url('${props.image}')`}}></div>
                <div className={styles['game-description']}>
                    <div className={styles['game-title-block']}>
                        <img default-src='none' src={props.icon} className={styles['game-icon']} alt="game icon" />
                        <p className={styles['game-title']}>{props.title}</p>
                    </div>
                    <p className={styles['game-description-text']}>{props.description}</p>
                    <Link to={props.btnLink}>
                        <BtnCyanNoBg 
                            text={props.buttonText}
                            btnHeight="46"
                            fontsize="16"
                            paddings="32"
                        />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default GoToItem