import { Link } from "react-router-dom";
import BtnCyanNoBg from "../../../../Ui/BtnCyanNoBg";
import Style from "./Item.module.css";
import Skeleton from "../../../../Skeleton/Skeleton";

const Item = ({ title, desc, cover, icon, btnText, btnLink, disable }) => {
  return (
    <div className={Style.item__out}>
      <div className={Style.item}>
        <figure className={Style.item__cover}>
          {<img default-src="none" src={cover} alt="cover" /> || <Skeleton />}
        </figure>
        <h1 className={Style.item__title}>
          <img default-src="none" src={icon} alt="cover" />
          {title}
        </h1>
        <div className={Style.item__desc}>{desc}</div>
        <div
          className={`${Style["item__go-to-btn"]} ${
            disable ? "disable-element" : ""
          } `}
        >
          <Link to={btnLink}>
            <BtnCyanNoBg
              text={btnText}
              btnHeight="46"
              fontsize="16"
              paddings="32"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Item;
