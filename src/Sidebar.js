import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import PeopleIcon from "@material-ui/icons/People";
import ChatIcon from "@material-ui/icons/Chat";
import StorefrontIcon from "@material-ui/icons/Storefront";

function Sidebar() {
  return (
    <div className="side-bar">
      <SidebarRow title="Long Le" src="https://avatars.githubusercontent.com/u/11778858?v=4" />
      <SidebarRow title="Pages" Icon={EmojiFlagsIcon} />
      <SidebarRow title="Friends" Icon={PeopleIcon} />
      <SidebarRow title="Messenger" Icon={ChatIcon} />
      <SidebarRow title="MarketPlace" Icon={StorefrontIcon} />
    </div>
  );
}

export default Sidebar;
