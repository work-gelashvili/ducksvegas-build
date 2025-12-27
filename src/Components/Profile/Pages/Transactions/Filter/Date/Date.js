import InputDark from "../../../../../Ui/InputDark";
import Style from "./Date.module.css";

const Date = () => {

  return (
    <div className={Style["date"]}>
      <p className={Style["date-title"]}>From</p>
      <InputDark inputType="date"/>
      <p className={Style["date-title"]}>To</p>
      <InputDark inputType="date"/>
    </div>
  );
};

export default Date;
