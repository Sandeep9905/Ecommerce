import React from 'react';
import { Typography, Button, Card, CardContent, CardMedia, CardActions } from '@material-ui/core';

import useStyles from './styleCartItem';

export default function CartItem({ item, removeFromCart }) {
    const classes = useStyles();
    return (
        <Card>
            <CardMedia image={item.image} alt={item.name} className={classes.media}>
            </CardMedia>
            <CardContent className={classes.cardContent}>
                <Typography variant="h4">{item.name}</Typography>
                <Typography variant="h5">{item.description}</Typography>
            </CardContent>
            <CardActions className={classes.cartActions}>
                <div className={classes.buttons}>
                    <Button type="button" size="small">+</Button>
                    <Typography>{item.quantity}</Typography>
                    <Button type="button" size="small">-</Button>
                </div>
                <Button variant="contained" type="button" onClick={() => removeFromCart(item.id)} color="secondary">Remove</Button>
            </CardActions>
        </Card>
    )
}