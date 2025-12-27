import "./App.css";
import { Redirect, Route, Switch } from "react-router-dom";
import Cookies from "universal-cookie";
import Header from "./Components/Common/Header";
import AuthPage from "./Pages/AuthPage";
import WelcomePage from "./Pages/WelcomePage";
import UserRegister from "./Pages/UserRegister";
import Footer from "./Components/Common/Footer";
import MetaverseHomePage from "./Pages/MetaverseHomePage";
import PasswordReset from "./Pages/PasswordReset";
import LobbyTab from "./Pages/CasinoTabs/LobbyTab";
import SlotPage from "./Pages/Slot";
import ProfilePage from "./Pages/ProfilePage";
import SlotsPage from "./Pages/CasinoTabs/SlotsPage";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { usersAction } from "./Store/userData";
import PageNotFound from "./Components/Common/PageNotFound/PageNotFound";
import RoulettePage from "./Pages/CasinoTabs/RoulettePage";
import axios from "axios";
import Eside from "./Components/Modals/Eside/Eside";
import MainSideBarMobile from "./Components/SidebarMobile/SidebarMobile";
import { isMobile } from "react-device-detect";
import ErrorModal from "./Components/Modals/ErrorModal/ErrorModal";

const cookies = new Cookies();

function App() {
  const [showHeader, setShowHeader] = useState(true);
  const location = useLocation();
  const dispatch = useDispatch();
  const baseUrl = useSelector((state) => state.GlobalVariables.baseUrl);
  const aSideModule = useSelector((state) => state.GlobalVariables.Aside);
  const [serverError, setServerError] = useState(false);
  const openMobileMenuModule = useSelector(
    (state) => state.GlobalVariables.mobileMenu
  );
  useEffect(() => {
    if (
      location.pathname === "/auth" ||
      location.pathname === "/register" ||
      location.pathname === "/reset/password"
    ) {
      setShowHeader(false);
    } else {
      setShowHeader(true);
    }

    if (
      (location.pathname === "/profile/edit" && isMobile) ||
      (location.pathname === "/profile/settings" && isMobile)
    ) {
      setShowHeader(false);
    }
  }, [location]);

  useEffect(() => {
    const actions = {
      async auth() {
        try {
          const response = await axios("/users", {
            baseURL: baseUrl,
            withCredentials: true,
          });
          if (response.data.errorCode === 0) {
            dispatch(usersAction.changeIsLoggedIn(true));
            dispatch(usersAction.changeNick(response.data.data.nick));
            dispatch(usersAction.changeName(response.data.data.name));
            dispatch(usersAction.changeSurname(response.data.data.surname));
            dispatch(usersAction.changeUserId(response.data.data.userId));
            dispatch(usersAction.changeIsBirthday(response.data.data.birthday));
            dispatch(usersAction.changeIsGender(response.data.data.gender));
            dispatch(usersAction.changeIsPhone(response.data.data.phone));
            dispatch(usersAction.changeIsCity(response.data.data.city));
            dispatch(usersAction.changeIsCountry(response.data.data.country));
            dispatch(usersAction.changeIsZipCode(response.data.data.zip));
            dispatch(usersAction.changeUserBalance(response.data.data.balance));
          } else {
            dispatch(usersAction.changeIsLoggedIn(false));
          }
        } catch (err) {
          setServerError(true);
        }
      },
    };

    if (typeof cookies.get("sessionID") !== "undefined") {
      actions.auth();
    } else {
      dispatch(usersAction.changeIsLoggedIn(false));
    }
  }, [baseUrl, dispatch]);

  return (
    <>
      <div className={showHeader ? "App" : "app-without-padding"}>
        {openMobileMenuModule && isMobile && <MainSideBarMobile />}
        <div className="App-in">
          {showHeader && <Header />}
          <Switch>
            <Route path="/" exact>
              <WelcomePage />
            </Route>
            <Route path="/auth">
              <AuthPage />
            </Route>
            <Route path="/register">
              <UserRegister />
            </Route>
            <Route path="/metaverse">
              <MetaverseHomePage />
            </Route>
            <Route path="/reset/password">
              <PasswordReset />
            </Route>
            <Route path="/casino/lobby">
              <LobbyTab />
            </Route>
            <Route path="/casino" exact>
              <Redirect to="/casino/lobby" />
            </Route>
            <Route path="/casino/slot">
              <SlotPage />
            </Route>
            <Route path="/profile">
              <ProfilePage />
            </Route>
            <Route path="/casino/slots">
              <SlotsPage />
            </Route>
            <Route path="/casino/roulette">
              <RoulettePage />
            </Route>
            <Route path="*">
              <PageNotFound />
            </Route>
          </Switch>
          {showHeader && <Footer />}
          {aSideModule && <Eside />}
        </div>

        {serverError && (
          <ErrorModal
            text="Server Error"
            closeModalHandler={() => setServerError(false)}
          />
        )}
      </div>
    </>
  );
}

export default App;
