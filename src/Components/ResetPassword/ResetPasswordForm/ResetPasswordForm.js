import styles from "./ResetPasswordForm.module.css";
import InputDark from "../../Ui/InputDark";
import ButtonCyan from "../../Ui/ButtonCyan";
import axios from "axios";
import { useSelector } from "react-redux";
import { useState } from "react";
import ErrorModal from "../../Modals/ErrorModal/ErrorModal";
import SuccessModal from "../../Modals/SuccessModal/SuccessModal";

const ResetPasswordForm = () => {
  const baseUrl = useSelector((state) => state.GlobalVariables.baseUrl);
  const [email, setEmail] = useState("");
  const [errorModule, setErrorModule] = useState(false);
  const [errorText, setErrorText] = useState("");
  const [errorAdditionalText, setErrorAdditionalText] = useState("");
  const [success, setSuccess] = useState(false);
  const [successText, setSuccessText] = useState('');
  const [successAdditionalText, setSuccessAdditionalText] = useState('');
  
  const emailOnChangeHandler = (e) => {
    setEmail(e.target.value);
  };

  function closeErrorModule() {
    setErrorModule(false);
  }

  function closeSuccessModal(){
    setSuccess(false)
  }

  const resetPassord = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        "/users/password/new",
        {
          email: email,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          baseURL: baseUrl,
        }
      );

      setSuccess(true);
      setSuccessText('Success');
      setSuccessAdditionalText('New password set to your email')
      setTimeout(() => {
        setSuccess(false)
      }, 3000);
    } catch (err) {
      if (err.data.errorCode === 10) {
        setErrorModule(true);
        setErrorText("Email not found");
        setErrorAdditionalText("Try again");
        setTimeout(() => {
          setErrorModule(false);
        }, 3000);
      }
    }
  };

  return (
    <div className={styles["reset-form-block"]}>
      <p className={styles["reset-pass-head-text"]}>
        Enter your email and we'll send you a new password.
      </p>
      <div className={styles.hr}></div>
      <form className={styles["reset-form"]} onSubmit={resetPassord}>
        <InputDark
          inputType="email"
          htmlPlaceholder="Enter Email"
          Name="email"
          inputOnChange={emailOnChangeHandler}
          inputWidth="326"
          inputHeight="46"
        />
        <ButtonCyan
          btnType="submit"
          btnWidth="326"
          btnHeight="46"
          btnMargin="32"
          text="Send"
        />
      </form>
      {errorModule && (
        <ErrorModal
          text={errorText}
          secondaryText={errorAdditionalText}
          closeModalHandler={closeErrorModule}
        />
      )}
      {success && (
        <SuccessModal
          text={successText}
          secondaryText={successAdditionalText}
          closeModalHandler={closeSuccessModal}
        />
      )}
    </div>
  );
};

export default ResetPasswordForm;
