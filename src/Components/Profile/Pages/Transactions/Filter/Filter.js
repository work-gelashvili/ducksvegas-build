import { useState } from "react";
import Style from "./Filter.module.css";
import arrowIcon from '../../../../../icons/arrow-down-yellow.svg'

const Filter = ({ title, children }) => {
  const [active, setActive] = useState(false);

  return (
    <div className={Style["filter"]}>
      <div className={Style["filter-head"]} onClick={() => setActive(!active)}>
        {title}
        <img src={arrowIcon} alt="icon" />
      </div>
      {active && 
        <div className={Style["filter-body"]}>
            {children}
        </div>
      }
    </div>
  );
};

export default Filter;
