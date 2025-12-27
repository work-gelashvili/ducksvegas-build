import Style from './Item.module.css'

const Item = ({game, player, time, wager, multiplier, payout, icon, multiplierActive, payoutActive}) => {
  return (
    <div className={Style.item}>
        <div className={Style.item__left}>
            <div className={Style.item__game}>
                {game}
            </div>
            <div className={Style.item__title}>
                <img default-src='none' src={icon} alt="cover" />
                <p>{player}</p>
            </div>
        </div>
        <div className={Style.item__right}>
            <div className={Style.item__title}>
                {time}
            </div>
            <div className={Style.item__title}>
                {wager}
            </div>
            <div className={Style.item__title}>
                {multiplierActive ? <p className={Style.item__color}>{multiplier}</p> : <p>{multiplier}</p>}
            </div>
            <div className={Style.item__title}>
                {payoutActive ? <p className={Style.item__color}>{payout}</p> : <p>{payout}</p>}
            </div>
        </div>
    </div>
  );
};

export default Item;
