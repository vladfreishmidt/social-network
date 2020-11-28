import s from './Sidebar.module.css';

const Sidebar = () => {
    return (
        <aside className={s.sidebar}>
            <nav>
                <ul>
                    <li className={`${s.item} ${s.active}`}>
                        <a className='sidebar__link' href='/profile'>
                            Profile
                        </a>
                    </li>
                    <li className={s.item}>
                        <a className='sidebar__link' href='/inbox'>
                            Messages
                        </a>
                    </li>
                    <li className={s.item}>
                        <a className='sidebar__link' href='/news'>
                            News
                        </a>
                    </li>
                    <li className={s.item}>
                        <a className='sidebar__link' href='/music'>
                            Music
                        </a>
                    </li>
                    <li className={s.item}>
                        <a className='sidebar__link' href='/settings'>
                            Settings
                        </a>
                    </li>
                </ul>
            </nav>
        </aside>
    );
}

export default Sidebar;