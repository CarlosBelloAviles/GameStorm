import Generos from "../../../components/Genres/Generos";
import { GridGames } from "../../../components/GridGames/GridGames";
import Paginacion from "../../../components/Pagination/Paginacion";
import { useGamesData } from "../../../hooks/useGamesData";
import "./Home.css";


const Home = () => {
  const {
    renderToGames,
    genreData,
    searchTerm,
    error,
    isLoading,
    page,
    onSelectGenero,
  } = useGamesData();

  return (
    <div className="containerHome">
      <Generos generos={genreData} onSelectGenero={onSelectGenero} />
      <div className="AllGames">
        <GridGames
          games={renderToGames}
          gamesError={error}
          gamesLoading={isLoading}
        />
        {!searchTerm && <Paginacion page={page} /> } 
       </div>

    </div>
  );
};

export default Home;
