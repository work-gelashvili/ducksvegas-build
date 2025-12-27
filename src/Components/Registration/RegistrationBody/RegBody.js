import { useState } from "react";
import AuthHead from "../../Auth/AuthHead/AuthHead";
import ConnectWithSocial from "../../Auth/ConnectWithSocial/ConnectWithSocial";
import RegisterForm from "../RegistrationForm/RegisterForm";
import styles from "./RegBody.module.css";
import { useSelector } from "react-redux";
import axios from "axios";
import ErrorModal from "../../Modals/ErrorModal/ErrorModal";
import { Redirect } from "react-router-dom";

const RegBody = () => {
  const baseURL = useSelector((store) => store.GlobalVariables.baseUrl);
  const [unameError, setUnameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [errorText, setErrorText] = useState("");
  const [errorAdditionalText, setErrorAdditionalText] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorModule, setErrorModule] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [serverError, setServerError] = useState(false);

  const regApi = async () => {
    try {
      const res = await axios.post(
        "/users",
        {
          nick: username,
          email: email,
          password: password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          baseURL: baseURL,
        }
      );

      if (res.data.errorDescription === "Duplicate nickname") {
        setErrorModule(true);
        setErrorText("Username alrealy exist");
        setErrorAdditionalText("Try Egain");
        setUnameError(true);
      } else if (res.data.errorDescription === "Duplicate email") {
        setErrorModule(true);
        setErrorText("Email alrealy exist");
        setErrorAdditionalText("Try Egain");
        setEmailError(true);
      } else {
        setLoggedIn(true);
      }
    } catch (err) {
      setServerError(true);
    }
  };

  const formOnSubmitHandler = (e) => {
    e.preventDefault();
    const format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (username.length === 0) {
      setErrorModule(true);
      setErrorText("Username is required");
      setErrorAdditionalText("Fill username");
      setUnameError(true);
    } else if (!format.test(email)) {
      setErrorModule(true);
      setErrorText("Email Format is not correct");
      setErrorAdditionalText("Change email address");
      setEmailError(true);
    } else if (!email.length === 0) {
      setErrorModule(true);
      setErrorText("Email is required");
      setErrorAdditionalText("Fill email");
      setEmailError(true);
    } else if (password.length < 8) {
      setErrorModule(true);
      setErrorText("Input 8 or more symbol");
      setErrorAdditionalText("Change email address");
      setPasswordError(true);
    } else if (!isChecked) {
      setErrorModule(true);
      setErrorText("Accept rules");
      setErrorAdditionalText("readinga and accepr rules");
    } else {
      regApi();
    }
  };

  function closeErrorModule() {
    setErrorModule(false);
  }

  const formOnChangeHandler = () => {
    if (errorModule === true) {
      setErrorModule(false);
      setErrorText("");
      setErrorAdditionalText("");
      setPasswordError(false);
      setUnameError(false);
      setEmailError(false);
    }
  };

  return (
    <div className={styles["reg-content"]}>
      <div className={styles["reg-container"]}>
        <AuthHead title="Create Account" />
        <ConnectWithSocial />
        <RegisterForm
          changeEmail={setEmail}
          changePassword={setPassword}
          changeUsername={setUsername}
          formOnChange={formOnChangeHandler}
          submitRegistrationForm={formOnSubmitHandler}
          usernameError={unameError}
          emailError={emailError}
          passwordError={passwordError}
          checkedValid={setIsChecked}
        />
        {errorModule && (
          <ErrorModal
            text={errorText}
            secondaryText={errorAdditionalText}
            closeModalHandler={closeErrorModule}
          />
        )}
      </div>
      <div className={styles["reg-background"]}></div>
      {loggedIn && <Redirect to={"/auth?registration=success"} />}
      {serverError && (
        <ErrorModal
          text="Server Error"
          closeModalHandler={() => setServerError(false)}
        />
      )}
    </div>
  );
};

export default RegBody;
