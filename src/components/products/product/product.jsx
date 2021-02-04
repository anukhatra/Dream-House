import React from 'react';
import {Card, CardMedia, CardContent, CardActions,Typography, IconButton } from '@material-ui/core'; 
import {AddShoppingCart} from '@material-ui/icons';
import {Link} from 'react-router-dom';

import useStyles from './styles';

const Product = ({product,onAddToCart}) => {
    const classes = useStyles();
    return (
        <Card className={classes.root} >
            <CardMedia className={classes.media} image={product.media.source} alt="Homes" title={product.name} component={Link} to={`/${product.id}`}/>
            <CardContent component={Link} to={`/${product.id}`}>
                <div className={classes.cardContent}>
                    <Typography varient="h5" gutterBottom>
                        {product.name} 
                   
                    </Typography>
                    <br/>
  
                    <br/>
                    <Typography varient="h5">

                        {product.price.formatted_with_symbol}
                    </Typography>
                </div>
                <Typography dangerouslySetInnerHTML={{__html : product.description}} varient="body2" color="textSecondary" />
            
            </CardContent>
            <CardActions disableSpacing className={classes.cardActions} >
                <IconButton aria-label="Add to Cart" onClick={() => onAddToCart(product.id, 1)}>
                    <AddShoppingCart />
                </IconButton>
            </CardActions>
        </Card>
    );
};

export default Product;