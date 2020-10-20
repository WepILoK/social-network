import React from "react";
import {InjectedFormProps, reduxForm} from "redux-form";

import {createField, GetStringKeys, TextArea} from "../../../common/FormsControls/FormsControls";
import {required} from "../../../../units/validators/validators";


const AddNewPostForm: React.FC<InjectedFormProps<AddPostValuesType, PropsType> & PropsType> = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                {createField<AddPostFormValuesKeysType>
                ("Введите текс поста","newPostText", [required], TextArea)}
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

export default reduxForm<AddPostValuesType, PropsType>({
    form:"ProfileAddNewPostForm"
})(AddNewPostForm)

type PropsType = {

}

export type AddPostValuesType = {
 newPostText: string
}

type AddPostFormValuesKeysType = GetStringKeys<AddPostValuesType>