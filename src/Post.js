import { Avatar } from "@material-ui/core";
import React from "react";
import "./Post.css";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import NearMeIcon from "@material-ui/icons/NearMe";

function Post({ profilePic, image, userName, timeStamp, message }) {
  return (
    <div className="post">
      <div className="post-top">
        <Avatar src={profilePic} className="post-avatar" />
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
      <div className="post-options">
        <div className="post-option">
          <ThumbUpIcon />
          <p>Like</p>
        </div>
        <div className="post-option">
          <ChatBubbleOutlineIcon />
          <p>Comment</p>
        </div>
        <div className="post-option">
          <NearMeIcon />
          <p>Share</p>
        </div>
      </div>
    </div>
  );
}

export default Post;
