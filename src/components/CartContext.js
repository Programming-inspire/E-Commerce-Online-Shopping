// CartContext.js

import React, { createContext, useContext, useReducer } from 'react';

const CartContext = createContext();

const initialState = {
  cartItems: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const updatedCartItems = [...state.cartItems, action.payload];
      const updatedTotalAmount = updatedCartItems.reduce((total, item) => total + Number(item.price), 0);
      return {
        ...state,
        cartItems: updatedCartItems,
        totalAmount: updatedTotalAmount,
      };

    case 'REMOVE_FROM_CART':
      const updatedItems = state.cartItems.filter(item => item.id !== action.payload.id);
      const updatedAmount = updatedItems.reduce((total, item) => total + Number(item.price), 0);
      return {
        ...state,
        cartItems: updatedItems,
        totalAmount: updatedAmount,
      };

      case 'CLEAR_CART':
      return {
        ...state,
        cartItems: [],
        totalAmount: 0,
      };

    default:
      return state;
  }
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  const removeFromCart = (product) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: product });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  return (
    <CartContext.Provider value={{ ...state, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export { CartProvider, useCart };
