import React from "react";

import style from "./Preloader.module.scss";


export const Preloader: React.FC = () => {
    return (
        <div className={style.lds_ellipsis}>
            <div>

            </div>
            <div>

            </div>
            <div>

            </div>
            <div>

            </div>
        </div>
    )
}

