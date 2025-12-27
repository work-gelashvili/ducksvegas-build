import styles from './Ui.module.css'

const BtnCyanNoBg = (props) => {
  const buttonStyles = {
    width: props.btnWidth ? `${props.btnWidth}px` : 'fit-content',
    height: `${props.btnHeight}px`,
    marginTop: `${props.btnMargin}px`,
    fontSize: `${props.fontsize}px`,
    paddingLeft: `${props.paddings}px`,
    paddingRight: `${props.paddings}px`,
  }

  return (
    <button
      type={props.btnType}
      className={`${styles['button-cyan-no-bg']} ${props.className}`}
      style={buttonStyles}
      onClick={props.btnOnClick}
    >
      {props.text}
    </button>
  )
}

export default BtnCyanNoBg
