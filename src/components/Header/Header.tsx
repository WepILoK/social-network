import React from "react";
import {NavLink} from "react-router-dom";

import s from './Header.module.scss';


export const Header: React.FC<PropsType> = ({isAuth, login, logOut}) => {
    return (
        <header className={s.header}>
            <img src="https://static.rfstat.com/renderforest/images/v2/logo-homepage/gradient_2.png" alt="logo img"/>
            <div className={s.loginBlock}>
                {isAuth
                    ? <div> {login} - <button onClick={logOut}>Log out</button></div>
                    : <NavLink to={`/login`}>Login</NavLink>}

            </div>
        </header>
    )
}

type PropsType = {
    isAuth: boolean
    login: string | null
    logOut: () => void
}