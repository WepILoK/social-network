import React from "react";

import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

import style from './Profile.module.scss';

import {ProfileType} from "../../types/types";


export const Profile: React.FC<PropsType> = ({isOwner, savePhoto, profile, status, updateStatus, saveProfile}) => {
    return (
        <div className={style.profile}>
            <ProfileInfo isOwner={isOwner} profile={profile}
                         status={status} updateStatus={updateStatus}
                         savePhoto={savePhoto} saveProfile={saveProfile}/>
            <MyPostsContainer />
        </div>
    );
};

type PropsType = {
    isOwner: boolean
    savePhoto: (file: File) => void
    profile: ProfileType | null
    status: string
    updateStatus: (status: string) => void
    saveProfile: (profile: ProfileType) => Promise<any>
}