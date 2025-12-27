import { NavLink } from "react-router-dom";
import Back from "../../Common/Back/Back";
import styles from "./CasinoHead.module.css";
import Filter from "../../Profile/Pages/Transactions/Filter/Filter";
import checkIcon from "../../../icons/select-arrow.svg";

const CasinoHead = ({ filterCategories }) => {
  const clickHandlres = (value) => {
    console.log(value);
    // setFilterCategorie(value);
    // console.log(item.attributes.provider);
  };

  // const filterCategories = (e) => {
  //   console.log(e.target.getAttribute('value'))
  //   setGames( () => filterGames(storedGames, e.target.getAttribute('value') ) )
  // };

  const dataProvider = [
    {
      id: 54934,
      name: "Playpearls",
      value: "playpearls",
      image: checkIcon,
    },
    {
      id: 5486875,
      name: "WAC",
      value: "wac",
      image: checkIcon,
    },
    {
      id: 603873,
      name: "Booongo Wac",
      value: "booongo_wac",
      image: checkIcon,
    },
  ];

  return (
    <>
      <div className={styles["casino-head-container"]}>
        <Back />
        <div className={` ${styles["casino-nav-block"]}`}>
          <div className={` ${styles["casino-nav-block-list"]}`}>
            <div className={`disable-element`}>
              <NavLink
                activeClassName={styles["active-casino-tab"]}
                className={`${styles["casino-tab"]} `}
                to="/casino/lobby"
              >
                Lobby
              </NavLink>
            </div>
            <div>
              <div
                className={`${styles["casino-tab"]} ${styles["active-casino-tab"]}`}
                value={"slots"}
                onClick={(e) => filterCategories(e)}
              >
                Slots
              </div>
            </div>

            <div className={`disable-element`}>
              <div className={`${styles["casino-tab"]}`} value={"slots"}>
                Shows
              </div>
            </div>

            <div className={`disable-element`}>
              <div className={`${styles["casino-tab"]}`} value={'roulette'}>Roulette</div>
            </div>

            <div className={`disable-element`}>
              <div className={`${styles["casino-tab"]}`} value={'live-casino'}>Live Casino</div>
            </div>

            <div className={`disable-element`}>
              <div className={`${styles["casino-tab"]}`} value={'card'}>Blackjack</div>
            </div>

            <div className={`disable-element`}>
              <div className={`${styles["casino-tab"]}`} value={'challanges'}>Challanges</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles["provaiders"]}>
        <div className={styles["provaiders-list"]}>
          {dataProvider.map((item) => {
            return (
              <div className={styles["provaiders-item-out"]} key={item.id}>
                <div
                  className={styles["provaiders-item"]}
                  onClick={() => clickHandlres(item.value)}
                  value={item.value}
                >
                  <figure className={styles["provaiders-item-cover"]}>
                    <img src={item.image} alt="logo" />
                  </figure>
                  <p className={styles["provaiders-item-name"]}>{item.name}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default CasinoHead;
