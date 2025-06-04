import { useState } from "react";
import "./Header.css"
import { CheckboxFilter } from "./CheckBox";


const Header = () => {
  const [name, setName] = useState(""); // Declara o estado name em vazio e o setName (variavel auxiliar) para atualizar o estado, utilizando o hook useState
  const [mostrar, setMostrar] = useState(true); //declara o estado mostrar em true para controlar se o modal aparece ou não, usando o setMostrar como variavel auxiliar

  const confirmarNome = () => { //funcao para confirmar o nome digitado
    if (name.trim() !== "") {//.trim verifica se há espaço vazio como negacao
      setMostrar(false);//sendo nao vazio, atualiza o setMostrar para false, fazendo a modal sumir
    }
  };

  return (
    <>
      {mostrar && (
        <div className="modal-overlay">
          <div className="modal">
            <h2 className="message-modal">Digite seu nome:</h2>
            <input
              type="text"
              placeholder="Digite aqui!"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <button className="button-modal" onClick={confirmarNome}>Confirmar</button>
          </div>
        </div>
      )}

      {!mostrar && (
        <header>
          <h1 className="welcome-user">Bem-vindo, {name}!</h1>
          <CheckboxFilter/>
        </header>
      )}
    </>
  );
};

export default Header;
