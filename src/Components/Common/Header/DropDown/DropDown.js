import { Link, useLocation } from "react-router-dom";
import Cookies from "universal-cookie";
import { useDispatch } from "react-redux";
import Style from "./DropDown.module.css";
import MenuIcon from "./../../../../icons/profile-menu-icon.svg";
import deposits from "./../../../../icons/pig.svg";
import withdrawals from "./../../../../icons/withdrawals.svg";
import settings from "./../../../../icons/settings.svg";
import logout from "./../../../../icons/logout.svg";
import profileBlue from "./../../../../icons/blue-icons/profile-menu-icon-blue.svg";
import depositsBlue from "./../../../../icons/blue-icons/pig-blue.svg";
import withdrawalsBlue from "./../../../../icons/blue-icons/withdrawals-blue.svg";
import settingsBlue from "./../../../../icons/blue-icons/settings-blue.svg";
import { usersAction } from "../../../../Store/userData";
import { useReducer } from "react";
// import { useDetectClickOutside } from "react-detect-click-outside";
import { GlobalVariablesAction } from "../../../../Store/GlobalVariables";
import backIcon from "./../../../../icons/back.svg";
import { useState } from "react";
import { useEffect } from "react";
import Skeleton from "../../../Skeleton/Skeleton";
import { Menu } from "@headlessui/react";


const initHovers = {
  profile: false,
  rewards: false,
  balances: false,
  referrals: false,
  deposits: false,
  withdrawals: false,
  settings: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "profile-hover":
      return { ...state, profile: !state.profile };
    case "rewards-hover":
      return { ...state, rewards: !state.rewards };
    case "balances-hover":
      return { ...state, balances: !state.balances };
    case "referrals-hover":
      return { ...state, referrals: !state.referrals };
    case "deposits-hover":
      return { ...state, deposits: !state.deposits };
    case "withdrawal-hover":
      return { ...state, withdrawals: !state.withdrawals };
    case "settings-hover":
      return { ...state, settings: !state.settings };
    default:
      return { ...state };
  }
};

const DropDown = () => {
  const cookies = new Cookies();
  const dispatch = useDispatch();
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  const [hovers, dispatchHover] = useReducer(reducer, initHovers);

  const logOut = () => {
    document.cookie = `sessionID=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
    if (typeof cookies.get("sessionID") === "undefined") {
      dispatch(usersAction.changeIsLoggedIn(false));
      window.location.href = "/";
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1300);
  }, []);

  const data = [
    {
      id: 1,
      name: "Profile",
      url: "/profile/edit",
      icon: hovers.profile ? profileBlue : MenuIcon,
      dataName: "profile-hover",
    },
    // {
    //   id: 2,
    //   name: 'Rewards',
    //   url: '/profile/rewards',
    //   icon: hovers.rewards ? rewardsBlue : rewardsIcon,
    //   dataName: "rewards-hover"
    // },
    // {
    //   id: 3,
    //   name: 'Balances',
    //   url: '/profile/balance',
    //   icon: hovers.balances ? balancesBlue : balances,
    //   dataName: "balances-hover"
    // },
    // {
    //   id: 4,
    //   name: 'Referrals',
    //   url: '/profile/refferals',
    //   icon: hovers.referrals ? referralsBlue : referrals,
    //   dataName: "referrals-hover"
    // },
    {
      id: 5,
      name: "Deposits",
      url: "/profile/deposits",
      icon: hovers.deposits ? depositsBlue : deposits,
      dataName: "deposits-hover",
      eSideOpen: (e) => {
        e.preventDefault();
        dispatch(GlobalVariablesAction.AsideProfile());
        dispatch(GlobalVariablesAction.AsideProfileDeposit(true));
      },
    },
    {
      id: 6,
      name: "Withdrawals",
      url: "/profile/withdrawals",
      icon: hovers.withdrawals ? withdrawalsBlue : withdrawals,
      eSideOpen: (e) => {
        e.preventDefault();
        dispatch(GlobalVariablesAction.AsideProfile());
        dispatch(GlobalVariablesAction.AsideProfileWithdraw(true));
      },
      dataName: "withdrawal-hover",
    },
    {
      id: 7,
      name: "Settings",
      url: "/profile/settings",
      icon: hovers.settings ? settingsBlue : settings,
      dataName: "settings-hover",
    },
    {
      id: 8,
      name: "Log out",
      url: "",
      icon: logout,
      logout: logOut,
      dataName: "profile-hover",
    },
  ];

  const dropdownItemMouseEnter = (e) => {
    dispatchHover({ type: e.target.attributes["1"].value });
  };

  const dropdownItemMouseLeave = (e) => {
    dispatchHover({ type: e.target.attributes["1"].value });
  };

  return (
    <div className={Style.dropdown}>
      <button className={Style["dropdown-back"]}>
        <figure className={Style["dropdown-back-icon"]}>
          <img src={backIcon} alt="icon" />
        </figure>
        <span className={Style["dropdown-back-text"]}>Back</span>
      </button>
      <ul className={Style.dropdown__menu}>
        {data.map((item) => {
          return (
            <Menu.Item>
              {({ active }) => (
                <li
                  className={Style.dropdown__item}
                  key={item.id}
                >
                  <Link
                    to={item.url}
                    className={`${Style["dropdown__link"]} ${
                      location.pathname === item.url &&
                      Style["dropdown__active"]
                    } `}
                    onClick={item.logout ? item.logout : item.eSideOpen}
                    data-name={item.dataName}
                    onMouseEnter={dropdownItemMouseEnter}
                    onMouseLeave={dropdownItemMouseLeave}
                  >
                    {isLoading ? (
                      <Skeleton
                        loaderStyles={{
                          width: "18px",
                          height: "18px",
                          marginRight: "12px",
                        }}
                      />
                    ) : (
                      <img
                        src={item.icon}
                        alt="icon"
                        className={Style.dropdown__icon}
                      />
                    )}
                    {item.name}
                  </Link>
                </li>
              )}
            </Menu.Item>
          );
        })}
      </ul>
    </div>
  );
};

export default DropDown;
