import Generos from "../../../components/Genres/Generos";
import { Games } from "../../../components/Games/Games";
import Paginacion from "../../../components/Pagination/Paginacion";
import { useGamesData } from "../../../hooks/useGamesData";
import "./Home.css";


const Home = () => {
  const {
    gamesData,
    genreData,
    gamesError,
    gamesLoading,
    page,
    onSelectGenero,
  } = useGamesData();

  return (
    <div className="containerHome">
      <Generos generos={genreData} onSelectGenero={onSelectGenero} />
      <div className="AllGames">
        <Games
          games={gamesData}
          gamesError={gamesError}
          gamesLoading={gamesLoading}
        />
        <Paginacion page={page} />
      </div>
    </div>
  );
};

export default Home;
