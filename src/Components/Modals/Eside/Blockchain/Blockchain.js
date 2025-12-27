import Style from "./Blockchain.module.css";

const Blockchain = ({ data, erc20, trc20 }) => {
  return (
    <div className={Style["blockchain"]}>
      {data.map((item, key) => {
        return (
          <div
            // onClick={!item.disabled && item.active}
            key={item.id}
            className={`${Style["blockchain-item"]}  ${
              key === 0 && erc20 ? Style["blockchain-item-active"] : key === 1 && trc20 ? Style["blockchain-item-active"]  : ""
            } `}
          >
            {item.title}
          </div>
        );
      })}
    </div>
  );
};

export default Blockchain;
