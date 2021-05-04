import React from "react";
import "./header.css";
import { Avatar, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import FlagIcon from "@material-ui/icons/Flag";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import StorefrontIcon from "@material-ui/icons/Storefront";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import AddIcon from "@material-ui/icons/Add";
import ForumTwoToneIcon from '@material-ui/icons/ForumTwoTone';
import NotificationsNoneTwoToneIcon from '@material-ui/icons/NotificationsNoneTwoTone';
import ExpandMoreTwoToneIcon from '@material-ui/icons/ExpandMoreTwoTone';
function Header() {
  return (
    <div className="header">
      <div className="header-left">
        <img src="" />
        <div className="header-input">
          <SearchIcon />
          <input />
        </div>
      </div>
      <div className="header-mid">
        <div className="header_option">
          <HomeIcon />
        </div>
        <div className="header_option">
          <FlagIcon />
        </div>
        <div className="header_option">
          <SubscriptionsIcon />
        </div>
        <div className="header_option">
          <StorefrontIcon />
        </div>
        <div className="header_option">
          <SupervisedUserCircleIcon />
        </div>
      </div>
      <div className="header-right">
        <div className="header-info">
          <Avatar />
          <h4>long le</h4>
        </div>
        <IconButton>
          <AddIcon />
        </IconButton>
				<IconButton>
          <ForumTwoToneIcon />
        </IconButton>
				<IconButton>
          <NotificationsNoneTwoToneIcon />
        </IconButton>
				<IconButton>
          <ExpandMoreTwoToneIcon />
        </IconButton>

      </div>
    </div>
  );
}

export default Header;
