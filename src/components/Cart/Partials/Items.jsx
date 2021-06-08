import React from "react";
import { useSelector } from "react-redux";
import CartSingleItem from "./CartSingleItem";

function Items() {
  const itemsInCart = useSelector((state) => state.desertsReducer.itemsInCart);

  return (
    <>
      {itemsInCart.map((item) => (
        <CartSingleItem key={item.id} item={item} />
      ))}
    </>
  );
}

export default Items;
