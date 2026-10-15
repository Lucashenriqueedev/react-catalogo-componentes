
function CardCurso({ nome, duracao, modalidade, nivel, vagas }) {
  return (
    <article className="card-curso">
      <div className="card-curso-topo">
        <span className="curso-icone">&lt;/&gt;</span>
        <span className="curso-nivel">{nivel}</span>
      </div>

      <h3>{nome}</h3>

      <div className="curso-dados">
        <p>
          <span>Duração</span>
          <strong>{duracao}</strong>
        </p>

        <p>
          <span>Modalidade</span>
          <strong>{modalidade}</strong>
        </p>
      </div>

      <div className="curso-vagas">
        {vagas > 0 ? (
          <span className="vagas-disponiveis">
            Vagas disponíveis
          </span>
        ) : (
          <span className="turma-completa">
            Turma completa
          </span>
        )}
      </div>
    </article>
  );
}

export default CardCurso;
