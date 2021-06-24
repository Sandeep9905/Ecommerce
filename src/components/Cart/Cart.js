import React, { useEffect, useState } from 'react';
import { Typography, Button, Grid, Container } from '@material-ui/core';
import AllCartData from './AllCartsData';
import useStyles from './styles';

export default function Cart({ cart, products }) {
    const classes = useStyles();
    const [cartData, setCartData] = useState([]);

    useEffect(() => {
        makeData();
    }, []);

    const makeData = () => {
        let cartData = [];
        products.map(res => {
            cart.map(cart => {
                if (res.id == cart.productid) {
                    res['quantity'] = cart.quantity;
                    cartData.push(res);
                }
            })
        })
        setCartData(cartData)
    }


    const addPrice = () => {
        let totalPrice = 0;
        cartData.map(res => {
            totalPrice += res.price;
        })
        return totalPrice;
    }

    const emptyCart = () => {
        setCartData([]);
    }

    const removeFromCart = (productid) => {
        let removedata = cartData.filter((res) => res.id != productid);
        setCartData(removedata);
    }

    const EmptyCard = () => (
        <Typography variant="subtitle1">You have no items in your Shoping Cart ,Start Shoping!</Typography>
    )

    return (
        <Container>
            <div className={classes.toolbar} />
            <Typography className={classes.title} variant="h3" >Your Shoping Cart</Typography>
            {(cartData.length == 0) ? <EmptyCard /> : <AllCartData emptyCart={emptyCart} addPrice={addPrice} removeFromCart={removeFromCart} cart={cartData} />}
        </Container>
    )
}