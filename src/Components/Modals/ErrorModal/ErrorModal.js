import styles from "./ErrorModal.module.css";
import close from '../../../icons/close.svg';

const ErrorModal = (props) => {
  return (
    <div className={styles["modal-container"]}>
      <div className={styles["modal-content"]}>
        <div className={styles['modal-left-side']}>
          <span className={styles["attention-icon"]}>!</span>
          <div className={styles["about-error"]}>
            <p className={styles["error-text"]}>{props.text}</p>
            <p className={styles["error-secondary-text"]}>
              {props.secondaryText}
            </p>
          </div>
        </div>
        <img default-src='none' src={close} alt="close" onClick={props.closeModalHandler} style={{cursor: "pointer"}}/>
      </div>
    </div>
  );
};

export default ErrorModal;
