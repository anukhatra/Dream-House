import React, { useContext, useState } from 'react';
import { useParams } from 'react-router';
import useStyles from './styles';
import { Grid, Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { AddShoppingCart } from '@material-ui/icons';

const Details = ({ products, onAddToCart }) => {
    const classes = useStyles();
    let { id } = useParams();

    const details = products.filter((product, index) => {

        return product.id === id
    })

    const handleAddToCart = () => onAddToCart(id, 1);
  

    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />

            <Grid container justify="center" spacing={4}>
                {details.map((product) => {
                     console.log(product);
                    return (
                        <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
                            <Card className={classes.rootdetail}>                           
                                <CardMedia className={classes.mediadetail} alt="Homes" image={product.media.source} title={product.name} />
                                <CardContent>
                                    <div className={classes.cardContent}>
                                        <Typography gutterBottom variant="h5" component="h2"  >
                                            {product.name}
                                        </Typography>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            ${product.price.formatted}
                                        </Typography>
                                    </div>
                                    <Typography dangerouslySetInnerHTML={{ __html: product.description }} variant="body2" color="textSecondary" component="p" />
                                </CardContent>
                                <CardActions disableSpacing className={classes.cardActions}>
                                    <IconButton aria-label="Add to Cart" onClick={handleAddToCart}>
                                        <AddShoppingCart />
                                    </IconButton>
                                </CardActions>
                            </Card>
                        </Grid>
                    )
                })}
            </Grid>
        </main>
    );
};

export default Details;