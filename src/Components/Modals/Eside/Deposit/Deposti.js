import Method from "../Withdraw/Method/Method";
import iconUSDT from "../../../../icons/usdt.svg";
import iconSOLANA from "../../../../icons/solana.svg";

const DepositTab = () => {
  const data = [
    {
      id: 59837985,
      title: "USDT",
      logo: iconUSDT,
    },
    {
      id: 1057334,
      title: "Solana",
      logo: iconSOLANA,
    },
  ];
  return (
    <>
      <Method title="Deposit method" data={data} type="deposit"/>
    </>
  );
};

export default DepositTab;
