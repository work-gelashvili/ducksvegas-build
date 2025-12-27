import { useState } from "react";
import { Link } from "react-router-dom";
import Style from "./Menu.module.css";
import arrowIcon from "../../../../../icons/arroprofile.svg";

const Menu = () => {
  const [activeMenu, setActiveMenu] = useState(false);
  return (
    <>
      <button
        className={Style["menu-btn"]}
        onClick={() => setActiveMenu(!activeMenu)}
      >
        All bets
        <img src={arrowIcon} alt="icon" />
      </button>
      <ul className={` ${Style.menu} ${activeMenu && Style["active"]}`}>
        <li className={Style.menu__item}>
          <Link to="/" className={Style.menu__link}>
            All Bets
          </Link>
        </li>
        <li className={Style.menu__item}>
          <Link to="/" className={Style.menu__link}>
            Hight Rollers
          </Link>
        </li>
        <li className={Style.menu__item}>
          <Link to="/" className={Style.menu__link}>
            Lucky Bets
          </Link>
        </li>
        <li className={Style.menu__item}>
          <Link to="/" className={Style.menu__link}>
            Trades
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Menu;
