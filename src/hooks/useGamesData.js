import { useDispatch, useSelector } from "react-redux";
import {
  useFetchGamesQuery,
  useFetchGenresQuery,
  useFetchSearchQuery,
} from "../store/games/api/gamesApi";
import { setGenre } from "../store/games/slices/gameSlice";
import { usePrefetchGames } from './usePrefetchGames';


export const useGamesData = () => {
  const { page, genre } = useSelector((state) => state.games);
  const searchTerm = useSelector((state) => state.search.SearchTerm);
  const dispatch = useDispatch();

  const {
    data: gamesData,
    error: gamesError,
    isLoading: gamesLoading,
  } = useFetchGamesQuery({ page, genre }, { skip: !!searchTerm });

  // Llamamos a la consulta de géneros
  const { data: genreData } = useFetchGenresQuery();

  // Llamamos a la consulta de Buscador de Juegos
  const {
    data: searchData,
    error: searchError,
    isLoading: searchLoading,
  } = useFetchSearchQuery({ searchTerm }, { skip: !searchTerm });

  const renderToGames = searchTerm && searchData
    ? searchData
    : !searchTerm && gamesData
    ? gamesData
    : { results: [] };
  const isLoading = searchTerm ? searchLoading : gamesLoading;
  const error = searchTerm ? searchError : gamesError;

  // Utilizamos el hook personalizado para el prefetch
  usePrefetchGames({
    page,
    genre,
    gamesData,
    isSearchActive: !!searchTerm
  });

  //// Función para manejar la selección de género
  const onSelectGenero = (slug) => {
    dispatch(setGenre(slug));
  };

 

  return {
    gamesData,
    genreData,
    renderToGames,
    error,
    isLoading,
    searchTerm,
    page,
    genre,
    onSelectGenero,
  };
};
