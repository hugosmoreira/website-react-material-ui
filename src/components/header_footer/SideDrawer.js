import React from "react";
import { Drawer, List, ListItem } from "@material-ui/core";

const SideDrawer = (props) => {
  return (
    <Drawer anchor="right" open={true}>
      <List component="nav">
        <ListItem button onClick={() => alert("CLICOUI AQUI PORRRAAAAAAA")}>
          Name of Item
        </ListItem>
      </List>
    </Drawer>
  );
};

export default SideDrawer;
