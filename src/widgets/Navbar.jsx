import React from "react";
import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const light = theme.palette.primary.light;
  const dark = theme.palette.primary.dark;
  const shadow = theme.palette.neutral.dark;

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: light,
        color: dark,
        boxShadow: `3px 3px 5px ${shadow},-3px -3px 5px ${shadow}`,
      }}
    >
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h4"
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
  );
};

export default Navbar;
