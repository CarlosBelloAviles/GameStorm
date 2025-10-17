import { useDispatch, useSelector } from "react-redux";
import {
  apiSlice,
  useFetchGamesQuery,
  useFetchGenresQuery,
  useFetchSearchQuery,
} from "../services/apiSlice";
import { useEffect } from "react";
import { setGenre } from "../features/games/gameSlice";

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

  // Efecto para prefetch de juegos cuando hay más resultados disponibles
  useEffect(() => {
    if (gamesData?.results?.length && gamesData.next) {
      dispatch(
        apiSlice.util.prefetch(
          "fetchGames",
          {
            page: page + 1,
            genre,
          },
          {}
        )
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
