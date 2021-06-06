import React from "react";

import Main from "./Main";
import Sidebar from "./Sidebar";

function Home() {
  return (
    <div className="p-3">
      <div className="row">
        <div className="col-2">
          <Sidebar />
        </div>
        <div className="col">
          <Main />
        </div>
      </div>
    </div>
  );
}

export default Home;
