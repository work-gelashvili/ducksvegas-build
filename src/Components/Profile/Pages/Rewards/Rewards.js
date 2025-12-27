// import Style from './../../Profile.module.css'
import rewardsStyle from './Rewards.module.css'
import statusIcon from './../../../../icons/status-icon.svg'
import profileIcon from './../../../../icons/apecoin.svg'
import RankUpBonusIcon from './../../../../icons/table-player-icon.svg'
import Item from './Item/Item'
import SectionTitle from '../../SectionTitle'

const Rewards = () => {
  return (
    <div className={`${rewardsStyle['rewards']}`}>
      <SectionTitle title="Change Email" />
      <div className={`${rewardsStyle['rewards__item']}`}>
        <div className={`${rewardsStyle['rewards__item--profile']}`}>
          <figure className={`${rewardsStyle['rewards__item--profile-img']}`}>
            <img default-src='none' src={profileIcon} alt="profile" />
          </figure>
          <p className={`${rewardsStyle['rewards__item--name']}`}>userName</p>
        </div>
        <div className={`${rewardsStyle['rewards__item--rate']}`}>
          <div className={`${rewardsStyle['rewards__item--rated']}`}></div>
        </div>
        <div className={`${rewardsStyle['rewards__item--footer']}`}>
          <div className={`${rewardsStyle['rewards__item--wagered']}`}>
            Wogared: <span>150$</span>
          </div>
          <div className={`${rewardsStyle['rewards__item--next']}`}>
            next:{' '}
            <img
              default-src='none'
              src={statusIcon}
              alt="icon"
              className={rewardsStyle['rewards__item--icon']}
            />{' '}
            <p>latinum 2</p> <span>150$</span>
          </div>
        </div>
      </div>
      <div className={rewardsStyle['rewards-item-container']}>
        <SectionTitle title="Rakeback" />
        <Item
          key={1}
          title="Silver 1"
          desc="Wager $15,000 to unlock reward."
          icon={statusIcon}
        />
      </div>
      <div className={rewardsStyle['rewards-item-container']}>
        <SectionTitle title="Daily Bonus" />
        <Item
          key={2}
          title="Silver 2"
          desc="Wager $15,000 to unlock reward."
          icon={RankUpBonusIcon}
        />
      </div>
      <div className={rewardsStyle['rewards-item-container']}>
        <SectionTitle title="Rank Up Bonus" />
        <Item
          key={22}
          title="Silver 2"
          desc="Wager $15,000 to unlock reward."
          icon={RankUpBonusIcon}
        />
        <Item
          key={32}
          title="Silver 2"
          desc="Wager $15,000 to unlock reward."
          icon={RankUpBonusIcon}
          disabledItem={true}
        />
        <Item
          key={3432}
          title="Silver 2"
          desc="Wager $15,000 to unlock reward."
          icon={RankUpBonusIcon}
          disabledItem={true}
        />
        <Item
          key={2455}
          title="Silver 2"
          desc="Wager $15,000 to unlock reward."
          icon={RankUpBonusIcon}
          disabledItem={true}
        />
      </div>
    </div>
  )
}

export default Rewards
