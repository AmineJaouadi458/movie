import React, { useState } from "react";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import "./App.css";
function App() {
  const [search, setSearch] = useState("");
  const [rating, setRating] = useState(0);
  return (
    <div id="app">
      <Navbar setSearch={setSearch} setRating={setRating} rating={rating} />
      <Hero search={search} rating={rating} />
    </div>
  );
}

export default App;
