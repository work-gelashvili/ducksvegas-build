import { Link } from "react-router-dom";
import styles from "./Back.module.css";
import backIcon from "../../../icons/back.svg";

const Back = ({ text, url, noLink, className, marginBottom }) => {
  return (
    <>
      {noLink ? (
        <div className={`${styles["back-block"]}  ${className}`} style={{ marginBottom: `${marginBottom}px`}}>
          <div className={styles["back-icon"]}>
            <img default-src="none" src={backIcon} alt="back" />
          </div>
          <p className={styles["back-text"]}>{text ? text : "Back"}</p>
        </div>
      ) : (
        <Link
          to={url ? url : "/"}
          className={`${styles["back-block"]} ${className}`}
          style={{ marginBottom: `${marginBottom}px`}}
        >
          <div className={styles["back-icon"]}>
            <img default-src="none" src={backIcon} alt="back" />
          </div>
          <p className={styles["back-text"]}>{text ? text : "Back"}</p>
        </Link>
      )}
    </>
  );
};

export default Back;
