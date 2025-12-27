import { useState } from 'react'
import styles from './Ui.module.css'

const Switcher = ({width, height}) => {

    const [enabled, setEnabled] = useState(false);
    const switcherOnClickHandler = () => {
        setEnabled(!enabled)
    }

    return(
        <div className={styles['switch-container']} onClick={switcherOnClickHandler}>
            <div style={{width: `${width}px`, height: `${height}px`, borderRadius: `${height}px`}} className={ !enabled ? styles['switcher-background'] : styles['switcher-background-enabled']}>
                <div style={{width: `${height - 2}px`, height: `${height - 2}px`}} className={ !enabled ? styles['switcher-circle'] : styles['switcher-circle-enabled'] }></div>
            </div>
        </div>
    )
}

export default Switcher