import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import redux from "./redux/store";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import "bootstrap/dist/css/bootstrap.min.css";

const { store, persistor } = redux;

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <StrictMode>
        <Router>
          <App />
        </Router>
      </StrictMode>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
