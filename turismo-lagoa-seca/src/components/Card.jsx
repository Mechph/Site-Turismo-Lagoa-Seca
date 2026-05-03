export default function Card({ ponto }) {
  return (
    <div className="card">
      <img src={ponto.imagem} alt={ponto.nome} />
      <h3>{ponto.nome}</h3>
      <p>{ponto.descricao}</p>
    </div>
  );
}