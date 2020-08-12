import React from "react";
import {NavLink} from "react-router-dom";
import s from "../Dialogs.module.scss";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={s.dialog + " " + s.active}>
            <img src="https://store.playstation.com/store/api/chihiro/00_09_000/container/RU/ru/999/EP2402-CUSA05624_00-AV00000000000110/1576760036000/image?w=240&h=240&bg_color=000000&opacity=100&_version=00_09_000"></img>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
};

export default DialogItem;