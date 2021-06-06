import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDeserts } from "../../redux/desertsReducer";
import DesertCard from "./DesertCard";

function Main() {
  const dispatch = useDispatch();
  useEffect(() => {
    // The api call is commented due to daily qouta limits.
    // dispatch(fetchDeserts);
  }, [dispatch]);
  const deserts = useSelector((state) => state.desertsReducer.deserts);
  console.log(deserts);

  return (
    <>
      <h3>Main</h3>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {deserts.map((desert) => (
          <DesertCard key={desert.id} item={desert} />
        ))}
      </div>
    </>
  );
}

export default Main;
