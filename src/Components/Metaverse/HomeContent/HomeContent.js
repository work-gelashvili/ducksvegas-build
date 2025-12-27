import HomeBaner from "../HomeBaner/HomeBaner";
import banerImage from "../../../icons/content-banner.png";
import RecentWins from "../RecentNFTWins/RecentWins";
import GoTo from "../GoTo/GoTo";
import CryptoCurrencies from "../CryptoCurencies/CryptoCurrencies";

const HomeContent = () => {
  return (
    <div style={{display: "flex", flexDirection: "column", width: "100%"}}>
      <HomeBaner
        className="classname"
        image={banerImage}
        text={[
          <p key="111">
            GET <span style={{ color: "#31CDC9" }}>BONUS BALANCE</span> AND{" "}
            <span style={{ color: "#FFDA00" }}>QUACK</span>{" "}
          </p>,
          <p key="112">FOR EACH NEW NFT DEPOSIT!</p>,
        ]}
      />
      <RecentWins />
      <GoTo />
      <CryptoCurrencies />
    </div>
  );
};

export default HomeContent;
