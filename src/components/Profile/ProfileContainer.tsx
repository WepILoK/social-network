import React, {useEffect} from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import {RouteComponentProps, withRouter} from "react-router-dom";

import {Profile} from "./Profile";
import {getStatus, getUserProfile, savePhoto, saveProfile, updateStatus,} from "../../redux/profile_reducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

import {AppStateType} from "../../redux/redux-store";
import {ProfileType} from "../../types/types";


const ProfileContainer:React.FC<PropsType> = (props) => {
    const refreshProfile = () => {
        let userId: number | null = +props.match.params.userId;
        if (!userId) {
            userId = props.authorizedUserId;
            if (!userId) {
                props.history.push("/login")
            }
        }
        props.getUserProfile(userId as number);
        props.getStatus(userId as number);
    }

    useEffect(()=> {
        refreshProfile();
    }, [props.match.params.userId])

        return (
            <Profile {...props}
                     isOwner={!props.match.params.userId}
                     profile={props.profile}
                     status={props.status}
                     updateStatus={props.updateStatus}
                     savePhoto={props.savePhoto}/>
        );
}


const mapStateToProps = (state: AppStateType) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.id,
    isAuth: state.auth.isAuth,
});


export default compose<React.ComponentType>(connect(mapStateToProps,
    {getUserProfile, getStatus, updateStatus, savePhoto, saveProfile}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)

type MapStateType = ReturnType<typeof mapStateToProps>
type MapDispatchType = {
    getUserProfile: (userId: number) => void
    getStatus: (userId: number) => void
    updateStatus: (status: string) => void
    savePhoto: (file: File) => void
    saveProfile: (profile: ProfileType) => Promise<any>
}
type PathParamsType = {
    userId: string
}

type PropsType = MapStateType & MapDispatchType & RouteComponentProps<PathParamsType>