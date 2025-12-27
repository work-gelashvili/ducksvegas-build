import Style from './NewAddress.module.css'
import InputDark from '../../../../Ui/InputDark';

const NewAddress = ({newAddresValue}) => {
  return (
    <div className={Style["address"]}>
      <p className={Style["address-title"]}>Pay to</p>
      <InputDark
        inputOnChange={newAddresValue}
        htmlPlaceholder="Wallet address"
      />
    </div>
  );
};

export default NewAddress;
