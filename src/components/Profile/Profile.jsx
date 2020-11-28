import s from './Profile.module.css';


const Profile = () => {
    return (
        <main className={s.main}>
            <div>
                <img src='https://afar-production.imgix.net/uploads/images/afar_post_headers/images/s6P1cWj2kE/original_hawaii_202019.jpg' alt='profile background' />
            </div>

            <div className="user-info">
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPyGNr2qL63Sfugk2Z1-KBEwMGOfycBribew&usqp=CAU' alt='user' />
          Devid Desk
        </div>

            <div>
                <div>
                    create new post
                </div>
                <div className={s.posts}>
                    <div className={s.item}>
                        Post 1
                    </div>
                    <div className={s.item}>
                        Post 2
                    </div>
                    <div className={s.item}>
                        Post 3
                    </div>
                    <div className={s.item}>
                        Post 4
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Profile;