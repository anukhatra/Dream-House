import React,{useState,useEffect} from 'react';
import { commerce} from './lib/commerce';
import {Products,Navbar,Cart,Checkout,Details,Footer } from './components';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import { CssBaseline } from '@material-ui/core';


const App = () => {
    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState([]);
    const [cart, setCart] = useState([]);
    const [order, setOrder] = useState({});
    const [errorMessage, setErrorMessage] = useState('');

    const fetchProducts = async () =>{
        const {data} = await commerce.products.list();

        setProducts(data);
    }
    const fetchCategory = async () =>{
      const {data} = await commerce.categories.list();
     console.log(data);
      setCategory(data);
  }
/*   const fetchCategoryList =  async (id) => {
    console.log(id);
    const data = await commerce.categories.retrieve(id, {
      type: "permalink",
    });
    console.log(data);
    setCategory(data);

  };  */
    const fetchCart= async () =>{ 
        setCart(await commerce.cart.retrieve());    }
    const fetchProductsDeltail =  async (id) => {
      console.log(id);
      const product = await commerce.products.retrieve(id, {
        type: "permalink",
      });
  
      setProducts(product);
  
    }; 
    
    const handleAddToCart = async(productId, quantity) =>{
        const item = await commerce.cart.add(productId, quantity)

        setCart(item.cart);
    }
    const handleUpdateCartQty = async (lineItemId, quantity) => {
        const response = await commerce.cart.update(lineItemId, { quantity });
    
        setCart(response.cart);
    };
    const handleRemoveFromCart = async (lineItemId) => {
        const response = await commerce.cart.remove(lineItemId);
    
        setCart(response.cart);
      };
    
      const handleEmptyCart = async () => {
        const response = await commerce.cart.empty();
    
        setCart(response.cart);
      };
    
      const refreshCart = async () => {
        const newCart = await commerce.cart.refresh();
    
        setCart(newCart);
      };
      const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
        try {
          const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder);
    
          setOrder(incomingOrder);
    
          refreshCart();
        } catch (error) {
          setErrorMessage(error.data.error.message);
        }
      };
    

    useEffect(() =>{
        fetchProducts();
        fetchCategory();
        fetchCart();
    },[]);
      
    
    return (
        <Router>
        <div>
            <Navbar totalItems = {cart.total_items} category={category} />
       
      
            <Switch>
                <Route exact path="/">
                     <Products products= {products} onAddToCart={handleAddToCart}/> 
                </Route>
                <Route exact path="/cart">
                     <Cart cart={cart}
                       onUpdateCartQty={handleUpdateCartQty}
                       onRemoveFromCart={handleRemoveFromCart} 
                       onEmptyCart={handleEmptyCart} />
                </Route>    
                <Route exact path="/checkout">
                     <Checkout cart={cart} order={order} onCaptureCheckout={handleCaptureCheckout} error={errorMessage} /> 
                </Route>   
                <Route path="/:id">  <Details  products={products}   onAddToCart={handleAddToCart}  fetchProductsDeltail={fetchProductsDeltail } />    </Route>
            </Switch>
            <Footer />
        </div>
      
        </Router>
    );
};

export default App;