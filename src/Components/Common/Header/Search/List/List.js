import { Link } from "react-router-dom";
import Style from "./List.module.css";

const List = ({ data, setShowSearchDropDown }) => {
  return (
    <div className={Style.list}>
      <h2 className={Style.list__title}>Games</h2>
      <div className={Style.list__in}>
        {data.length > 0 ? (
          data.map((item) => {
            return (
              <Link
                to={`/casino/slot?gameId=${item.id}&name=${item.display}&type=${item.categories}`}
                className={Style.list__item}
                key={item.id}
                onClick={() => setShowSearchDropDown(false)}
              >
                <figure className={Style.list__cover}>
                  <img default-src="none" src={item.image} alt="cover" />
                </figure>
                <div>
                  <h1 className={Style.list__name}>{item.display}</h1>
                  <p className={Style.list__cat}>{item.categories}</p>
                </div>
              </Link>
            );
          })
        ) : (
          <p className={Style["list__not"]}>Not Result</p>
        )}
      </div>
      <div className={Style.list__menu}>
        <h2 className={Style.list__title}>Other</h2>
        <Link
          to="/slot"
          className={Style.list__link}
          onClick={() => setShowSearchDropDown(false)}
        >
          Slot
        </Link>
        <Link
          to="/"
          className={Style.list__link}
          onClick={() => setShowSearchDropDown(false)}
        >
          Favorite Slot Games
        </Link>
        <Link
          to="/"
          className={Style.list__link}
          onClick={() => setShowSearchDropDown(false)}
        >
          Live Slots
        </Link>
      </div>
    </div>
  );
};

export default List;
