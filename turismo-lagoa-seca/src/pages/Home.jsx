import Navbar from "../components/Navbar";
import "./home.css";

export default function Home() {
  return (
    <>
      <Navbar />

      <section className="hero">
        <h1>Descubra Lagoa Seca</h1>
        <p>Natureza, cultura e tranquilidade no coração da Paraíba</p>
      </section>
    </>
  );
}