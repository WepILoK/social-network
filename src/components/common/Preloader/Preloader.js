import style from "./Preloader.module.scss";
import React from "react";

let Preloader = (props) => {
    return (
        <div className={style.lds_ellipsis}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

export default Preloader;