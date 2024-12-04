import React, { useRef } from "react";
import Title from "../title/Title";
import Navlinks from "../navlinks/Navlinks";
import Search from "../search/Search";
import "./style.css";
import ReactStars from "react-stars";
function Navbar({ setSearch, setRating, rating }) {
  const ratingChanged = (newRating) => {
    setRating(newRating);
  };
  const resetRating = () => {
    setRating(0);
  };
  return (
    <div id="nav-container">
      <Title />
      <Search setSearch={setSearch} />
      {rating && (
        <button className="reset-rating-button" onClick={resetRating}>
          X
        </button>
      )}
      <ReactStars
        count={5}
        onChange={ratingChanged}
        size={24}
        activeColor="#ffd700"
        isHalf={true}
        value={rating}
      />
      <Navlinks />
    </div>
  );
}

export default Navbar;
