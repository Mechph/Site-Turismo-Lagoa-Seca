import { Link } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">Lagoa Seca</h2>

      <div className="links">
        <Link to="/">Voltar a Página Inicial</Link>
      </div>
    </nav>
  );
}