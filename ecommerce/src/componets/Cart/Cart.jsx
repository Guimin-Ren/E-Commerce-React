import React from 'react'
import { Container, Typography, Button, Grid} from '@material-ui/core';
import useStyles from './styles';
import CartItem from './CartItem/CartItem';
import { Link } from 'react-router-dom';

const Cart = ({cart, handleUpdateCartQty, handleRemoveFromCart, handleEmptyCart}) => {
    
    // console.log(cart)
    const classes = useStyles();

    const EmptyCart = () => (
        <Typography variant="subtitle1">You have no items in your shopping cart, start adding some!</Typography>
    );

    
    
    const FilledCart = () => (
        
        <>
            <Grid container spacing={3} >
                {cart.line_items.map((item) =>(
                    <Grid item xs={12} sm={4} key={item.id}>
                        <CartItem item={item} onUpdateCartQty={handleUpdateCartQty} onRemoveFromCart={handleRemoveFromCart}/>
                    </Grid>
                ))}
            </Grid>
            <div className={classes.cardDetails}>
                    <Typography variant="h4"> Subtotal: {cart.subtotal.formatted_with_symbol}</Typography>
                    <div>
                        <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary" onClick={handleEmptyCart}>Empty Cart</Button>
                        <Button component={Link} to="/checkout" className={classes.checkoutButton} size="large" type="button" variant="contained" color="primary">Check Out</Button>
                    </div>
            </div>
        </>
    );

    
    if (!cart.line_items) return 'Loading...';
    return (
        <div style={{  backgroundImage: `url(${'https://img.freepik.com/free-vector/stylish-hexagonal-line-pattern-background_1017-19742.jpg?size=626&ext=jpg'})`}}>
            <Container >
                <div className={classes.toolbar}/>
                <Typography className={classes.title} variant="h3" gutterBottom>Your Shopping Cart</Typography>
                { !cart.line_items.length ? <EmptyCart /> : <FilledCart /> }
            </Container>
        </div>
    );
}

export default Cart
