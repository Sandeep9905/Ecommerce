import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import Logo from '../../assets/warbler-logo.png';
import useStyles from './styles';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar({ noOfdataInCart }) {
    const classes = useStyles();
    const location = useLocation();
    return (
        <>
            <AppBar position="fixed" className={classes.appBar} color='inherit'>
                <Toolbar>
                    <Typography component={Link} to="/" variant="h6" className={classes.title} color="inherit">
                        <img src={Logo} alt="E-Commerce" height="25px" className={classes.image} />
                        E-Commerce
                    </Typography>
                    <div className={classes.grow} />
                    {location.pathname === '/' && (
                        <div className={classes.button}>
                            <IconButton component={Link} to="/cart" aria-label="Show cart item" color="inherit">
                                <Badge badgeContent={noOfdataInCart} color="secondary">
                                    <ShoppingCart />
                                </Badge>
                            </IconButton>
                        </div>
                    )}
                </Toolbar>
            </AppBar>
        </>
    )
}