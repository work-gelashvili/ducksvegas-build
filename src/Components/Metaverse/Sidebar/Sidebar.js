import Menu from "../../Welcome/Sidebar/Menu/Menu";
import ButtonCyan from "../../Ui/ButtonCyan";
import Style from "../../Welcome/Sidebar/Sidebar.module.css";
import { useReducer } from "react";
import { menuIconsDefault, menuIconsHover } from "../../data/SidebarIcons";

const initHovers = {
  play: false,
  nesting: false,
  marketplace: false,
  rental: false,
  raffles: false,
  about: false,
  artwork: false,
  team: false,
  roadmap: false,
  faq: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "play":
      return { ...state, play: !state.play };
    case "nesting":
      return { ...state, nesting: !state.nesting };
    case "marketplace":
      return { ...state, marketplace: !state.marketplace };
    case "rental":
      return { ...state, rental: !state.rental };
    case "raffles":
      return { ...state, raffles: !state.raffles };
    case "about":
      return { ...state, about: !state.about };
    case "artwork":
      return { ...state, artwork: !state.artwork };
    case "team":
      return { ...state, team: !state.team };
    case "roadmap":
      return { ...state, roadmap: !state.roadmap };
    case "faq":
      return { ...state, faq: !state.faq };
    default:
      return { ...state };
  }
};

const Sidebar = () => {
  const [hovers, dispatchHover] = useReducer(reducer, initHovers);

  const nftHoldersPanel = [
    {
      id: 59478473,
      icon: hovers.play
        ? menuIconsHover.PlayMetaverseIconHover
        : menuIconsDefault.PlayMetaverseIcon,
      text: "Play Metaverse",
      link: "/metaverse/holder/play",
      dataName: "play",
    },
    {
      id: 8967407304,
      icon: hovers.nesting
        ? menuIconsHover.nestingIconHover
        : menuIconsDefault.nestingIcon,
      text: "Nesting",
      link: "/metaverse/holder/nesting",
      dataName: "nesting",
    },
    {
      id: 2353254,
      icon: hovers.marketplace
        ? menuIconsHover.MarketplaceIconHover
        : menuIconsDefault.MarketplaceIcon,
      text: "Marketplace",
      link: "/metaverse/holder/marketplace",
      dataName: "marketplace",
    },
    {
      id: 6564,
      icon: hovers.rental
        ? menuIconsHover.RentalIconHover
        : menuIconsDefault.RentalIcon,
      text: "Rental System",
      link: "/metaverse/holder/rental",
      dataName: "rental",
    },
    {
      id: 253546,
      icon: hovers.raffles
        ? menuIconsHover.RafflesIconHover
        : menuIconsDefault.RafflesIcon,
      text: "Raffles",
      link: "/metaverse/holder/raffles",
      dataName: "raffles",
    },
  ];

  const casinoMenu = [
    {
      id: "fg454",
      icon: hovers.about
        ? menuIconsHover.aboutIconHover
        : menuIconsDefault.aboutIcon,
      text: "About",
      link: "/metaverse/nft/about",
      dataName: "about",
    },
    {
      id: "54546",
      icon: hovers.artwork
        ? menuIconsHover.artworkIconHover
        : menuIconsDefault.artworkIcon,
      text: "Artwork",
      link: "/metaverse/nft/artwork",
      dataName: "artwork",
    },
    {
      id: "46454",
      icon: hovers.team
        ? menuIconsHover.teamIconHover
        : menuIconsDefault.teamIcon,
      text: "Team",
      link: "/metaverse/nft/team",
      dataName: "team",
    },
    {
      id: "436346",
      icon: hovers.roadmap
        ? menuIconsHover.roadmapIconHover
        : menuIconsDefault.roadmapIcon,
      text: "Roadmap",
      link: "/metaverse/nft/roadmap",
      dataName: "roadmap",
    },
    {
      id: "73754",
      icon: hovers.faq
        ? menuIconsHover.faqIconHover
        : menuIconsDefault.faqIcon,
      text: "FAQ",
      link: "/metaverse/nft/faq",
      dataName: "faq",
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
      <Menu
        title="NFT Holder Portal"
        menuData={nftHoldersPanel}
        withValue={false}
        elementOnMouseEnter={sidebarItemOnMouseEnter}
        elementOnMouseLeave={sidebarItemOnMouseLeave}
      />
      <Menu
        title="DucksVegas NFT"
        menuData={casinoMenu}
        withValue={false}
        elementOnMouseEnter={sidebarItemOnMouseEnter}
        elementOnMouseLeave={sidebarItemOnMouseLeave}
      />

      <div className={Style.hr}></div>

      <ButtonCyan
        btnType="submit"
        btnWidth="142"
        btnHeight="36"
        btnMargin="32"
        text="Buy Crypto"
        fontsize="14"
      />
      <ul className={Style["payment-types"]}>
        <li>- Visa, Mastercard</li>
        <li>- Apple Pay</li>
        <li>- Google Pay</li>
      </ul>
    </>
  );
};

export default Sidebar;
