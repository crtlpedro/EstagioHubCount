import React, { useState } from 'react'
import "./title.css"

const AnnounceTitle : React.FC = () => {
    const [title, setTitle] = useState ("");
  return (
 <section className="title-announce-box">
      <h3>📦 Anúncio</h3>
      <div className="title-box">
        <label htmlFor="title">Escolha um título para o seu anúncio</label>
                <input
          id="title"
          type="text"
          maxLength={110}
          placeholder="Digite aqui (máx. 110 caracteres)"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <small className="example">
          Exemplos: Conta do Discord Nitro 3 Meses, 200 Robux Contas da região americana...
        </small>
      </div>
      </section>
  )
}

export default AnnounceTitle