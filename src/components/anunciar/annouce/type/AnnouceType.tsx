import React, { useState } from "react";
import "./type.css"

const AnnounceType: React.FC = () => {
  const [type, setType] = useState("");
  return (
    <>
      <section className="type-announce-box">
        <h3>📂 Tipo de Anúncio</h3>
        <label htmlFor="type">Qual o tipo do anúncio?</label>
        <select
          id="type"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="">Selecione</option>
          <option value="product">Produto</option>
          <option value="service">Serviço</option>
        </select>
      </section>
    </>
  );
};

export default AnnounceType;
