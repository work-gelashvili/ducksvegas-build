import ButtonCyan from './../../../../Ui/ButtonCyan'
import BtnDisabled from '../../../../Ui/BtnDisabled'
import itemStyle from './Item.module.css'

const Item = ({ icon, title, desc, disabledItem }) => {
  return (
    <div className={`${itemStyle['item']}`}>
      <div className={`${itemStyle['item--in']}`}>
        <div className={`${itemStyle['item--profile']}`}>
          <figure className={`${itemStyle['item--cover']}`}>
            <img default-src='none' src={icon} alt="profile" />
          </figure>
          <div>
            <p className={`${itemStyle['item--title']}`}>{title}</p>
            <div className={`${itemStyle['item--desc']}`}>{desc}</div>
          </div>
        </div>
        <div>
          {disabledItem ? (
            <BtnDisabled
              text="Claim"
              className={`${itemStyle['item--claim']}`}
            />
          ) : (
            <ButtonCyan
              text="Claim"
              className={`${itemStyle['item--claim']}`}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default Item
