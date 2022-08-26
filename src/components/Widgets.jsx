import React from "react";
import "./Widgets.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@mui/icons-material/Search";

const Widgets = () => {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__SearchIcon" />
        <input className="widgets__input--input" type="text" placeholder="Search Twitter" />
      </div>
      <div className="widgets__wh">
        <h2 className="widgets__wh--title">What's Happening</h2>
        <TwitterTimelineEmbed
          theme="dark"
          sourceType="profile"
          screenName="motivational"
          autoHeight ={true}
          tweetLimit = {2}
        />
      </div>
    </div>
  );
};

export default Widgets;
