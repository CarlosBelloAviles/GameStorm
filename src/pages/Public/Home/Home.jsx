import Generos from "../../../components/Genres/Generos";
import { Games } from "../../../components/Games/Games";
import Paginacion from "../../../components/Pagination/Paginacion";
import { useDispatch, useSelector } from "react-redux";
import { setGenre } from "../../../features/games/gameSlice";
import { useEffect } from "react";
import { apiSlice,  useFetchGamesQuery,  useFetchGenresQuery } from "../../../services/apiSlice";
import "./Home.css";

const Home = () => {

 const { page, genre } = useSelector((state) => state.games);

  const { data: gamesData, error: gamesError, isLoading: gamesLoading } = useFetchGamesQuery({ page, genre });

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
        <Paginacion  page={page} />
      </div>
    </div>
  );
};

export default Home;
