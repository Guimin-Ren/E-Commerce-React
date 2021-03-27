import React from 'react';
import {Grid} from '@material-ui/core';
import Product from './Product/Product';
import useStyles from './styles';


const Products = ({products, onAddToCart}) =>{
    const classes = useStyles();
    return (
        <div style={{ width: "100%",
        height: "100%", backgroundImage: `url(${'https://img.freepik.com/free-vector/stylish-hexagonal-line-pattern-background_1017-19742.jpg?size=626&ext=jpg'})`}}>
        <main className={classes.content} >
 
            <div className={classes.toolbar} />
            <Grid container justify="left" spacing={4}>
                {products.map((product) => (
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                    <Product product={product} onAddToCart={onAddToCart}/>
                    </Grid>
                ))}
                
            </Grid>
        </main>
        </div>
    );
    
}

export default Products;