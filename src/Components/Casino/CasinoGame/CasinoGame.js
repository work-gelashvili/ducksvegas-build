import { Link } from 'react-router-dom';
import styles from './CasinoGame.module.css';

const CasinoGame = (props) => {

    return(
        <Link to={props.url} className={styles['casino-game-block']} data-id={props.gameId} data-type={props.gameType} data-category={props.gameCategory}>
            <div className={styles['game-image']} style={{backgroundImage: `url('${props.image}')`}}></div>
            <div className={styles['game-description']}>
                <p className={styles['game-name']}>{props.name}</p>
                <p className={styles['game-type']}>{props.type}</p>
            </div>
        </Link>
    )
}

export default CasinoGame