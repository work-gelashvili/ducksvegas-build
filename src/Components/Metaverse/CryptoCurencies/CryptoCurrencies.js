import styles from "./CryptoCurrencies.module.css";
import bitcoin from "../../../icons/bitcoin.svg";
import ethereum from "../../../icons/Ethereum.svg"
import solana from "../../../icons/solana.svg"
import apecoin from "../../../icons/apecoin.svg"
import dogecoin from "../../../icons/dogecoin.svg"
import CryptoCurrencyItem from "./CryptoCurrencyItem/CryptoCurrencyItem";

const CryptoCurrencies = () => {
  const currencies = [
    {
      icon: bitcoin,
      coinChangePercents: "-0.95%",
      coinName: "Bitcoin",
      coinChange: "21,117.24",
      volume: "24h Volume: 96.7M",
      coinId: "a1",
      rise: false,
    },
    {
      icon: ethereum,
      coinChangePercents: "+0.95%",
      coinName: "Ethereum",
      coinChange: "18,117.24",
      volume: "24h Volume: 96.7M",
      coinId: "a2",
      rise: true,
    },
    {
      icon: solana,
      coinChangePercents: "+0.95%",
      coinName: "Solana",
      coinChange: "21,117.24",
      volume: "24h Volume: 96.7M",
      coinId: "a3",
      rise: true,
    },
    {
      icon: apecoin,
      coinChangePercents: "-0.05%",
      coinName: "ApeCoin",
      coinChange: "21,117.24",
      volume: "24h Volume: 96.7M",
      coinId: "a4",
      rise: false,
    },
    {
      icon: dogecoin,
      coinChangePercents: "+0.16%",
      coinName: "DogeCoin",
      coinChange: "15,117.24",
      volume: "24h Volume: 96.7M",
      coinId: "a5",
      rise: true,
    },
  ];

  return (
    <>
      <h3 className={styles['coin-currencies-title']}>Crypto Curencies</h3>
      <div className={styles["coin-currencies-list"]}>
        {currencies.map((currency) => {
          return (
            <CryptoCurrencyItem
              changePercent={currency.coinChangePercents}
              coinImage={currency.icon}
              coinName={currency.coinName}
              coinChange={currency.coinChange}
              key={currency.coinId}
              volume={currency.volume}
              rise={currency.rise}
            />
          );
        })}
      </div>
    </>
  );
};

export default CryptoCurrencies;
