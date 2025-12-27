import Style from "./Sidebar.module.css";
import {
  isBrowser
} from "react-device-detect";

const MainSideBar = ({ children }) => {
  if (isBrowser) {
    return <div className={Style.sidebar}>{children}</div>;
  }
};

export default MainSideBar;
