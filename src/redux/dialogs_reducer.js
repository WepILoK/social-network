const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
    dialogs: [
        {id: 1, name: "Аноним"},
        {id: 2, name: "Аноним"},
        {id: 3, name: "Аноним"},
        {id: 5, name: "Аноним"},
    ],
    messages: [
        {id: 1, message: "Hello"},
        {id: 2, message: "How are you"},
        {id: 3, message: "Hey yo"},
    ],
};

const dialogsReducer = (state = initialState, action) => {
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

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody});


export default dialogsReducer;