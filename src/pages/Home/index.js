import { useEffect, useState } from "react";
import api from "../../services/api";

function Home() {
  const [filmes, setfilmes] = useState([]);

  useEffect(() => {
    async function loadFilmes() {
      const response = await api.get("movie/now_playing", {
        params: {
          api_key: "7d1270e307ce5543af39f6418b1334e9",
        },
      });
      //console.log(response.data.results.slice(0, 10));
      setfilmes(response.data.results.slice(0, 10));
    }

    loadFilmes();
  }, []);

  return (
    <div>
      <div></div>
    </div>
  );
}

export default Home;
