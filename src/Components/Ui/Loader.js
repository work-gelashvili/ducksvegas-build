import styles from './Ui.module.css'

const Loader = ({width, height}) => {
    return <div className={styles['loader-container']}  style={{
        width: `${width}px`,
        height: `${height}px`,
      }}
    >
        <span className={styles['loader']}></span>
    </div>
}

export default Loader