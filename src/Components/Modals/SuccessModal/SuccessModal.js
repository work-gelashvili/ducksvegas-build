import styles from "./SuccessModal.module.css";
import accept from '../../../icons/accept.svg'
import close from "../../../icons/close.svg"

const SuccessModal = (props) => {
  return (
    <div className={styles["modal-container"]}>
      <div className={styles["modal-content"]}>
        <div className={styles['modal-left-side']}>
          <img default-src='none' src={accept} alt="accept icon"/>
          <div className={styles["about-success"]}>
            <p className={styles["success-text"]}>{props.text}</p>
            <p className={styles["success-secondary-text"]}>
              {props.secondaryText}
            </p>
          </div>
        </div>
        <img default-src='none' src={close} alt="close" onClick={props.closeModalHandler} style={{cursor: "pointer"}}/>
      </div>
    </div>
  );
};

export default SuccessModal;
