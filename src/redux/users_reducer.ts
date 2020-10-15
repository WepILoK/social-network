import {Dispatch} from "redux";

import {updateObjectInArray} from "../units/validators/object_helpers";
import {InferActionsTypes, BaseThunkType} from "./redux-store";

import {UsersType} from "../types/types";
import {usersApi} from "../api/users-api";
import { APIResponseType } from "../api/api";


let initialState = {
    users: [] as Array<UsersType>,
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [] as Array<number>, // мaсив зафоловенных номеров id
};

const usersReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "FOLLOW":
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: true}),
            }
        case "UN_FOLLOW":
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: false}),
            }
        case "SET_USERS":
            return {...state, users: action.users}
        case "SET_CURRENT_PAGE":
            return {...state, currentPage: action.currentPage}
        case "SET_TOTAL_USERS_COUNT":
            return {...state, totalUsersCount: action.count}
        case "TOGGLE_IS_FETCHING":
            return {...state, isFetching: action.isFetching}
        case "TOGGLE_IS_FOLLOWING_PROGRESS":
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state;
    }
};

export const actions = {
    followSuccess: (userId: number) => ({
        type: "FOLLOW", userId
    } as const),
    unFollowSuccess: (userId: number) => ({
        type: "UN_FOLLOW", userId
    } as const),
    setUsers: (users: Array<UsersType>) => ({
        type: "SET_USERS", users
    } as const),
    setCurrentPage: (currentPage: number) => ({
        type: "SET_CURRENT_PAGE",
        currentPage: currentPage
    } as const),
    setTotalUsersCount: (totalUsersCount: number) => ({
        type: "SET_TOTAL_USERS_COUNT",
        count: totalUsersCount
    } as const),
    toggleIsFetching: (isFetching: boolean) => ({
        type: "TOGGLE_IS_FETCHING",
        isFetching
    } as const),
    toggleFollowingProgress: (isFetching: boolean, userId: number) => ({
        type: "TOGGLE_IS_FOLLOWING_PROGRESS",
        isFetching,
        userId
    } as const),

}

export const requestUsers = (currentPage: number, pageSize: number): ThunkType =>
    async (dispatch) => {
        dispatch(actions.toggleIsFetching(true));
        dispatch(actions.setCurrentPage(currentPage));
        let data = await usersApi.getUsers(currentPage, pageSize)
        dispatch(actions.toggleIsFetching(false));
        dispatch(actions.setUsers(data.items));
        dispatch(actions.setTotalUsersCount(data.totalCount));

    };

const followUnFollowFlow = async (dispatch: Dispatch<ActionsType>,
                                  userId: number,
                                  apiMethod: (userId: number) => Promise<APIResponseType>,
                                  actionCreator: (userId: number) => ActionsType) => {
    dispatch(actions.toggleFollowingProgress(true, userId));
    let data = await apiMethod(userId)
    if (data.resultCode === 0) {
        dispatch(actionCreator(userId));
    }
    dispatch(actions.toggleFollowingProgress(false, userId));
}
export const follow = (userId: number): ThunkType =>
    async (dispatch) => {
        followUnFollowFlow(dispatch, userId, usersApi.follow.bind(usersApi), actions.followSuccess)
    };
export const unFollow = (userId: number): ThunkType =>
    async (dispatch) => {
        followUnFollowFlow(dispatch, userId, usersApi.unFollow.bind(usersApi), actions.unFollowSuccess)
    };

export default usersReducer

type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType>