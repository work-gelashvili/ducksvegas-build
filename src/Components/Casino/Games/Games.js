import CasinoGame from "../CasinoGame/CasinoGame";
// import styles from "./Games.module.css";

const Games = (props) => {
  return (
    <>
      {props.data.map((wins) => {
        return (
          <CasinoGame
          gameId={wins.id}
          gameType={props.type}
          gameCategory={wins.categories}
          key={wins.id}
          image={wins.image}
          name={wins.display}
          type={wins.categories}
          url={`/casino/slot?gameId=${wins.id}&name=${wins.display}&type=${wins.categories}`}
        />          
        );
      })}
    </>
  );
};

export default Games;