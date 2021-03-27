import React from 'react'
import {AppBar, Toolbar, IconButton, Badge, Typography } from '@material-ui/core';
import {ShoppingCart} from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/commerce.jpg'
import useStyles from './styles'

const Navbar = ({totalItems}) => {
    const classes = useStyles();
    const location = useLocation();

    
    return (
        <div>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                    <Typography component={Link} to="/products" variant="h6" className={classes.title} color="inherit">
                        <img scr={logo} alt="" height="25px" className={classes.image}/>
                        Shopping!
                    </Typography>
                    <div className={classes.grow}/>
                    {location.pathname === '/products' && (
                        <div className={classes.button}>
                        <IconButton component={Link} to="/cart" aria-label="Show cart Items" color="inherit">
                            <Badge badgeContent={totalItems} color="secondary">
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                    </div>
                    )}
                    
                </Toolbar>
            </AppBar>

        </div>
    )
}

export default Navbar
