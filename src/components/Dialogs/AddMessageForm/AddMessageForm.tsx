import React from "react";
import {InjectedFormProps, reduxForm} from "redux-form";

import {createField, TextArea} from "../../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../../units/validators/validators";
import {NewMessageFormType} from "../Dialogs";


const maxLength50 = maxLengthCreator(50);

const AddMessageForm: React.FC<InjectedFormProps<NewMessageFormType, PropsType> & PropsType> = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                {createField<NewMessageFormKeysType>("Введите текст сообщения", "newMessageBody", [required, maxLength50], TextArea)}
            </div>
            <div>
                <button>Add message</button>
            </div>
        </form>
    )
}

export default reduxForm<NewMessageFormType>({
    form: "dialogAddMessageForm"
})(AddMessageForm)

type NewMessageFormKeysType = Extract<keyof NewMessageFormType, string>
type PropsType = {}