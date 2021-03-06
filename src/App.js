import React from "react";
import Header from "./components/common/Header";
import Routes from "./routes";
import "./App.css";

function App() {
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
