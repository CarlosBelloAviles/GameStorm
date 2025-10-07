import { useDispatch, useSelector } from "react-redux"
import "./Search.css"
import { clearSearch, setSearchTerm } from "../../features/games/searchSlice";

const Search = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => state.search.SearchTerm)
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim() === "") return;
    dispatch(setSearchTerm(searchTerm)) ; 
    
  }

  return (
    <form className="navbar-search" onSubmit={handleSubmit}>
       <input
         type="text"
         placeholder="Buscar juegos..."
         className="search-input"
         value={searchTerm}
         onChange={(e) => dispatch(searchTerm(e.target.value))}
              />
        <button type="submit" className="InputButton">buscar</button>
        {searchTerm && (
          <button type="button" onClick={() => dispatch(clearSearch())}>
            X
          </button>
        )}
    </form>
  )
}

export default Search