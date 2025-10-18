import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { gamesApi } from '../store/games/api/gamesApi';

/**
 * Hook personalizado para manejar el prefetch bidireccional de juegos
 * @param {Object} params - Parámetros para el prefetch
 * @param {number} params.page - Página actual
 * @param {string} params.genre - Género seleccionado
 * @param {Object} params.gamesData - Datos actuales de los juegos
 * @param {boolean} params.isSearchActive - Indica si la búsqueda está activa
 */
export const usePrefetchGames = ({ 
  page, 
  genre, 
  gamesData, 
  isSearchActive 
}) => {
  const dispatch = useDispatch();
  const ITEMS_PER_PAGE = 20;

  useEffect(() => {
    // Solo realizamos prefetch si no estamos en modo búsqueda y tenemos datos
    if (!isSearchActive && gamesData?.results?.length > 0) {
      const totalPages = Math.ceil(gamesData.count / ITEMS_PER_PAGE);
      
      // Función auxiliar para realizar el prefetch
      const prefetchPage = (pageNum) => {
        if (pageNum > 0 && pageNum <= totalPages) {
          dispatch(
            gamesApi.util.prefetch(
              "fetchGames",
              {
                page: pageNum,
                genre,
              },
              { 
                ifOlderThan: 60 // Solo prefetch si los datos tienen más de 60 segundos
              }
            )
          );
        }
      };

      // Prefetch bidireccional
      const prefetchPages = () => {
        // Prefetch de la página siguiente si existe
        if (page < totalPages) {
          prefetchPage(page + 1);
        }
        
        // Prefetch de la página anterior si existe
        if (page > 1) {
          prefetchPage(page - 1);
        }
      };

      // Ejecutar el prefetch
      prefetchPages();
    }
  }, [page, genre, gamesData, dispatch, isSearchActive]);
};