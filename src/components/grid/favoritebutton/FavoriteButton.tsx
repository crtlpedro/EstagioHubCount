import React from "react";
import { useFavorites } from "../../wrapper/Wrapper";
import "./FavoriteButton.css";

interface FavoriteButtonProps {
  id: number;
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({ id }) => {
  const { favorites, toggleFavorite } = useFavorites();

  const isFavorite = favorites.includes(id);

  return (
    <>
    { id!==13 &&  (
    <button
      className={`favorite-button ${isFavorite ? "favorited" : ""}`}
      onClick={() => toggleFavorite(id)}
      title={isFavorite ? "Remover dos favoritos" : "Adicionar aos favoritos"}
    >
      {isFavorite ? "⭐" : "☆"}
    </button>
)}
  </>
  );
};

export default FavoriteButton;
