import Style from "./Item.module.css";
import usdtIcon from '../../../../../icons/usdt.svg'
import solanaIcon from '../../../../../icons/solana.svg'

const Item = () => {
  const data = [
    {
      id: 646434,
      type: "Withdraw",
      amount: "$300",
      addres: "0x345***224",
      method: "USDT",
      convert: "/ Solana",
      date: "02 October 22 16:30",
      icon: usdtIcon,
    },
    {
      id: 67832,
      type: "Deposit",
      amount: "$300",
      addres: "0x34555***223",
      method: "USDT",
      date: "02 October 22 16:30",
      icon: usdtIcon,
    },
    {
      id: 789753,
      type: "Withdraw",
      amount: "$300",
      addres: "0x34325***226",
      method: "Solana",
      convert: "/ USDT",
      date: "02 October 22 16:30",
      icon: solanaIcon,
    },
    {
      id: 9032365,
      type: "Withdraw",
      amount: "$300",
      addres: "0x34325***226",
      method: "Solana",
      convert: "/ USDT",
      date: "02 October 22 16:30",
      icon: solanaIcon,
    },
  ];
  return (
    <div className={Style["items"]}>
      {data.map((item) => {
        return (
          <div className={Style["items-list"]} key={item.id}>
            <div className={Style["items-list-item"]}>
            {item.type === 'Withdraw' && <p className={Style["items-list-withdraw"]}>{item.type}</p>}
            {item.type === 'Deposit' && <p className={Style["items-list-deposit"]}>{item.type}</p>}
            </div>
            <div className={Style["items-list-item"]}>
              <p className={Style["items-list-white"]}>{item.amount}</p>
            </div>
            <div className={Style["items-list-item"]}>
              <p className={Style["items-list-white"]}>{item.addres}</p>
            </div>
            <div className={Style["items-list-item"]}>
            <img src={item.icon} alt="icon" className={Style["items-list-icon"]}/>
              <p className={Style["items-list-white"]}>{item.method}</p>
              <p className={Style["items-list-silver"]}>{item.convert}</p>
            </div>
            <div className={Style["items-list-item"]}>
              <p className={Style["items-list-white"]}>{item.date}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Item;
