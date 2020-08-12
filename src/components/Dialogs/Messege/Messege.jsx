import React from "react";
import s from "../Dialogs.module.scss";

const Message = (props) => {
    return (
        <div className={s.dialogs_message_item}>{props.message}</div>
    );
};

export default Message;