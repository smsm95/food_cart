import React from "react";
import { useHistory } from "react-router-dom";

function ActionButtons() {
  const history = useHistory();
  return (
    <div className="row mt-3">
      <div className="col">
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => history.push("/")}
        >
          Continue shopping
        </button>
      </div>
      <div className="col d-flex justify-content-end">
        <button
          type="button"
          className="btn btn-success"
          onClick={() => history.push("/checkout")}
        >
          Checkout
        </button>
      </div>
    </div>
  );
}

export default ActionButtons;
