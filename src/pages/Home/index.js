import { useEffect, useState } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";
import "./home.css";

function Home() {
  const [movies, setMovies] = useState([]);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    async function loadFilmes() {
      const response = await api.get("movie/now_playing", {
        params: {
          api_key: "7d1270e307ce5543af39f6418b1334e9",
          language: "en-US",
          pages: 20,
        },
      });
      setMovies(response.data.results.slice(0, 10));
      setLoad(false);
    }

    loadFilmes();
  }, []);

  if (load) {
    return (
      <div className="loading">
        <h2>Loading Movies...</h2>
      </div>
    );
  } else {
    return (
      <div className="container">
        <div className="lista-filme">
          {movies.map((movie) => {
            return (
              <article key={movie.id}>
                <strong>{movie.title}</strong>
                <img
                  src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                  alt={movie.title}
                />
                <Link to={`/filme/${movie.id}`}>Access</Link>
              </article>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Home;
