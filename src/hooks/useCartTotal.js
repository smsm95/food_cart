import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const useTotal = () => {
  const [cartTotal, setCartTotal] = useState(0);
  const itemsInCart = useSelector((state) => state.desertsReducer.itemsInCart);
  const totalItemsInCart = useSelector(
    (state) => state.desertsReducer.totalItemsInCart
  );

  useEffect(() => {
    let totalAmount = 0;
    itemsInCart.forEach((item) => {
      totalAmount += item.pricePerServing * item.quantity;
    });
    setCartTotal(totalAmount);
  }, [itemsInCart, totalItemsInCart]);

  return cartTotal;
};

export default useTotal;
