import React from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import useTotal from "../../hooks/useCartTotal";

const RenderListItem = ({ name, totalAmount }) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center px-0 pb-0">
      {name}
      <span>${totalAmount}</span>
    </li>
  );
};

function Total() {
  const cartTotal = useTotal();
  const itemsInCart = useSelector((state) => state.desertsReducer.itemsInCart);

  return (
    <>
      <h4 className="d-flex justify-content-between align-items-center">
        <span className="text-muted">Your Cart</span>
        <span className="badge bg-secondary rounded-pill">
          {itemsInCart && itemsInCart.length >= 0 ? itemsInCart.length : ""}
        </span>
      </h4>
      <div className="mb-3">
        <div className="pt-2">
          <ul className="list-group list-group-flush">
            {itemsInCart.map((item) => (
              <RenderListItem
                key={item.id}
                name={item.title}
                totalAmount={item.quantity * item.pricePerServing}
              />
            ))}

            <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0">
              <div>
                <strong>Total</strong>
              </div>
              <span>
                <strong className="badge bg-success">${cartTotal}</strong>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

RenderListItem.propTypes = {
  name: PropTypes.string.isRequired,
  totalAmount: PropTypes.number.isRequired,
};

export default Total;
