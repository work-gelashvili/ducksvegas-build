import { Redirect, Route } from "react-router-dom";
import Profile from "./Pages/Profile/Profile";
import Rewards from "./Pages/Rewards/Rewards";
import Settings from "./Pages/Settings/Settings";
import Transactions from "./Pages/Transactions/Transactions";
import Style from "./Profile.module.css";
import Back from "../Common/Back/Back";
import { useSelector } from "react-redux";

const ProfileContent = () => {
  const page = useSelector((state) => state.GlobalVariables.page)

  return (
    <div className={Style.profile}>
      <Back url={`${page}?dropdown=active`} className={`${Style['profile-back']}`}/>
      <div className={Style.profile__content}>
        <Route path="/profile" exact>
          <Redirect to="/profile/edit" />
        </Route>
        <Route path="/profile/edit">
          <Profile />
        </Route>
        <Route path="/profile/rewards">
          <Rewards />
        </Route>
        <Route path="/profile/settings">
          <Settings />
        </Route>
        <Route path="/profile/transactions">
          <Transactions />
        </Route>
      </div>
    </div>
  );
};

export default ProfileContent;
