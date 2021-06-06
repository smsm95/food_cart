import React from "react";
import Home from "../components/Home/index";
import SingleDesert from "../components/SingleDesert";
import PaymentPage from "../components/PaymentPage";
import Checkout from "../components/Checkout";
import NotFound from "../components/common/NotFound";
import { Switch, Route, Redirect } from "react-router-dom";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/payment" exact component={PaymentPage} />
      <Route path="/checkout" exact component={Checkout} />
      <Route path="/desert/:id" exact component={SingleDesert} />
      <Route PATH="/404" exact component={NotFound} />
      <Redirect to="/404" />
    </Switch>
  );
};

export default Routes;
