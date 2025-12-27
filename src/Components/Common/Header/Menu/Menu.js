import { NavLink, useLocation } from "react-router-dom";
import Style from "./Menu.module.css";

function Menu() {
  const location = useLocation();

  if (location.pathname !== "/casino/slots") {
    return (
      <ul className={Style.menu}>
        <li className={Style.menu__item}>
          <NavLink
            to="/"
            activeClassName={Style.menu__active}
            className={Style["menu__link"]}
          >
            Casino
          </NavLink>
        </li>
        <li className={`${Style["menu__item"]}  ${"disable-element"}`}>
          <NavLink
            to="/metaverse"
            activeClassName={Style.menu__active}
            className={Style["menu__link"]}
          >
            Metaverse
          </NavLink>
        </li>
      </ul>
    );
  }
}

export default Menu;
