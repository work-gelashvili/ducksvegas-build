import Item from './Item/Item';
import Style from './Tab.module.css'
import Icon1 from './../../../../../icons/table-player-icon.svg'
import Icon2 from './../../../../../icons/table-player-icon2.svg'

const Tab = () => {
    const data = [
        {
          id: 1,
          game: 'Dragon Tiger',
          player: "MissySub",
          icon: Icon1,
          time: '3s',
          wager: '$300.00',
          multiplier: '2.16x',
          multiplierActive: false,
          payout: '$0.00',
          payoutActive: false,
        },
        {
          id: 2,
          game: 'Dragon Tiger',
          player: "MissySub",
          icon: Icon2,
          time: '3s',
          wager: '$300.00',
          multiplier: '2.16x',
          multiplierActive: true,
          payout: '$0.00',
          payoutActive: false,
        },
        {
          id: 3,
          game: 'Dragon Tiger',
          player: "MissySub",
          icon: Icon1,
          time: '3s',
          wager: '$300.00',
          multiplier: '2.16x',
          multiplierActive: false,
          payout: '$0.00',
          payoutActive: true,
        },
    ]

    return (
        <div className={Style.tab}>
            {data.map( (item) => {
                return (
                    <Item 
                        key={item.id}
                        game={item.game}
                        player={item.player}
                        icon={item.icon}
                        time={item.time}
                        wager={item.wager}
                        multiplier={item.multiplier}
                        payout={item.payout}
                        multiplierActive={item.multiplierActive}
                        payoutActive={item.payoutActive}
                    />
                )
            })}
        </div>
    );
};

export default Tab;
