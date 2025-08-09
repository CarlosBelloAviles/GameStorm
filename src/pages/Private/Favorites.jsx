import React from "react";
import { useSelector } from "react-redux";

const Favorites = () => {
  const { favorites } = useSelector((state) => state.favorites);
  
  return (
    <div className="containerFavorites" >
      {favorites && favorites.map((game) => (
        <div className="cardGameFavorites" key={game.id}>
          <img className="imgFavorite" src={game.background_image} alt={game.name} />
          <div className="cardOverlayFavorites">
            <h3>{game.name}</h3>
            <p>📅 {game.released}</p>
          </div>
        </div>
      ))}
    </div>
  );
};


export default Favorites;
