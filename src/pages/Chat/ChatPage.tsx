import React, {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {ChatMessageType} from "../../api/chat-api";
import {sendMessage, startMessagesListening, stopMessagesListening} from "../../redux/chat_reducer";
import {AppStateType} from "../../redux/redux-store";
import userPhoto from "../../assets/images/default_avatar.png";


const ChatPage: React.FC = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(startMessagesListening())

        return () => {
            dispatch(stopMessagesListening())
        }
    }, [])

    return (
        <div>
            <Messages/>
            <AddMessageForm/>
        </div>
    )
}

// const Chat: React.FC = () => {
//     const dispatch = useDispatch()
//
//     useEffect(()=> {
//         dispatch(startMessagesListening())
//
//         return () => {
//             dispatch(stopMessagesListening())
//         }
//     }, [])
//
//     return (
//         <div>
//             <Messages/>
//             <AddMessageForm/>
//         </div>
//     )
// }

const Messages: React.FC<{}> = ({}) => {
    const messages = useSelector((state: AppStateType) => state.chat.messages)


    return (
        <div style={{height: "480px", overflowY: "auto"}}>
            {messages.map((m, i) => <Message key={i} message={m}/>)}
        </div>
    )
}

const Message: React.FC<{ message: ChatMessageType }> = ({message}) => {

    return (
        <div>
            <NavLink to={"/profile/" + message.userId}>
                {/*    <img src={user.photos.small != null ? user.photos.small : userPhoto}*/}
                {/*         alt="Avatar img"*/}
                {/*    />*/}
                <img src={message.photo} style={{width: "30px"}} alt="Avatar img"/>
                <b>{"  " + message.userName}</b>
            </NavLink>
            <br/>
            {message.message}
            <hr/>
        </div>
    )
}

const AddMessageForm: React.FC<{}> = () => {
    const [message, setMessage] = useState("")
    const [readyStatus, setReadyStatus] = useState<'pending' | 'ready'>("pending")
    const dispatch = useDispatch()

    const sendMessageHandler = () => {
        if (!message) {
            return;
        }
        dispatch(sendMessage(message))
        setMessage("")
    }

    const enterSubmit = (e: any) => {
        if (e.keyCode == 13 && e.shiftKey == false) {
            sendMessageHandler()
        }
    }

    return (
        <div>
            <div>
                <textarea
                    onKeyDown={enterSubmit}
                    onChange={(e) => {
                        setMessage(e.currentTarget.value)
                    }}
                    value={message}>
                </textarea>
            </div>
            <div>
                <button disabled={false} onClick={sendMessageHandler}>
                    Отправить
                </button>
            </div>
        </div>
    )
}

export default ChatPage