import Style from "./Search.module.css";
import SearchIcon from "./../../../../icons/search-icon.svg";
import { useState } from "react";
import List from "./List/List";

function Search({ className }) {
  const [showSearchDropDown, setShowSearchDropDown] = useState(false);
  const [data, setData] = useState([]);
  const games = localStorage.getItem("Slots");
  const initialValue = JSON.parse(games);
  const storedGames = JSON.parse(initialValue.value);

  let typingTimer;

  const handler = {
    keyUp(e) {
      const searchText = e.target.value.toLowerCase();
      clearTimeout(typingTimer);
      typingTimer = setTimeout(() => {
        const filterGames = (mybase, input) => {
          return mybase.filter((item) => item.value.includes(input) || item.provider.includes(input) || item.categories.includes(input));
        };

        if(searchText.length > 0) {
          setData(
            () => filterGames(storedGames, searchText)
          );
          setShowSearchDropDown(true);
        } else {
          setShowSearchDropDown(false);
        }
      }, 1000);
    },
    keyDown() {
      clearTimeout(typingTimer);
    }
  };

  return (
    <div className={`${Style["search__out"]}`}>
      <div className={`${Style["search"]} ${className}`}>
        <input
          onKeyDown={handler.keyDown}
          onKeyUp={handler.keyUp}
          type="text"
          placeholder="Search"
          className={Style.search__input}
        />
        <button className={Style.search__btn}>
          <img default-src="none" src={SearchIcon} alt="search" />
        </button>
      </div>
      {showSearchDropDown && (
        <List data={data} setShowSearchDropDown={setShowSearchDropDown} />
      )}
    </div>
  );
}

export default Search;
