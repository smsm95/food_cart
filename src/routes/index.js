import React from "react";
import Home from "../components/Home/index";
import Checkout from "../components/Checkout/Index";
import NotFound from "../components/Common/NotFound";
import Cart from "../components/Cart/index";
import { Switch, Route, Redirect } from "react-router-dom";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/checkout" exact component={Checkout} />
      <Route path="/cart" exact component={Cart} />
      <Route path="/404" exact component={NotFound} />
      <Redirect to="/404" />
    </Switch>
  );
};

export default Routes;
