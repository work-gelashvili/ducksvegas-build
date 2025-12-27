import Style from "./Amount.module.css";

const Amount = ({ children, title, selectCoin, setValueHandler, balance }) => {

  return (
    <div className={Style["amount"]}>
      <h1 className={Style["amount-title"]}>{title}</h1>
      <div className={Style["amount-input"]}>
        {children}
        <p className={Style["amount-input-valute"]}>{selectCoin}</p>
      </div>
      <div className={Style["amount-parcents"]}>
        <div className={Style["amount-parcents-out"]}>
          <div className={Style["amount-parcents-item"]} onClick={() => setValueHandler(balance, 4)}>25%</div>
        </div>
        <div className={Style["amount-parcents-out"]}>
          <div className={Style["amount-parcents-item"]} onClick={() => setValueHandler(balance, 2)}>50%</div>
        </div>
        <div className={Style["amount-parcents-out"]}>
          <div className={Style["amount-parcents-item"]} onClick={() => setValueHandler(balance, 1)}>100%</div>
        </div>
      </div>
    </div>
  );
};

export default Amount;