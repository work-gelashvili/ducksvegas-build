import Amount from "../Amount/Amount";
import iconSOLANA from "../../../../../icons/solana.svg";
import MinimumDeposit from "../../MinimumDeposit/MinimumDeposit";
import ButtonCyan from "../../../../Ui/ButtonCyan";
import Style from "./Withdraw.module.css";
import InputDark from "../../../../Ui/InputDark";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import ErrorModal from "../../../ErrorModal/ErrorModal";
import { GlobalVariablesAction } from "../../../../../Store/GlobalVariables";
// import Blockchain from "../../Blockchain/Blockchain";
import NewAddress from "../NewAddress/NewAddress";
import withdrawFinishCover from "../../../../../icons/withdraw-cover.jpeg";

const WithdrawDetail = () => {
  const baseUrl = useSelector((state) => state.GlobalVariables.baseUrl);
  const userId = useSelector((state) => state.userData.userId);
  const [balanceParcent, setBalanceParcent] = useState('');
  const [newAddress, setNewAddress] = useState("");
  const [errorModalBalance, setErrorModalBalance] = useState(false);
  const [errorModalAmount, setErrorModalAmount] = useState(false);
  const [errorModalEmpty, setErrorModalEmpty] = useState(false);
  const [errorModalAddress, setErrorModalAddress] = useState(false);
  const [serverErrorModal, setServerErrorModal] = useState(false);
  const [minimumDeposit, setMinimumDeposit] = useState(0);
  const dispatch = useDispatch();
  const [solanaCourse, setSolanaCourse] = useState("")

  const setValueHandler = (amount, percent) => {
    const withdrowAmount = amount / percent;
    setBalanceParcent(withdrowAmount);
  };

  const balanceInSolana = useSelector(
    (state) => state.GlobalVariables.balanceInSolana
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

    useEffect(() => {
      var config = {
        method: 'get',
        url: 'https://api.nowpayments.io/v1/estimate?amount=1&currency_from=sol&currency_to=usdttrc20',
        headers: { 
          'x-api-key': 'P4GTB85-P2Y4THQ-MZ7QFFA-ECZ5074'
        }
      };
      
      axios(config)
      .then(function (response) {
        setSolanaCourse(response.data.estimated_amount)
        setMinimumDeposit(10 / response.data.estimated_amount);
      })
      .catch(function () {
        setServerErrorModal(true)
      });
      var configSol = {
        method: 'get',
        url: 'https://api.nowpayments.io/v1/estimate?amount=10&currency_from=usdttrc20&currency_to=sol',
        headers: { 
          'x-api-key': 'P4GTB85-P2Y4THQ-MZ7QFFA-ECZ5074'
        }
      };
      
      axios(configSol)
      .then(function (response) {
        setMinimumDeposit(response.data.estimated_amount)
      })
      .catch(function () {
        setServerErrorModal(true)
      });
    }, [])

  const closeModal = () => {
    setErrorModalAmount(false);
    setErrorModalBalance(false);
    setErrorModalEmpty(false);
    setErrorModalAddress(false);
    setServerErrorModal(false)
  };

  const ChangeAmountValue = (e) => {
    setBalanceParcent(e.target.value);
  };

  const newAddresValue = (e) => {
    setNewAddress(e.target.value);
  };

  const getWithdraw = async (url) => {
    try {
      const resposne = await axios.put(
        url,
        {
          address: newAddress,
          currency: "USDT",
          amount: balanceParcent,
          userId: userId,
        },
        {
          baseURL: baseUrl,
        }
      );

      if(resposne.data.error !== 0) setServerErrorModal(true)
    } catch {
      setServerErrorModal(true)
    }
  };

  const withdrawGo = (e) => {
    e.preventDefault();
    getWithdraw("/payments/wallet/withdraw");
    dispatch(GlobalVariablesAction.WithdrawFinish(true));
    dispatch(GlobalVariablesAction.WithdrawStepTwo(false));
    dispatch(GlobalVariablesAction.WithdrawStepThree(false));
  };

  const nextStep = {
    oneToTwo: () => {
      if (balanceParcent < minimumDeposit) {
        setErrorModalAmount(true);
      }else if(parseFloat(balanceParcent) > parseFloat(balanceInSolana)){
        setErrorModalAmount(true);
      } else {
        dispatch(GlobalVariablesAction.WithdrawStepOne(false));
        dispatch(GlobalVariablesAction.WithdrawStepTwo(true));
      }
    },
    TwoToThree: () => {
      if (!newAddress) {
        setErrorModalAddress(true);
      } else {
        dispatch(GlobalVariablesAction.WithdrawStepTwo(false));
        dispatch(GlobalVariablesAction.WithdrawStepThree(true));
      }
    },
  };

  const getCurrentDate = () => {
    const newDate = new Date();
    const date = newDate.getDate();
    const month = newDate.getMonth() + 1;
    const year = newDate.getFullYear();

    return `${date} ${month < 10 ? `0${month}` : `${month}`}  ${year}`;
  };

  return (
    <div className={Style["withdraw"]}>
      {/* <Method title="Withdraw method" data={data} type="deposit"/> */}
      {WithdrawStepOne && (
        <>
          <div className={Style["withdraw-amount"]}>
            <Amount title="Amount" selectCoin="SOL" setValueHandler={setValueHandler} balance={balanceInSolana}>
              <InputDark
                borderColor="#31CDC9"
                inputOnChange={ChangeAmountValue}
                htmlValue={balanceParcent}
              />
            </Amount>
            <ButtonCyan
              text="Next"
              className={Style["withdraw-btn"]}
              btnOnClick={() => nextStep.oneToTwo()}
            />
            <h1 className={Style["withdraw-course"]}>1 SOL = {solanaCourse} USDT</h1>
          </div>
          <MinimumDeposit deposit={minimumDeposit} coinName={"SOLANA"} type="withdrawal" />
        </>
      )}
      {WithdrawStepTwo && (
        <>
          <div className={Style["withdraw-address"]}>
            {/* <Blockchain data={blockchainData} erc20={erc20} trc20={trc20} /> */}
            <NewAddress newAddresValue={newAddresValue} />
            <ButtonCyan
              text="Next"
              className={Style["withdraw-btn"]}
              btnOnClick={() => nextStep.TwoToThree()}
            />
          </div>
          <div className={Style["withdraw-warning"]}>
            <span style={{width: "29px", height: "24px", borderRadius: "50%", background: "#F9DB4A", color: "black", fontSize: "16px", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold"}}>!</span>
            <p className={Style["withdraw-warning-text"]}>
              Please always check your wallet address before making your
              transactions.
            </p>
          </div>
        </>
      )}
      {WithdrawStepThree && (
        <div className={Style["confirm"]}>
          <div className={Style["confirm-head"]}>
            <figure className={Style["confirm-head-coin"]}>
              <img src={iconSOLANA} alt="icon" />
            </figure>
            <div>
              <p className={Style["confirm-head-title"]}>Wallet address</p>
              <p className={Style["confirm-head-address"]}>{newAddress}</p>
            </div>
          </div>

          <div className={Style["confirm-hr"]}></div>

          <ul className={Style["confirm-body"]}>
            <li className={Style["confirm-body-item"]}>
              <p className={Style["confirm-body-title"]}>Currency</p>
              <p className={Style["confirm-body-desc"]}>Solana</p>
            </li>
            <li className={Style["confirm-body-item"]}>
              <p className={Style["confirm-body-title"]}>Amount</p>
              <p className={Style["confirm-body-desc"]}>${balanceParcent} SOL</p>
            </li>
          </ul>
          <div className={Style["confirm-hr"]}></div>
          <ButtonCyan
            text="Confirm"
            className={Style["withdraw-btn"]}
            btnOnClick={withdrawGo}
          />
        </div>
      )}
      {WithdrawFinish && (
        <div className={`${Style["finish"]}`}>
          <div className={`${Style["finish-head"]}`}>
            <figure className={`${Style["finish-head-cover"]}`}>
              <img src={withdrawFinishCover} alt="cover" />
            </figure>
            <p className={`${Style["finish-head-progress"]}`}>
              Withdraw in progress
            </p>
            <p className={`${Style["finish-head-amount"]}`}>{balanceParcent} SOL</p>
          </div>

          <div className={`${Style["finish-list-hr"]}`}></div>

          <ul className={`${Style["finish-list"]}`}>
            <li className={`${Style["finish-list-item"]}`}>
              <p className={`${Style["finish-list-title"]}`}>Wallet Address</p>
              <p className={`${Style["finish-list-desc"]}`}>{newAddress}</p>
            </li>
            <li  className={`${Style["finish-list-item"]}`}>
              <p  className={`${Style["finish-list-title"]}`}>
                Currency
              </p>
              <p  className={`${Style["finish-list-desc"]}`}>
                Solana
              </p>
            </li>
          </ul>

          <div className={`${Style["finish-list-hr"]}`}></div>

          <ul className={`${Style["finish-list"]}`}>
            <li className={`${Style["finish-list-item"]}`}>
              <p className={`${Style["finish-list-title"]}`}>
                Transaction type
              </p>
              <p className={`${Style["finish-list-desc"]}`}>Withdraw</p>
            </li>
            <li className={`${Style["finish-list-item"]}`}>
              <p className={`${Style["finish-list-title"]}`}>Date</p>
              <p className={`${Style["finish-list-desc"]}`}>{getCurrentDate()}</p>
            </li>
          </ul>

          <div className={`${Style["finish-list-hr"]}`}></div>
        </div>
      )}

      {errorModalAmount && (
        <ErrorModal
          text={"wrong amount"}
          secondaryText={"Try again"}
          closeModalHandler={closeModal}
        />
      )}

      {errorModalBalance && (
        <ErrorModal
          text={"Wrong amount"}
          secondaryText={"Try again"}
          closeModalHandler={closeModal}
        />
      )}

      {errorModalEmpty && (
        <ErrorModal
          text={"Amount is required"}
          secondaryText={"Fill amound"}
          closeModalHandler={closeModal}
        />
      )}

      {errorModalAddress && (
        <ErrorModal
          text={"Wallet address is required"}
          secondaryText={"Fill wallet address"}
          closeModalHandler={closeModal}
        />
      )}
      {serverErrorModal && (
        <ErrorModal
          text={"Something unexpected happened"}
          secondaryText={"Try again"}
          closeModalHandler={closeModal}
        />
      )}      
    </div>
  );
};

export default WithdrawDetail;
