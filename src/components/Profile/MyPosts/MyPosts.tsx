import React from "react";

import {Post} from "./Post/Post";
import AddNewPostForm, {AddPostValuesType} from "./AddPostForm/AddPostForm";

import s from './MyPosts.module.scss';

import {PostType} from "../../../types/types";


export const MyPosts: React.FC<PropsType> = React.memo(({addPost, posts}) => {
    const onAddPost = (values: AddPostValuesType) => {
        addPost(values.newPostText);
    };

    return (
        <div className={s.content_post}>
            <h3>My post</h3>
            <AddNewPostForm onSubmit={onAddPost}/>

            <div className={s.content_post_posts}>
                {posts.map((p) =>
                    <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)}
            </div>
        </div>
    );
})

export type MapStatePropsType = {
    posts: Array<PostType>
}

export type MapDispatchPropsType = {
    addPost: (newPostText: string) => void
}

type PropsType = MapStatePropsType & MapDispatchPropsType