import Style from "./../../../Profile.module.css";
import InputDark from "../../../../Ui/InputDark";
import { useSelector } from "react-redux";
// import ButtonCyan from "../../../../Ui/ButtonCyan";
import avatarIcons from '../../../../../icons/duck.svg'

const Username = ({inputOnChange}) => {
  const userData = useSelector((store) => store.userData);

  return (
    <div className={Style["profile__content--label"]}>
      <div className={Style["profile__avatar"]}>
        <img src={avatarIcons} alt="avatar" />
      </div>
      <InputDark
        inputType="text"
        htmlPlaceholder={userData.nick ? userData.nick : "Your Username"}
        inputOnChange={inputOnChange}
        className={Style["profile__input"]}
        htmlLabel="Username"
      />
    </div>
  );
};

export default Username;
