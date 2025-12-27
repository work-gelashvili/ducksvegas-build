import { NavLink } from "react-router-dom";
import Style from "./Menu.module.css";
import { useDispatch, useSelector } from "react-redux";
import { GlobalVariablesAction } from "../../../../Store/GlobalVariables";

const Menu = () => {
  const dispatch = useDispatch();
  const aSideModuleDeposit = useSelector((state) => state.GlobalVariables.AsideDeposit);
  const aSideModuleWithdraw = useSelector((state) => state.GlobalVariables.AsideWithdraw);

  const data = [
    {
      id: 385375,
      link: "/",
      title: "Deposit",
      openTab: (e) => {
        e.preventDefault();
        dispatch(GlobalVariablesAction.AsideProfileWithdraw(false))
        dispatch(GlobalVariablesAction.AsideProfileDeposit(true))
        dispatch(GlobalVariablesAction.AsideProfileDetail(false))
        dispatch(GlobalVariablesAction.AsideProfileWithdrawDetail(false))
      },
    },
    {
      id: 5984584,
      link: "/",
      title: "Withdraw",
      openTab: (e) => {
        e.preventDefault();
        dispatch(GlobalVariablesAction.AsideProfileWithdraw(true))
        dispatch(GlobalVariablesAction.AsideProfileDeposit(false))
        dispatch(GlobalVariablesAction.AsideProfileDetail(false))
        dispatch(GlobalVariablesAction.AsideProfileWithdrawDetail(false))
      },
    }, 
  ];

  return (
    <ul className={Style["menu"]}>
      {data.map((item, id) => {
        return (
          <li className={Style["menu-item"]} key={item.id}>
            <NavLink to={item.link} className={`${Style["menu-item-link"]} ${aSideModuleDeposit && id === 0 ? Style["menu-item-deposit"] : '' } ${aSideModuleWithdraw && id === 1 ? Style["menu-item-withdraw"] : '' }`} onClick={item.openTab} >
              {item.title}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};

export default Menu;
