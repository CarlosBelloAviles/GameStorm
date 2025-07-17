import React from "react";
import { useSelector } from "react-redux";

const Favorites = () => {
  const { favorites } = useSelector((state) => state.favorites);

  return (
    <div>
      {favorites && favorites.map((game) => (
        <div key={game.id}>
          <h3>{game.name}</h3>
        </div>
      ))}
    </div>
  );
};


export default Favorites;
