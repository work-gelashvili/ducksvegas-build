import Style from "./Eside.module.css";
import closeIcon from "../../../icons/eside-close.svg";
import Menu from "./Menu/Menu";
import WithdrawTab from "./Withdraw/Withdraw";
import DepositTab from "./Deposit/Deposti";
import Detail from "./Deposit/Detail/Detail";
import { useDispatch } from "react-redux";
import { GlobalVariablesAction } from "../../../Store/GlobalVariables";
import { useSelector } from "react-redux";
import Back from "../../Common/Back/Back";
import { useState } from "react";
import Coins from "../../Welcome/Sidebar/Coins/Coins";
import WithdrawDetail from "./Withdraw/Detail/Withdraw";

const Eside = () => {
  const [animation, setAnimation] = useState(true);
  const dispatch = useDispatch();
  const aSideModuleWithdraw = useSelector(
    (state) => state.GlobalVariables.AsideWithdraw
  );
  const aSideModuleDeposit = useSelector(
    (state) => state.GlobalVariables.AsideDeposit
  );
  const aSideModuleDetail = useSelector(
    (state) => state.GlobalVariables.AsideDetail
  );

  const aSideModuleDetailWidthdraw = useSelector(
    (state) => state.GlobalVariables.aSideModuleDetailWidthdraw
  );

  const WithdrawStepOne = useSelector(
    (state) => state.GlobalVariables.WithdrawStepOne
  );

  const WithdrawStepTwo = useSelector(
    (state) => state.GlobalVariables.WithdrawStepTwo
  );

  const WithdrawStepThree = useSelector(
    (state) => state.GlobalVariables.WithdrawStepThree
  );

  const WithdrawFinish = useSelector(
    (state) => state.GlobalVariables.WithdrawFinish
  );

  const closeAside = () => {
    setAnimation(false);
    setTimeout(() => {
      dispatch(GlobalVariablesAction.AsideProfile());
      dispatch(GlobalVariablesAction.AsideProfileWithdraw(false));
      dispatch(GlobalVariablesAction.AsideProfileDeposit(false));
      dispatch(GlobalVariablesAction.AsideProfileDetail(false));
      dispatch(GlobalVariablesAction.AsideProfileWithdrawDetail(false));
      dispatch(GlobalVariablesAction.WithdrawFinish(false));
    }, 300);
  };

  const backDetailDepositDeposit = () => {
    dispatch(GlobalVariablesAction.AsideProfileWithdraw(false));
    dispatch(GlobalVariablesAction.AsideProfileDeposit(true));
    dispatch(GlobalVariablesAction.AsideProfileDetail(false));
    dispatch(GlobalVariablesAction.AsideProfileWithdrawDetail(false));
  };

  const backDetailDepositWithdraw = () => {
    dispatch(GlobalVariablesAction.AsideProfileWithdraw(true));
    dispatch(GlobalVariablesAction.AsideProfileDeposit(false));
    dispatch(GlobalVariablesAction.AsideProfileDetail(false));
    dispatch(GlobalVariablesAction.AsideProfileWithdrawDetail(false));
  };

  const backTwoStep = () => {
    dispatch(GlobalVariablesAction.WithdrawStepOne(true));
    dispatch(GlobalVariablesAction.WithdrawStepTwo(false));
  };

  const backThreeStep = () => {
    dispatch(GlobalVariablesAction.WithdrawStepTwo(true));
    dispatch(GlobalVariablesAction.WithdrawStepThree(false));
  };

  return (
    <div className={`${Style["eside"]}`}>
      <div className={`${Style["eside-bg"]}`} onClick={() => closeAside()}></div>
      <div
        className={`${Style["eside-content"]} ${
          animation ? Style["eside-active"] : ""
        } `}
      >
        {!aSideModuleDetail && !aSideModuleDetailWidthdraw && (
          <button className={Style["eside-close"]} onClick={() => closeAside()}>
            <img src={closeIcon} alt="icon" />
            Close
          </button>
        )}

        {/* დეპოზიტიდან გამოდის უკან */}
        {aSideModuleDetail && (
          <div onClick={() => backDetailDepositDeposit()}>
            <Back noLink={true} />
          </div>
        )}

        {/* გადარიცხვიდან გამოდის უკან */}
        {aSideModuleDetailWidthdraw &&
          !WithdrawStepTwo &&
          !WithdrawStepThree &&
          !WithdrawFinish && (
            <div
              className={`${Style["eside-back"]}`}
              onClick={() => backDetailDepositWithdraw()}
            >
              <Back noLink={true} />
              <p className={`${Style["eside-back-count"]}`}>1 of 3</p>
            </div>
          )}

        {/* გადარიცხვის მეორე სტეპიდან უკან */}
        {WithdrawStepTwo && (
          <div
            className={`${Style["eside-back"]}`}
            onClick={() => backTwoStep()}
          >
            <Back noLink={true} />
            <p className={`${Style["eside-back-count"]}`}>2 of 3</p>
          </div>
        )}

        {/* გადარიცხვის მესამე სტეპიდან უკან */}
        {WithdrawStepThree && (
          <div
            className={`${Style["eside-back"]}`}
            onClick={() => backThreeStep()}
          >
            <Back noLink={true} />
            <p className={`${Style["eside-back-count"]}`}>3 of 3</p>
          </div>
        )}

        {/* finish*/}
        {WithdrawFinish && (
          <button className={Style["eside-close"]} onClick={() => closeAside()}>
            <img src={closeIcon} alt="icon" />
            Close
          </button>
        )}

        {WithdrawStepOne && aSideModuleDetailWidthdraw && (
          <h1 className={`${Style["eside-step-title"]}`}>Withdraw Solana</h1>
        )}
        {WithdrawStepTwo && aSideModuleDetailWidthdraw && (
          <h1 className={`${Style["eside-step-title"]}`}>Wallet Details</h1>
        )}
        {WithdrawStepThree && aSideModuleDetailWidthdraw && (
          <h1 className={`${Style["eside-step-title"]}`}>Preview Withdraw</h1>
        )}
        {!WithdrawStepThree && !WithdrawFinish && (
          <Coins
            titleColor="#8997A1"
            coinColor="#fff"
            noDeposit={true}
            convertToSolana={true}
            coin="solana"
          />
        )}
        {!aSideModuleDetail && !aSideModuleDetailWidthdraw && <Menu />}
        {aSideModuleDeposit && <DepositTab />}
        {aSideModuleDetail && <Detail />}
        {aSideModuleWithdraw && <WithdrawTab />}
        {aSideModuleDetailWidthdraw && <WithdrawDetail />}
        {/* {aSideModuleDetail && <MinimumDeposit deposit={"20"} coinName={"USDT"} />} */}
      </div>
    </div>
  );
};

export default Eside;
