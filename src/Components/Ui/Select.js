import styles from "./Ui.module.css";
import iconArrow from "../../icons/select-arrow.svg";
import { useState } from "react";

const Select = ({ data, htmlPlaceholder, htmlLabel, changeValue, disable }) => {
  const [showOption, setShowOption] = useState(false);
  const [selected, setSelected] = useState(false);

  const setActiveOption = (e) => {
    setSelected(e.target.innerText);
    setShowOption(false);
    changeValue(e.target.innerText);
  };

  return (
    <>
      <p className={styles["form-label"]}>{htmlLabel}</p>
      <div className={` ${styles["select"]} ${disable && styles["disable"]} `}>
        <div
          className={styles["select-head"]}
          onClick={() => setShowOption(!showOption)}
        >
          <p className={styles["select-head-selected"]}>
            {selected ? selected : htmlPlaceholder}
          </p>
          <img
            default-src="none"
            src={iconArrow}
            alt="icon"
            className={styles["select-head-icon"]}
          />
        </div>
        {showOption && (
          <div className={styles["select-body"]}>
            {data.data.map((item, id) => {
              return (
                <li
                  className={styles["select-body-item"]}
                  key={id}
                  onClick={setActiveOption}
                >
                  {item.name ? item.name : item}
                </li>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default Select;
