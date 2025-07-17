import React from "react";
import { useDispatch } from "react-redux";
import { setPage } from "../features/games/gameSlice";

const Paginacion = ({ page, games }) => {
  const dispatch = useDispatch();

  const PageHandler = (num) => {
    dispatch(setPage(num));
  };

  /* const prevPage = () => {
    dispatch(setPage(page - 1));
  }; */

  return (
    <div className="pagination">
      <button
        onClick={() => PageHandler(page -1)}
        disabled={page <= 1}
        className="pagination-button"
      >
        Previous
      </button>
      <span className="pagination-page">Page {page}</span>
      <button
        onClick={()=> PageHandler(page + 1)}
        disabled={games?.results.length === 0}
        className="pagination-button"
      >
        Next
      </button>
    </div>
  );
};

export default Paginacion;
