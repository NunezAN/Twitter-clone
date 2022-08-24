import React from "react";
import "./SidebarOption.css";

const SidebarOption = ({ active, Icon, title }) => {
  return (
    <div className={`sidebarOption ${active && `sidebarOption__active`}`}>
      <Icon className="sidebarOption__icon" />
      <h2 className="sidebarOption__title">{title}</h2>
    </div>
  );
};

export default SidebarOption;
