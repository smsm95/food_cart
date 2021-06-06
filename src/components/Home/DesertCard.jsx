import React from "react";
import { MdTimer } from "react-icons/md";
import { IoPricetagOutline } from "react-icons/io5";
import { GiMeal } from "react-icons/gi";

function DesertCard({ item }) {
  return (
    <div className="col">
      <div className="card h-100">
        <img
          src={item.image}
          className="card-img-top desert__card"
          alt="..."
        ></img>
        <div className="card-body">
          <h5 className="card-title">{item.title}</h5>
          <p className="card-text">{item.summary}</p>
        </div>
        <div className="card-footer">
          <div className="row">
            <div className="col"></div>
            <div className="col">
              <button className="btn btn-primary">add to cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DesertCard;
