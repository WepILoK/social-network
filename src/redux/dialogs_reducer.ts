import {InferActionsTypes } from "./redux-store";

type DialogType = {
    id: number, name: string
}

type MessageType = {
    id: number, message: string
}

let initialState = {
    dialogs: [
        {id: 1, name: "Аноним"},
        {id: 2, name: "Аноним"},
        {id: 3, name: "Аноним"},
        {id: 5, name: "Аноним"},
    ] as Array<DialogType>,
    messages: [
        {id: 1, message: "Hello"},
        {id: 2, message: "How are you"},
        {id: 3, message: "Hey yo"},
    ] as Array<MessageType>,
};

const dialogsReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "SEND-MESSAGE":
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: body}],
            };
        default:
            return state;
    }
};

export const actions = {
    sendMessage: (newMessageBody: string) => ({
        type: "SEND-MESSAGE" ,newMessageBody} as const)
}


export default dialogsReducer;

export type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>