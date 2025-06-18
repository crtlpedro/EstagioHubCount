// components/favorites/FavoriteSection.tsx
import React, { useState } from "react";
import { useFavorites, useModules } from "../../Wrapper";
import GridItem from "../../grid/griditem/GridItem";
import "./FavoriteSection.css";

const FavoriteSection: React.FC = () => {
  const { favorites } = useFavorites();
  const { moduleList } = useModules();
  const [showFavorites, setShowFavorites] = useState(true);

  const favoriteModules = moduleList.filter((mod) => favorites.includes(mod.id));

  if (favoriteModules.length === 0) return null;

  return (
    <div>
    <section className="favorite-section">
      <div className="favorites-toggle">
        <button onClick={() => setShowFavorites(!showFavorites)}>
          {showFavorites ? "Ocultar Favoritos ▲" : "Mostrar Favoritos ▼"}
        </button>
      </div>

      {showFavorites && (
        <div className="favorites-list">
          
          <div className="favorites-cards">
            {favoriteModules.map((module) => (
              <div key={module.id} className="favorite-item">
                <div className="item-grid-favorite">
                <GridItem modules={[module]} />
              </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
    </div>
  );
};

export default FavoriteSection;
