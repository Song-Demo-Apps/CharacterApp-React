import { Link, useNavigate } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Button, Menu, MenuItem } from "@mui/material";
import { useState } from "react";

export default function Navbar() {
    const navigate = useNavigate();
    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  
    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorElNav(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };
    return (
    <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
            <Toolbar>
                <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                    <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    color="inherit"
                    >
                    <MenuIcon />
                    </IconButton>
                    <Menu
                    id="menu-appbar"
                    anchorEl={anchorElNav}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                    sx={{
                        display: { xs: 'block', md: 'none' },
                    }}
                    >
                    {['characters', 'item'].map((page) => (
                        <MenuItem key={page} onClick={handleCloseNavMenu}>
                        <Typography textAlign="center">{page}</Typography>
                        </MenuItem>
                    ))}
                    </Menu>
                </Box>
                <Typography variant="h6" component={Link} to="" color="inherit" sx={{mr: 3, textDecoration: 'none'}}>
                    Character App - React
                </Typography>
                <Box sx={{ flexGrow: 1, display: {xs: 'none', md: 'flex'} }}>
                    <Button
                        onClick={()=> navigate("")}
                        sx={{ my: 2, color: 'white', display: 'block' }}
                    >
                        Characters
                    </Button>
                    <Button
                        onClick={()=> navigate("items")}
                        sx={{ my: 2, color: 'white', display: 'block' }}
                    >
                        Items
                    </Button>
                    <Button
                        onClick={()=> navigate("character/2")}
                        sx={{ my: 2, color: 'white', display: 'block' }}
                    >
                        Go See Aurynie
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    </Box>
    );
}