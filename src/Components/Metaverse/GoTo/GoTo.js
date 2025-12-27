import GoToItem from './GoToItem/GoToItem'
import styles from './GoTo.module.css'
import play from '../../../icons/play.svg'
import wallet from '../../../icons/wallet-yellow.svg'
import marketplace from '../../../icons/marketplace.svg'
import percent from '../../../icons/percent.svg'
import { useSelector } from 'react-redux'

const GoTo = () => {


    const baseUrl = useSelector((state) => state.GlobalVariables.baseUrl);

    const GamesList = [
        {
            image: `${baseUrl}/static/images/casino.webp`,
            title: "Play Metaverse",
            description: "The exhilarating casino experience. From exclusive house games to slots, more than 1000 games.",
            btnLink: "/casino",
            buttonText: "Play",
            id: "211",
            icon: play
        },
        {
            image: `${baseUrl}/static/images/NFTs.webp`,
            title: "Nesting",
            description: "Supporting over 80 sports from launch, you are able to bet on the World's most popular sporting events.",
            btnLink: "/sports",
            buttonText: "Go to Nesting",
            id: "212",
            icon: wallet
        },
        {
            image: `${baseUrl}/static/images/crypto-future.webp`,
            title: "Marketplace",
            description: "Trade with up to 1000x leverage and make profit by predicting whether the price will go UP or DOWN.",
            btnLink: "/crypto/future",
            buttonText: "Go to Marketplace",
            id: "213",
            icon: marketplace
        },
        {
            image: `${baseUrl}/static/images/NFTs.webp`,
            title: "Rental Systems",
            description: "Buy, sell & win NFTs. Create your own NFT Lootboxes to start earning passive income.",
            btnLink: "/nft",
            buttonText: "Go to Rental Systems",
            id: "214",
            icon: percent
        },
    ]

    return (
        <div className={styles['games-container']}>
            
            {GamesList.map((game) => {
                return (
                    <GoToItem 
                        image={game.image}
                        title={game.title}
                        description={game.description}
                        btnLink={game.btnLink}
                        buttonText={game.buttonText}
                        key={game.id}
                        icon={game.icon}
                    />
                )
            })}
        </div>
    )
}

export default GoTo