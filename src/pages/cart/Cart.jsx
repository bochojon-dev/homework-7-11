import React from "react";
import "../cart/Cart.css";
import Navbar from "../../components/navbar/Navbar";
import { useSelector } from "react-redux";
import Empty from "../../components/empty/Empty";
import Products from "../../components/products/Products";

const Cart = () => {
  let cart = useSelector((state) => state.cart.value);
  console.log(cart);
  return (
    <div>
      <Navbar />
      {cart.length ? <Products data={cart} /> : <Empty text="Cart" />}
    </div>
  );
};

export default Cart;
