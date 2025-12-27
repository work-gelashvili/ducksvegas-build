import Body from '../Body/Body'
import styles from './PageNotFound.module.css'

const PageNotFound = () => {
    return (
        <Body>
            <div className={styles['message-container']}>
                <p>Page Not Found</p>
            </div>
        </Body>
    )
}

export default PageNotFound