import s from './ProfileInfo.module.css';


const ProfileInfo = () => {
    return (
        <div>
            <div className={s.profile__wallpaper} >
                <img src='https://afar-production.imgix.net/uploads/images/afar_post_headers/images/s6P1cWj2kE/original_hawaii_202019.jpg' alt='profile background' />
            </div>

            <div className={s.user__info}>
                <img className={s.user__photo} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPyGNr2qL63Sfugk2Z1-KBEwMGOfycBribew&usqp=CAU' alt='user' />
                <div className={s.user__details}>
                    <div className={s.user__name}>Vlad Freishmidt</div>
                    <div className={s.user__date}>Date of birth: 12.06.1992</div>
                    <div className={s.user__github}>Github: https://github.io/vladfreishmidt</div>
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;