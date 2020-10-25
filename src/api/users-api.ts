import {GetItemsType, instance, APIResponseType} from "./api";


export const usersApi = {getUsers(currentPage = 1, pageSize = 10, term = "", friend: null | false | true = null) {
        return instance.get<GetItemsType>
        (`users?page=${currentPage}&count=${pageSize}&term=${term}` + (friend === null ? "" : `&friend=${friend}`))
            .then(response => response.data)
    },
    follow(id: number) {
        return instance.post<APIResponseType>(`follow/${id}`, {},)
            .then(response => response.data)
    },
    unFollow(id: number) {
        return instance.delete<APIResponseType>(`follow/${id}`)
            .then(response => response.data)
    },
}
