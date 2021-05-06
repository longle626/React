import { Avatar } from "@material-ui/core";
import React from "react";
import "./Post.css";

function Post({ profilePic, image, userName, timeStamp, message }) {
  return (
    <div className="post">
      <div className="post-top">
        <Avatar src={profilePic} className="post_avatar" />
        <div className="post-topInfo">
          <h3>{userName}</h3>
          <p>Time..</p>
        </div>
      </div>
      <div className="post-bottom">
        <p>{message}</p>
      </div>
      <div className="post-image">
        <img src={image} />
      </div>
    </div>
  );
}

export default Post;
