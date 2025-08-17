import { createSelector } from "@reduxjs/toolkit";
import { apiSlice } from "../../services/apiSlice";
// Este archivo contiene selectores para obtener datos de juegos y favoritos desde el estado de Redux.

// Selector para obtener los favoritos desde el estado
const selectFavorites = (state) => state.favorites.favorites;

// Selector para obtener los juegos con información de favoritoss
export const selectGamesWithFavorites = createSelector(
    [selectFavorites, (state, games) => games],
    (favorites, games) => {
      const results = games?.results;
      if (!results) return [];
      return results.map(game => ({
        ...game,
        isFavorite: favorites.some(fav => fav.id === game.id)
      }));
    }
  );

// Selectores para obtener la página y el género actual desde el estado
  const selectGenre = (state) => state.games.genre;
  const selectPage = (state) => state.games.page;
  
  // Selector para obtener la consulta de juegos con paginación y género
  const selectGamesQuery = createSelector(
    [selectPage, selectGenre],
    (page, genre) => apiSlice.endpoints.fetchGames.select({ page, genre })
  );
  

  // Selector para obtener los juegos con paginación y género
   export const selectTotalPages = createSelector(
    [ state => selectGamesQuery(state)(state), selectGenre],
    (gamesQuery, genre) => {
      const gamesData = gamesQuery?.data;
      const gamesPerPage = 20; 
      const maxPagesByGenre = 500;
  
      if (!gamesData || !gamesData.count) return 1; // Manejo de caso sin datos
  
      const calculatedPages = Math.ceil(gamesData?.count / gamesPerPage);
      return genre
        ? Math.min(maxPagesByGenre, calculatedPages)
        : calculatedPages;
    }
  ); 