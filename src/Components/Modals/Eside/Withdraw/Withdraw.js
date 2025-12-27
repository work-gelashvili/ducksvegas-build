import Method from "./Method/Method";
import iconSOLANA from "../../../../icons/solana.svg";

const WithdrawTab = () => {
  const data = [
    // {
    //   id: 59837985,
    //   title: "USDT",
    //   logo: iconUSDT,
    // },
    {
      id: 1057334,
      title: "Solana",
      change: "USDT",
      logo: iconSOLANA,
    },
  ];
  return (
    <>
      <Method title="Withdraw method" data={data} type="withdraw"/>
    </>
  );
};

export default WithdrawTab;
