import BtnCyanNoBg from '../../../Ui/BtnCyanNoBg';
import styles from './NestingHead.module.css';

const NestingHead = () => {
    return(
        <div className={styles['nesting-head-content']}>
            <h2 className={styles['title']}>Ducks Vegas Nesting</h2>
            <BtnCyanNoBg btnWidth="207" btnHeight="36" text="Connect Wallet" />
        </div>
    )
}

export default NestingHead