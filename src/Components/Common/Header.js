import Login from "./Header/Login/Login";
import Logo from "./Header/Logo/Logo";
import Menu from "./Header/Menu/Menu";
import Search from "./Header/Search/Search";
import Style from "./Header.module.css";
import BurgerMenuIcon from "../../icons/burger-menu.svg";
import { isBrowser, isMobile } from "react-device-detect";
import { useDispatch, useSelector } from "react-redux";
import { GlobalVariablesAction } from "../../Store/GlobalVariables";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import ErrorModal from "../Modals/ErrorModal/ErrorModal";


function Header() {
  const location = useLocation();
  const [gamesLoaded, setGamesLoaded] = useState(false)
  const dispatch = useDispatch();
  const baseUrl = useSelector((state) => state.GlobalVariables.baseUrl);
  const [serverError, setServerError] = useState(false);

  useEffect(() => {
    const loadGames = async () => {
      try {
        const response = await axios("/games/list", {
          params: {
            limit: 1000,
          },
          baseURL: baseUrl,
        });

        const result = response.data.data.map((item) => {
          const id = item.id;
          const title = item.attributes.title;
          const value = item.attributes.title;
          const image = item.attributes.image;
          const categories = item.attributes.categories.length === 1 ? item.attributes.categories[0] : item.attributes.categories;

          return {
            id: id,
            display: title,
            image: image,
            categories: categories,
            value: value.toLowerCase(),
            provider: item.attributes['provider'],
          };
        });

        function setWithExpiry(key, value, ttl) {
          const now = new Date()

          const item = {
            value: value,
            expiry: now.getTime() + ttl,
          }
          localStorage.setItem(key, JSON.stringify(item))
        }

        if (response.data.data.length > 0) {
          setWithExpiry("Slots", JSON.stringify(result), 86400000)
          setGamesLoaded(true)
        }
      } catch (error) {
        setServerError(true);
      }
    };

    if (typeof localStorage.Slots === 'undefined') {
      loadGames();
    }else{
      setGamesLoaded(true)
    }
  }, [baseUrl]);

  const DesktopContent = () => {
    if (isBrowser) {
      return (
        <>
          <Menu />
          {gamesLoaded &&  <Search />}
        </>
      );
    }
  };
  const MobileContent = () => {
    if (location.pathname !== "/casino/slots") {
      if (isMobile) {
        return (
          <div className={Style['header-mobile-bar']}>
            <div className="container">
              <div className={Style.header__comp}>
                <Menu />
                {gamesLoaded &&  <Search />}
              </div>
            </div>
          </div>
        );
      }
    }
  };

  const MobileMenuBtn = () => {
    if (isMobile) {
      return (
        <>
          <button className={Style["header-mobile-btn"]} onClick={() => {
            dispatch(GlobalVariablesAction.openMobileMenu(true));
          }}>
            <img src={BurgerMenuIcon} alt="icon" />
          </button>
        </>
      );
    }
  };

  return (
    <>
      <header className={Style.header}>
        <div className="container">
          <div className={Style.header__comp}>
            {MobileMenuBtn()}
            <Logo />
            {DesktopContent()}
            <Login />
          </div>
        </div>
      </header>
      {MobileContent()}
      {serverError && (
          <ErrorModal
            text="Server Error"
            closeModalHandler={() => setServerError(false)}
          />
        )}
    </>
  );
}

export default Header;
