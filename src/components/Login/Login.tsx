import React from "react";
import {InjectedFormProps, reduxForm} from "redux-form";
import {Redirect} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {required} from "../../units/validators/validators";
import {createField, GetStringKeys, Input} from "../common/FormsControls/FormsControls";
import {login} from "../../redux/auth_reducer";

import style from "../common/FormsControls/FormsControls.module.scss"

import {AppStateType} from "../../redux/redux-store";


const LoginForm: React.FC<InjectedFormProps<LoginFormValuesType, PropsType> & PropsType> = ({handleSubmit, error, captchaUrl}) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField<LoginFormKeysType>("Email","email", [required], Input)}
            {createField<LoginFormKeysType>("Password", "password", [required], Input, {type: "password"})}
            {createField<LoginFormKeysType>(undefined, "rememberMe", [], Input,
                {type: "checkbox"}, "Remember me")}
            {captchaUrl && <img alt="" src={captchaUrl}/>}
            {captchaUrl && createField<LoginFormKeysType>("Captcha", "captcha", [required], Input, {},)}
            {error && <div className={style.formSummaryError}>
                {error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
};

export const Login: React.FC = () => {
    const dispatch = useDispatch();
    const isAuth = useSelector((state: AppStateType) => state.auth.isAuth)
    const captchaUrl = useSelector((state: AppStateType) => state.auth.captchaUrl)

    const onSubmit = ({email, password, rememberMe, captcha}: LoginFormValuesType) => {
        dispatch(login(email, password, rememberMe, captcha))
    }
    if (isAuth) {
        return <Redirect to={"/profile"}/>
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={captchaUrl}/>
        </div>
    )
};

const LoginReduxForm = reduxForm<LoginFormValuesType, PropsType>({form: "login"})(LoginForm);

type PropsType = {
    captchaUrl: string | null
}

export type LoginFormValuesType = {
    email: string
    password: string
    rememberMe: boolean
    captcha: string
}

type LoginFormKeysType = GetStringKeys<LoginFormValuesType>
