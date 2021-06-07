import React from "react";
import { useSelector } from "react-redux";
import { CgSmileSad } from "react-icons/cg";
import DesertCard from "./DesertCard";

function Main() {
  const deserts = useSelector((state) => state.desertsReducer.deserts);

  return deserts && deserts.length > 0 ? (
    <>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {deserts.map((desert) => (
          <div key={desert.id} className="col">
            <DesertCard item={desert} />
          </div>
        ))}
      </div>
    </>
  ) : (
    <div style={{ minHeight: 200 }} className="row align-items-center">
      <div className="text-center">
        <h5 className="text-muted">
          Sorry We Are facing some issues <CgSmileSad />
        </h5>
      </div>
    </div>
  );
}

export default Main;
