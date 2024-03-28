import "./favorites.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const resp = localStorage.getItem("@primeflix");
    const favoritesMovies = JSON.parse(resp) || [];
    setFavorites(favoritesMovies);
  }, []);

  function deleteMovie(id) {
    const moviesFiltered = favorites.filter((e) => e.id !== id);
    toast.success("movie removed successfully");
    setFavorites(moviesFiltered);
    localStorage.setItem("@primeflix", JSON.stringify(moviesFiltered));
  }

  return (
    <div className="favorites-movies">
      <h1 className="title">My movies</h1>
      {favorites.length === 0 && <span>You dont have any movie saved</span>}
      <div className="container">
        {favorites.map((movie) => {
          return (
            <div className="box" key={movie.id}>
              <p>{movie.title}</p>
              <div>
                <Link className="link" to={`/filme/${movie.id}`}>
                  See Details
                </Link>
                <button
                  className="delete-button"
                  onClick={() => {
                    deleteMovie(movie.id);
                  }}
                >
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
