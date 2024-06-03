import React from "react";
import { useSelector } from "react-redux";
import Products from "../../components/products/Products";
import Empty from "../../components/empty/Empty";
import Navbar from "../../components/navbar/Navbar";

const Wishlist = () => {
  let wishlist = useSelector((state) => state.wishlist.value);
  console.log(wishlist);

  return (
    <div>
      <Navbar />
      {wishlist.length ? (
        <Products data={wishlist} />
      ) : (
        <Empty text="Wishlist" />
      )}
    </div>
  );
};

export default Wishlist;
