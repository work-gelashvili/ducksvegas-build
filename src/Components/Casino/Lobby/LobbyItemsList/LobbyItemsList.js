import styles from "./LobbyItemsList.module.css";
import NFT from "../../../Metaverse/NFT/NFT";


const LobbyItemsList = (props) => {
  return (
    <div className={styles["items-section"]}>
      <h3 className={styles["section-title"]}>{props.title}</h3>
      <div className={styles['items-list']}>
        {props.data.map((wins) => {
          return (
            <NFT
              key={wins.id}
              image={wins.Image}
              name={wins.name}
              price={wins.price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default LobbyItemsList;
