import Body from "../../Common/Body/Body";
import CasinoHead from "../CasinoHead/CasinoHead";
import styles from "./Slots.module.css";
import Games from "../Games/Games";
import { useEffect, useState } from "react";
import SectionTitle from "../../Common/SectionTitle/SectionTitle";
import Loader from "./Loader/Loader";
import ErrorModal from "../../Modals/ErrorModal/ErrorModal";
import Search from "../../Common/Header/Search/Search";
import { isMobile } from "react-device-detect";

const Slots = () => {
  const [gamesLoaded, setGamesLoaded] = useState(false);
  const [games, setGames] = useState([]);
  const [serverError, setServerError] = useState(false);
  // const [gamesNotFound, setGamesNotFound] = useState(false)
  const [loadMore, setLoadMore] = useState(false);
  const [gamesIndex, setGamesIndex] = useState(0)

  const gamesList = localStorage.getItem("Slots");
  const initialValue = JSON.parse(gamesList);
  const storedGames = JSON.parse(initialValue.value);

  const allSlotGames = storedGames.filter((item) => item.categories.includes('slots'));

  useEffect(() => {
    const showGames = allSlotGames.filter((game, k) => k < 20);
    console.log(allSlotGames)
    setGames(showGames);
    setGamesIndex((prevState) => prevState + 1)
    setGamesLoaded(true)
  }, []);

  const loadMoreGamesHandler = () => {
    const showMoreGames = allSlotGames.filter((game, k) => k >= gamesIndex * 20 && k < (gamesIndex + 1) * 20);
    setGames((prevState) => prevState.concat(showMoreGames));
    setGamesIndex((prevState) => prevState + 1)
  };

  return (
    <Body withoutFlex={true}>
      <CasinoHead/>
      {isMobile && <Search className={styles["slots-search"]}/>}
      <SectionTitle title="Slots" gamePage={false} />
      {!gamesLoaded ? (
        <Loader />
      ) : (
        <div className={styles["slots-list"]}>
          <Games title="Slots" type='Casino games' data={games} viewAllUrl="/" gamePage={true}/>
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

export default Slots;
