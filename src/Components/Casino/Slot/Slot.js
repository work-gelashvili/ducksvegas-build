// import BetsTabs from '../../Welcome/Content/BetsTabs/BetsTabs'
import Style from "./Slot.module.css";
import axios from "axios";
import { useLocation } from "react-router-dom";
import Loader from "../../Ui/Loader";
import { useEffect, useState } from "react";
// import maximaze from "../../../icons/maximize.svg";
import Switcher from "../../Ui/Switcher";
import { useSelector } from "react-redux";
import LogInRequired from "../../Common/LogInRequired/LogInRequired";

const SlotPage = () => {
  const location = useLocation();
  // const [gameFullscreen, setGameFullscreen] = useState(false);
  const user = useSelector((store) => store.userData);
  const baseUrl = useSelector((state) => state.GlobalVariables.baseUrl);

  const gameTitle = new URLSearchParams(location.search).get("name");
  const gameId = new URLSearchParams(location.search).get("gameId");
  const type = new URLSearchParams(location.search).get("type");

  const [gameURL, setGameURL] = useState();
  const [gameLoaded, setgameLoaded] = useState(false);
  const [requestError, setRequestError] = useState(false);
  //   const [maximized, setMaximized] = useState(false)
  const [isDemo, setIsDemo] = useState(false);

  const getGameUrl = async (url) => {
    try {
      const response = await axios.get(url, {
        params: {
          gameId: gameId,
          currency: "USDT",
          userId: JSON.stringify(user.userId),
        },
        baseURL: baseUrl,
      });

      setGameURL(response.data.data[0].attributes["game-url"]);
      setgameLoaded(true);
    } catch {
      setRequestError(true);
      setgameLoaded(true);
    }
  };

  // const maximizeGameWindowHandler = () => {
  //   setGameFullscreen(!gameFullscreen);
  // };

  const switchOnClickHandler = () => {
    setIsDemo((prevstate) => {
      const gameUrl = prevstate
        ? "/games/launch?isDemo=false"
        : "/games/launch?isDemo=true";
      getGameUrl(gameUrl);
      return !prevstate;
    });
  };

  useEffect(() => {
    const getGameLauncher = async (url) => {
      try {
        const response = await axios.get(url, {
          params: {
            gameId: gameId,
            currency: "USDT",
            userId: JSON.stringify(user.userId),
          },
          baseURL: baseUrl,
        });

        setGameURL(response.data.data[0].attributes["game-url"]);
        setgameLoaded(true);
      } catch {
        setRequestError(true);
        setgameLoaded(true);
      }
    };

    window.scrollTo(0, 0);
    if (user.userId !== null) {
      getGameLauncher(`/games/launch?isDemo=true`);
    }
  }, [gameId, user.userId, baseUrl]);
  return (
    <div className={Style.slot}>
      <div className={Style.slot__content}>
        <p className={Style.slot__cat}>
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </p>
        <h1 className={Style.slot__title}>{gameTitle}</h1>
        <div
          className={`${Style["slot__view"]} 

            // gameFullscreen ? Style["slot__view-fullscreen"] : ""
          `}
        >
          {!gameLoaded ? (
            <div className={Style["game-loader"]}>
              <Loader />
            </div>
          ) : requestError ? (
            <div className={Style["game-loading-error"]}>
              <p>Game not loaded</p>
            </div>
          ) : (
            <iframe
              allowfullscreen
              src={gameURL}
              width="100%"
              height="100%"
              style={{ border: 0, position: "absolute" }}
              loading="lazy"
              title="Slots"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          )}
          {!user.nick  && <LogInRequired />}
        </div>
        <div className={Style.slot__btns}>
          <div className={Style["switch-demo-button"]}>
            <div onClick={switchOnClickHandler}>
              <Switcher width="32" height="20" />
            </div>
            {isDemo ? <p>Demo On</p> : <p>Demo Off</p>}
          </div>
          {/* <div className={Style["maximize-container"]}>
            <p>Full Screen</p>
            <button
              className={` ${Style["maximize-button"]} ${
                gameFullscreen ? Style["maximize-button-mini"] : ""
              } `}
              onClick={maximizeGameWindowHandler}
            >
              <img default-src="none" src={maximaze} alt="maximize" />
            </button>
          </div> */}
        </div>
        {/* <div className={Style.slot__text}>
          <h1>All you need to know about Gates of Olympus</h1>
          <p>
            Long live Zeus and his kingdom in the heavens! Enter this majestic
            world filled with ancient gods and Drachman gold of up to 5,000x
            your stake at casino slot Gates of Olympus. Let the power of the
            mighty gods direct you to the path of victory as you spin the reels
            and land winning combinations on the slot grid!
          </p>

          <p>
            Pragmatic Play's Gates of Olympus is undoubtedly a video slot game
            that you need to check out! Eager to know the details? Just continue
            scrolling! The theme of the game centres on ancient Greek
            civilization where you can see gems, the pantheon of gods and more.
            What's more is it accepts digital assets, so get your digital wallet
            ready because you can win with Gates of Olympus using
            cryptocurrency!
          </p>
        </div> */}
      </div>

      {/* <BetsTabs /> */}
    </div>
  );
};

export default SlotPage;
