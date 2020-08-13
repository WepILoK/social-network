import React from "react";
import s from './MyPosts.module.scss';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../units/validators/validators";
import {TextArea} from "../../common/FormsControls/FormsControls";

const maxLength = maxLengthCreator(10);

const MyPosts = React.memo(props => {

    let postsElements =
        props.posts.map(p => <Post key={p.id} message={p.message} key={p.id} likesСount={p.likesCount}/>)

    let newPostElement = React.createRef();

    const onAddPost = (values) => {
        props.addPost(values.newPostText);
    };

    return (
        <div className={s.content_post}>
            <h3>My post</h3>
            <AddNewPostReduxForm onSubmit={onAddPost}/>

            <div className={s.content_post_posts}>
                {postsElements}
            </div>
        </div>
    );
});

const AddNewPostForm = props => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={"newPostText"} placeholder="Создай пост и вали"
                       component={TextArea} validate={[required, maxLength]}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const AddNewPostReduxForm = reduxForm({
    form:"ProfileAddNewPostForm"
})(AddNewPostForm)

export default MyPosts;