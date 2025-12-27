import CryptoCurrencyItem from "../../../Metaverse/CryptoCurencies/CryptoCurrencyItem/CryptoCurrencyItem"
import SectionTitle from "../../../../Components/Common/SectionTitle/SectionTitle"
import Style from './DailyBonuses.module.css'
import midleStatus from "../../../../icons/table-player-icon.svg"
import seniorStatus from "../../../../icons/status-icon.svg"
import juniorStatus from "../../../../icons/table-player-icon2.svg"

const DailyBonuses = () => {

    const currencies = [
        {
          icon: midleStatus,
          coinName: "ProtonAtom",
          coinChange: "$22,935",
          coinId: "a1",
          
        },
        {
          icon: seniorStatus,
          coinName: "Hiddent",
          coinChange: "$25,905",
          coinId: "ad1",
        },
        {
          icon: juniorStatus,
          coinName: "lolxx",
          coinChange: "$30,000",
          coinId: "gss",
        },
        {
          icon: seniorStatus,
          coinName: "joeajd8ujau",
          coinChange: "$10,030",
          coinId: "dw2",
        },
        {
          icon: midleStatus,
          coinName: "ProtonAtom",
          coinChange: "$15,000",
          coinId: "gdg3",
        },
      ];

    return (
        <>
            <SectionTitle title={'Daily Bonuses'} gamePage={'ds'} viewAllUrl={'ds'} text={'Week'}/>
            <div className={Style["dailybonuses__out"]}>
              <div className={Style["dailybonuses"]}>
                  {currencies.map((currency) => {
                  return (
                      <CryptoCurrencyItem 
                          coinImage={currency.icon}
                          coinName={currency.coinName}
                          coinChange={currency.coinChange}
                          key={currency.coinId}
                          rise={currency.rise}
                      />
                  );
                  })}
              </div>
            </div>
        </>
    )
}

export default DailyBonuses