import { Menu } from "@headlessui/react";
import { Link, useLocation } from "react-router-dom";
import Style from "./Login.module.css";
import { useDispatch, useSelector } from "react-redux";
import { GlobalVariablesAction } from "../../../../Store/GlobalVariables";
import ProfileArrowIcon from "./../../../../icons/arroprofile.svg";
import { useState } from "react";
import DropDown from "../DropDown/DropDown";
import Coins from "../../../Welcome/Sidebar/Coins/Coins";
import { isBrowser, isMobile } from "react-device-detect";
import guestIcon from "../../../../icons/guest-profile.svg";
import { useEffect } from "react";
import avatarIcons from "../../../../icons/duck.svg";

function Login() {
  const [isDropDown, setIsDropDown] = useState(false);
  const [outsideClick, setOutsideClick] = useState(false);
  // const baseUrl = useSelector((state) => state.GlobalVariables.baseUrl);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userData);
  const location = useLocation();
  const closeOnOutsideClickHandler = () => {
    setOutsideClick(!outsideClick);
    outsideClick && setIsDropDown(!isDropDown);
    dispatch(GlobalVariablesAction.pageChanger(location.pathname));
  };

  const dropDownOpen = (e) => {
    e.preventDefault();
    setIsDropDown((prevState) => !prevState);
  };

  const registerOnClickHandler = () => {
    dispatch(GlobalVariablesAction.pageChanger("auth"));
  };

  const loginOnClickHandler = () => {
    dispatch(GlobalVariablesAction.pageChanger("register"));
  };

  const DesktopContent = (item) => {
    if (isBrowser) {
      return item;
    }
  };

  useEffect(() => {
    if (location.search === "?dropdown=active") {
      setIsDropDown((prevState) => !prevState);
    }
  }, [location.search]);

  return (
    <ul className={Style.login}>
      {user.loggedIn ? (
        <>
          {DesktopContent(<Coins />)}
          <li className={Style.login__item}>
            <Menu as="div" className={Style.login__item}>
              <Menu.Button className={Style.login__profile}>
                <figure className={Style.login__avatar}>
                  <img
                    default-src="none"
                    // src={`${baseUrl}/static/images/profile/icon.webp`}
                    src={avatarIcons}
                    alt="Profile Avatar"
                  />
                </figure>
                {DesktopContent(
                  <>
                    <span className={Style.login__text}>{user.nick}</span>
                    <img
                      default-src="none"
                      src={ProfileArrowIcon}
                      alt="Profile Arrow icon"
                      className={Style.login__arrow}
                    />
                  </>
                )}
              </Menu.Button>
              <Menu.Items className='ragacaaaa'>
                <DropDown closeDropdown={closeOnOutsideClickHandler} />
                
              </Menu.Items>
            </Menu>
          </li>
        </>
      ) : (
        <>
          {DesktopContent(
            <>
              <li className={Style.login__item}>
                <Link
                  to="/register"
                  className={Style.login__reg}
                  onClick={registerOnClickHandler}
                >
                  Register
                </Link>
              </li>
              <li className={Style.login__item}>
                <Link
                  to="/auth"
                  className={Style.login__sign}
                  onClick={loginOnClickHandler}
                >
                  Sign in
                </Link>
              </li>
            </>
          )}
          {isMobile && (
            <>
              <li className={Style.login__item}>
                <Link
                  to="/auth"
                  // className={Style.login__sign}
                  onClick={loginOnClickHandler}
                  className={Style.login__profile}
                >
                  <figure className={Style.login__avatar}>
                    <img
                      default-src="none"
                      src={guestIcon}
                      atr="icon"
                      alt="Profile Avatar"
                    />
                  </figure>
                </Link>
              </li>
            </>
          )}
        </>
      )}
    </ul>
  );
}

export default Login;
