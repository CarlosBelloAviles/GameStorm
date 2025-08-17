import { useDispatch, useSelector } from "react-redux";
import { setPage } from "../features/games/gameSlice";
import { selectTotalPages } from "../features/games/selectors";


 const Paginacion = ({ page }) => {
  const dispatch = useDispatch();
  
  // Obtenemos el número total de páginas desde el estado
  const totalPages = useSelector(selectTotalPages);
  
  // Función para manejar el cambio de página
  const PageHandler = (num) => {
    const pageNumber = parseInt(num);
    // Validamos que el número de página sea un entero y esté dentro del rango válido
    if (!Number.isInteger(pageNumber) || pageNumber < 1 || pageNumber > totalPages) {
      console.error(`Número de página inválido: ${num}. Debe estar entre 1 y ${totalPages}`);
      return;
    } 
    
   if (pageNumber !== page) {
      dispatch(setPage(pageNumber));
    }
  };

  return (
    <div className="pagination">
      <button
        onClick={() => PageHandler(1)}
        disabled={page === 1}
        className="pagination-button"
        aria-label="Ir a la primera página"
      >
        Start
      </button>
      
      <button
        onClick={() => PageHandler(page - 1)}
        disabled={page <= 1}
        className="pagination-button"
        aria-label="Ir a la página anterior"
      >
        Previous
      </button>
      
      <span className="pagination-page">
        Página {page} de {totalPages? totalPages : ""}
      </span>
      
      <button
        onClick={() => PageHandler(page + 1)}
        disabled= {page >= totalPages}
        className="pagination-button"
        aria-label="Ir a la página siguiente"
      >
        Next
      </button>
      
      <button
        onClick={() => PageHandler(totalPages)}
        disabled={page >= totalPages}
        className="pagination-button"
        aria-label="Ir a la última página"
      >
        End
      </button>
      </div>
  );
};

export default Paginacion;

        
