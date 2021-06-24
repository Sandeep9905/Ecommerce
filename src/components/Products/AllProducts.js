import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import Products from './Products';
import useStyles from './allProductStyles';


export default function AllProducts(props) {
    const { products, onAddToCart, search } = props;
    const classes = useStyles();
    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />
            <Grid container justify='center' spacing={4}>
                {products.filter((res) => {
                    if (search == '') {
                        return res;
                    } else if (res.name.toLowerCase().includes(search.toLowerCase()) || res.brand.toLowerCase().includes(search.toLowerCase())) {
                        return res;
                    }
                }).map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Products onAddToCart={onAddToCart} product={product} />
                    </Grid>
                ))}
            </Grid>
        </main>
    )
}