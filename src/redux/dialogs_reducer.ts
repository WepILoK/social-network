const SEND_MESSAGE = "SEND-MESSAGE";

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

export type InitialStateType = typeof initialState

const dialogsReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: body}],
            };
        default:
            return state;
    }
};

type SendMessageCreatorActionType = {
    type: typeof SEND_MESSAGE, newMessageBody: string
}

export const sendMessageCreator = (newMessageBody: string): SendMessageCreatorActionType => ({
    type: SEND_MESSAGE,
    newMessageBody
});


export default dialogsReducer;