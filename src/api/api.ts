import axios from "axios";
import {UsersType} from "../types/types";


export const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "16be0939-6c39-4d1e-95d5-a19401f38e3a"
    },
})

export enum ResultCodeEnum {
    Success = 0,
    Error = 1,
}
export enum ResultCodeCaptchaEnum {
    CaptchaIsRequired = 10
}

export type GetItemsType = {
    items: Array<UsersType>
    totalCount: number,
    error: null | string
}

export type APIResponseType<D = {},RC = ResultCodeEnum> = {
    data: D
    resultCode: RC
    messages: Array<string>

}





