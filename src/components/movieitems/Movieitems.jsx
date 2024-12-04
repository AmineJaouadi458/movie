import React from "react";
import "./style.css";
import { object } from "prop-types";
function Movieitems(props) {
  return (
    <div id="movies-container">
      <img
        width={200}
        height={250}
        style={{ objectFit: "cover" }}
        src={props.img}
      />
      <h2>{props.title}</h2>
      <h3>{props.genre}</h3>
      <h4>{props.year}</h4>
      <p>{"⭐".repeat(props.rate)}</p>
      <button>{props.link}</button>
    </div>
  );
}

export default Movieitems;
