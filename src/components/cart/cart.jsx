import React from 'react';
import {Container,Typography, Button, Grid} from '@material-ui/core';
import CartItem from './cartItem/cartItem';
import useStyles from './styles';
import {Link} from 'react-router-dom';

const Cart = ({cart,onUpdateCartQty, onRemoveFromCart, onEmptyCart}) => {
    const classes = useStyles();
  
    const EmptyCart = () => (
        <Typography  varient="subtitle1"> No item in the cart, <Link to="/" className={classes.link}> Add some items</Link></Typography>
    );

    const FilledCart = () => (
        <>
        <Grid container spacing={3}>
            {cart.line_items.map((item) => (
                <Grid item xs={12} sm={4} key={item.id}>
                    <CartItem item={item}  onUpdateCartQty={onUpdateCartQty} onRemoveFromCart={onRemoveFromCart} />
                </Grid>
            ))}
        </Grid>
        <div className={classes.cardDetails}>
            <Typography variant="h4"> Subtotal: {cart.subtotal.formatted_with_symbol}</Typography>
            <div>
                <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary" onClick={onEmptyCart}> Empty Cart</Button>
                <Button component={Link} to='./checkout' className={classes.checkoutButton} size="large" type="button" variant="contained" color="primary"> Checkout</Button>
            </div>

        </div>
        </>
     
    );

    if(!cart.line_items) return 'Loading..';
    return (
        <Container>
            <div className={classes.toolbar} />
            <Typography className= {classes.title} variant="h4" gutterBottom> Shopping cart</Typography>
            {!cart.line_items.length ? <EmptyCart /> : <FilledCart/>}



            
        </Container>

    );
};

export default Cart;
