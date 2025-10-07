import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFavorites } from "../../../features/games/favoritesSlice";
import "./Favorites.css";

const Favorites = () => {
  const dispatch = useDispatch()
  const { favorites } = useSelector((state) => state.favorites);

const deleteFavorite = (favId) => {dispatch(removeFavorites(favId))};

if (favorites.length === 0) {
  return <p>No tienes juegos en favoritos todavía.</p>;
}
  
  return (
    <div className="containerFavorites" >
      {favorites && favorites.map((favGame) => (
        <div className="cardGameFavorites" key={favGame.id}>
          <img className="imgFavorite" src={favGame.background_image} alt={favGame.name} loading="lazy" />
          <div className="cardOverlayFavorites">
            <h3>{favGame.name}</h3>
            <p>📅 {favGame.released}</p>
          </div>
          <button onClick={() => deleteFavorite(favGame.id)}>eliminar</button>
        </div>
      ))}
    </div>
  );
};


export default Favorites;
