import styles from './NFT.module.css'

const NFT = (props) => {
    return (
        <div className={styles['nft-item-out']}>
            <div className={styles['nft-item']}>
                <div className={styles['nft-image']} style={{backgroundImage: `url('${props.image}')`}}></div>
                <div className={styles['nft-info']}>
                    <p className={styles['nft-name']}>{props.name}</p>
                    <p className={styles['nft-price']}>{props.price}</p>
                </div>
            </div>
        </div>
    )
}

export default NFT