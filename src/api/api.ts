import axios from "axios";
import {UsersType} from "../types/types";


export const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "350f9694-8da6-4ed4-9d92-64e0db1a0191"
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





