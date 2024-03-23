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
        })
        .catch(() => {
          console.log("Filme não encontrado");
        });
    }

    loadFilme();

    return () => {
      console.log("conponente foi desmontado");
    };

    console.log(movieDetails);
  }, []);

  return loading ? (
    <div>
      <h2>oi</h2>
    </div>
  ) : (
    <div>
      <h1>Acessing the movie {id}</h1>
    </div>
  );
}

export default Filme;
