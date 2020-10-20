import profileReducer, {actions} from "./profile_reducer";

let state = {
    posts: [
        {id: 1, message: "Hi, how are you?", likesCount: 3},
        {id: 2, message: "It's my first posts", likesCount: 91},
        {id: 3, message: "Blalallalabla", likesCount: 91},
        {id: 4, message: "Da-da", likesCount: 91},
    ],
    profile: null,
    status: "",
    newPostText: ""
};

it ("length of posts should be incremented", () => {
    let action = actions.addPostActionCreator("it-cama");
    let newState = profileReducer(state,action);
    expect(newState.posts.length).toBe(5);
});
it ("message of posts soul be incremented", () => {
    let action = actions.addPostActionCreator("it-cama");
    let newState = profileReducer(state,action);
    expect(newState.posts[4].message).toBe("it-cama");
});
it ("after deleting length of message should be decrement", () => {
    let action = actions.deletePost(1);
    let newState = profileReducer(state,action);
    expect(newState.posts.length).toBe(3);
});
