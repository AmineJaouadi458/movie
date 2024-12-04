import React from "react";
import "./style.css";
import Movieitems from "../movieitems/Movieitems";
function Movielist({ search , rating}) {
  const data = [
    {
      title: "Fight Club",
      genre: "Action",
      img: "https://m.media-amazon.com/images/M/MV5BOTgyOGQ1NDItNGU3Ny00MjU3LTg2YWEtNmEyYjBiMjI1Y2M5XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      year: 1999,
      rate: 2,
      link: "Watch Now",
    },
    {
      title: "The Godfather",
      genre: "Drama",
      img: "https://ejazkhancinema.com/wp-content/uploads/2023/09/The-Godfather-best-drama-movies-blog-by-ejaz-khan-cinema.jpeg",
      year: 1972,
      rate: 4.5,
      link: "Watch Now",
    },
    {
      title: "Spidermen",
      genre: "Fantasy",
      img: "https://m.media-amazon.com/images/S/pv-target-images/2a3cb1c5f4927087338b105b1c630e06f53ca95cbd25480e932fcde0922475e0.jpg",
      year: 2004,
      rate: 1,
      link: "Watch Now",
    },
    {
      title: "The Dictator",
      genre: "Comedy",
      img: "https://m.media-amazon.com/images/M/MV5BZTNjOTVmZjctZDAyMS00NzYxLWFjMTgtZDVhMmM5ZDUzZTYyXkEyXkFqcGc@._V1_.jpg",
      year: 2009,
      rate: 5,
      link: "Watch Now",
    },
  ];
  return (
    <section id="movies">
      {data
        .filter((elt) => elt.title.toLowerCase().includes(search.toLowerCase())).filter((elt)=> rating ? elt.rate===rating : elt)
        .map((elt, i) => (
          <Movieitems key={i} {...elt} />
        ))}
    </section>
  );
}

export default Movielist;
