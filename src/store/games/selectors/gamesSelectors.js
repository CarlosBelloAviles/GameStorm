import { createSelector } from "@reduxjs/toolkit";
import { gamesApi } from "../api/gamesApi";

// Selectores para obtener la página y el género actual desde el estado
const selectGenre = (state) => state.games.genre;
const selectPage = (state) => state.games.page;

// Selector para obtener la consulta de juegos con paginación y género
const selectGamesQuery = createSelector(
  [selectPage, selectGenre],
  (page, genre) => gamesApi.endpoints.fetchGames.select({ page, genre })
);

// Selector para obtener los juegos con paginación y género
export const selectTotalPages = createSelector(
  [state => selectGamesQuery(state)(state), selectGenre],
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