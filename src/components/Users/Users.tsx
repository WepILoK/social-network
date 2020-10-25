import React from "react";

import {User} from "./User";
import {Paginator} from "../common/Paginator/Paginator";
import {Preloader} from "../common/Preloader/Preloader";
import {UserSearchForm} from "./UsersSearchForm";

import {UsersType} from "../../types/types";
import {FilterType} from "../../redux/users_reducer";

export const Users: React.FC<PropsType> = ({onPageChanged, currentPage, totalUsersCount, pageSize, users, follow, followingInProgress, isFetching, unFollow, onFilterChanged}) => {
    return (
        <div>
            <UserSearchForm onFilterChanged={onFilterChanged}/>
            <Paginator currentPage={currentPage} pageSize={pageSize}
                       totalItemsCount={totalUsersCount} onPageChanged={onPageChanged}/>
            {isFetching ? <Preloader/> :
                <div>
                    {users.map(u =>
                        <User user={u} followingInProgress={followingInProgress}
                              follow={follow} unFollow={unFollow} key={u.id}/>)
                    }
                </div>}
        </div>
    )
}

type PropsType = {
    currentPage: number
    totalUsersCount: number
    pageSize: number
    isFetching: boolean
    users: Array<UsersType>
    followingInProgress: Array<number>
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    onPageChanged: (p: number) => void
    onFilterChanged: (filter: FilterType) => void
}
