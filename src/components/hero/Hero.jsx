import React from "react";
import Movielist from "../movielist/Movielist";

function Hero({ search,rating }) {
  return (
    <div>
      <Movielist search={search} rating={rating} />
    </div>
  );
}

export default Hero;
