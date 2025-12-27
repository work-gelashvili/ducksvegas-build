import Style from "./Sidebar.module.css";
import Menu from "./Menu/Menu";
// import ButtonCyan from "../../Ui/ButtonCyan";
import { useReducer } from "react";
// import { useSelector } from "react-redux";
import { menuIconsDefault, menuIconsHover } from "../../data/SidebarIcons";

const initHovers = {
  inPlay: false,
  upcoming: false,
  liveCasino: false,
  slots: false,
  turboGames: false,
  ducksPoker: false,
  ducksLottery: false,
  jackpot: false,
  streams: false,
  event: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "in play":
      return { ...state, inPlay: !state.inPlay };
    case "upcoming":
      return { ...state, upcoming: !state.upcoming };
    case "live casino":
      return { ...state, liveCasino: !state.liveCasino };
    case "slots":
      return { ...state, slots: !state.slots };
    case "turbo games":
      return { ...state, turboGames: !state.turboGames };
    case "ducks poker":
      return { ...state, ducksPoker: !state.ducksPoker };
    case "ducks lottery":
      return { ...state, ducksLottery: !state.ducksLottery };
    case "jackpot":
      return { ...state, jackpot: !state.jackpot };
    case "stream":
      return { ...state, streams: !state.streams };
    case "race event":
      return { ...state, event: !state.event };
    default:
      return { ...state };
  }
};

const Sidebar = ({ children }) => {
  const [hovers, dispatchHover] = useReducer(reducer, initHovers);
  // const baseUrl = useSelector((state) => state.GlobalVariables.baseUrl);
  const sportsMenu = [
    {
      id: 59478473,
      icon: hovers.inPlay
        ? menuIconsHover.InplayIconHover
        : menuIconsDefault.InplayIcon,
      text: "Inplay",
      link: "/sports/inplay",
      dataName: "in play",
      disable: true,
    },
    {
      id: 8967407304,
      icon: hovers.upcoming
        ? menuIconsHover.UpcomingIconHover
        : menuIconsDefault.UpcomingIcon,
      text: "Upcoming",
      link: "/sports/upcoming",
      dataName: "upcoming",
      disable: true,
    },
  ];

  const casinoMenu = [
    {
      id: "78556909",
      icon: hovers.liveCasino
        ? menuIconsHover.liveCasinoIconHover
        : menuIconsDefault.liveCasinoIcon,
      text: "Live Casino",
      link: "/casino/live",
      dataName: "live casino",
      disable: true,
    },
    {
      id: "7548692",
      icon: hovers.slots
        ? menuIconsHover.slotIconHover
        : menuIconsDefault.slotIcon,
      text: "Slots",
      link: "/casino/slots",
      dataName: "slots",
    },
    {
      id: "7543420",
      icon: hovers.turboGames
        ? menuIconsHover.turboGameIconHover
        : menuIconsDefault.turboGameIcon,
      text: "Turbo Games",
      link: "/casino/turbo",
      dataName: "turbo games",
      disable: true,
    },
  ];

  const pokerMenu = [
    {
      id: "789324",
      icon: hovers.ducksPoker
        ? menuIconsHover.pokerIconHover
        : menuIconsDefault.pokerIcon,
      text: "Ducks Poker",
      link: "/poker/ducks",
      dataName: "ducks poker",
      disable: true,
    },
  ];

  // const other = [
  //   {
  //     id: "16",
  //     icon: `${baseUrl}/static/images/sidebar-duck.webp`,
  //     text: "Ducks Lottery:",
  //     link: "/ducks/lottery",
  //     value: "$4.08 K",
  //     dataName: "ducks lottery",
  //     disable: true,
  //   },
  //   {
  //     id: "18",
  //     icon: hovers.jackpot
  //       ? menuIconsHover.jackpotIconHover
  //       : menuIconsDefault.jackpotIcon,
  //     text: "Jackpot:",
  //     link: "/jackpot",
  //     value: "$8.7 K",
  //     dataName: "jackpot",
  //     disable: true,
  //   },
  //   {
  //     id: "19",
  //     icon: hovers.streams
  //       ? menuIconsHover.streamsIconHover
  //       : menuIconsDefault.streamsIcon,
  //     text: "Streams",
  //     link: "/streams",
  //     value: "",
  //     dataName: "stream",
  //     disable: true,
  //   },
  // ];

  // const event = [
  //   {
  //     id: "20",
  //     icon: hovers.event
  //       ? menuIconsHover.eventChampionIconHover
  //       : menuIconsDefault.eventChampionIcon,
  //     text: " Race:",
  //     link: "/ducks/event",
  //     value: "$26.8 K ",
  //     time: "12:05:43",
  //     dataName: "race event",
  //     disable: true,
  //   },
  // ];

  const sidebarItemOnMouseEnter = (e) => {
    dispatchHover({ type: e.target.attributes["1"].value });
  };

  const sidebarItemOnMouseLeave = (e) => {
    dispatchHover({ type: e.target.attributes["1"].value });
  };

  return (
    <div className={Style.sidebar}>
      {/* <div className={Style.hr}></div> */}
      {/* <div className={Style.hr} style={{ marginBottom: "32px" }}></div> */}

      <Menu
        title="Sports"
        menuData={sportsMenu}
        withValue={false}
        elementOnMouseEnter={sidebarItemOnMouseEnter}
        elementOnMouseLeave={sidebarItemOnMouseLeave}
      />
      <Menu
        title="Casino"
        menuData={casinoMenu}
        withValue={false}
        elementOnMouseEnter={sidebarItemOnMouseEnter}
        elementOnMouseLeave={sidebarItemOnMouseLeave}
      />
      <Menu
        title="Poker"
        menuData={pokerMenu}
        withValue={false}
        elementOnMouseEnter={sidebarItemOnMouseEnter}
        elementOnMouseLeave={sidebarItemOnMouseLeave}
      />
      {/* <Menu
        title="Other"
        menuData={other}
        withValue={true}
        elementOnMouseEnter={sidebarItemOnMouseEnter}
        elementOnMouseLeave={sidebarItemOnMouseLeave}
      /> */}
      {/* <Menu
        title="Event"
        menuData={event}
        withValue={true}
        withValueAndTime={true}
        elementOnMouseEnter={sidebarItemOnMouseEnter}
        elementOnMouseLeave={sidebarItemOnMouseLeave}
      /> */}

      {/* <div className={Style.hr}></div> */}

      {/* <ButtonCyan
        btnType="submit"
        btnWidth="142"
        btnHeight="36"
        btnMargin="32"
        text="Buy Crypto"
        fontsize="14"
      /> */}

      {/* <ul className={Style["payment-types"]}>
        <li>- Visa, Mastercard</li>
        <li>- Apple Pay</li>
        <li>- Google Pay</li>
      </ul> */}
    </div>
  );
};

export default Sidebar;
