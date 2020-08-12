import React from "react";
import style from "./ProfileInfo.module.scss";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
const ProfileInfo = ({profile, status, updateStatus}) => {
    if(!profile) {
        return (
            <Preloader/>
        )
    };

    return (
        <div>
            <div className={style.content_profile}>
                <img src={profile.photos.large} />
                <ProfileStatus status={status} updateStatus={updateStatus}/>
            </div>
        </div>
    );
};
export default ProfileInfo;