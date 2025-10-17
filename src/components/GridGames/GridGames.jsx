import "../GridGames/GridGames.css";
import Games from "../Games/Games";

export const GridGames = ({ games= { results: [] } , gamesError, gamesLoading }) => {
  return (
    <div className="gridGames">
      {gamesLoading && <div className="loadingContainer"><span className="loader"></span></div>}
      {gamesError && (
  <pre style={{ color: "red" }}>
    {JSON.stringify(gamesError, null, 2)}
  </pre>
)}
      { Array.isArray(games?.results) && 
      games.results.map((game) => (
          <Games key={game.id} game={game} />
        ))}
    </div>
  );
};
