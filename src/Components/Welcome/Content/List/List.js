import Item from './Item/Item'
import Style from './List.module.css'
import pokerIcon from './../../../../icons/menu-icon-yellow.svg'
import sportIcon from './../../../../icons/tennisBall.svg'
import layout from './../../../../icons/layersYellow.svg'
import casinoIcon from './../../../../icons/casino-icon.svg'
import { useSelector } from 'react-redux'

const List = () => {
  const baseUrl = useSelector((state) => state.GlobalVariables.baseUrl);
  const data = [
    {
      id: 1,
      cover: `${baseUrl}/static/images/casino.webp`,
      icon: casinoIcon,
      title: 'Casino',
      desc: 'Experience the immersive world of our crypto casino, full of games and challenges including in house specialty games, slots and live tables.',
      btnText: 'Go to Casino',
      // btnLink: '/casino'
      btnLink: '/casino/slots'
    },
    {
      id: 2,
      cover: `${baseUrl}/static/images/sports.webp`,
      icon: sportIcon,
      title: 'Sports Book',
      desc: "Join in with your favourite sporting events by entering the DucksVegas Crypto Bookies. Bet on over 80 sports and experience the thrill of the game.",
      btnText: 'Coming Soon',
      btnLink: '/casino',
      disable: true,
    },
    {
      id: 3,
      cover: `${baseUrl}/static/images/poker.webp`,
      icon: pokerIcon,
      title: 'Poker',
      desc: 'Sit down at a table at DucksVegas Crypto Poker. 100s of cash tables and tournaments. Bluff your way to victory or play the odds, the night’s just getting started.',
      btnText: 'Coming Soon',
      btnLink: '/casino',
      disable: true,
    },
    {
      id: 4,
      cover: `${baseUrl}/static/images/NFTs.webp`,
      icon: layout,
      title: 'NFT',
      desc: 'Trade NFTs on our very own DucksVegas marketplace.',
      btnText: 'Coming Soon',
      btnLink: '/casino',
      disable: true,
    }
  ]

  return (
    <div className={Style.list}>
      {data.map( (item) => {
        return (
          <Item 
            key={item.id} 
            title={item.title}
            cover={item.cover}
            icon={item.icon}
            desc={item.desc}
            btnText={item.btnText}
            btnLink={item.btnLink}
            disable={item.disable}
          />
        )
      })}
    </div>
  );
};

export default List;
