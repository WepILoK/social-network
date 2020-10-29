import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import * as queryString from "querystring";

import {User} from "./User";
import {Paginator} from "../common/Paginator/Paginator";
import {Preloader} from "../common/Preloader/Preloader";
import {UserSearchForm} from "./UsersSearchForm";

import {FilterType, follow, requestUsers, unFollow} from "../../redux/users_reducer";
import {
    getCurrentPage, getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers,
    getUsersFilter
} from "../../redux/selectors/users_selectors";


export const Users: React.FC<PropsType> = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const users = useSelector(getUsers);
    const totalUsersCount = useSelector(getTotalUsersCount);
    const pageSize = useSelector(getPageSize);
    const filter = useSelector(getUsersFilter);
    const currentPage = useSelector(getCurrentPage);
    const isFetching = useSelector(getIsFetching);
    const followingInProgress = useSelector(getFollowingInProgress);

    useEffect(() => {
        const parsed = queryString.parse(history.location.search.substr(1)) as QueryParamsType
        let actualPage = currentPage
        let actualFilter = filter
        if(!!parsed.page) actualPage = Number(parsed.page)
        if(!!parsed.term) actualFilter = {...actualFilter, term: parsed.term as string}

        switch (parsed.friend) {
            case "null":
                actualFilter = {...actualFilter, friend: null}
                break;
            case "true":
                actualFilter = {...actualFilter, friend: true}
                break;
            case "false":
                actualFilter = {...actualFilter, friend: false}
                break;
        }
        dispatch(requestUsers(actualPage, pageSize, actualFilter));
    }, [])

    useEffect(() => {
        const query: QueryParamsType = {}
        if(!!filter.term) query.term = filter.term
        if(filter.friend !== null) query.friend = String(filter.friend)
        if(currentPage !== 1) query.page = String(currentPage)
            history.push({
            pathname: "/users",
            search: queryString.stringify(query)
        })
    }, [filter, currentPage])

    const onPageChanged = (pageNumber: number) => {
        dispatch(requestUsers(pageNumber, pageSize, filter));
    }

    const onFilterChanged = (filter: FilterType) => {
        dispatch(requestUsers(1, pageSize, filter));
    }

    const following = (userId: number) => {
        dispatch(follow(userId))
    }
    const unFollowing = (userId: number) => {
        dispatch(unFollow(userId))
    }

    return (
        <div>
            <h2>{"Пользователи"}</h2>
            <UserSearchForm onFilterChanged={onFilterChanged}/>
            <Paginator currentPage={currentPage} pageSize={pageSize}
                       totalItemsCount={totalUsersCount} onPageChanged={onPageChanged}/>
            {isFetching ? <Preloader/> :
                <div>
                    {users.map(u =>
                        <User user={u} followingInProgress={followingInProgress}
                              follow={following} unFollow={unFollowing} key={u.id}/>)
                    }
                </div>}
        </div>
    )
}

type PropsType = {}
type QueryParamsType = {term?: string, friend?: string, page?: string}