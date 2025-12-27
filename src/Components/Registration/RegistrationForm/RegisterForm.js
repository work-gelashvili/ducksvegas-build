import { useState } from 'react'
import ButtonCyan from '../../Ui/ButtonCyan'
import InputDark from '../../Ui/InputDark'
import styles from './RegisterForm.module.css'
import watch from './../../../icons/watch.svg'

const RegisterForm = ({
  changePassword,
  changeEmail,
  changeUsername,
  submitRegistrationForm,
  usernameError,
  emailError,
  passwordError,
  formOnChange,
  checkedValid,
}) => {
  const [passwordVisible, setPasswordVisible] = useState('password')
  const inputBtnOnClickHandler = () => {
    passwordVisible === 'password'
      ? setPasswordVisible('text')
      : setPasswordVisible('password')
  }

  const inputOnKeyDownHandler = (e) => {
    if (e.keyCode === 32) {
      e.preventDefault()
    }
  }

  return (
    <div className={styles['reg-form-block']}>
      <div className={styles.hr}></div>
      <form
        className={styles['reg-form']}
        onChange={formOnChange}
        onSubmit={submitRegistrationForm}
      >
        <InputDark
          inputType="text"
          htmlPlaceholder="Username"
          Name="username"
          inputHeight="46"
          inputOnChange={(e) => changeUsername(e.target.value)}
          borderColor={usernameError ? '#FF035B' : false}
          inputOnKeyDown={inputOnKeyDownHandler}
          className="registration-auth-form-control"
        />
        <InputDark
          inputType="text"
          htmlPlaceholder="Email"
          Name="email"
          margin="16"
          inputHeight="46"
          inputOnChange={(e) => changeEmail(e.target.value)}
          borderColor={emailError ? '#FF035B' : false}
          inputOnKeyDown={inputOnKeyDownHandler}
          className="registration-auth-form-control"
        />
        <InputDark
          inputType={passwordVisible}
          htmlPlaceholder="Password"
          Name="password"
          margin="16"
          inputHeight="46"
          withBtn={true}
          buttonIcon={watch}
          inputBtnOnClick={inputBtnOnClickHandler}
          inputOnChange={(e) => changePassword(e.target.value)}
          borderColor={passwordError ? '#FF035B' : false}
          inputOnKeyDown={inputOnKeyDownHandler}
          className="registration-auth-form-control"
        />
        <div className={styles['accept-terms-conditions']}>
          <input type="checkbox"  className={styles['accept-terms-checkbox']} onChange={(e) => checkedValid(e.target.checked) }/>
          <p className={styles['checkbox-text']}>
            By accessing the site, I attest that I am at least 18 years old and
            have read the{' '}
            <span className={styles['terms-btn']}>Terms & Conditions.</span>
          </p>
        </div>
        <ButtonCyan
          btnType="submit"
          btnHeight="46"
          btnMargin="32"
          text="Register"
          className={styles['reg-submit']}
        />
      </form>
    </div>
  )
}

export default RegisterForm
