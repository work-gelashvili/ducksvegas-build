import Style from "./SidebarMobile.module.css";
import { useLocation } from "react-router-dom";
import WelcomeSidebar from "./SidebarComponents/WelcomeSidebar";
import MetaverseSidebar from "./SidebarComponents/MetaverseSidebar";
import ProfileSidebar from "./SidebarComponents/ProfileSidebar";

const MainSideBarMobile = () => {
  const location = useLocation();

  if (location.pathname === "/") {
    return (
      <div className={`${Style.sidebar} `}>
        <h1 className={`${Style['sidebar-title']} `}>Casino</h1>
        <WelcomeSidebar />
      </div>
    );
  }
  if (location.pathname === "/casino/lobby") {
    return (
      <div className={`${Style.sidebar} `}>
        <h1 className={`${Style['sidebar-title']} `}>Casino</h1>
        <WelcomeSidebar />
      </div>
    );
  }
  if (location.pathname === "/casino/slots") {
    return (
      <div className={`${Style.sidebar} `}>
        <h1 className={`${Style['sidebar-title']} `}>Casino</h1>
        <WelcomeSidebar />
      </div>
    );
  }

  if (location.pathname === "/metaverse") {
    return (
      <div className={`${Style.sidebar} `}>
        <h1 className={`${Style['sidebar-title']} `}>Metaverse</h1>
        <MetaverseSidebar />
      </div>
    );
  }

  if (location.pathname === "/profile") {
    return (
      <div className={`${Style.sidebar} `}>
        <h1 className={`${Style['sidebar-title']} `}>Profile</h1>
        <ProfileSidebar />
      </div>
    );
  }
};

export default MainSideBarMobile;
