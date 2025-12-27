import styles from './Ui.module.css'

const ButtonCyan = (props) => {
  return (
    <button
      type={props.btnType}
      className={`${styles["button-cyan"]} ${props.className}`}
      style={{width: `${props.btnWidth}px`, height: `${props.btnHeight}px`, marginTop: `${props.btnMargin}px`, fontSize: `${props.fontsize}px`}}
      onClick={props.btnOnClick}
    >
      {props.text}
    </button>
  );
};

export default ButtonCyan;
