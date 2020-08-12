import React from "react";
import {addPostActionCreator, } from "../../../redux/profile_reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

/*const MyPostsContainer = (props) => {
    // let state = props.store.getState();

    // let addPost = () => {
    //     props.store.dispatch(addPostActionCreator());
    // };
    //
    // let onPostChange = (text) => {
    //     props.store.dispatch(addNewPostTextActionCreator(text));
    // };

    return (
        <StoreContext.Consumer>{(store) => {
            let state = store.getState();
            let addPost = () => {
                store.dispatch(addPostActionCreator());
            };

            let onPostChange = (text) => {
                store.dispatch(addNewPostTextActionCreator(text));
            };

            return (
                <MyPosts
                    updateNewPostText={onPostChange}
                    addPost={addPost}
                    posts={state.profilePage.posts}
                    newPostText={state.profilePage.newPostText}/>
            )
        }}</StoreContext.Consumer>

    );
};*/

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (newPostText) => {
            dispatch(addPostActionCreator(newPostText));

        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;