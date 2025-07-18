import React, { useState } from "react";
import "./description.css"

const AnnounceDescription: React.FC = () => {
    const [description, setDescription] = useState("");
  return (
    <>
      <section className="description-box">
        <h3>📝 Descrição</h3>
        <label htmlFor="category">Descreva o seu anúncio</label>
        <textarea
          id="description"
          placeholder="Digite aqui"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <small className="alert">
          Atenção: contatos pessoais como WhatsApp, Discord, Facebook ou e-mails
          são proibidos e podem levar ao banimento do anúncio.
        </small>
      </section>
    </>
  );
};

export default AnnounceDescription;
