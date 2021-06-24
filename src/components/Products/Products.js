import React from 'react';
import { Card, Typography, CardMedia, CardActions, IconButton, CardContent } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';

import useStyles from './styles';

export default function Products({ product, onAddToCart }) {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} image={product.image} title={product.name}></CardMedia>
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography variant="h5" gutterBottom>
                        {product.name}
                    </Typography>
                    <Typography variant="h5">
                        $ {product.price}
                    </Typography>
                </div>
                <Typography variant="body2" color='textSecondary' >{product.description}</Typography>
            </CardContent>
            <CardActions disableSpacing className={classes.cardActions}>
                <IconButton aria-label="Add to Cart" onClick={() => onAddToCart(product.id, 1)} >
                    <AddShoppingCart />
                </IconButton>
            </CardActions>
        </Card>
    )
}