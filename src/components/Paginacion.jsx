import { useDispatch } from "react-redux";
import { setPage } from "../features/games/gameSlice";

 
const Paginacion = ({ page, games, genre }) => {
  const dispatch = useDispatch();
  
  const gamesPerPage = 20; 
  const maxPagesByGenre = 500;
  const calculatedPages = Math.ceil(games?.count / gamesPerPage);
  const totalPages = genre
    ? Math.min(maxPagesByGenre, calculatedPages)
    : calculatedPages;

   
  const PageHandler = (num) => {
    const pageNumber = parseInt(num);
    
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

        
