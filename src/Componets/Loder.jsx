import React from "react";
import Spinner from "./Loder.mp4";

function Loder() {
  return (
    <>
      <div className="spinner">
        <img src={Spinner} alt="" />
      </div>
    </>
  );
}

export default Loder;
