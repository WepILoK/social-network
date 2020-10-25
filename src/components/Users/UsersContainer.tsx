import React, {useEffect} from "react";
import {compose} from "redux";
import {connect} from "react-redux";

import {Users} from "./Users";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {
    follow,
    unFollow,
    requestUsers,
    FilterType
} from "../../redux/users_reducer";
import {
    getUsers,
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsersFilter
} from "../../redux/users_selectors";

import {UsersType} from "../../types/types";
import {AppStateType} from "../../redux/redux-store";


const UsersContainer: React.FC<PropsType> = React.memo(({
                                                            currentPage, follow, followingInProgress, getUsers, isFetching,
                                                            pageSize, totalUsersCount, unFollow, users, filter
                                                        }) => {
    useEffect(() => {
        getUsers(currentPage, pageSize, filter);
    }, [])

    const onPageChanged = (pageNumber: number) => {
        getUsers(pageNumber, pageSize, filter);
    }

    const onFilterChanged = (filter: FilterType) => {
        getUsers(1, pageSize, filter);
    }

    return (
        <>
            <h2>{"Пользователи"}</h2>
            <Users totalUsersCount={totalUsersCount}
                   pageSize={pageSize}
                   currentPage={currentPage}
                   users={users}
                   unFollow={unFollow}
                   follow={follow}
                   onPageChanged={onPageChanged}
                   followingInProgress={followingInProgress}
                   isFetching={isFetching}
                   onFilterChanged={onFilterChanged}
            />
        </>
    )
})

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
        filter: getUsersFilter(state),
    }
}

export default compose<React.ComponentType>(
    withAuthRedirect,
    connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(mapStateToProps, {
        follow, unFollow, getUsers: requestUsers
    }),
)(UsersContainer);

type MapStatePropsType = {
    currentPage: number
    pageSize: number
    totalUsersCount: number
    isFetching: boolean
    users: Array<UsersType>
    followingInProgress: Array<number>
    filter: FilterType
}

type MapDispatchPropsType = {
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    getUsers: (currentPage: number, pageSize: number, filter: FilterType) => void
}

type OwnPropsType = {
    pageTitle: string
}

type PropsType = MapDispatchPropsType & MapStatePropsType & OwnPropsType
