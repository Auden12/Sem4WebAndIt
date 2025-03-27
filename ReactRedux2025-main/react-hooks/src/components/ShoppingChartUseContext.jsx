import React, { useState, createContext, useContext } from 'react';
import { Box, Button, UnorderedList, ListItem } from '@chakra-ui/react';

// Create a CartContext
const CartContext = createContext();

function ShoppingChartUseContext() {
    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
        setCart((prevCart) => [...prevCart, item]);
    };

    const removeFromCart = (item) => {
        setCart((prevCart) => prevCart.filter((i) => i !== item));
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
            <ProductList />
            <ShoppingCart />
        </CartContext.Provider>
    );
}

function ProductList() {
    const { addToCart } = useContext(CartContext);

    return (
        <Box padding='3' boxShadow='md' bg='gray.400' maxW='md'  mt='4'>
            <h2>Products</h2>
            <Button marginLeft='-1' marginTop='1' bg='gray.200' onClick={() => addToCart('Product 1')}>Add Product 1</Button>
            <Button marginLeft='1' marginTop='1' bg='gray.200' onClick={() => addToCart('Product 2')}>Add Product 2</Button>
        </Box>
    );
}

function ShoppingCart() {
    const { cart, removeFromCart } = useContext(CartContext);

    return (
         <Box padding='3' boxShadow='md' bg='gray.400' maxW='md'  mt='4'>
            <h2>Shopping Cart</h2>
            <UnorderedList >
                {cart.map((item, index) => (
                    <ListItem mt='2' key={index}>
                        {item} <Button padding='3' boxShadow='md' bg='gray.100' maxW='md' mb='1' onClick={() => removeFromCart(item)}>Remove</Button>
                    </ListItem>
                ))}
            </UnorderedList>
        </Box>
    );
}

export default ShoppingChartUseContext;
