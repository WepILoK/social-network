import React from "react";
import style from './Profile.module.scss';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    return (
        <div className={style.profile}>
            <ProfileInfo isOwner={props.isOwner} profile={props.profile}
                         status={props.status} updateStatus={props.updateStatus}
                         savePhoto={props.savePhoto} saveProfile={props.saveProfile}/>
            <MyPostsContainer />
        </div>
    );
};

export default Profile; 