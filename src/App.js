import React, { useEffect } from "react";
import { fetchDeserts } from "./redux/desertsReducer";
import { useDispatch, useSelector } from "react-redux";
import Header from "./components/common/Header";
import Routes from "./routes";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const totalItemsInCart = useSelector(
    (state) => state.desertsReducer.totalItemsInCart
  );
  useEffect(() => {
    if (!totalItemsInCart || totalItemsInCart === 0) {
      console.log("fetching");
      dispatch(fetchDeserts);
    }
  }, [dispatch, totalItemsInCart]);

  return (
    <>
      <Header />
      <div className="container">
        <Routes />
      </div>
    </>
  );
}

export default App;
