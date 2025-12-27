import styles from './InitNesting.module.css'

const InitNesting = () => {
  return (
    <div className={styles['init-nesting-container']}>
      <button className={styles['init-nesting-button']}>
        Init Nesting Account
      </button>
    </div>
  )
}

export default InitNesting
