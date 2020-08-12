import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";
import Preloader from "../common/Preloader/Preloader";
import style from "./users.module.scss"

const Users = ({onPageChanged, currentPage, totalUsersCount, pageSize, users, ...props}) => {

    return (
        <div>

            <Paginator currentPage={currentPage} pageSize={pageSize}
                       totalItemsCount={totalUsersCount} onPageChanged={onPageChanged}/>
            {props.isFetching ? <Preloader/> :
            <div >
                {
                    users.map(u =>
                        <User user={u} followingInProgress={props.followingInProgress}
                              follow={props.follow} unFollow={props.unFollow} key={u.id}/>)
                }
            </div>}
        </div>
    )
}

export default Users;