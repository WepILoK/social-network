import React from "react";
import {NavLink} from "react-router-dom";

import s from "../Dialogs.module.scss";


export const DialogItem: React.FC<PropsType> = ({id, name}) => {
    const path = "/dialogs/" + id;
    return (
        <div className={s.dialog + " " + s.active}>
            <img
                src="https://store.playstation.com/store/api/chihiro/00_09_000/container/RU/ru/999/EP2402-CUSA05624_00-AV00000000000110/1576760036000/image?w=240&h=240&bg_color=000000&opacity=100&_version=00_09_000"
                alt="avatar img"/>
            <NavLink to={path}>{name}</NavLink>
        </div>
    )
}

type PropsType = {
    id: number
    name: string
}

