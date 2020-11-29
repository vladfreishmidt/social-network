import s from './Sidebar.module.css';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (
        <aside className={s.sidebar}>
            <nav>
                <ul>
                    <li className={s.item}>
                        <NavLink to='/profile' activeClassName={s.active} className='sidebar__link' >
                            Profile
                        </NavLink>
                    </li>
                    <li className={s.item}>
                        <NavLink activeClassName={s.active} className='sidebar__link' to='/chats'>
                            Messages
                        </NavLink>
                    </li>
                    <li className={s.item}>
                        <NavLink activeClassName={s.active} className='sidebar__link' to='/news'>
                            News
                        </NavLink>
                    </li>
                    <li className={s.item}>
                        <NavLink activeClassName={s.active} className='sidebar__link' to='/music'>
                            Music
                        </NavLink>
                    </li>
                    <li className={s.item}>
                        <NavLink activeClassName={s.active} className='sidebar__link' to='/settings'>
                            Settings
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </aside>
    );
}

export default Sidebar;