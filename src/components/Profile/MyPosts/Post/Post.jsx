import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <div className={s.item__author} >
                <img className={s.item__author_photo} src="https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png" alt="who posted" />
                <span className={s.item__author_name}>
                    {props.name}
                </span>
            </div>
            <div className={s.item__message} >
                {props.message}
            </div>
            <div className={s.item__likes} >
                <span>{props.likes} likes</span>
            </div>
        </div>
    );
}

export default Post;