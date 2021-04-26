import React, {useEffect, useRef, useState} from "react";
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {ChatMessageApiType} from "../../api/chat-api";
import {sendMessage, startMessagesListening, stopMessagesListening} from "../../redux/chat_reducer";
import {AppStateType} from "../../redux/redux-store";


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

const Messages: React.FC = () => {
    const messages = useSelector((state: AppStateType) => state.chat.messages)
    const messagesAnchorRef = useRef<HTMLDivElement>(null)
    const [isAutoScroll, setIsAutoScroll] = useState(true)

    useEffect(() => {
        if(isAutoScroll) {
            messagesAnchorRef.current?.scrollIntoView({block: "end", behavior: 'smooth' })
        }
    }, [messages])

    const scrollHandler = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
        const element = e.currentTarget
        if(Math.abs((element.scrollHeight - element.scrollTop) - element.clientHeight) < 300) {
            console.log(Math.abs((element.scrollHeight - element.scrollTop) - element.clientHeight))
            !isAutoScroll && setIsAutoScroll(true)
        }else {
            isAutoScroll && setIsAutoScroll(false)
        }
    }

    return (
        <div style={{height: "480px", overflowY: "auto"}} onScroll={scrollHandler}>
            {messages.map((m, i) => <Message key={m.id} message={m}/>)}
            <div ref={messagesAnchorRef}/>
        </div>
    )
}

const Message: React.FC<{ message: ChatMessageApiType }> = React.memo(({message}) => {
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
})

const AddMessageForm: React.FC = () => {
    const [message, setMessage] = useState("")
    const dispatch = useDispatch()
    const status = useSelector((state: AppStateType) => state.chat.status)

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
                <button disabled={status !== "ready"} onClick={sendMessageHandler}>
                    Отправить
                </button>
            </div>
        </div>
    )
}

export default ChatPage