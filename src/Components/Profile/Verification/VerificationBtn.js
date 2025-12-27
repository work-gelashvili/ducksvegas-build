import styleSettings from "./../Pages/Settings/Settings.module.css";
import ButtonCyan from "../../Ui/ButtonCyan";
import IdentityIcon from "./../../../icons/identify.svg";

const VerificationBtn = () => {
  return (
    <div className={styleSettings["settings__identity"]}>
      <div className={styleSettings["settings__identity--right"]}>
        <figure className={styleSettings["settings__identity--icon"]}>
          <img default-src='none' src={IdentityIcon} alt="Identity icon" />
        </figure>
        <div>
          <h1 className={styleSettings["settings__identity--title"]}>
            Verify your Identity
          </h1>
          <p className={styleSettings["settings__identity--desc"]}>
            Verification keeps your account more secure.
          </p>
        </div>
      </div>
      <ButtonCyan text="Start Verification" className={styleSettings["settings__identity--btn"]} />
    </div>
  );
};

export default VerificationBtn;
