import styles from './CompletedNested.module.css'

const CompletedNested = () => {
    const completed = "75";
    return(
        <div className={styles['nest-completed-container']}>
            <div className={styles['progress-empty-line']}>
                <div style={{width: `${completed}%`}} className={styles['progress-line']}></div>
            </div>

            <p style={{marginLeft: `${completed}%`}} className={styles['nested-info-in-percents']}>{completed}% Nested</p>
        </div>
    )
}

export default CompletedNested