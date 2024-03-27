import "./favorites.css";
import { useEffect, useState } from "react";

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const resp = localStorage.getItem("@primeflix");
    const favoritesMovies = JSON.parse(resp);
    setFavorites(favoritesMovies);
  });

  return (
    <div>
      <h1>My Movies</h1>
    </div>
  );
}

export default Favorites;
