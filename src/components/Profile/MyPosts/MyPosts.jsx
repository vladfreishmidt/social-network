import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

    let PostsData = [
        { id: 1, name: 'Vlad F', likes: 2, message: 'Hi! My names is Sarah' },
        { id: 2, name: 'Vlad F', likes: 2, message: 'Hi! My names is Elon' },
        { id: 4, name: 'Vlad F', likes: 2, message: 'Hi! My names is Rossario' },
    ];

    let postsElements = PostsData.map(post => <Post name={post.name} message={post.message} likes={post.likes} />);

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
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;