import React, {ChangeEvent, useState} from "react";

import {Preloader} from "../../common/Preloader/Preloader";
import {ProfileStatus} from "./ProfileStatus";
import ProfileDataForm from "./ProfileDataForm";

import userPhoto from "../../../assets/images/default_avatar.png";

import style from "./ProfileInfo.module.scss";

import {ContactsType, ProfileType} from "../../../types/types";


export const ProfileInfo: React.FC<PropsType> = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {
    const [editMode, setEditMode] = useState(false);
    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.length) {
            savePhoto(e.target.files[0])
        }
    };

    const onSubmit = (formData: ProfileType) => {
        saveProfile(formData).then(() => {
            setEditMode(false)
        })
    }

    if (!profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div className={style.content_profile}>
                <img src={profile.photos.large || userPhoto} alt="Profile img"/>
                {isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}
                {editMode
                    ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit}/>
                    : <ProfileData profile={profile} isOwner={isOwner} goToEditMode={() => setEditMode(true)}/>
                }
                <ProfileStatus profStatus={status} updateStatus={updateStatus} isOwner={isOwner}/>
            </div>
        </div>
    );
};

const ProfileData: React.FC<ProfileDataPropsType> = ({profile, isOwner, goToEditMode}) => {
    return (
        <div>
            <div>
                <b>Full name: </b> {profile.fullName}
            </div>
            <div>
                <b>Looking for a job: </b> {profile.lookingForAJob ? "Yes" : "No"}
            </div>
            {profile.lookingForAJob &&
            <div>
                <b>My professional skills: </b> {profile.lookingForAJobDescription}
            </div>}
            <div>
                <b>About me: </b> {profile.aboutMe}
            </div>
            <div>
                <b>Contacts: </b> {Object.keys(profile.contacts).map(key =>
                <Contact key={key} contactTitle={key} contactValue={profile.contacts[key as keyof ContactsType]}/>
            )}
            </div>
            {isOwner && <div>
                <button onClick={goToEditMode}>Edit</button>
            </div>}
        </div>
    )
};

export const Contact: React.FC<ContactPropsType> = ({contactTitle, contactValue}) => {
    return (
        <div className={style.contact}>
            <b>{contactTitle + ":"}</b> {contactValue}
        </div>
    )
};

type PropsType = {
    profile: ProfileType | null
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (file: File) => void
    saveProfile: (profile: ProfileType) => Promise<any>
}

type ProfileDataPropsType = {
    profile: ProfileType
    isOwner: boolean
    goToEditMode: () => void
}

type ContactPropsType = {
    contactTitle: string
    contactValue: string
}