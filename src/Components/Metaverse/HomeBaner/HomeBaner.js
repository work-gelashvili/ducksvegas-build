import styles from './HomeBaner.module.css'

const HomeBaner = (props) => {
    return (
        <div className={styles['homebaner-box']} style={{backgroundImage: `url('${props.image}')`}}>
            <div>
                {props.text}
            </div>
        </div>
    )
}

export default HomeBaner