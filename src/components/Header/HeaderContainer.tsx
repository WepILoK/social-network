import React from "react";
import {connect} from "react-redux";

import {Header} from "./Header";
import {logOut} from "../../redux/auth_reducer";

import {AppStateType} from "../../redux/redux-store";


const HeaderContainer: React.FC<MapStatePropsType & MapDispatchPropsType> = ({isAuth, login, logOut}) => {
    return (
        <Header isAuth={isAuth}
                login={login}
                logOut={logOut}/>
    )
}

const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})

export default connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>
(mapStateToProps, {logOut})(HeaderContainer);


type MapDispatchPropsType = {
    logOut: () => void
}
type MapStatePropsType = {
    isAuth: boolean
    login: string | null
}