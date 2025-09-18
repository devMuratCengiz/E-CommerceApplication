import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";

function AdminNavbar() {
    return (
        <AppBar position="static" color="secondary">
            <Toolbar>
                {/* Logo / Brand */}
                <Typography
                    variant="h6"
                    component={Link}
                    to="/admin/home"
                    style={{ textDecoration: "none", color: "inherit", flexGrow: 1 }}
                >
                    E-Commerce Admin
                </Typography>

                {/* Menu Links */}
                <Box>
                    <Button color="inherit" component={Link} to="/admin/product">
                        Product
                    </Button>
                    <Button color="inherit" component={Link} to="/admin/basket">
                        Basket
                    </Button>
                    <Button color="inherit" component={Link} to="/admin/customer">
                        Customer
                    </Button>
                    <Button color="inherit" component={Link} to="/">
                        Go to Site
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default AdminNavbar;
