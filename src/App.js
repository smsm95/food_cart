import React, { useEffect } from "react";
import { fetchDeserts } from "./redux/desertsReducer";
import { useDispatch, useSelector } from "react-redux";
import Header from "./components/common/Header";
import Routes from "./routes";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const rehydrated = useSelector((state) => state._persist.rehydrated);
  useEffect(() => {
    if (!rehydrated) dispatch(fetchDeserts);
  }, [dispatch, rehydrated]);

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
