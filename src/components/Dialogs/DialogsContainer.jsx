import React from "react";
import {sendMessageCreator, } from "../../redux/dialogs_reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

/*
const DialogsContainer = (props) => {
    // let state = props.store.getState();
    //
    // let onSendMessageClick = () => {
    //     props.store.dispatch(sendMessageCreator());
    // };
    //
    // let onNewMessageChange = (text) => {
    //     props.store.dispatch(updateNewMessageBodyCreator(text));
    // };
    //

    return (
        <StoreContext.Consumer>{(store) => {
            let state = store.getState();
            let onSendMessageClick = () => {
                store.dispatch(sendMessageCreator());
            };

            let onNewMessageChange = (text) => {
                store.dispatch(updateNewMessageBodyCreator(text));
            };

            return (<Dialogs
                sendMessage={onSendMessageClick}
                updateNewMessageBody={onNewMessageChange}
                dialogsPage={state.dialogsPage}
            />)
        }}</StoreContext.Consumer>

    );
};
*/


let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (newMessageBody) => {
            dispatch(sendMessageCreator(newMessageBody));
        },
    }
}

export default compose(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(Dialogs);