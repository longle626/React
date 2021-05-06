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
				<h2>Dev-Space</h2> 
        <div className="header-input">
          <SearchIcon fontSize="small"/>
          <input placeholder="Search Me"/>
        </div>
      </div>
      <div className="header-center">
        <div className="header-option header-option-active">
          <HomeIcon fontSize="large"/>
        </div>
        <div className="header-option">
          <FlagIcon fontSize="large" />
        </div>
        <div className="header-option">
          <SubscriptionsIcon fontSize="large"/>
        </div>
        <div className="header-option">
          <StorefrontIcon fontSize="large"/>
        </div>
        <div className="header-option">
          <SupervisedUserCircleIcon fontSize="large"/>
        </div>
      </div>
      <div className="header-right">
        <div className="header-info">
          <Avatar />
          <h4>User</h4>
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
