import React from 'react'
import styles from './Ui.module.css'

const InputDark = (props) => {
  return (
    <div
      className={styles['form-input']}
      style={{
        width: `${props.inputWidth}px`,
        height: `${props.inputHeight}px`,
        marginTop: `${props.margin}px`,
      }}
    >
      {props.htmlLabel && <label className={styles['form-label']}> {props.htmlLabel} </label>}
      {props.borderColor ? (
        <input
          type={props.inputType}
          style={{
            border: `1px solid ${props.borderColor}`
          }}
          placeholder={props.htmlPlaceholder}
          onChange={props.inputOnChange && props.inputOnChange}
          className={props.className ? props.className : styles['form-control']}
          name={props.Name}
          onKeyDown={props.inputOnKeyDown}
          value={props.htmlValue && props.htmlValue}
          max={props.max && props.max}
        />
      ) : (
        <input
          type={props.inputType}
          placeholder={props.htmlPlaceholder}
          onChange={props.inputOnChange && props.inputOnChange}
          className={props.className ? props.className : styles['form-control']}
          name={props.Name}
          onKeyDown={props.inputOnKeyDown}
          value={props.htmlValue && props.htmlValue}
          max={props.max && props.max}
        />
      )}

      {props.withBtn && (
        <button
          type="button"
          onClick={props.inputBtnOnClick}
          className={styles['input-btn']}
        >
          {props.buttonIcon && <img default-src='none' src={props.buttonIcon} alt="button icon" />}
          {props.buttonText && props.buttonText}
        </button>
      )}
    </div>
  )
}

export default InputDark
