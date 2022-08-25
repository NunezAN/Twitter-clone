import { Avatar, Button } from "@mui/material";
import React from "react";
import "./TweetBox.css";

const TweetBox = () => {
  return (
    <div className="tweetBox">
      <form className="tweetBox__form">
        <div className="tweetBox__form--input--container">
          <Avatar src="https://pbs.twimg.com/media/CmpIszlVMAAK1MK.jpg:large"></Avatar>
          <input
            multiline={true}
            className="tweetBox__form--input"
            placeholder="What's happening?"
            type="text"
          />
        </div>
        <div className="tweetBox__form--button--container">
          <Button className="tweetBox__btn">Tweet</Button>
        </div>
      </form>
    </div>
  );
};

export default TweetBox;
