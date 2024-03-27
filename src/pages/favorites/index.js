import "./favorites.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const resp = localStorage.getItem("@primeflix");
    const favoritesMovies = JSON.parse(resp);
    setFavorites(favoritesMovies);
  }, []);

  function deleteMovie() {}

  return (
    <div className="favorites-movies">
      <h1 className="title">My movies</h1>
      <div className="container">
        {favorites.map((movie) => {
          return (
            <div className="box">
              <p>{movie.title}</p>
              <div>
                <Link className="link" to={`/filme/${movie.id}`}>
                  See Details
                </Link>
                <button className="delete-button" onClick={deleteMovie}>
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Favorites;
