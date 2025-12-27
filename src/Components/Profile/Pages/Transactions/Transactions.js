import SectionTitle from "../../SectionTitle";
import Item from "./Item/Item";
import Style from "./Transactions.module.css";
import Filter from "./Filter/Filter";
import Select from "./Filter/Select/Select";
import Amount from "./Filter/Amount/Amount";
import Date from "./Filter/Date/Date";

const Transactions = () => {
  return (
    <div className={Style["transactions"]}>
      <div className={Style["transactions-head"]}>
        <SectionTitle title={"Transactions (6)"} />
        <div className={Style["transactions-filters"]}>
          <Filter title="Order Type">
            <Select />
          </Filter>
          <Filter title="Amount">
            <Amount />
          </Filter>
          <Filter title="Date">
            <Date />
          </Filter>
        </div>
      </div>
      <div className={Style["transactions-body"]}>
        <div className={Style["transactions-body-head"]}>
          <div className={Style["transactions-body-title"]}>Order Type</div>
          <div className={Style["transactions-body-title"]}>Amount</div>
          <div className={Style["transactions-body-title"]}>Addres</div>
          <div className={Style["transactions-body-title"]}>Method</div>
          <div className={Style["transactions-body-title"]}>Date</div>
        </div>
        <Item />
      </div>
    </div>
  );
};

export default Transactions;
