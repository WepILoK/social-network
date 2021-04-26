import {instance, APIResponseType, ResultCodeCaptchaEnum, ResultCodeEnum} from "./api";

export const authAPI = {
    me() {
        return instance.get<APIResponseType<MeResponseDataType>>(`auth/me`).then(res => res.data)
    },
    login(email: string, password: string, rememberMe = false, captcha: null | string = null) {
        return instance.post<APIResponseType<LoginResponseDataType, ResultCodeEnum | ResultCodeCaptchaEnum>>(`auth/login`, {email, password, rememberMe, captcha})
            .then(res => res.data)
    },
    logOut() {
        return instance.delete<APIResponseType>(`auth/login`).then(res => res.data)
    },
};


type MeResponseDataType = {
        id: number
        email: string
        login: string
}

type LoginResponseDataType = {
        id: number
}
