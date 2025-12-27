import { useState, useEffect, useReducer } from "react";
import Cookies from "universal-cookie";
import { Link, useLocation, Redirect } from "react-router-dom";
import ErrorModal from "../../Modals/ErrorModal/ErrorModal";
import SuccessModal from "../../Modals/SuccessModal/SuccessModal";
import AuthForm from "../AuthForm/AuthForm";
import AuthHead from "../AuthHead/AuthHead";
import ConnectWithSocial from "../ConnectWithSocial/ConnectWithSocial";
import styles from "./AuthBody.module.css";
import axios from "axios";
import { usersAction } from "../../../Store/userData";
import { useSelector, useDispatch } from "react-redux";

const initialAuth = {
  username: "",
  password: "",
  redirect: false,
  incorrectUserName: false,
  incorrectPassword: false,
  errorText: "",
  errorAdditionalText: "",
};

const cookies = new Cookies();

const reducer = (state, action) => {
  switch (action.type) {
    case "userName":
      return { ...state, username: action.username };
    case "password":
      return { ...state, password: action.password };
    case "editErrors":
      return { ...state, incorrectPassword: false, incorrectUserName: false };
    case "error":
      return {
        ...state,
        errorText: action.errorText,
        errorAdditionalText: action.errorAdditionalText,
      };
    case "incorrectPassword":
      return { ...state, incorrectPassword: true };
    case "incorretUsername":
      return { ...state, incorrectUserName: true };
    case "successedAuth":
      return { ...state, redirect: true };
    default:
      return state;
  }
};

const AuthBody = () => {
  const baseURL = useSelector((store) => store.GlobalVariables.baseUrl);
  const location = useLocation();
  const [error, setShowError] = useState(false);
  const [success, setShowSuccess] = useState(false);
  const [serverError, setServerError] = useState(false);
  const dispatch = useDispatch();

  const [authorization, dispatchAuth] = useReducer(reducer, initialAuth);

  const requests = {
    auth: async () => {
      try {
        const res = await axios.post(
          "/users/auth",
          {
            userName: authorization.username,
            password: authorization.password,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
            baseURL: baseURL,
          }
        );

        if (res.data.message === "Username is not correct") {
          setShowError(true);
          dispatchAuth({
            type: "error",
            errorText: "Username is not correct",
            errorAdditionalText: "Try again",
          });
          dispatchAuth({ type: "incorretUsername" });
        } else if (res.data.message === "Password is not correct") {
          setShowError(true);
          dispatchAuth({
            type: "error",
            errorText: "Password is not correct",
            errorAdditionalText: "Try again",
          });
          dispatchAuth({ type: "incorrectPassword" });
        } else {
          cookies.set("sessionID", res.data.data.sessionId, {
            path: "/",
            sameSite: "none",
            secure: true,
          });
          dispatch(usersAction.changeIsLoggedIn(true));
          dispatch(usersAction.changeNick(res.data.data.nick));
          dispatch(usersAction.changeUserId(res.data.data.userId));
          dispatchAuth({ type: "successedAuth" });
        }
      } catch (err) {
        setServerError(true);
      }
    },
  };

  const modal = {
    close: {
      error() {
        setShowError(false);
      },
      success() {
        setShowSuccess(false);
      },
    },
  };

  const handler = {
    changePassword(e) {
      dispatchAuth({ type: "password", password: e.target.value });
    },
    changeUsername(e) {
      dispatchAuth({ type: "userName", username: e.target.value });
    },
    formChange() {
      dispatchAuth({ type: "editErrors" });
    },
    formSubmit(e) {
      e.preventDefault();
      if (authorization.password.length < 8) {
        setShowError(true);
        dispatchAuth({
          type: "error",
          errorText: "Please type more then 8 symbol",
          errorAdditionalText: "Try again",
        });
        dispatchAuth({ type: "incorrectPassword" });
      } else {
        requests.auth();
      }
    },
  };

  useEffect(() => {
    if (location.search === "?registration=success") {
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
      }, 3000);
    }
  }, [location]);

  return (
    <div className={styles["auth-content"]}>
      <div className={styles["auth-container"]}>
        <div>
          <AuthHead title="Sign In" />
          <ConnectWithSocial />
          <AuthForm
            changePassword={handler.changePassword}
            usernameError={authorization.incorrectUserName}
            passwordError={authorization.incorrectPassword}
            changeUsername={handler.changeUsername}
            formOnChange={handler.formChange}
            submitRegistrationForm={handler.formSubmit}
          />
          <div
            className={`${styles["password-reset"]} ${styles["mobile-reg-link"]}`}
          >
            <Link to="/register">
              <span className={styles["reset-password-text"]}>
                Register an account
              </span>
            </Link>
          </div>
          <div className={styles["password-reset"]}>
            <Link to="/reset/password">
              <span className={styles["reset-password-text"]}>
                Forgot Password?
              </span>
            </Link>
          </div>
        </div>
        {error && (
          <ErrorModal
            text={authorization.errorText}
            secondaryText={authorization.errorAdditionalText}
            closeModalHandler={modal.close.error}
          />
        )}
        {success && (
          <SuccessModal
            text="Welcome!"
            secondaryText="You have successfully registerd."
            closeModalHandler={modal.close.success}
          />
        )}
        {authorization.redirect && <Redirect to={"/?auth=success"} />}
        {serverError && (
          <ErrorModal
            text="Server Error"
            closeModalHandler={() => setServerError(false)}
          />
        )}
      </div>
      <div className={styles["auth-background"]}></div>
    </div>
  );
};

export default AuthBody;
