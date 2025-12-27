import { useLocation } from "react-router-dom";

const SidebarMobileComponents = () => {
  const location = useLocation();

  if (location.pathname === "/") {
    return <MainSideBarMobile>1</MainSideBarMobile>;
  }

  if (location.pathname === "/") {
    return <MainSideBarMobile>2</MainSideBarMobile>;
  }

  if (location.pathname === "/") {
    return <MainSideBarMobile>3</MainSideBarMobile>;
  }
  if (location.pathname === "/") {
    return <MainSideBarMobile>4</MainSideBarMobile>;
  }

  return (
    <><MainSideBarMobile>4ddddddddddddddd</MainSideBarMobile></>
  )
};

export default SidebarMobileComponents;
