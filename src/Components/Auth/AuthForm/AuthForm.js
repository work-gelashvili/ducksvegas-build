import { useState } from 'react'
import ButtonCyan from '../../Ui/ButtonCyan'
import InputDark from '../../Ui/InputDark'
import styles from './AuthForm.module.css'

const AuthForm = ({
  changePassword,
  changeUsername,
  submitRegistrationForm,
  formOnChange,
  usernameError,
  passwordError,
}) => {
  const [passwordVisible, setPasswordVisible] = useState('password')

  const inputBtnOnClickHandler = () => {
    passwordVisible === 'password'
      ? setPasswordVisible('text')
      : setPasswordVisible('password')
  }
  return (
    <div className={styles['auth-form-block']}>
      <div className={styles.hr}></div>
      <form
        className={styles['auth-form']}
        onChange={formOnChange}
        onSubmit={submitRegistrationForm}
      >
        <InputDark
          inputType="text"
          htmlPlaceholder="Username"
          Name="username"
          inputHeight="46"
          inputOnChange={changeUsername}
          borderColor={usernameError ? '#FF035B' : false}
          className="registration-auth-form-control"
        />
        <InputDark
          inputType={passwordVisible}
          htmlPlaceholder="Password"
          Name="password"
          margin="16"
          inputHeight="46"
          withBtn={true}
          inputBtnOnClick={inputBtnOnClickHandler}
          inputOnChange={changePassword}
          borderColor={passwordError ? '#FF035B' : false}
          className="registration-auth-form-control"
        />
        <ButtonCyan
          btnType="submit"
          className={styles['auth-form-btn']}
          btnHeight="46"
          btnMargin="32"
          text="Sign In"
        />
      </form>
      <div className={styles.hr}></div>
    </div>
  )
}

export default AuthForm
