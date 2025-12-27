import Back from "../../Common/Back/Back";
import Menu from "../../Welcome/Sidebar/Menu/Menu";
import { useReducer } from "react";
import { menuIconsDefault, menuIconsHover } from "../../data/SidebarIcons";

const initHovers = {
  edit: false,
  rewards: false,
  settings: false,
  transactions: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "edit":
      return { ...state, edit: !state.edit };
    case "rewards":
      return { ...state, rewards: !state.rewards };
    case "settings":
      return { ...state, settings: !state.settings };
    case "transactions":
      return { ...state, transactions: !state.transactions };
    default:
      return { ...state };
  }
};

const Sidebar = () => {
  const [hovers, dispatchHover] = useReducer(reducer, initHovers);

  const playMetaverse = [
    {
      id: "11",
      icon: hovers.edit
        ? menuIconsHover.editIconHover
        : menuIconsDefault.editIcon,
      text: "Profile",
      link: "/profile/edit",
      dataName: "edit",
    },
    // {
    //   id: "12",
    //   icon: hovers.rewards
    //     ? menuIconsHover.rewardsIconHover
    //     : menuIconsDefault.rewardsIcon,
    //   text: "Rewards",
    //   link: "/profile/rewards",
    //   dataName: "rewards",
    // },
    // {
    //   id: "5498684",
    //   icon: hovers.transactions
    //     ? menuIconsHover.transactionsIconHover
    //     : menuIconsDefault.transactionsIcon,
    //   text: "Transactions",
    //   link: "/profile/Transactions",
    //   dataName: "transactions",
    // },
    {
      id: "13",
      icon: hovers.settingsd
        ? menuIconsHover.settingsIconHover
        : menuIconsDefault.settingsIcon,
      text: "Settings",
      link: "/profile/settings",
      dataName: "settings",
    },
  ];

  const sidebarItemOnMouseEnter = (e) => {
    dispatchHover({ type: e.target.attributes["1"].value });
  };

  const sidebarItemOnMouseLeave = (e) => {
    dispatchHover({ type: e.target.attributes["1"].value });
  };

  return (
    <>
      <Back text={"Home"} />
      <Menu
        menuData={playMetaverse}
        elementOnMouseEnter={sidebarItemOnMouseEnter}
        elementOnMouseLeave={sidebarItemOnMouseLeave}
      />
    </>
  );
};

export default Sidebar;
