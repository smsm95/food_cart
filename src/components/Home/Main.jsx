import React from "react";
import { useSelector } from "react-redux";
import DesertCard from "./DesertCard";

function Main() {
  const deserts = useSelector((state) => state.desertsReducer.deserts);

  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {deserts.map((desert) => (
        <div key={desert.id} className="col">
          <DesertCard item={desert} />
        </div>
      ))}
    </div>
  );
}

export default Main;
