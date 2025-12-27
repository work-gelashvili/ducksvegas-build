import styles from "./RecentWins.module.css";
import image from "../../../icons/content-banner.png";
import NFT from "../NFT/NFT";
import SectionTitle from "../../Common/SectionTitle/SectionTitle";

const RecentWins = () => {
  const recentWinsNFT = [
    {
      Image: image,
      name: "ProtonAtom",
      price: "$1,935",
      id: "121",
    },
    {
      Image: image,
      name: "DatKillA4",
      price: "$2,935",
      id: "122",
    },
    {
      Image: image,
      name: "SlottyPotty",
      price: "$935",
      id: "123",
    },
    {
      Image: image,
      name: "Hidden",
      price: "$335",
      id: "124",
    },
    {
      Image: image,
      name: "Herr Bonzen",
      price: "$135",
      id: "125",
    },
  ];

  return (
    <>
        <SectionTitle title="RECENT NFT WINS" viewAllUrl="/" gamePage={true} />
      <div className={styles["recent-wins-container"]}>
        {recentWinsNFT.map((nft) => {
          return (
            <NFT
              key={nft.id}
              image={nft.Image}
              name={nft.name}
              price={nft.price}
            />
          );
        })}
      </div>
    </>
  );
};

export default RecentWins;
