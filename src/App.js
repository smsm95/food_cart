import React, { useEffect } from "react";
import Header from "./components/Common/Header";
import Routes from "./routes";
import { fetchDeserts } from "./redux/desertsReducer";
import { useDispatch } from "react-redux";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDeserts);
  }, [dispatch]);

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
