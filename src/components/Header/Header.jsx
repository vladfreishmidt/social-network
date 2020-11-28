import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
            <img className={s.logo} src='https://showit.co/wp-content/uploads/2017/03/Showit-Icon-White-1000.png' alt='main logo' />
        </header>
    );
}

export default Header;