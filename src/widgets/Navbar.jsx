import React, { useState } from "react";
import { useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import {
  AppBar,
  Drawer,
  Toolbar,
  IconButton,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Logout from "@mui/icons-material/Logout";
import { AddCircleOutline } from "@mui/icons-material";

const Navbar = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const light = theme.palette.neutral.light;
  const dark = theme.palette.primary.dark;
  const medium = theme.palette.primary.medium;
  const shadow = theme.palette.neutral.dark;
  const userId = "24"; // temporary

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: light,
          color: dark,
          boxShadow: `1px 1px 5px ${shadow},-1px -1px 5px ${shadow}`,
        }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            sx={{ mr: 2 }}
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h4"
            color={medium}
            onClick={() => navigate("/home")}
            sx={{
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            Jam Session
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer}>
        <List>
          <ListItem
            key="profile"
            onClick={() => {
              navigate(`/profile/${userId}`);
              toggleDrawer();
            }}
            sx={{
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            <ListItemIcon>
              <AccountCircleIcon />
            </ListItemIcon>
            <ListItemText primary="My Profile" />
          </ListItem>
          <ListItem
            key="newpost"
            onClick={() => {
              navigate(`/create`);
              toggleDrawer();
            }}
            sx={{
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            <ListItemIcon>
              <AddCircleOutline />
            </ListItemIcon>
            <ListItemText primary="New Post" />
          </ListItem>
          <ListItem
            key="logout"
            onClick={toggleDrawer}
            sx={{
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            <ListItemIcon>
              <Logout />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;
