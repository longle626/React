import React from "react";
import "./Feed.css";
import StoryLine from "./StoryLine";
import MessagePost from "./MessagePost";
import Post from "./Post";

function Feed() {
  return (
    <div className="feed">
      <StoryLine />
      <MessagePost />
      <Post />
      <Post />
      <Post />
    </div>
  );
}

export default Feed;
