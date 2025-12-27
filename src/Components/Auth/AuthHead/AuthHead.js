import { Link } from "react-router-dom";
import styles from "./AuthHead.module.css";
import Back from "./../../../icons/back.svg"

const AuthHead = (props) => {
  return (
    <div className={styles["auth-head-container"]}>
      <div className={styles["back-button"]}>
        <Link to="/">
          <span className={styles["back-icon"]}><img default-src='none' src={Back} alt="back-icon"/></span>
        </Link>
        <span className={styles["back-text"]}>Back</span>
      </div>
      <h1 className={styles["auth-title"]}>{props.title}</h1>
    </div>
  );
};

export default AuthHead;
