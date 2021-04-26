import {Dispatch} from "redux";
import {FormAction} from "redux-form";
import {v1} from "uuid";

import {BaseThunkType, InferActionsTypes} from "./redux-store";
import {chatAPI, ChatMessageApiType, StatusType} from "../api/chat-api";


let initialState = {
    messages: [] as ChatMessageType[],
    status: "pending" as StatusType
}

const chatReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "MESSAGE_RECEIVED":
            return {
                ...state,
                messages: [...state.messages, ...action.payload.messages.map( m => ({...m, id: v1()}))]
                    .filter((message, index,array) => index >= array.length - 100)
            }
        case "STATUS_CHANGED":
            return {
                ...state,
                status: action.payload.status
            }
        default:
            return state;
    }
};

export const actions = {
    messagesReceived: (messages: ChatMessageApiType[]) => ({
        type: "MESSAGE_RECEIVED", payload: {messages}
    } as const),
    statusChanged: (status: StatusType) => ({
        type: "STATUS_CHANGED", payload: {status}
    } as const)
}

let _newMessageHandler: ((message: ChatMessageApiType[]) => void) | null = null

const newMessageHandlerCreator = (dispatch: Dispatch) => {
    if (_newMessageHandler === null) {
        _newMessageHandler = (messages) => {
            dispatch(actions.messagesReceived(messages))
        }
    }
    return _newMessageHandler
}

let _statusChangedHandler: ((status: StatusType) => void) | null = null

const statusChangedHandlerCreator = (dispatch: Dispatch) => {
    if (_statusChangedHandler === null) {
        _statusChangedHandler = (status) => {
            dispatch(actions.statusChanged(status))
        }
    }
    return _statusChangedHandler
}

export const startMessagesListening = (): ThunkType => async (dispatch) => {
    chatAPI.start()
    chatAPI.subscribe('messages-received', newMessageHandlerCreator(dispatch))
    chatAPI.subscribe('status-changed', statusChangedHandlerCreator(dispatch))
}
export const stopMessagesListening = (): ThunkType => async (dispatch) => {
    chatAPI.unSubscribe('messages-received',newMessageHandlerCreator(dispatch))
    chatAPI.unSubscribe('status-changed',statusChangedHandlerCreator(dispatch))
    chatAPI.stop()
}
export const sendMessage = (message: string): ThunkType => async () => {
    chatAPI.sendMessage(message)
}

export default chatReducer

type ChatMessageType = ChatMessageApiType & {id: string}
type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType | FormAction>
