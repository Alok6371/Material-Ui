import React, { useState } from "react";
import { AppBar, Box, Drawer, IconButton, Toolbar, Typography } from "@mui/material";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import "../../styles/HeaderStyle.css";

const Header = () => {
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen); // ✅ toggle
    };

    // mobile drawer content
    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}
            className="boxMobilenavigation"
        >
            <Typography
                color="goldenrod"
                variant="h6"
                component="div"
                sx={{ my: 2 }}
            >
                <FastfoodIcon />
                Restaurant
            </Typography>

            <ul className="mobile-navigation">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/menu">Menu</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </Box>
    );

    return (
        <Box>
            <AppBar component="nav" sx={{ bgcolor: "black" }}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        edge="start"
                        sx={{ mr: 2, display: { sm: "none" } }}
                        onClick={handleDrawerToggle}
                    >
                        <MenuIcon />
                    </IconButton>

                    <Typography
                        color="goldenrod"
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1 }}
                    >
                        <FastfoodIcon />
                        Restaurant
                    </Typography>

                    <Box sx={{ display: { xs: "none", sm: "block" } }}>
                        <ul className="navigation-menu">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/menu">Menu</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </Box>
                </Toolbar>
            </AppBar>

            {/* Mobile Drawer */}
            <Box component="nav">
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    sx={{ display: { xs: "block", sm: "none" } }}
                >
                    {drawer}   {/* ✅ render drawer */}
                </Drawer>
            </Box>
            <Box sx={{p:1}}>
                <Toolbar />
            </Box>

        </Box>
    );
};

export default Header;
