import {Dispatch} from "redux";
import {FormAction} from "redux-form";

import {BaseThunkType, InferActionsTypes} from "./redux-store";
import {chatAPI, ChatMessageType} from "../api/chat-api";


let initialState = {
    messages: [] as ChatMessageType[]
};

const chatReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "MESSAGE_RECEIVED":
            return {
                ...state,
                messages: [...state.messages, ...action.payload.messages]
            }
        default:
            return state;
    }
};

export const actions = {
    messagesReceived: (messages: ChatMessageType[]) => ({
        type: "MESSAGE_RECEIVED", payload: {messages}
    } as const),

}
let _newMessageHandler: ((message:ChatMessageType[]) => void) | null = null

const newMessageHandlerCreator = (dispatch: Dispatch) => {
    if (_newMessageHandler === null) {
        _newMessageHandler = (messages) => {
            dispatch(actions.messagesReceived(messages))
        }
    }

    return _newMessageHandler
}

export const startMessagesListening = (): ThunkType => async (dispatch) => {
    chatAPI.start()
    chatAPI.subscribe(newMessageHandlerCreator(dispatch))
}
export const stopMessagesListening = (): ThunkType => async (dispatch) => {
    chatAPI.unSubscribe(newMessageHandlerCreator(dispatch))
    chatAPI.stop()
}
export const sendMessage = (message: string): ThunkType => async () => {
    chatAPI.sendMessage(message)
}

export default chatReducer

type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType | FormAction>
