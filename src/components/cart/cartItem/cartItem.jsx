import React from 'react';
import {Card, CardMedia, CardContent, CardActions,Typography, Button } from '@material-ui/core'; 

import useStyles from './styles';

const CartItem = ({item,onUpdateCartQty, onRemoveFromCart }) => {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
        <CardMedia className={classes.media} image={item.media.source} title={item.name} />
        <CardContent className={classes.CardContent}>
              
                    <Typography variant="h4" gutterBottom>
                        {item.name}
                    </Typography>
                    <Typography variant="h5">
                        {item.line_total.formatted_with_symbol}
                    </Typography>
      
                <Typography dangerouslySetInnerHTML={{__html : item.description}} varient="body2" color="textSecondary" />
            
            </CardContent>
            <CardActions className={classes.CardActions} >
                <div className={classes.buttons}>
                    <Button type="button" size="small" onClick={() => onUpdateCartQty(item.id, item.quantity - 1)} > - </Button>
                    <Typography variant="h6">
                        {item.quantity}
                    </Typography>
                    <Button type="button" size="small" onClick={() => onUpdateCartQty(item.id, item.quantity + 1)} > + </Button>
                </div>
                <Button type="button" color="secondary" variant="contained" onClick={() => onRemoveFromCart(item.id)}> Remove </Button>
            </CardActions>
        </Card>
    );
};

export default CartItem;