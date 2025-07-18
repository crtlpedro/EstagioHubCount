import React, { useState } from "react";
import "./price.css";

const Price: React.FC = () => {
  const [price, setPrice] = useState("");
  return (
    <>
      <div className="price-box">
        <h3>🏷️ Preço</h3>
        <label className="price">Preço</label>
        <input
          type="number"
          placeholder="1"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
    </>
  );
};

export default Price;
