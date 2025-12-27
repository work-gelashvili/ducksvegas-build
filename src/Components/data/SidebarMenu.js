const sportsMenu = [
  {
    id: 59478473,
    icon: hovers.inPlay
      ? menuIconsHover.InplayIconHover
      : menuIconsDefault.InplayIcon,
    text: "Inplay",
    link: "/casino",
    dataName: "in play",
  },
  {
    id: 8967407304,
    icon: hovers.upcoming
      ? menuIconsHover.UpcomingIconHover
      : menuIconsDefault.UpcomingIcon,
    text: "Upcoming",
    link: "/sport",
    dataName: "upcoming",
  },
];

const casinoMenu = [
  {
    id: "78556909",
    icon: hovers.liveCasino
      ? menuIconsHover.liveCasinoIconHover
      : menuIconsDefault.liveCasinoIcon,
    text: "Live Casino",
    link: "/crypto/futures",
    dataName: "live casino",
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
    link: "/crypto/futures",
    dataName: "turbo games",
  },
];

const pokerMenu = [
  {
    id: "789324",
    icon: hovers.ducksPoker
      ? menuIconsHover.pokerIconHover
      : menuIconsDefault.pokerIcon,
    text: "Ducks Poker",
    link: "/casino/lobby",
    dataName: "ducks poker",
  },
];

const other = [
  {
    id: "16",
    icon: hovers.ducksLottery
      ? menuIconsHover.ducksCoinIconHover
      : menuIconsDefault.ducksCoinIcon,
    text: "Ducks Lottery:",
    link: "/ducks/lottery",
    value: "$4.08 K",
    dataName: "ducks lottery",
  },
  {
    id: "18",
    icon: hovers.jackpot
      ? menuIconsHover.jackpotIconHover
      : menuIconsDefault.jackpotIcon,
    text: "Jackpot:",
    link: "/jackpot",
    value: "$8.7 K",
    dataName: "jackpot",
  },
  {
    id: "19",
    icon: hovers.streams
      ? menuIconsHover.streamsIconHover
      : menuIconsDefault.streamsIcon,
    text: "Streams",
    link: "/streams",
    value: "",
    dataName: "stream",
  },
];

const event = [
  {
    id: "20",
    icon: menuIconsDefault.eventChampionIcon,
    text: " Race:",
    link: "/ducks/lottery",
    value: "$26.8 K ",
    time: "12:05:43",
    dataName: "race event",
  },
];

export {sportsMenu, casinoMenu, pokerMenu, other, event}