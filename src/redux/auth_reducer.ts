import {FormAction, stopSubmit} from "redux-form";

import {ResultCodeCaptchaEnum, ResultCodeEnum} from "../api/api";
import {BaseThunkType, InferActionsTypes} from "./redux-store";
import {authAPI} from "../api/auth-api";
import {securityAPI} from "../api/security-api";


let initialState = {
    id: null as number | null,
    login: null as string | null,
    email: null as string | null,
    isAuth: false,
    captchaUrl: null as string | null,
};

const authReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "SET_USER_DATA":
        case "GET_CAPTCHA_URL_SUCCESS":
            return {
                ...state, 
                ...action.payload,
            }
        default:
            return state;
    }
};

export const actions = {
    setAuthUserData: (id: number | null, email: string | null, login: string | null, isAuth: boolean) => ({
        type: "SET_USER_DATA", payload: {id, email, login, isAuth}
    } as const),
    getCaptchaUrlSuccess: (captchaUrl: string) => ({
        type: "GET_CAPTCHA_URL_SUCCESS", payload: {captchaUrl}
    } as const),

}


export const getCaptchaUrl = (): ThunkType => async (dispatch) => {
    let data = await securityAPI.getCaptchaUrl();
    const captchaUrl = data.url;
    dispatch(actions.getCaptchaUrlSuccess(captchaUrl));
};

export const logOut = (): ThunkType => async (dispatch) => {
    let logOutData = await authAPI.logOut()
    if (logOutData.resultCode === ResultCodeEnum.Success) {
        dispatch(actions.setAuthUserData(null, null, null, false));
    }
};

export const getAuthUserData = (): ThunkType => async (dispatch) => {
    let meData = await authAPI.me();
    if (meData.resultCode === ResultCodeEnum.Success) {
        let {id, login, email} = meData.data;
        dispatch(actions.setAuthUserData(id, email, login, true));
    }
};

export const login = (email: string, password: string, rememberMe: boolean, captcha: string):ThunkType =>
    async (dispatch) => {
    let loginData = await authAPI.login(email, password, rememberMe, captcha);
    if (loginData.resultCode === ResultCodeEnum.Success) {
        dispatch(getAuthUserData());
    } else {
        if (loginData.resultCode === ResultCodeCaptchaEnum.CaptchaIsRequired) {
            dispatch(getCaptchaUrl());
        }
        let message = loginData.messages.length > 0 ? loginData.messages[0] : "Some error"
        dispatch(stopSubmit("login", {_error: message}));
    }
};

export default authReducer

type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType | FormAction>