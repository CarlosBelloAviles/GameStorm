import { useDispatch } from "react-redux";
import { addFavorite } from "../features/games/favoritesSlice";

export const Games = ({ games }) => {
  const dispatch = useDispatch();

  const addFavoritesGames = (games) => {
    dispatch(addFavorite(games));
  };
  return (
    <div className="gridGames">
      {games &&
        games.results.map((game) => (
          <div className="cardGame" key={game.id}>
            <img
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
