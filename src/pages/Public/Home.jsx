import Generos from "../../components/Generos";
import { Games } from "../../components/Games";
import { apiSlice } from "../../services/apiSlice";
import Paginacion from "../../components/Paginacion";
import {
  useFetchGamesQuery,
  useFetchGenresQuery,
} from "../../services/apiSlice";
import { useDispatch, useSelector } from "react-redux";
import { setGenre } from "../../features/games/gameSlice";
import { useEffect, useMemo } from "react";

const Home = () => {
  const { page, genre } = useSelector((state) => state.games);

  // Llamamos a la consulta de juegos con paginación y género
  const {
    data: gamesData,
    error: gamesError,
    isLoading: gamesLoading,
  } = useFetchGamesQuery({ page, genre });

  // Llamamos a la consulta de géneros
 const { data: genreData } = useFetchGenresQuery();

  
const dispatch = useDispatch()

// Efecto para prefetch de juegos cuando hay más resultados disponibles
useEffect(() => {
  if (gamesData?.results?.length && gamesData.next) {
    dispatch(
      apiSlice.util.prefetch("fetchGames", { 
        page: page + 1, 
        genre 
      }, {})
    );
  }
}, [page, genre, gamesData, dispatch]);


//// Función para manejar la selección de género
 const onSelectGenero = (slug) => {
    dispatch(setGenre(slug));
  };

  // Efecto para desplazar la ventana al inicio cuando cambie la página o el género
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page, genre]);

 

  return (
    <div className="containerHome">
      <Generos generos={genreData} onSelectGenero={onSelectGenero} />
      <div className="AllGames">
        <Games games={gamesData} gamesError={gamesError} gamesLoading={gamesLoading} />
        <Paginacion page={page} />
      </div>
    </div>
  );
};

export default Home;
