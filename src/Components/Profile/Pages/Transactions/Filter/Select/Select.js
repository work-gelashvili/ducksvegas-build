import { useState } from "react";
import Style from "./Select.module.css";
import activeIcon from "../../../../../../icons/arroprofile.svg";

const Select = () => {
  const [allActive, setAllActive] = useState(false);
  const [depositActive, setDepositActive] = useState(false);
  const [Withdraw, setWithdrawActive] = useState(false);

  const data = [
    {
      id: 125533334,
      title: "All",
      change: () => setAllActive(!allActive),
      icon: activeIcon,
    },
    {
      id: 4788543,
      title: "Deposit",
      change: () => setDepositActive(!depositActive),
    },
    {
      id: 5743404,
      title: "Withdraw",
      change: () => setWithdrawActive(!Withdraw),
    },
  ]
  return (
    <div className={Style["select"]}>
      {data.map((item) => {
        return (
          <li className={Style["select-item"]} onClick={item.change} key={item.id}>
            {item.title}
            {item.icon  && <img src={item.icon} alt="icon" />}
          </li>
        );
      })}
    </div>
  );
};

export default Select;
