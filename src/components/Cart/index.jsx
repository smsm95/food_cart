import React from "react";
import { useSelector } from "react-redux";
import Items from "./Partials/Items";
import Total from "./Partials/Total";
import ActionButtons from "./Partials/ActionButtons";
import EmptyCart from "./Partials/EmptyCart";

function Cart() {
  const totalItems = useSelector(
    (state) => state.desertsReducer.totalItemsInCart
  );

  return totalItems ? (
    <div className="my-2">
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
          <div className="card shadow">
            <div className="card-body">
              <Items />
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
          <div className="card shadow">
            <div className="card-body">
              <Total />
            </div>
          </div>
        </div>
      </div>
      <ActionButtons />
    </div>
  ) : (
    <EmptyCart />
  );
}

export default Cart;
