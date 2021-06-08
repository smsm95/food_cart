import React from "react";
import { MdTimer } from "react-icons/md";
import { GiMeal } from "react-icons/gi";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { FcCheckmark } from "react-icons/fc";
import { VscClose } from "react-icons/vsc";
import { useDispatch } from "react-redux";
import {
  addItemToCart,
  decrementCardQuantity,
  incrementCardQuantity,
} from "../../../redux/desertsReducer";
import PropTypes from "prop-types";

const CrossIcon = () => {
  return (
    <span className="text-danger">
      <VscClose />
    </span>
  );
};

function DesertCard({ item }) {
  const dispatch = useDispatch();
  return (
    <div className="card h-100">
      <img src={item.image} className="card-img-top desert__card" alt="" />
      <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
        <div className="card-text">
          <ul className="list-group-flush">
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Dairy Free
              {item.dairyFree ? <FcCheckmark /> : <CrossIcon />}
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Gluten Free
              {item.glutenFree ? <FcCheckmark /> : <CrossIcon />}
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Vegeterian
              {item.vegetarian ? <FcCheckmark /> : <CrossIcon />}
            </li>
          </ul>
        </div>
      </div>
      <div className="card-footer">
        <div className="row">
          <div className="col">
            <AiOutlineDollarCircle size={20} />
            {item.pricePerServing}
          </div>
          <div className="col">
            <GiMeal size={20} /> {item.servings}
          </div>
          <div className="col">
            <MdTimer size={20} /> {item.readyInMinutes}
          </div>
        </div>
      </div>
      <div className="card-footer bg-transparent text-center">
        {item.inCart ? (
          <>
            <button
              className="btn btn-sm btn-primary"
              onClick={() => dispatch(decrementCardQuantity(item))}
            >
              -
            </button>
            <span className="shadow-sm border bg-body rounded mx-2 h-100 px-2 py-2">
              {item.quantity}
            </span>
            <button
              className="btn btn-sm btn-primary"
              onClick={() => dispatch(incrementCardQuantity(item))}
            >
              +
            </button>
          </>
        ) : (
          <button
            className="btn btn-primary"
            onClick={() => dispatch(addItemToCart(item))}
          >
            add to cart
          </button>
        )}
      </div>
    </div>
  );
}

DesertCard.propTypes = {
  item: PropTypes.object.isRequired,
};

export default DesertCard;
