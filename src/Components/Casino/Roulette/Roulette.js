import Body from "../../Common/Body/Body";
import CasinoHead from "../CasinoHead/CasinoHead";
import styles from "./Roulette.module.css";
import Games from "../Games/Games";
import axios from "axios";
import Loader from "../../Ui/Loader";
import { useEffect, useState } from "react";
import SectionTitle from "../../Common/SectionTitle/SectionTitle";
import { useSelector } from "react-redux";
import ErrorModal from "../../Modals/ErrorModal/ErrorModal";

const Roulette = () => {
  const [gamesLoaded, setGamesLoaded] = useState(false);
  const baseUrl = useSelector((state) => state.GlobalVariables.baseUrl);
  const [games, setGames] = useState([]);
  // const [gamesNotFound, setGamesNotFound] = useState(false)
  const [serverError, setServerError] = useState(false);
  const [loadMore, setLoadMore] = useState(false);
  const [nextLink, setNextLink] = useState("");

  const loadGames = async (url, loadMoreClick) => {
    try {
      const response = await axios(url, {
        params: {
          limit: 20,
        },
        baseURL: baseUrl,
      });

      if (response.data.data.length > 0) {
        setGamesLoaded(true);
        setGames(games.concat(response.data.data));
        setNextLink(response.data.links.next.href);
        if (loadMoreClick) {
          setLoadMore(false);
        }
      }
    } catch (error) {
      setServerError(true);
    }
  };

  useEffect(() => {
    loadGames("/games/list", false);
  }, []);

  const loadMoreGamesHandler = () => {
    setLoadMore(true);
    loadGames(nextLink, true);
  };

  return (
    <Body withoutFlex={true}>
      <CasinoHead />
      <SectionTitle title="Roulette" gamePage={false} />
      {!gamesLoaded ? (
        <Loader />
      ) : (
        <div className={styles["roulette-list"]}>
          <Games title="Roulette" data={games} viewAllUrl="/" gamePage={true} />
        </div>
      )}
      {loadMore && <Loader />}
      <div className={styles["load-more-button-block"]}>
        <button
          className={styles["load-more-button"]}
          onClick={loadMoreGamesHandler}
        >
          Load More
        </button>
      </div>
      {serverError && (
        <ErrorModal
          text="Server Error"
          closeModalHandler={() => setServerError(false)}
        />
      )}
    </Body>
  );
};

export default Roulette;
