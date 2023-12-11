import React from "react";
import "../css/Sidebar.css";
import { MdChat, MdMoreVert, MdDonutLarge, MdSearch } from "react-icons/md";
import SidebarChat from "./SidebarChat";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar_header">
        <div className="sidebar_headerLeft">
          <img src="./images/1.jpg" className="avatar" alt="display pix" />
        </div>
        <div className="sidebar_headerRight">
          <span className="icon">
            <MdDonutLarge />
          </span>
          <span className="icon">
            <MdChat />
          </span>
          <span className="icon">
            <MdMoreVert />
          </span>
        </div>
      </div>

      <div className="sidebar_search">
        <div className="sidebar_searchContainer">
          <MdSearch className="searchIcon" />
          <input placeholder="Search or start new chat" type="text" />
        </div>
      </div>
      <div className="sidebar_chats">
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
      </div>
    </div>
  );
};

export default Sidebar;
