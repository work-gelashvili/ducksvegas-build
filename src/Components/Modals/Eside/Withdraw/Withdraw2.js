import Amount from "./Amount/Amount";
import Method from "./Method/Method";
import iconUSDT from "../../../../icons/usdt.svg";
import iconSOLANA from "../../../../icons/solana.svg";
import MinimumDeposit from "../MinimumDeposit/MinimumDeposit";
import ButtonCyan from "../../../Ui/ButtonCyan";
import Style from "./Withdraw.module.css";
import InputDark from "../../../Ui/InputDark";
import { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import ErrorModal from "../../ErrorModal/ErrorModal";
import SuccessModal from "../../SuccessModal/SuccessModal";

const WithdrawTab = () => {
  const baseUrl = useSelector((state) => state.GlobalVariables.baseUrl);
  const userId = useSelector((state) => state.userData.userId);
  const [newAddress, setNewAddress] = useState("");
  const [amonutValue, setAmountValue] = useState("");
  const [errorModal, setErrorModal] = useState(false);
  const [successModal, setSuccessModal] = useState(false);
  const minimumDeposit = 20;

  const data = [
    {
      id: 59837985,
      title: "USDT",
      wallet: "0x212***1dd1",
      logo: iconUSDT,
    },
    // {
    //   id: 1057334,
    //   title: "Solana",
    //   wallet: "0x263***gg2g12",
    //   logo: iconSOLANA,
    // },
  ];

  const closeModal = () => {
    setErrorModal(false);
    setSuccessModal(false);
  };

  const ChangeAmountValue = (e) => {
    setAmountValue(e.target.value);
  };

  const newAddresValue = (e) => {
    setNewAddress(e.target.value);
  };

  const getWithdraw = async (url) => {
    try {
      const response = await axios.put(
        url,
        {
          address: newAddress,
          currency: "USDT",
          amount: amonutValue,
          userId: userId,
        },
        {
          baseURL: baseUrl,
        }
      );
      // setAddress(response.data.data.address);
      if(response.data.error === 403) window.location.href = '/';
      {
        successModal && (
          <SuccessModal
            text={"test"}
            secondaryText={"test 2"}
            closeModalHandler={closeModal}
          />
        );
      }
    } catch {
      errorModal && (
        <ErrorModal
          text={"test"}
          secondaryText={"test 2"}
          closeModalHandler={closeModal}
        />
      );
    }
  };

  const submitAmount = (e) => {
    e.preventDefault();

    getWithdraw("/payments/wallet/withdraw");
    if (amonutValue && amonutValue >= minimumDeposit) {
    }
  };

  return (
    <>
      <Method title="Deposit method" data={data} type="deposit" />
    </>
  );
};

export default WithdrawTab;
