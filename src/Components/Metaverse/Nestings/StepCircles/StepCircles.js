import styles from './StepCircles.module.css'

const StepCircles = () => {
    return (
        <div className={styles['step-circles-container']}>
            <div className={styles['dotted-line']}></div>
            <div className={styles['step']}>
                <div className={styles['step-number']}>
                    <p>1</p>
                </div>
                <p className={styles['step-description']}>Connect your wallet</p>
            </div>
            <div className={styles['step']}>
                <div className={styles['step-number']}>
                    <p>2</p>
                </div>
                <p className={styles['step-description']}>Click on the "Init nesting account"</p>
            </div>
            <div className={styles['step']}>
                <div className={styles['step-number']}>
                    <p>3</p>
                </div>
                <p className={styles['step-description']}>Select the ducks that you want to be nested.</p>
            </div>
            <div className={styles['step']}>
                <div className={styles['step-number']}>
                    <p>4</p>
                </div>
                <p className={styles['step-description']}>Click on "Nest"</p>
            </div>
        </div>
    )
}

export default StepCircles