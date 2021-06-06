import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { fetchDeserts } from "./redux/desertsReducer";
import Header from "./components/common/Header";
import "./App.css";
import Routes from "./routes";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    // The api call is commented due to daily qouta limits.
    // dispatch(fetchDeserts);
  }, [dispatch]);
  const deserts = useSelector((state) => state.desertsReducer.deserts);
  console.log(deserts);

  return (
    <>
      <Header />
      <Routes />
    </>
  );
}

export default App;
