import { Avatar } from "@material-ui/core";
import React from "react";
import './Story.css';

function Story({ img, profilePic, name }) {
  return (
    <div style={{ backgroundImage: `url(${img})` }} className="story">
      <Avatar className="story-avatar" src={profilePic} />
      <h4>{name}</h4>
    </div>
  );
}

export default Story;
