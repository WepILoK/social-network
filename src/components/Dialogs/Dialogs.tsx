import React from "react";

import s from './Dialogs.module.scss';

import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Messege/Messege";
import AddMessageForm from "./AddMessageForm/AddMessageForm";

import { InitialStateType } from "../../redux/dialogs_reducer";


export const Dialogs: React.FC<PropsType> = ({dialogsPage,sendMessage}) => {
    let state = dialogsPage;
    const addNewMessage = (values: NewMessageFormType) => {
        sendMessage(values.newMessageBody)
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_item}>
                {state.dialogs.map((d ,index)=>
                    <DialogItem name={d.name} key={`${d.id}_${index}`} id={d.id}
                    />)}
            </div>
            <div className={s.dialogs_messages}>
                <div>{state.messages.map((m,index) =>
                    <Message message={m.message} key={`${m.id}_${index}`}
                    />)}</div>
            </div>
            <AddMessageForm onSubmit={addNewMessage}/>
        </div>
    )
}

type PropsType = {
    dialogsPage: InitialStateType
    sendMessage: (messageText: string) => void
}

export type NewMessageFormType = {
    newMessageBody: string
}
