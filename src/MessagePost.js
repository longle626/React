import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import SentimentVerySatisfiedIcon from "@material-ui/icons/SentimentVerySatisfied";
import "./MessagePost.css";

function MessagePost() {
  const handleSubmit = (e) => {
    e.preventDefault();
    setNewPost("");
    setImageUrl("");
  };
  const [newPost, setNewPost] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  return (
    <div className="messagePost">
      <div className="messagePost-top">
        <Avatar />
        <form>
          <input
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
            className="messagePost_input"
            placeholder="What's on your mind?"
            type="text"
          ></input>
          <input
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            placeholder="image URl (Optional)"
            type="text"
          ></input>
          <button onClick={handleSubmit}>Hidden Submit</button>
        </form>
      </div>
      <div className="messagePost-bottom">
        <div className="messagePost-option">
          <VideocamIcon style={{ color: "red" }} />
          <h3> Live Video</h3>
        </div>
        <div className="messagePost-option">
          <PhotoLibraryIcon style={{ color: "green" }} />
          <h3> Photo/Video</h3>
        </div>
        <div className="messagePost-option">
          <SentimentVerySatisfiedIcon style={{ color: "orange" }} />
          <h3> Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
}

export default MessagePost;
