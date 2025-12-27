import Style from "./Method.module.css";
import depositArrow from "../../../../../icons/deposit-arrow.svg";
import { GlobalVariablesAction } from "../../../../../Store/GlobalVariables";
import { useDispatch } from "react-redux";

const Method = ({ title, data, type }) => {
  const dispatch = useDispatch()

  const openDetail = {
    deposit: (currency) =>{
      dispatch(GlobalVariablesAction.AsideProfileDetail(true));
      dispatch(GlobalVariablesAction.AsideProfileDeposit(false));
      dispatch(GlobalVariablesAction.AsideProfileWithdraw(false));
      dispatch(GlobalVariablesAction.changeCurrency(currency));
    },
    withdraw:() =>{
      dispatch(GlobalVariablesAction.AsideProfileDetail(false));
      dispatch(GlobalVariablesAction.AsideProfileDeposit(false));
      dispatch(GlobalVariablesAction.AsideProfileWithdraw(false));
      dispatch(GlobalVariablesAction.AsideProfileWithdrawDetail(true));
      dispatch(GlobalVariablesAction.WithdrawStepOne(true));
    }
  }



  return (
    <div className={Style["method"]}>
      <p className={Style["method-title"]}>{title}</p>
      {data.map((item) => {
        return type === "deposit" ? (
          <label className={Style["item"]} key={item.id} onClick={() => openDetail.deposit(item.title)}>
            <figure className={Style["item-logo"]}>
              <img src={item.logo} alt="icon" />
            </figure>
            <div className={Style["item-content"]}>
              <h2 className={Style["item-title"]}>{item.title}</h2>
              <p className={Style["item-addres"]}>{item.change}</p>
            </div>
            <img src={depositArrow} alt="icon" />
          </label>
        ) : (
          <label className={Style["item"]} key={item.id} onClick={() => openDetail.withdraw()}>
            <figure className={Style["item-logo"]}>
              <img src={item.logo} alt="icon" />
            </figure>
            <div className={Style["item-content"]}>
              <h2 className={Style["item-title"]}>{item.title}</h2>
              <p className={Style["item-addres"]}>{item.change}</p>
            </div>
            <img src={depositArrow} alt="icon" />
          </label>
        );
      })}
    </div>
  );
};

export default Method;
