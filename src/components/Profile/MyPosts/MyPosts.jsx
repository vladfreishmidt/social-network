import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div className={s.feed}>
            <h3 className={s.feed__title}>My Posts</h3>
            {/* CREATE NEW POST */}
            <div className={s.box__newPost}>
                <div className={s.box__newTextInput}>
                    <textarea className={s.newTextInput}></textarea>
                </div>
                <div className={s.box__addPostBtn}>
                    <button className={`${s.addPostBtn} btn`}>Add Post</button>
                </div>
            </div>
            {/* POSTS */}
            <div className={s.posts}>
                <Post name='Vlad Freishmidt' message='Hi, how are you? Lorem30dewfwefwefwefewfewfewfewfewf wqdfrgtrhrhyrhtrht ergrehtehet gerhyjkilo ertyjukiu ' likes="5" />
                <Post name='Vlad Freishmidt' message="It's my first post!" likes="0" />
                <Post name='Vlad Freishmidt' message="Yay I'm a post too!" likes="2" />
                <Post name='Vlad Freishmidt' message="I'm learning React.js and that's great!!!" likes="23" />
            </div>
        </div>
    );
}

export default MyPosts;