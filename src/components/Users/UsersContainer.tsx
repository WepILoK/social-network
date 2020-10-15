import React from "react";
import {compose} from "redux";
import {connect} from "react-redux";


import {Users} from "./Users";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {
    follow,
    unFollow,
    requestUsers
} from "../../redux/users_reducer";
import {
    getUsers,
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount
} from "../../redux/users_selectors";

import {UsersType} from "../../types/types";
import {AppStateType} from "../../redux/redux-store";

type MapStatePropsType = {
    currentPage: number
    pageSize: number
    totalUsersCount: number
    isFetching: boolean
    users: Array<UsersType>
    followingInProgress: Array<number>
}

type MapDispatchPropsType = {
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
}

type OwnPropsType = {
    pageTitle: string
}

type PropsType = MapDispatchPropsType & MapStatePropsType & OwnPropsType

class UsersContainer extends React.Component<PropsType> {

    componentDidMount() {
        const {currentPage, pageSize} = this.props
        this.props.getUsers(currentPage, pageSize);
    }

    onPageChanged = (pageNumber: number) => {
        const {pageSize} = this.props
        this.props.getUsers(pageNumber, pageSize);
    }

    render() {

        return (
            <>
                <h2>{this.props.pageTitle}</h2>
                <Users totalUsersCount={this.props.totalUsersCount}
                       pageSize={this.props.pageSize}
                       currentPage={this.props.currentPage}
                       users={this.props.users}
                       unFollow={this.props.unFollow}
                       follow={this.props.follow}
                       onPageChanged={this.onPageChanged}
                       followingInProgress={this.props.followingInProgress}
                       isFetching={this.props.isFetching}
                />
            </>
        )
    }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    }
}

export default compose(
    withAuthRedirect,
    connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(mapStateToProps, {
        follow, unFollow, getUsers: requestUsers
    }),
)(UsersContainer);