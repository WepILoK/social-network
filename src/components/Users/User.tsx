import React from "react";
import {NavLink} from "react-router-dom";

import userPhoto from "../../assets/images/default_avatar.png";

import styles from "./users.module.scss";
import {UsersType} from "../../types/types";


export const User: React.FC<PropsType> = ({user, followingInProgress, unFollow, follow}) => {
    return (
        <div className={styles.userItems}>
            <span>
                <div>
                    <NavLink to={"/profile/" + user.id}>
                        <img src={user.photos.small != null ? user.photos.small : userPhoto}
                             alt="Avatar img"
                             className={styles.usersPhoto}/>
                    </NavLink>
                </div>
                <div>
                    {user.followed
                        ? <button disabled={followingInProgress.some(id => id === user.id)}
                                  onClick={() => {
                                      unFollow(user.id);
                                  }}>Un follow</button>
                        : <button disabled={followingInProgress.some(id => id === user.id)}
                                  onClick={() => {
                                      follow(user.id);
                                  }}>Follow</button>}
                </div>
            </span>
            <span>
                <span>
                    <div>{user.name}</div>
                    <div>{user.status}</div>
                </span>
            </span>
        </div>
    )
}

type PropsType = {
    user: UsersType
    followingInProgress: Array<number>
    follow: (userId: number) => void
    unFollow: (userId: number) => void
}
