import axios from "axios";
import {UsersType} from "../types/types";


export const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "c6656948-fc32-4fc4-9d90-60cb1f9c7aee"
    },
})

export enum ResultCodeEnum {// enum может быть либо A либо B либо...
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





