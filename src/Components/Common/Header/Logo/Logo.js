import { Link } from "react-router-dom";
import Style from "./Logo.module.css";
// import LogoImage from './../../../../icons/logo.svg'
import LogoImage from "./../../../../icons/logo-beta.png";
import Skeleton from "../../../Skeleton/Skeleton";

function Logo() {
  return (
    <div className={Style.logo}>
      <Link to="/" className={Style["logo__link"]}>
        {
            <img default-src="none" src={LogoImage} alt="Logo" /> ||
        (
            <div className={Style["logo__link--loading"]}>
            <Skeleton />
          </div>
        )}
      </Link>
    </div>
  );
}

export default Logo;
