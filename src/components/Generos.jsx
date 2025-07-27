import { useRef } from "react";
import useScrollGenre from "../hooks/useScrollGenreTablet";

const Generos = ({ generos, onSelectGenero }) => {
  
  const scrollRef = useRef(null)
 const { scrollLeft, scrollRight } = useScrollGenre(scrollRef)
 const generosArray = Array.isArray(generos?.results) ? generos.results : [];

  return (

    <div className="containerGeneros">
      <div className="scrollButtons">
        <button onClick={scrollLeft} className="scrollBtn">◀</button>
        </div>
        <div className="genresScrollContainer" ref={scrollRef}>
        
          <button className="genre-button" onClick={() => onSelectGenero("")}>
            Ver Todos los Juegos 🎮
          </button>

          {generosArray.length > 0 ? (
          generosArray.map((genero) => (
              <div
                key={genero.id}
                style={{
                  backgroundImage: `url(${genero.image_background})`,
                }}
                className="genreItem"
                onClick={() => onSelectGenero(genero.slug)}
              >
                <div style={{
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                }}  
                className="genreName">
                  <h3>{genero.name}</h3>
                </div>
              </div>
            ))) : (
              <p className="noGenres">No se encontraron géneros.</p>
            )} 
        </div>
        <div className="scrollButtons">
        <button onClick={scrollRight} className="scrollBtn">▶</button>
      </div>
    </div>

    
  );
};

export default Generos;
