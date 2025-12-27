import { useReducer } from 'react'
import Body from '../../Common/Body/Body'
import CasinoHead from '../CasinoHead/CasinoHead'
// import zodiaco from '../../../icons/images/zodiaco-wheel.png'
// import irish from '../../../icons/images/irish-treasure.png'
// import egipt from '../../../icons/images/egipt.png'
// import burningHot from '../../../icons/images/burning-hot.png'
// import ecuador from '../../../icons/images/ecuador-gold.png'
// import bonanza from '../../../icons/images/swet-bonanza.png'
import axios from 'axios'
import { useEffect } from 'react'
import Loader from '../../Ui/Loader'
import SectionTitle from '../../Common/SectionTitle/SectionTitle'
import Games from '../Games/Games'
import {useSelector} from 'react-redux'
import Style from './Lobby.module.css'

const initGames = {
  slotsLoader: false,
  rouletteLoader: false,
  blackjackLoader: false,
  showLoader: false,
  liveCasinoLoader: false,
  challangesLoader: false,
  slots: [],
  roulette: [],
  blackjack: [],
  show: [],
  liveCasino: [],
  challanges: [],
}

const reducer = (state, action) => {

  switch (action.type) {
    case 'slots loaded':
      return { ...state, slotsLoader: true }
    case 'roulette loaded':
      return { ...state, rouletteLoader: true }
    case 'blackjack loaded':
      return { ...state, blackjackLoader: true }
    case 'show loaded':
      return { ...state, showLoader: true }
    case 'live casino loaded':
      return { ...state, liveCasinoLoader: true }
    case 'challanges loaded':
      return { ...state, challangesLoader: true }
    case 'slots':
      return { ...state, slots: action.slots }
    case 'roulette':
      return { ...state, roulette: action.roulette }
    case 'blackjack':
      return { ...state, blackjack: action.blackjack }
    case 'show':
      return { ...state, show: action.show }
    case 'live casino':
      return { ...state, liveCasino: action.live }
    case 'challanges':
      return { ...state, challanges: action.challanges }
    default:
      return { ...state }
  }
}

const Lobby = () => {

  const baseUrl = useSelector((state) => {
    return state.GlobalVariables.baseUrl
  });
  
  const [gamesList, dispatchGames] = useReducer(reducer, initGames)

  useEffect(() => {
    const loadGames = async (url, action, section, type, page) => {
      try {
        const response = await axios(url, {
          params: {
            limit: '4',
          },
          headers: {
            next: "undefined"
          },
          baseURL: baseUrl
        })
  
        if (response.data.data.length > 0) {
          dispatchGames({ type: action, [section]: response.data.data })
          dispatchGames({ type: type })
          // setGamesLoaded(true)
          // setGames(games.concat(response.data.data))
        }
      } catch (error) {
        console.log(error)
      }
    };

    loadGames(
      '/games/list',
      'slots',
      'slots',
      'slots loaded',
      1,
    )
    // loadGames(
    //   'https://api-demo.evenbetpoker.com/api/web/v2/casino/games',
    //   'roulette',
    //   'roulette',
    //   'roulette loaded',
    //   2,
    // )
    // loadGames(
    //   'https://api-demo.evenbetpoker.com/api/web/v2/casino/games',
    //   'blackjack',
    //   'blackjack',
    //   'blackjack loaded',
    //   3,
    // )
    // loadGames(
    //   'https://api-demo.evenbetpoker.com/api/web/v2/casino/games',
    //   'show',
    //   'show',
    //   'show loaded',
    //   4,
    // )
    // loadGames(
    //   'https://api-demo.evenbetpoker.com/api/web/v2/casino/games',
    //   'live casino',
    //   'live',
    //   'live casino loaded',
    //   5,
    // )
    // loadGames(
    //   'https://api-demo.evenbetpoker.com/api/web/v2/casino/games',
    //   'challanges',
    //   'challanges',
    //   'challanges loaded',
    //   6,
    // )
  }, [baseUrl])

  // const recentCasinoWins = [
  //   {
  //     Image: zodiaco,
  //     name: 'ProtonAtom',
  //     price: '$1,935',
  //     id: '12121',
  //   },
  //   {
  //     Image: irish,
  //     name: 'DatKillA4',
  //     price: '$2,935',
  //     id: '12212',
  //   },
  //   {
  //     Image: egipt,
  //     name: 'SlottyPotty',
  //     price: '$935',
  //     id: '12213',
  //   },
  //   {
  //     Image: burningHot,
  //     name: 'Hidden',
  //     price: '$335',
  //     id: '12214',
  //   },
  //   {
  //     Image: ecuador,
  //     name: 'Herr Bonzen',
  //     price: '$135',
  //     id: '12215',
  //   },
  //   {
  //     Image: bonanza,
  //     name: 'Herr Bonzen',
  //     price: '$135',
  //     id: '125',
  //   },
  // ]

  return (
    <Body withoutFlex={true}>
      <CasinoHead />
      {/* <LobbyItemsList data={recentCasinoWins} title="Live Casino Wins" /> */}
      <SectionTitle title="Slots" viewAllUrl="/casino/slots"  gamePage={true}/>
      {!gamesList.slotsLoader ? (
        <Loader />
      ) : (
        <div className={Style['lobby-slot-list']}>
          <Games title="Slots" data={gamesList.slots} viewAllUrl="/" />
        </div>
      )}
      {/* <SectionTitle title="Roulette" viewAllUrl="/casino/roulette"  gamePage={true}/>
      {!gamesList.rouletteLoader ? (
        <Loader />
      ) : (
        <Games title="Roulette" data={gamesList.roulette} viewAllUrl="/" />
      )}
      <SectionTitle title="Blackjack" viewAllUrl="/casino/blackjack"  gamePage={true}/>
      {!gamesList.blackjackLoader ? (
        <Loader />
      ) : (
        <Games title="Black Jack" data={gamesList.blackjack} viewAllUrl="/" />
      )}
      <SectionTitle title="Show" viewAllUrl="/casino/show"  gamePage={true}/>
      {!gamesList.showLoader ? (
        <Loader />
      ) : (
        <Games title="Show" data={gamesList.show} viewAllUrl="/" />
      )}
      <SectionTitle title="Live Casino" viewAllUrl="/casino/live-casino"  gamePage={true}/>
      {!gamesList.liveCasinoLoader ? (
        <Loader />
      ) : (
        <Games title="Live Casino" data={gamesList.liveCasino} viewAllUrl="/" />
      )}
      <SectionTitle title="Challanges" viewAllUrl="/casino/challanges" gamePage={true}/>
      {!gamesList.challangesLoader ? (
        <Loader />
      ) : (
        <Games title="Challanges" data={gamesList.challanges} viewAllUrl="/" />
      )} */}
    </Body>
  )
}

export default Lobby
