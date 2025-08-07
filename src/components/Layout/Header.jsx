import { AppBar, Box, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import "../../styles/HeaderStyles.css";
import { MdFastfood } from "react-icons/md";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  }
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <MdFastfood color="goldenrod" size={30}></MdFastfood>
      <Typography
              variant="p"
              sx={{ flexGrow: 1, marginLeft: "7px" }}
              component={"div"}
              color="goldenrod"
            >
              My Res
            </Typography>
              <ul className="mobile-navigation-menu">
                <li>
                  <Link to={"/"}>Home</Link>
                </li>
                <li>
                  <Link to={"/menu"}>Menu</Link>
                </li>
                <li>
                  <Link to={"/about"}>About</Link>
                </li>
                <li>
                  <Link to={"/contact"}>Contact</Link>
                </li>
              </ul>
    </Box>
  )
  return (
    <>
      <Box>
        <AppBar component={"nav"} sx={{ bgcolor: "black" }}>
          <Toolbar>
            <IconButton
            onClick={handleDrawerToggle}
              color="inherit"
              edge="start"
              aria-label="open drawer"
              sx={{
                display: {
                  xs: "block",
                  sm: "none",
                  color: "white",
                  marginRight: "15px",
                },
              }}
            >
              <IoMenu size={30}></IoMenu>
            </IconButton>
            <MdFastfood color="goldenrod" size={30}></MdFastfood>
            <Typography
              variant="h4"
              sx={{ flexGrow: 1, marginLeft: "7px" }}
              component={"div"}
              color="goldenrod"
            >
              My Res
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <ul className="navigation-menu">
                <li>
                  <Link to={"/"}>Home</Link>
                </li>
                <li>
                  <Link to={"/menu"}>Menu</Link>
                </li>
                <li>
                  <Link to={"/about"}>About</Link>
                </li>
                <li>
                  <Link to={"/contact"}>Contact</Link>
                </li>
              </ul>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component={"nav"}>
              <Drawer variant="temporary" open={mobileOpen} onClose={handleDrawerToggle} sx={{display: {xs: "block", sm: "none"}, "& .MuiDrawer-paper": {boxSizing: "border-box", width: "240px"}}}>
                {drawer}
              </Drawer>
        </Box>
      </Box>
    </>
  );
};

export default Header;
