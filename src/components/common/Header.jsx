import React, { useEffect, useState } from "react";
import { AiOutlineShopping } from "react-icons/ai";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import logo from "../../assets/images/logo.png";

function Header() {
  const history = useHistory();
  const [itemsNumber, setItemsNumber] = useState(0);
  const itemsInCart = useSelector(
    (state) => state.desertsReducer.totalItemsInCart
  );

  useEffect(() => {
    setItemsNumber(itemsInCart);
  }, [itemsInCart]);

  const RenderBadge = () => {
    if (itemsNumber && itemsNumber >= 1) {
      return (
        <span className="badge bg-secondary rounded-pill">{itemsNumber}</span>
      );
    } else {
      return null;
    }
  };

  return (
    <nav className="navbar navbar-light sticky-top bg-light">
      <div className="container">
        <span className="navbar-brand mb-0 h1">
          <img
            onClick={() => history.push("/")}
            className="header__logo cursor-pointer"
            src={logo}
            alt=""
          />
        </span>
        <span className="cursor-pointer" onClick={() => history.push("/cart")}>
          <AiOutlineShopping size={40} />
          <RenderBadge />
        </span>
      </div>
    </nav>
  );
}

export default Header;
