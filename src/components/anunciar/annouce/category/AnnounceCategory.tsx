import React, { useState } from "react";
import "./category.css"

const AnnounceCategory: React.FC = () => {
    const [category, setCategory] = useState("");
  return (
    <>
      <section className="category-box">
        <h3>🗂️ Categoria</h3>
        <label htmlFor="category">Categoria</label>
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Selecione</option>
          <option value="games">Jogos</option>
        </select>
      </section>
    </>
  );
};

export default AnnounceCategory;
