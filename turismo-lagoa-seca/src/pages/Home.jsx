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
      </section>
    </>
  );
}