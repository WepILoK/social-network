import {Redirect} from "react-router-dom";
import React from "react";
import {connect} from "react-redux";

import {AppStateType} from "../redux/redux-store";


let mapStateToPropsForRedirect = (state: AppStateType) => ({
    isAuth: state.auth.isAuth,
} as MapStatePropsType);

export function withAuthRedirect<WCP> (Component: React.ComponentType<WCP>) {
    const RedirectComponent: React.FC<MapStatePropsType & MapDispatchPropsType> = (props) => {
        const {isAuth, ...restProps} = props
        if (!isAuth) return <Redirect to={"/login"}/>

            return <Component {...restProps as WCP}/>
    }
    return connect<MapStatePropsType, MapDispatchPropsType, WCP, AppStateType>(mapStateToPropsForRedirect, {})(RedirectComponent);
}

type MapStatePropsType = {
    isAuth: boolean
}

type MapDispatchPropsType = {
}