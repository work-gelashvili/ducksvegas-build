import Style from "./Welcome.module.css";
import Sidebar from "./Sidebar/Sidebar";
import Content from "./Content/Content";
import Body from "../Common/Body/Body";
import MainSideBar from "../Sidebar/Sidebar";

const Welcome = () => {
  return (
    <Body>
      <div className={Style.welcome}>
        <MainSideBar>
          <Sidebar />
        </MainSideBar>
        <Content />
      </div>
    </Body>
  );
};

export default Welcome;
