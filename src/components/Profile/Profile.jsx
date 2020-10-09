import React from "react";
import style from './Profile.module.scss';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = ({isOwner, savePhoto, profile, status, updateStatus, saveProfile}) => {
    return (
        <div className={style.profile}>
            <ProfileInfo isOwner={isOwner} profile={profile}
                         status={status} updateStatus={updateStatus}
                         savePhoto={savePhoto} saveProfile={saveProfile}/>
            <MyPostsContainer />
        </div>
    );
};

export default Profile; 