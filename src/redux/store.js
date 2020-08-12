import profileReducer from "./profile_reducer";
import dialogsReducer from "./dialogs_reducer";
import sidebarReducer from "./sidebar_reducer";


let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hi, how are you?", likesCount: "3"},
                {id: 2, message: "It's my first posts", likesCount: "91"},
                {id: 3, message: "Blalallalabla", likesCount: "91"},
                {id: 4, message: "Da-da", likesCount: "91"},
            ],
            newPostText: ""
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: "Igor"},
                {id: 2, name: "Pavel"},
                {id: 3, name: "Dima"},
                {id: 4, name: "Nickolay"},
                {id: 5, name: "Artur"},
            ],

            messages: [
                {id: 1, message: "Hello"},
                {id: 2, message: "How are you"},
                {id: 3, message: "Hey yo"},
            ],
            newMessageBody: ""

        },
        sideBar: {},
    },
    _callSubscriber() {
        console.log('fafa')
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },
    getState() {
        return this._state;
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sideBar = sidebarReducer(this._state.sideBar, action)

        this._callSubscriber(this._state)

    },
}

export default store;