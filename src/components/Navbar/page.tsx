"use client"
import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText, useMediaQuery, useTheme } from 
'@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
const Navbar: React.FC = () => {
    const [drawerOpen, setDrawerOpen] = React.useState(false);
    const theme = useTheme();
    const isLgUp = useMediaQuery(theme.breakpoints.up('lg'));
  
    const handleDrawerToggle = () => {
      setDrawerOpen(!drawerOpen);
    };

    const menuItems = [
      { text: 'Beranda', link: '/' },
      { text: 'Produk', link: '/Produk' },
      { text: 'Galeri', link: '/Galeri' },
      { text: 'Kontak', link: '/Kontak' },
    ];
  
    const drawer = (
      <div className="drawer-container">
        <Typography variant="h6" className='m-0'>
        <img src="logo.jpeg" alt="" className=' w-10 h-10' />
        </Typography>
        <List style={{ width: '100%' }}>
          {menuItems.map((item) => (
            <Link href={item.link} key={item.text} passHref>
              <ListItem button style={{ justifyContent: 'center', borderBottom: '1px solid black' }}>
                <ListItemText primary={item.text} style={{ textAlign: 'center' }} />
              </ListItem>
            </Link>
          ))}
        </List>
      </div>
    );
  
    return (
      <div>
        <AppBar position="fixed" className="bg-white">
          <Toolbar>
            <Typography variant="h6" style={{ flexGrow: 1 }}>
              <Link href="/"><img src="logo.jpeg" alt="" className=' w-10 h-10' /></Link>
            </Typography>
            {isLgUp ? (
              <div >
                <Button className="navbar-button "><Link href="/">Beranda</Link></Button>
                <Button className="navbar-button text-black"><Link href="/Produk">Produk</Link></Button>
                <Button className="navbar-button text-black"><Link href="/Galeri">Galeri</Link></Button>
                <Button className="navbar-button text-black"><Link href="/Kontak">Kontak</Link></Button>
                
              </div>
            ) : (
              <IconButton  edge="end" aria-label="menu" onClick={handleDrawerToggle} style={{ color: 'black' }}>
                <MenuIcon />
              </IconButton>
            )}
          </Toolbar>
        </AppBar>
        <Toolbar /> {/* This is a placeholder to prevent content from being hidden under the fixed AppBar */}
        <Drawer
          anchor="right"
          open={drawerOpen}
          onClose={handleDrawerToggle}
        >
          {drawer}
        </Drawer>
      </div>
    );
};

export default Navbar;
