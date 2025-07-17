const Generos = ({ generos, onSelectGenero }) => {
  return (
    <div className="containerGeneros">
      <button className="genre-button" onClick={() => onSelectGenero("")}>
        Ver Todos los Juegos 🎮
      </button>

      {generos &&
        generos.results.map((genero) => (
          <div
            key={genero.id}
            style={{
              backgroundImage: `url(${genero.image_background})`,
            }}
            className="genreItem"
            onClick={() => onSelectGenero(genero.slug)}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                }}
              className="genreName"
            >
              <h3>{genero.name}</h3>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Generos;
