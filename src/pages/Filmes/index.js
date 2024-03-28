import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../../services/api";
import "./style.css";
import { toast } from "react-toastify";

function Filme() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [movieDetails, setMovieDetails] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFilme() {
      await api
        .get(`/movie/${id}`, {
          params: {
            api_key: "7d1270e307ce5543af39f6418b1334e9",
            language: "en-US",
          },
        })
        .then((response) => {
          setMovieDetails(response.data);
          setLoading(false);
        })
        .catch(() => {
          navigate("/", { replace: true });
          return;
        });
    }

    loadFilme();
    return () => {};
  }, [navigate, id]);

  function salvarFilme() {
    const minhaLista = localStorage.getItem("@primeflix");
    let saveMovies = JSON.parse(minhaLista) || [];

    const hasMovies = saveMovies.some((filmesSalvos) => {
      return filmesSalvos.id === movieDetails.id;
    });

    if (hasMovies) {
      toast.warn("This movie is already in your list");
      return;
    }

    saveMovies.push(movieDetails);
    localStorage.setItem("@primeflix", JSON.stringify(saveMovies));
    toast.success("Movie saved successfully");
  }

  return loading ? (
    <div className="movie-info">
      <h1>Loading movies</h1>
    </div>
  ) : (
    <div className="movie-info">
      <h1>{movieDetails.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/original/${movieDetails.backdrop_path}`}
        alt={movieDetails.title}
      />
      <h3>Synopsis</h3>
      <span>{movieDetails.overview}</span>
      <strong>Evaluation: {Math.round(movieDetails.vote_average)}/10</strong>

      <div className="area-button">
        <button onClick={salvarFilme}>Save</button>
        <button>
          <a
            href={`http://youtube.com/results?search_query=${movieDetails.title} trailer`}
            target="blank"
            rel="external"
          >
            Trailer
          </a>
        </button>
      </div>
    </div>
  );
}

export default Filme;
