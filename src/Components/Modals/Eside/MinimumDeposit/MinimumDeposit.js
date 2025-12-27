import Loader from "../../../Ui/Loader";
import Style from "./MinimumDeposit.module.css";

const MinimumDeposit = ({ deposit, coinName, type }) => {
  return (
    <div className={Style["minimum"]}>
      {!deposit ? <Loader width={10} height={10}/> : `Minimum ${type} amount: ${deposit} ${coinName} `}
      </div>
  );
};

export default MinimumDeposit;
