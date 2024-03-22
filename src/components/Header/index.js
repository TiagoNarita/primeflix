import { Link } from "react-router-dom";
import "./header.css";

function Header() {
  return (
    <header className="cabecalho">
      <Link className="logo" to={"/"}>
        Prime Flix
      </Link>
      <Link className="favoritos" to={"/favoritos"}>
        My Movies
      </Link>
    </header>
  );
}

export default Header;
