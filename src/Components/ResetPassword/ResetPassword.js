import AuthHead from "../Auth/AuthHead/AuthHead";
import styles from "./ResetPassword.module.css";
import ResetPasswordForm from "./ResetPasswordForm/ResetPasswordForm";

const ResetPassword = () => {
  return (
    <div className={styles["reset-pass-background"]}>
      <div className={styles["reset-pass-container"]}>
        <AuthHead title="Reset Password" />
        <ResetPasswordForm />
      </div>
    </div>
  );
};

export default ResetPassword;
