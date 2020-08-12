import React from "react";
import s from "./Post.module.scss";

const Post = (props) => {
  return (
    <div className={s.content_post_item}>
      <img src="https://store.playstation.com/store/api/chihiro/00_09_000/container/RU/ru/999/EP2402-CUSA05624_00-AV00000000000110/1576760036000/image?w=240&h=240&bg_color=000000&opacity=100&_version=00_09_000"></img>
      {props.message}
      <div>
        <span>{props.likesСount} Like</span>
      </div>
    </div>
  );
};

export default Post;
