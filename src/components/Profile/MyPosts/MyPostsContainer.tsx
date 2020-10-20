import {connect} from "react-redux";

import {actions} from "../../../redux/profile_reducer";
import {MapDispatchPropsType, MapStatePropsType, MyPosts} from "./MyPosts";

import {AppStateType} from "../../../redux/redux-store";


const mapStateToProps = (state: AppStateType) => {
    return {
        posts: state.profilePage.posts,
    }
}

export default connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps, {
    addPost: actions.addPostActionCreator})(MyPosts);