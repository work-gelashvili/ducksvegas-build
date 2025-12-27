import { Link, useLocation } from "react-router-dom";
import Style from "./Menu.module.css";
import Skeleton from "../../../Skeleton/Skeleton";
import { useState } from "react";
import { useEffect } from "react";

const Menu = (props) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1300);
  }, []);

  const location = useLocation();

  return (
    <>
      {!props.withValue ? (
        <div className={Style.menu}>
          <h1 className={Style.menu__title}>{props.title}</h1>
          <ul className={Style.menu__list}>
            {props.menuData.map((item) => {
              return (
                <li
                  className={`${Style["menu__item"]} ${
                    item.disable ? "disable-element" : ""
                  }  `}
                  key={item.id}
                >
                  <Link
                    data-name={item.dataName}
                    onMouseEnter={props.elementOnMouseEnter}
                    onMouseLeave={props.elementOnMouseLeave}
                    to={item.link}
                    className={`${Style["menu__link"]} ${
                      location.pathname === item.link &&
                      Style["menu__link--active"]
                    }`}
                  >
                    <div className={Style["menu__link--icon"]}>
                      {!isLoading ? (
                        <img
                          default-src="none"
                          src={item.icon}
                          alt="Menu icon"
                          style={{ maxWidth: "20px" }}
                        />
                      ) : (
                        <Skeleton />
                      )}
                    </div>
                    {item.text}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
        <div className={Style.menu}>
          <h1 className={Style.menu__title}>{props.title}</h1>
          <ul className={Style.menu__list}>
            {props.menuData.map((item) => {
              return (
                <li
                  className={`${Style["menu__item"]} ${
                    item.disable ? "disable-element" : ""
                  }  `}
                  key={item.id}
                >
                  <Link
                    to={item.link}
                    className={`${Style["menu__link"]} ${
                      location.pathname === item.link &&
                      Style["menu__link--active"]
                    }`}
                    data-name={item.dataName}
                    onMouseEnter={props.elementOnMouseEnter}
                    onMouseLeave={props.elementOnMouseLeave}
                  >
                    <div className={Style["menu__link--icon"]}>
                      <img
                        default-src="none"
                        src={item.icon}
                        className={Style.menu__icon}
                        alt="menu icon"
                        style={{ maxWidth: "20px" }}
                      />
                    </div>
                    {!props.withValueAndTime ? (
                      <>
                        {item.text}
                        <span className={Style.text__cyen}>{item.value}</span>
                      </>
                    ) : (
                      <>
                        <span>{item.value} </span>
                        {item.text}
                        <span className={Style.text__cyen}>{item.time}</span>
                      </>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </>
  );
};

export default Menu;
