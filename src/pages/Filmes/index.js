import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../services/api";

function Filme() {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFilme() {
      const response = await api
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
          console.log("Filme não encontrado");
        });
    }

    loadFilme();
    console.log(movieDetails);
    return () => {
      console.log("conponente foi desmontado");
    };
  }, []);

  return loading ? (
    <div className="filme-info">
      <h1>Loading movies</h1>
    </div>
  ) : (
    <div className="filme-info">
      <h1>{movieDetails.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/original/${movieDetails.backdrop_path}`}
        alt={movieDetails.title}
      />
      <h3></h3>
    </div>
  );
}

export default Filme;
