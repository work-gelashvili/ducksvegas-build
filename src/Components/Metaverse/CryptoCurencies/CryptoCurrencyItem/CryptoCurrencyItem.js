import styles from "./CryptoCurrencyItem.module.css";
import downIcon from "../../../../icons/down.svg";
import upIcon from "../../../../icons/up.svg";

const CryptoCurrencyItem = (props) => {
  return (
    <div className={styles["currency-container-out"]}>
      <div className={styles["currency-container"]}>
        <div className={styles["currency-change-percent"]}>
          {typeof props.rise !== "undefined" && (
            <p
              className={
                props.rise
                  ? styles["currency-change-percent-green"]
                  : styles["currency-change-percent-red"]
              }
            >
              {props.changePercent && props.changePercent}
            </p>
          )}
        </div>
        <div className={styles["currency-content"]}>
          {props.coinImage && (
            <img
              default-src='none'
              src={props.coinImage}
              alt="crypto coin"
              className={styles["coin-image"]}
            />
          )}
          {props.coinName && (
            <p className={styles["coin-name"]} style={{ color: "white" }}>
              {props.coinName}
            </p>
          )}
          <div>
            <div className={styles["coin-change-info"]}>
              {typeof props.rise !== "undefined" && (
                <img
                  default-src='none'
                  src={props.rise ? upIcon : downIcon}
                  alt="arrow cion"
                  className={styles["arrow-icon"]}
                />
              )}
              {typeof props.rise !== "undefined" && (
                <p
                  className={
                    typeof props.rise !== "undefined" && props.rise
                      ? styles["coin-change-green"]
                      : styles["coin-change-red"]
                  }
                  style={{ fontSize: "14px", textAlign: "center" }}
                >
                  {props.coinChange}
                </p>
              )}
              {typeof props.rise == "undefined" && (
                <p
                  className={styles["coin-change-green"]}
                  style={{ fontSize: "14px", textAlign: "center" }}
                >
                  {props.coinChange}
                </p>
              )}
            </div>
            {props.volume && (
              <p
                className={styles["coin-value"]}
                style={{ fontSize: "12px", color: "#8698A2", marginTop: "5px" }}
              >
                {props.volume}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CryptoCurrencyItem;
