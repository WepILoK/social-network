import React from "react";

import User from "./User";
import Paginator from "../common/Paginator/Paginator";
import Preloader from "../common/Preloader/Preloader";

import {UsersType} from "../../types/types";

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
}

export const Users: React.FC<PropsType> = ({onPageChanged, currentPage, totalUsersCount, pageSize, users, follow, followingInProgress, isFetching, unFollow}) => {
    return (
        <div>
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
