import { Link } from 'react-router-dom';
import Style from './Menu.module.css'

const Menu = ({data}) => {
    return (
        <div className={Style.menu}>
            <h1 className={Style.menu__title}>{data.title}</h1>
            <ul className={Style.menu__list}>
                {data.link.map( (item, k) => {
                    return (
                        <li key={item.id} className={'disable-element'}>
                            <Link to={item.url}>
                                {item.name}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
};

export default Menu;
