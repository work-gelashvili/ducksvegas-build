import { Link } from 'react-router-dom'
import ButtonCyan from '../../Ui/ButtonCyan'
import styles from './LogInRequired.module.css'

const LogInRequired = () => {
    return(
        <div className={styles['login-required-container']}>
            <p className={styles['login-required-head-text']}>Please sign in to play</p>
            <Link to="/auth">
                <ButtonCyan text="Log In" btnWidth="223" btnHeight="46" />
            </Link>
            <Link to="/register">
                <button className={styles['login-required-button-register']}>Register</button>
            </Link>
        </div>
    )
}

export default LogInRequired