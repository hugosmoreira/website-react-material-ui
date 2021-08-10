import React from "react";

import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
} from "@material-ui/core";

import MenuIcon from "@material-ui/icons/Menu";
import SideDrawer from "./SideDrawer";

function Header() {
  return (
    <>
      <AppBar
        position="fixed"
        style={{
          backgroundColor: "#2f2f2f",
          boxshadow: "none",
          padding: "10px 0px",
        }}
      >
        <Toolbar>
          <div className="header_logo">
            <div className="font_righteus header_logo_venue">MeTaLLiKa</div>
            <div className="header_logo_title">Musical Events</div>
          </div>

          <IconButton aria-label="Menu" color="inherit">
            <MenuIcon />
          </IconButton>
          <SideDrawer />
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Header;
