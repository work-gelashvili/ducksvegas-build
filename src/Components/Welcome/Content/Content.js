// import CryptoCurrencies from '../../Metaverse/CryptoCurencies/CryptoCurrencies';
import Banner from './Banner/Banner';
// import BetsTabs from './BetsTabs/BetsTabs';
import Style from './Content.module.css'
// import DailyBonuses from './DailyBonuses/DailyBonuses';
import List from './List/List';
import { useSelector } from 'react-redux';

const Content = () => {

  const isLoggedIn = useSelector((state) => state.userData.loggedIn);

  return (
    <div className={Style.content}>
        {
          !isLoggedIn && <Banner />
        }
        <List/>
        {/* <BetsTabs /> */}
        {/* <DailyBonuses /> */}
        {/* <CryptoCurrencies /> */}
    </div>
  );
};

export default Content;
