import Style from "./Coins.module.css";
import { usersAction } from "../../../../Store/userData";
import usdtLogo from "./../../../../icons/usdt.svg";
import solanaLogo from "./../../../../icons/solana.svg";
import useMoneyFormater from "../../../Auth/useMoneyFormater";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useEffect, useState } from "react";
import { GlobalVariablesAction } from "../../../../Store/GlobalVariables";
import almostEqual from "../../../../icons/almost-equal.svg";
import Skeleton from "../../../Skeleton/Skeleton";
import ErrorModal from "../../../Modals/ErrorModal/ErrorModal";

const Coins = ({ titleColor, coinColoc, noDeposit, convertToSolana, coin }) => {
  const dispatch = useDispatch();
  const baseUrl = useSelector((state) => state.GlobalVariables.baseUrl);
  const [userBalance, setUserBalance] = useState({
    balance: null,
    currency: null,
  });
  const [usdtBalance, setUsdtBalance] = useState("");
  const formatUsdtBalance = useMoneyFormater(usdtBalance);
  const formatBalance = useMoneyFormater(userBalance);
  const [loader, setLoader] = useState(true);
  const [serverError, setServerError] = useState(false);

  const user = useSelector((state) => state.userData);
  const aSideModule = useSelector((state) => state.GlobalVariables.Aside);

  const withdraw = (e) => {
    if (!noDeposit && !aSideModule) {
      dispatch(GlobalVariablesAction.AsideProfile());
      dispatch(GlobalVariablesAction.AsideProfileDeposit(true));
    } else {
      e.preventDefault();
    }
  };

  useEffect(() => {
    const balance = {
      async renew() {
        try {
          const response = await axios.get(`/users/balance`, {
            withCredentials: true,
            baseURL: baseUrl,
          });
          setUserBalance(response.data.balance);
          setUsdtBalance(response.data.balance);
          dispatch(usersAction.changeUserBalance(response.data.balance));
          setLoader(false);
          if (convertToSolana === true) {
            const config = {
              method: "get",
              url: `https://api.nowpayments.io/v1/estimate?amount=${response.data.balance}&currency_from=usdt&currency_to=sol`,
              headers: {
                "x-api-key": "P4GTB85-P2Y4THQ-MZ7QFFA-ECZ5074",
              },
            };

            axios(config)
              .then(function (response) {
                setUserBalance(response.data.estimated_amount);
                dispatch(
                  GlobalVariablesAction.changeBalanceInSolana(
                    response.data.estimated_amount
                  )
                );
              })
              .catch(function (error) {
                setServerError(true);
              });
          }
        } catch (err) {
          setServerError(true);
        }
      },
    };

    balance.renew(user.userId);
  }, [baseUrl, dispatch, user.userId, convertToSolana]);

  return (
    <>
      <div className={Style.coin} onClick={withdraw}>
        {coin === "solana" && (
          <>
            <figure className={Style.coin__icon}>
              <img default-src="none" src={usdtLogo} alt="Coin logo" />
            </figure>
            <div>
              <h1
                className={Style.coin__name}
                style={{ color: `${titleColor}` }}
              >
                USDT
              </h1>
              <div className={Style.coin__count}>
                <span style={{ color: `${coinColoc}` }}>
                  {loader ? (
                    <div className={Style.coin__loading}>
                      <Skeleton />
                    </div>
                  ) : (
                    formatUsdtBalance
                  )}
                  {!coinColoc && !titleColor && (
                    <p className={Style.coin__add}>+</p>
                  )}
                </span>
              </div>
            </div>
            <img src={almostEqual} alt="almost equal" />
          </>
        )}
        <figure className={Style.coin__icon}>
          <img
            default-src="none"
            src={coin === "solana" ? solanaLogo : usdtLogo}
            alt="Coin logo"
          />
        </figure>
        <div>
          <h1 className={Style.coin__name} style={{ color: `${titleColor}` }}>
            {convertToSolana ? "SOL" : "USDT"}
          </h1>
          <div className={Style.coin__count}>
            <span style={{ color: `${coinColoc}` }}>
              {loader ? (
                <div className={Style.coin__loading}>
                  <Skeleton />
                </div>
              ) : (
                formatBalance
              )}
              {!coinColoc && !titleColor && (
                <p className={Style.coin__add}>+</p>
              )}
            </span>
          </div>
        </div>
      </div>
      {serverError && (
        <ErrorModal
          text="Server Error"
          closeModalHandler={() => setServerError(false)}
        />
      )}
    </>
  );
};

export default Coins;
