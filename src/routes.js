import { Routes, Route, BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Filme from "./pages/Filmes";
import Home from "./pages/Home";
import Error from "./pages/Error";

function RoutesApp() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/filme/:id" element={<Filme />} />

        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;
