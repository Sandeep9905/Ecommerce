import { Grid, Typography, Button } from '@material-ui/core';
import React from 'react';
import CartItem from './CartItem';
import { Link } from 'react-router-dom';
import useStyles from './styles';

export default function AllCartData({ cart, removeFromCart, addPrice, emptyCart }) {
    const classes = useStyles();
    return (
        <>
            <Grid container spacing={3}>
                {cart.map((item) => (
                    <Grid item xs={12} sm={4} key={item.id}>
                        <CartItem removeFromCart={removeFromCart} item={item} />
                    </Grid>
                ))}
            </Grid>
            <div className={classes.cardDetails}>
                <Typography variant="h4">
                    SubTotal:${addPrice()}
                </Typography>
                <div>
                    <Button onClick={emptyCart} className={classes.emptyButton} size='large' type="button" variant='contained' color="secondary">Empty Cart</Button>
                    <Button component={Link} to="/checkout" className={classes.checkoutButton} size='large' type="button" variant='contained' color="primary">Checkout</Button>
                </div>
            </div>
        </>
    )
}