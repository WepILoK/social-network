import React from "react";
import {InjectedFormProps, reduxForm} from "redux-form";

import {createField, GetStringKeys, Input, TextArea} from "../../common/FormsControls/FormsControls";

import s from "../../common/FormsControls/FormsControls.module.scss";
import style from "./ProfileInfo.module.scss";

import {ProfileType} from "../../../types/types";


const ProfileDataForm: React.FC<InjectedFormProps<ProfileType, PropsType> & PropsType> = ({handleSubmit, profile, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                {error && <div className={s.formSummaryError}>
                    {error}
                </div>}
                <b>Full name: </b> {createField<ProfileDataFormKeysType>("Full name", "fullName", [], Input)}
            </div>
            <div>
                <b>Looking for a job: </b>
                {createField<ProfileDataFormKeysType>("", "lookingForAJob", [], Input, {type: "checkbox"})}
            </div>
            <div>
                <b>My professional skills: </b>
                {createField<ProfileDataFormKeysType>("My professional skills", "lookingForAJobDescription",
                    [], TextArea,)}
            </div>
            <div>
                <b>About me: </b>
                {createField<ProfileDataFormKeysType>("About me", "aboutMe", [], TextArea,)}
            </div>
            <div>
                <b>Contacts: </b> {Object.keys(profile.contacts).map(key =>
                <div key={key} className={style.contact}>
                    <b>{key}:</b>{createField(key, "contacts." + key, [], Input)}
                </div>
            )}
            </div>
            <div>
                <button>Save</button>

            </div>
        </form>
    )
};

export default reduxForm<ProfileType, PropsType>
({form: "edit_profile"})(ProfileDataForm);

type PropsType = {
    profile: ProfileType
}

export type ProfileDataFormType = {
}

type ProfileDataFormKeysType = GetStringKeys<ProfileType>