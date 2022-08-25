import React from "react";
import "./Feed.css";
import TweetBox from "./TweetBox";

const Feed = () => {
  return (
    <div className="feed">
      <div className="feed__header">
        <h2 className="feed__header--title">Home</h2>
      </div>
      <TweetBox/>
    </div>
  );
};

export default Feed;
