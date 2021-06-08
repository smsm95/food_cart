import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  incrementCardQuantity,
  decrementCardQuantity,
  removeItemFromCart,
} from "../../../redux/desertsReducer";
import { AiOutlineDelete } from "react-icons/ai";
import PropTypes from "prop-types";

function CartSingleItem({ item }) {
  const [totalNumberInCart, setTotalNumberInCart] = useState(item.quantity);
  const dispatch = useDispatch();

  useEffect(() => {
    setTotalNumberInCart(item.quantity);
  }, [item.quantity]);

  return (
    <>
      <div className="row mb-4 pt-2">
        <div className="col-md-5 col-lg-3 col-xl-3">
          <div className="view zoom overlay z-depth-1 rounded mb-3 mb-md-0">
            <img className="img-fluid w-100" alt="" src={item.image} />
          </div>
        </div>
        <div className="col-md-7 col-lg-9 col-xl-9">
          <div>
            <div className="d-flex justify-content-between">
              <div className="mb-2">
                <h5>{item.title}</h5>
              </div>
              <div className="div__fit-content">
                <button
                  className="btn btn-sm btn-primary"
                  onClick={() => dispatch(decrementCardQuantity(item))}
                >
                  -
                </button>
                <span className="shadow-sm border bg-body rounded mx-2 h-100 px-2 py-2">
                  {totalNumberInCart}
                </span>
                <button
                  className="btn btn-sm btn-primary"
                  onClick={() => dispatch(incrementCardQuantity(item))}
                >
                  +
                </button>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center ">
            <span
              className="text-danger cursor-pointer"
              onClick={() => dispatch(removeItemFromCart(item))}
            >
              <AiOutlineDelete />
              <span className="cursor-pointer text-muted ms-2">
                remove item
              </span>
            </span>
            <p className="mb-0">
              <strong> ${item.pricePerServing}</strong>
            </p>
          </div>
        </div>
      </div>
      <hr className="mb-2" />
    </>
  );
}

CartSingleItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default CartSingleItem;
