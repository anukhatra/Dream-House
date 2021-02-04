import React,{useState} from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography, Button } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import home from '../../assets/home.png';
import { Link, useLocation } from 'react-router-dom';
import {Categories} from '../categories/categories';

import useStyles from './styles';

const Navbar = ({ totalItems,category }) => {

    const classes = useStyles();
    const location = useLocation();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [search, setSearch] = useState('');

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };


    if (location.pathname)
        return (
            <>
                <AppBar position="fixed" className={classes.appBar} color="inherit">
                    <Toolbar>
                        <Typography component={Link} to="./" variant="h6" className={classes.title} color="inherit" >
                            <img src={home} alt="fashion.js" height="45px" className={classes.image} />
                        DreamHouse
                    </Typography>
                    <input type="text " className={classes.search} placeholder='Search' onchange={e=>setSearch(e.target.value)}/>
                    <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                        Categories
                   </Button>
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
{/*                       {category.map((cat) => (
                               {cat}
                                
                        ))} */}

                    </Menu> 
                        <div className={classes.grow} />
                        {location.pathname === '/' && (
                            <div className={classes.button}>
                                <IconButton component={Link} to="./cart" aria-label="Cart item" color="inherit">
                                    <Badge badgeContent={totalItems} color="secondary">
                                        <ShoppingCart />
                                    </Badge>
                                </IconButton>
                            </div>


                        )}

                    </Toolbar>

                </AppBar>
            </>
        );
};

export default Navbar;