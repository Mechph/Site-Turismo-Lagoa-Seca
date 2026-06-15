import Navbar from "../components/Navbar";
import "./home.css";
import bg from "../assets/images/EuAmoLagoaSeca.jpeg";

export default function Home() {
  return (
    <>
      <Navbar />

      <section 
        className="hero"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <h1>Descubra Lagoa Seca</h1>
        <p>Natureza, cultura e tranquilidade no coração da Paraíba</p>
        <a href="/pontos" className="hero-btn">Explorar Pontos Turísticos</a>
        
      </section>
      <section className="sobre">
  <h2>Conheça Lagoa Seca</h2>

  <p>
    Localizada no Agreste Paraibano, Lagoa Seca é conhecida
    pelo clima agradável, turismo religioso, gastronomia
    regional e belas paisagens rurais.
  </p>
</section>
    </>
  );
}