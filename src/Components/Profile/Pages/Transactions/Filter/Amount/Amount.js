import InputDark from "../../../../../Ui/InputDark";
import Style from "./Amount.module.css";

const Amount = () => {

  return (
    <div className={Style["amount"]}>
      <p className={Style["amount-title"]}>From</p>
      <InputDark borderColor="#31CDC9" withBtn="USDT" buttonText="USDT"/>
      <p className={Style["amount-title"]}>To</p>
      <InputDark />
      
    </div>
  );
};

export default Amount;
