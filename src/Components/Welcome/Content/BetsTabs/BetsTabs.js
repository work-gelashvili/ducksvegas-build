import Style from './BetsTabs.module.css'
import Menu from './Menu/Menu'
import Tab from './Tab/Tab';

const BetsTabs = () => {
  return (
    <div className={Style.bets}>
        <div className={Style["bets__container"]}>
            <Menu />

            <div className={Style["bets__container--out"]}>
                <div className={Style.bets__header}>
                    <div className={Style.bets__left}>
                        <div className={Style.bets__game}>
                            Game
                        </div>
                        <div className={Style.bets__title}>
                            Player
                        </div>
                    </div>
                    <div className={Style.bets__right}>
                        <div className={Style.bets__title}>
                            Time
                        </div>
                        <div className={Style.bets__title}>
                            Wager
                        </div>
                        <div className={Style.bets__title}>
                            Multiplier
                        </div>
                        <div className={Style.bets__title}>
                            Payout
                        </div>
                    </div>
                </div>

                <Tab />
            </div>
        </div>
    </div>
  );
};

export default BetsTabs;
