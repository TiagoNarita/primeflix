import { useEffect, useState } from "react";
import api from "../../services/api";

function Home() {
    const [filmes, setfilmes] = useState([]);
    useEffect(() => {
        async function loadFilmes() {
            const response = await api.get("movie/now_playing", {
                params: {
                    api_key: "7d1270e307ce5543af39f6418b1334e9",
                    language: "pt-br",
                    page: 1,
                },
            });

            console.log(response);
        }

        loadFilmes();
    }, []);

    return (
        <div>
            <h1>Bem Vindo ao Home</h1>
        </div>
    );
}

export default Home;
