import axios from "axios";

//Base da URL: https://api.themoviedb.org/3
//URL da API : https://api.themoviedb.org/3/movie/now_playing?api_key=7d1270e307ce5543af39f6418b1334e9&language=pt-br

const api = axios.create({
  baseURL: " https://api.themoviedb.org/3",
});

export default api;
