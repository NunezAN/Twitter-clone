import { Avatar } from "@mui/material";
import React, {forwardRef} from "react";
import "./Post.css";
import VerifiedIcon from "@mui/icons-material/Verified";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import RepeatOutlinedIcon from "@mui/icons-material/RepeatOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import PublishIcon from "@mui/icons-material/Publish";

const Post = forwardRef(({ displayName, userName, verified, text, image, avatar },ref) => {
  return (
    <div className="post" ref={ref}>
      <div className="post__avatar">
        <Avatar src={avatar} />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              {displayName}{" "}
              <span className="post__header--special">
                {verified && <VerifiedIcon className="verified--icon" />}{" "}@
                {userName}
              </span>
            </h3>
          </div>
          <div className="post__headerDescription">
            <p>{text}</p>
          </div>
        </div>
        <img className="post__img" src={image} alt="" />
        <div className="post__footer">
          <ModeCommentOutlinedIcon fontSize="small" />
          <RepeatOutlinedIcon fontSize="small" />
          <FavoriteBorderOutlinedIcon fontSize="small" />
          <PublishIcon fontSize="small" />
        </div>
      </div>
    </div>
  );
});

export default Post;
