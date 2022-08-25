import { Avatar } from "@mui/material";
import React from "react";
import "./Post.css";
import VerifiedIcon from "@mui/icons-material/Verified";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import RepeatOutlinedIcon from "@mui/icons-material/RepeatOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import PublishIcon from "@mui/icons-material/Publish";

const Post = (displayName, userName, verified, text, image, avatar) => {
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar src="https://pbs.twimg.com/media/CmpIszlVMAAK1MK.jpg:large" />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              Alex Nunez{" "}
              <span className="post__header--special">
                <VerifiedIcon className="verified--icon" />
                @HONCHO
              </span>
            </h3>
          </div>
          <div className="post__headerDescription">
            <p>This is a tweet post🚀</p>
          </div>
        </div>
        <img
          className="post__img"
          src="https://media4.giphy.com/media/h2NxCschQ81ltiL9HV/giphy.gif?cid=ecf05e470tcujvr3u0hx7zm1nneh06zqmicr0eawg0kint1x&rid=giphy.gif&ct=g"
          alt=""
        />
        <div className="post__footer">
          <ModeCommentOutlinedIcon fontSize="smaill" />
          <RepeatOutlinedIcon fontSize="smaill" />
          <FavoriteBorderOutlinedIcon fontSize="smaill" />
          <PublishIcon fontSize="smaill" />
        </div>
      </div>
    </div>
  );
};

export default Post;
