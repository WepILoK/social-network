import React from "react";
import {createField, Input, TextArea} from "../../common/FormsControls/FormsControls";
import style from "./ProfileInfo.module.scss";
import {reduxForm} from "redux-form";
import {Contact} from "./ProfileInfo";
import s from "../../common/FormsControls/FormsControls.module.scss";

const ProfileDataForm = ({handleSubmit, profile, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                { error && <div className={s.formSummaryError}>
                    {error}
                </div>}
                <b>Full name: </b> {createField("Full name", "fullName", [], Input)}
            </div>
            <div>
                <b>Looking for a job: </b>
                {createField("", "lookingForAJob", [], Input, {type: "checkbox"})}
            </div>
            <div>
                <b>My professional skills: </b>
                {createField("My professional skills", "lookingForAJobDescription",
                    [], TextArea,)}
            </div>
            <div>
                <b>About me: </b>
                {createField("About me", "aboutMe", [], TextArea,)}
            </div>
            <div>
                <b>Contacts: </b> {Object.keys(profile.contacts).map(key => {
                return <div key={key}className={style.contact}>
                    <b>{key}:</b>{createField(key, "contacts." + key, [], Input)}
                </div>
            })}
            </div>
            <div>
                <button>Save</button>

            </div>
        </form>
    )
};

const ProfileDataFormReduxForm = reduxForm({form: "edit_profile"})(ProfileDataForm);

export default ProfileDataFormReduxForm;