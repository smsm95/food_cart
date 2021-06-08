import React, { useEffect } from "react";
import Main from "./Main";
import { fetchDeserts } from "../../redux/desertsReducer";
import { useDispatch, useSelector } from "react-redux";

function Home() {
  const dispatch = useDispatch();

  const totalItemsInCart = useSelector(
    (state) => state.desertsReducer.totalItemsInCart
  );

  // check if there are no items in cart, fetch new data
  useEffect(() => {
    if (!totalItemsInCart || totalItemsInCart === 0) {
      dispatch(fetchDeserts);
    }
  }, [dispatch, totalItemsInCart]);

  return (
    <div className="py-4">
      <Main />
    </div>
  );
}

export default Home;
