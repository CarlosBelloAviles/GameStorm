import Generos from "../../components/Generos";
import { Games } from "../../components/Games";
import Paginacion from "../../components/Paginacion";
import {
  useFetchGamesQuery,
  useFetchGenresQuery,
} from "../../services/apiSlice";
import { useDispatch, useSelector } from "react-redux";
import { setGenre } from "../../features/games/gameSlice";
import { useEffect } from "react";

const Home = () => {
  const { page, genre } = useSelector((state) => state.games);
  const {
    data: games,
    error: gamesError,
    isLoading: gamesLoading,
  } = useFetchGamesQuery({ page, genre });

  
const { data: genreGames } = useFetchGenresQuery();
 
  const dispatch = useDispatch();
  const onSelectGenero = (slug) => {
    dispatch(setGenre(slug));
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page, genre]);

  return (
    <div className="containerHome">
      <Generos generos={genreGames} onSelectGenero={onSelectGenero} />
      <div className="AllGames">
        <Games games={games} gamesError={gamesError} gamesLoading={gamesLoading} />
        <Paginacion page={page} games={games} genre={genre} />
      </div>
    </div>
  );
};

export default Home;
