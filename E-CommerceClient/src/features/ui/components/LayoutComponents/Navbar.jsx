import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";

function Navbar() {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        {/* Logo / Brand */}
        <Typography
          variant="h6"
          component={Link}
          to="/home"
          style={{ textDecoration: "none", color: "inherit", flexGrow: 1 }}
        >
          E-Commerce
        </Typography>

        {/* Menu Links */}
        <Box>
          <Button color="inherit" component={Link} to="/home">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/product">
            Product
          </Button>
          <Button color="inherit" component={Link} to="/basket">
            Basket
          </Button>
          <Button color="inherit" component={Link} to="/admin/home">
            Admin Page
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
