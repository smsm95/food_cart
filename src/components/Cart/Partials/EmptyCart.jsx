import React from "react";
import { CgSmileSad } from "react-icons/cg";
import { useHistory } from "react-router-dom";

function EmptyCart() {
  const history = useHistory();

  return (
    <div style={{ minHeight: 200 }} className="row align-items-center">
      <div className="text-center">
        <h5 className="text-muted">
          Your Cart Is Empty <CgSmileSad />
        </h5>
      </div>
      <div className="text-center">
        <button className="btn btn-primary" onClick={() => history.push("/")}>
          Add Deserts
        </button>
      </div>
    </div>
  );
}

export default EmptyCart;
