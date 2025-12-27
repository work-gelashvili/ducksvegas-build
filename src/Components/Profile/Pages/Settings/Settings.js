import ButtonCyan from "../../../Ui/ButtonCyan";
import InputDark from "../../../Ui/InputDark";
import Style from "./../../Profile.module.css";
import styleSettings from "./Settings.module.css";
import axios from "axios";
import { useSelector } from "react-redux";
import { useState } from "react";
import BtnDisabled from "../../../Ui/BtnDisabled";
// import VerificationBtn from "../../Verification/VerificationBtn";
import SectionTitle from "../../SectionTitle";
import ErrorModal from "../../../Modals/ErrorModal/ErrorModal";
import SuccessModal from "../../../Modals/SuccessModal/SuccessModal";

const passwordLabelsStyle = {
  borderBottom: "none",
  marginBottom: "24px",
  paddingBottom: "0px",
};

const Settings = () => {
  const baseURL = useSelector((store) => store.GlobalVariables.baseUrl);
  const userData = useSelector((store) => store.userData);
  const [email, setEmail] = useState("");
  const [oldPass, setOldPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [newPassRepeat, setNewPassRepeat] = useState("");
  const [passwordChangerValidate, setPasswordChangerValidate] = useState(false);
  const [serverError, setServerError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false)

  const emailApi = async () => {
    try {
      const response = await axios.put(
        `/users/${userData.userId}`,
        {
          email: email,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          baseURL: baseURL,
        }
      );
      if(response.data.error === 403) window.location.href = '/';
    } catch (err) {
      setServerError(true);
    }
  };

  const newPassApi = async () => {
    try {
      const response = await axios.put(
        "/users/password",
        {
          oldPassword: oldPass,
          newPassword: newPass,
          nick: userData.nick,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          baseURL: baseURL,
        }
      );
      if(response.data.error === 403) window.location.href = '/';
    } catch (err) {
      setServerError(true);
    }
  };

  const emailFormChange = (e) => {
    e.preventDefault();
    if (email) {
      emailApi();
      setIsSuccess(true);
    }
  };

  const passFormChange = (e) => {
    e.preventDefault();
    if (newPassRepeat === newPass) {
      newPassApi();
      setIsSuccess(true)
    }
  };

  const inputOnKeyDownHandler = (e) => {
    if (e.keyCode === 32) {
      e.preventDefault();
    }

    if (
      oldPass.length >= 7 &&
      newPass.length >= 7 &&
      newPassRepeat.length >= 7
    ) {
      setPasswordChangerValidate(true);
    } else {
      setPasswordChangerValidate(false);
    }
  };

  return (
    <div className={styleSettings["settings"]}>
      <SectionTitle title="Settings" />
      <form
        className={Style["profile__content--label"]}
        onSubmit={emailFormChange}
      >
        <>
          <InputDark
            inputType="text"
            htmlPlaceholder="Email address"
            inputOnChange={(e) => setEmail(e.target.value)}
            className={Style["profile__input"]}
            htmlLabel="New Email"
          />
          <ButtonCyan
            text="Change Email"
            className={`${styleSettings["settings-btn"]}`}
            btnHeight="46"
          />
        </>
      </form>
      {/* <SectionTitle title="Veryfy Your Email" />
      <div className={styleSettings["settings__verify"]}>
        <p className={styleSettings["settings__verify--status"]}>
          Status: <span>Unverified</span>
        </p>
        <button className={`${styleSettings["settings__verify--btn"]}`}>
          Send Verification Email
        </button>
      </div> */}
      <SectionTitle title="Change Password" />
      <form onSubmit={passFormChange}>
        <div
          className={`${Style["profile__label"]}`}
          style={passwordLabelsStyle}
        >
          <InputDark
            inputType="password"
            htmlPlaceholder=""
            inputOnChange={(e) => setOldPass(e.target.value)}
            className={Style["profile__input"]}
            inputOnKeyDown={inputOnKeyDownHandler}
            htmlLabel="Old Password"
          />
        </div>
        <div className={Style["profile__label"]} style={passwordLabelsStyle}>
          <InputDark
            inputType="password"
            htmlPlaceholder=""
            inputOnChange={(e) => setNewPass(e.target.value)}
            className={Style["profile__input"]}
            inputOnKeyDown={inputOnKeyDownHandler}
            htmlLabel="New Password"
          />
        </div>
        <div className={Style["profile__label"]} style={passwordLabelsStyle}>
          <InputDark
            inputType="password"
            htmlPlaceholder=""
            inputOnChange={(e) => setNewPassRepeat(e.target.value)}
            className={Style["profile__input"]}
            inputOnKeyDown={inputOnKeyDownHandler}
            htmlLabel="Reapeat Password"
          />
        </div>
        <div className={Style["profile__content--label"]}>
          {passwordChangerValidate ? (
            <ButtonCyan
              text="Change Password"
              disabled
              className={`${styleSettings["settings-submit"]}`}
              btnHeight="46"
            />
          ) : (
            <BtnDisabled
              text="Change Password"
              disabled
              className={`${styleSettings["settings-submit"]}`}
              btnHeight="46"
            />
          )}
        </div>
      </form>
      {/* <VerificationBtn /> */}
      {serverError && (
        <ErrorModal
          text="Server Error"
          closeModalHandler={() => setServerError(false)}
        />
      )}
      {isSuccess && <SuccessModal text="Change information"/>}
    </div>
  );
};

export default Settings;
