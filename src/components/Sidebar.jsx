import React from "react";
import "./Sidebar.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import HomeIcon from "@mui/icons-material/Home";
import TagIcon from "@mui/icons-material/Tag";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import SidebarOption from "./SidebarOption";
import { Button } from "@mui/material";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <TwitterIcon className="icon"/>
      <SidebarOption active Icon={HomeIcon} title="Home" />
      <SidebarOption Icon={TagIcon} title="Explore" />
      <SidebarOption
        Icon={NotificationsNoneOutlinedIcon}
        title="Notifications"
      />
      <SidebarOption Icon={MailOutlinedIcon} title="Messages" />
      <SidebarOption Icon={BookmarkBorderOutlinedIcon} title="Bookmarks" />
      <SidebarOption Icon={ArticleOutlinedIcon} title="Lists" />
      <SidebarOption Icon={PersonOutlineOutlinedIcon} title="Profile" />
      <SidebarOption Icon={MoreHorizOutlinedIcon} title="More" />
      <Button variant="outlined" className="sidebar__tweet" fullWidth>Tweet</Button>
    </div>
  );
};

export default Sidebar;
