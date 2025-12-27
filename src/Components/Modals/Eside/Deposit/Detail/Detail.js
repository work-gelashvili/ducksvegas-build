import Style from "./Detail.module.css";
import copyIcon from "../../../../../icons/copy.svg";
import axios from "axios";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import QRCodeCanvas from "qrcode.react";
import MinimumDeposit from "../../MinimumDeposit/MinimumDeposit";
import Loader from "../../../../Ui/Loader";
import Blockchain from "../../Blockchain/Blockchain";
import ErrorModal from "../../../ErrorModal/ErrorModal";

const Detail = () => {
  const baseUrl = useSelector((state) => state.GlobalVariables.baseUrl);
  const selectedCurrencies = useSelector(
    (state) => state.GlobalVariables.currency
  );
  const [address, setAddress] = useState("");
  const [loader, setLoader] = useState(true);
  const user = useSelector((state) => state.userData);
  const [erc20, setErc20] = useState(true);
  const [trc20, setTrc20] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState(
    selectedCurrencies === "Solana" ? "sol" : "usdttrc20"
  );
  const [solanaCourse, setSolanaCourse] = useState("");
  const [serverError, setServerError] = useState(false);

  useEffect(() => {
    var config = {
      method: "get",
      url: "https://api.nowpayments.io/v1/estimate?amount=1&currency_from=sol&currency_to=usdttrc20",
      headers: {
        "x-api-key": "P4GTB85-P2Y4THQ-MZ7QFFA-ECZ5074",
      },
    };

    axios(config)
    .then(function (response) {
      if(response.data.error === 403) window.location.href = '/';
      setSolanaCourse(response.data.estimated_amount)
    })
    .catch(function (error) {

      console.log(error);
    });
  }, [])

  const blockchainData = [
    {
      id: 53946,
      title: "Tron (TRC20)",
      active: () => {
        setSelectedCurrency("usdttrc20");
        setErc20(false);
        setTrc20(true);
      },
      disabled: false,
    },
    {
      id: 2153,
      title: "Ethereum (ERC20)",
      active: () => {
        setSelectedCurrency("usdterc20");
        setErc20(true);
        setTrc20(false);
      },
      disabled: true,
    },
  ];

  useEffect(() => {
    const createWalletAddress = async (url) => {
      setLoader(true);
      try {
        const response = await axios.get(`${url}?userId=${user.userId}&currency=${selectedCurrency}`, {
          baseURL: baseUrl,
          withCredentials: true,
        });
        if(response.data.error === 403) window.location.href = 'http://localhost:3000';
        setAddress(response.data.data.address);
        setLoader(false);
      } catch (err) {
        setServerError(true);
      }
    };
    createWalletAddress("/payments/wallet/address/create");
  }, [baseUrl, user.userId, selectedCurrency]);

  return (
    <>
      <div className={Style["detail"]}>
        {selectedCurrencies !== "Solana" && (
          <Blockchain data={blockchainData} erc20={erc20} trc20={trc20} />
        )}

        <div className={Style["detail-body"]}>
          <figure className={Style["detail-body-qr"]}>
            {loader ? (
              <Loader />
            ) : (
              <QRCodeCanvas id="qrCode" value={address} level={"H"} />
            )}
          </figure>
          <div className={Style["detail-body-footer"]}>
            <div className={Style["detail-body-text"]}>
              <p className={Style["detail-body-title"]}>Address</p>
              <p className={Style["detail-body-desc"]}>
                {loader ? <Loader /> : address}
              </p>
            </div>
            <button
              className={Style["detail-body-copy"]}
              onClick={() => {
                navigator.clipboard.writeText(address);
              }}
            >
              <img src={copyIcon} alt="icon" />
            </button>
          </div>

          <h1 className={Style["detail-body-footer-text"]}>
            1 SOL = {solanaCourse} USDT
          </h1>
        </div>
      </div>
      <MinimumDeposit deposit={"10"} coinName={"USDT"} type="deposit" />
      {serverError && (
        <ErrorModal
          text="Server Error"
          closeModalHandler={() => setServerError(false)}
        />
      )}
    </>
  );
};

export default Detail;
