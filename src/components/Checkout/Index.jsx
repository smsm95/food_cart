import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import PaymentForm from "./PaymentForm";
import Total from "../Cart/Total";
import EmptyCart from "../Cart/EmptyCart";
import { completePayment, fetchDeserts } from "../../redux/desertsReducer";

function Checkout() {
  const totalItemsInCart = useSelector(
    (state) => state.desertsReducer.totalItemsInCart
  );
  const history = useHistory();
  const dispatch = useDispatch();
  const [toastVisible, setToastVisible] = useState(false);

  const handleFormSubmit = () => {
    setTimeout(() => {
      setToastVisible(true);
    }, 300);
    setToastVisible(true);
    setTimeout(() => {
      setToastVisible(false);
    }, 2000);
    setTimeout(() => {
      dispatch(completePayment());
      dispatch(fetchDeserts);
      history.push("/");
    }, 3000);
  };

  return totalItemsInCart && totalItemsInCart >= 0 ? (
    <>
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
          <PaymentForm onSubmit={handleFormSubmit} />
        </div>
        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 py-2">
          <div className="card shadow">
            <div className="card-body">
              <Total />
            </div>
          </div>
        </div>
      </div>

      <div className="position-fixed bottom-0 end-0 p-3" style={{ zIndex: 5 }}>
        <div
          className={toastVisible ? "hide" : "toast"}
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div className="toast-header bg-success">
            <strong className="me-auto text-white">Success</strong>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="toast"
              aria-label="Close"
              onClick={() => setToastVisible(false)}
            ></button>
          </div>
          <div className="toast-body border-bottom border-left border-right">
            Payment Completed Successfully
          </div>
        </div>
      </div>
    </>
  ) : (
    <EmptyCart />
  );
}

export default Checkout;
