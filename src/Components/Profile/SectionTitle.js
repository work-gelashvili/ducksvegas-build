import Style from './Profile.module.css'

const SectionTitle = ({title}) => {
  return (
    <h1 className={Style["profile__content--title"]}>{title}</h1>
  );
};

export default SectionTitle