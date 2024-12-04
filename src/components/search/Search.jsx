import "./style.css";
import React, { useState, useEffect, useRef } from "react";
function Search({ setSearch }) {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef(null);
  useEffect(() => {
    const inputElement = inputRef.current;

    const handleFocus = () => {
      inputElement.style.width = "250px";
    };

    const handleBlur = () => {
      inputElement.style.width = "150px";
    };

    inputElement.addEventListener("focus", handleFocus);
    inputElement.addEventListener("blur", handleBlur);

    return () => {
      inputElement.removeEventListener("focus", handleFocus);
      inputElement.removeEventListener("blur", handleBlur);
    };
  }, []);
  return (
    <div className="search">
      <input
        ref={inputRef}
        className={`srch ${isFocused ? "focused" : ""}`}
        type="search"
        name=""
        placeholder="Type To Text"
        onChange={(e) => setSearch(e.target.value)}
      />
      <a href="#">
        <button className="btn">search</button>
      </a>{" "}
    </div>
  );
}

export default Search;
