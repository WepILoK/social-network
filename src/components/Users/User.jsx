import React from "react";
import styles from "./users.module.scss";
import userPhoto from "../../assets/images/default_avatar.png";
import {NavLink} from "react-router-dom";
import style from "./users.module.scss";

let User = ({user, followingInProgress, unFollow, follow}) => {
    return (
        <div className={style.userItems}>
            <span>
                <div>
                    <NavLink to={"/profile/" + user.id}>
                        <img src={user.photos.small != null ? user.photos.small : userPhoto}
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
                <span>
                    <div>{"user.location.city"}</div>
                    <div>{"user.location.country"}</div>
                </span>
            </span>
        </div>
    )
}

export default User;