import { useDispatch, useSelector } from "react-redux";
import { addFavorite } from "../features/games/favoritesSlice";
import { selectGamesWithFavorites } from "../features/games/selectors";
import LazyImage from "./common/LazyImage";

export const Games = ({ games, gamesError, gamesLoading }) => {
  const dispatch = useDispatch();

  // Seleccionamos los juegos con favoritos desde el estado
  const gamesWithFavorites = useSelector(state =>
    selectGamesWithFavorites(state, games)
  );

  // Función para agregar juegos a favoritos
  const addFavoritesGames = (games) => {
    dispatch(addFavorite(games));
  };
  return (
    <div className="gridGames">
      {gamesLoading && <div className="loadingContainer"><span className="loader"></span></div>}
      {gamesError && (
  <pre style={{ color: "red" }}>
    {JSON.stringify(gamesError, null, 2)}
  </pre>
)}
      { gamesWithFavorites.map((game) => (
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
                {game.parent_platforms.map(({ platform }) => (
                  <span key={platform.id}>{platform.name}</span>
                ))}
              </div>
              <div className="genres">
                {game.genres.map((genre) => (
                  <span key={genre.id}>{genre.name}</span>
                ))}
              </div>
              <button onClick={() => addFavoritesGames(game)}>
                Add to favorites
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};
