import styles from './DucksNft.module.css'

const DucksNft = (props) => {
    return(
        <div className={styles['nft-container']} data-id={props.nftId}>
            <div className={styles['nft-image']} style={{backgroundImage: `url("${props.image}")`}}></div>
            <div className={styles['nft-description']}>
                <p className={styles['nft-name']}>{props.name}</p>
            </div>
        </div>
    )
}

export default DucksNft