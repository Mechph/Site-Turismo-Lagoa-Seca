import Navbar from "../components/Navbar";
import Card from "../components/Card";
import pontos from "../data/pontos";
import "./pontos.css";

export default function Pontos() {
  return (
    <>
      <Navbar />

      <div className="container">
        <h2>Pontos Turísticos</h2>

        <div className="grid">
          {pontos.map(p => (
            <Card key={p.id} ponto={p} />
          ))}
        </div>
      </div>
    </>
  );
}