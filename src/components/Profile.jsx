const Profile = () => {
    return (
        <main className='main'>
            <div>
                <img src='https://afar-production.imgix.net/uploads/images/afar_post_headers/images/s6P1cWj2kE/original_hawaii_202019.jpg' alt='profile background' />
            </div>

            <div className="user-info">
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPyGNr2qL63Sfugk2Z1-KBEwMGOfycBribew&usqp=CAU' alt='user' />
          Devid Desk
        </div>

            <div className="user-posts">
                <div>
                    create new post
                </div>
                <div className="feed">
                    <div>
                        Post 1
                    </div>
                    <div>
                        Post 2
                    </div>
                    <div>
                        Post 3
                    </div>
                    <div>
                        Post 4
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Profile;