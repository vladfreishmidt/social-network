const Sidebar = () => {
    return (
        <aside className='sidebar'>
            <nav>
                <ul>
                    <li>
                        <a className='sidebar__link' href='/profile'>
                            Profile
                        </a>
                    </li>
                    <li>
                        <a className='sidebar__link' href='/inbox'>
                            Messages
                        </a>
                    </li>
                    <li>
                        <a className='sidebar__link' href='/news'>
                            News
                        </a>
                    </li>
                    <li>
                        <a className='sidebar__link' href='/music'>
                            Music
                        </a>
                    </li>
                    <li>
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