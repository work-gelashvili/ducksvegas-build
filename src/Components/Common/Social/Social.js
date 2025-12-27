import styles from "./Social.module.css";
// import ReactDOM from "react-dom";
// import FacebookAuth from "react-facebook-auth";

// const MyFacebookButton = ({ onClick }) => (
//   <button onClick={onClick}>Login with facebook</button>
// );

// const authenticate = (response) => {
//   console.log(response);
//   Api call to server so we can validate the token
// };

const Social = (props) => {
  return (
    <>
    {/* <FacebookAuth
      appId="<app-id>"
      callback={authenticate}
      component={MyFacebookButton}
    /> */}
    
    <div className={styles["social-item"]}>
      <img default-src='none' src={props.icon} alt="Social icon" />
      <span className={styles["social-name"]}>{props.name}</span>
    </div>
    </>
  );
};

export default Social;
