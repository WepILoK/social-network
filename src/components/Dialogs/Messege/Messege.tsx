import React from "react";

import s from "../Dialogs.module.scss";


export const Message: React.FC<PropsType> = ({message}) => {
    return (
        <div className={s.dialogs_message_item}>{message}</div>
    );
};

type PropsType = {
    message: string
}

