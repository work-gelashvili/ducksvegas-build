import Style from "./Body.module.css";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const Body = (props) => {
  const [withPadding, setWithPadding] = useState();
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/auth" || location.pathname === "/register") {
      setWithPadding(false);
    } else {
      setWithPadding(true);
    }
  }, [location]);
  return (
    <div className={withPadding ? Style.body : Style["body-without-padding"]}>
      <div className="container">
        <div
          className={
            props.withoutFlex ? Style.body__content : Style.body__content__flex
          }
        >
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default Body;
