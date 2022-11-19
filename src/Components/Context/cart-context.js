import React from "react";

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
  products: [],
  token: null,
  isLoggedIn: false,
  login: (token) =>{},
  logout: () =>{}
});

export default CartContext;
