import { useDispatch } from "react-redux";
import LazyImage from "../common/LazyImage";
import { useUser } from "reactfire";
import { addFavorite } from "../../features/games/favoritesSlice";
import "../Games/Games.css";

const Games = ({ game }) => {
   const dispatch = useDispatch();
  const { data: user} = useUser()
  

  // Función para agregar juegos a favoritos
  const addFavoritesGames = (game) => {
    if (user) {
      dispatch(addFavorite(game));
    } else {
      alert("Debes iniciar sesión para agregar juegos a favoritos");
    }
  };

  return (
    <div className="cardGame" key={game.id}>
      <LazyImage
        className="imgBackground"
        src={game.background_image}
        alt={game.name}
      />

      <div className="cardOverlay">
        <h3>{game.name}</h3>
        <div className="ratings">
          <p>📅 {game.released}</p>
          <p>
            ⭐ {game.rating} / {game.rating_top}
          </p>
        </div>
        <div className="platforms">
          {game.parent_platforms?.map(({platform}) => (
            <span key={platform.id}>{platform.name}</span>
          ))}
        </div>
        <div className="genres">
          {game.genres?.map((genre) => (
            <span key={genre.id}>{genre.name}</span>
          ))}
        </div>
        <button className="InputButton" onClick={() => addFavoritesGames(game)}>
          Add to favorites
        </button>
      </div>
    </div>
  );
};

export default Games;
