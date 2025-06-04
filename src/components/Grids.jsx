import {useState} from "react";
import "./Grids.css";
import { useCheckbox } from "./CheckBox";


const Grids = ({ lista }) => {
  const { ocultarMnt } = useCheckbox(); // Pega o valor do checkbox

  // Aplica o filtro condicional
  const listaFiltrada = ocultarMnt
    ? lista.filter((item) => item.status !== "manutencao") 
    : lista; //Se ocultar for true, lista.filter vai conter apenas os que não forem status 'manutencao'

  // Agrupamento por section
  const group = listaFiltrada.reduce((acc, item) => { //funcao reduce pega os valores de item e repassa para a variavel axuliar (acc)
    const groupName = item.section; //ele realiza o grupo em que cada item se encaixa
    if (!acc[groupName]) { //realiza a verificacao de dentro da groupName
      acc[groupName] = []; //se nao existir dentro do objeto, ele inicia como vazio
    }
    acc[groupName].push(item); //funcao push faz a adição ao grupo correspondente
    return acc; //retorna o acumulador com os valores atualizados
  }, {}); //inicia ele com o valor vazio

    const [showPopup, setShowPopup] = useState(false)
    const [popupContent, setPopupContent] = useState(null);


  return (
    <>
	<div id="grid-sections">
      {Object.entries(group).map(([section, lista]) => ( //Object.entries(group) faz com que o objeto group fique em um array de pares, e o map é pra percorrer cada par
		 <div className="column" key={section}>  	{/*A chave é para deixar como única cada div*/}
		 <h1 className="section-name">{section}</h1>
		 <div className="item-grid">
          {lista.map(({ id, title, status, image, description, classe }) => ( //Aqui utiliza o map para pra desestruturar a lista e utilizar cada prop como única
            <div
              key={id}
              className={` ${classe && classe} ${status === "manutencao" ? "em-manutencao" : ""} ${title === "Report Contábil" ? "report-contabil" : "item-aut"}`}> {/*Novamente o key deixando a div unica, item-aut serve como classe base, se o status for "manutencao" ele adiciona a classe "em manutencao" de forma dinamica */}
              <img src="../ajuda.png" alt="botão de ajuda" className="help" onClick={() => {setPopupContent({id, description}); setShowPopup(true)}}/>
              {image && image && (
                <img src={image} alt="" className="images" />
              )}
              {title === "Report Contábil" && (
                <span style={{color: "red", fontWeight: "200", fontSize: "12px", alignSelf: "center"}}>Módulo liberado apenas para atendimento</span>
              )}
              <span>{title}</span>
            </div>
          ))}
        </div>
		</div>
      ))}
	  </div>
    {showPopup &&  popupContent && ( //só exibe se ambas forem verdadeiras
      <div className="popup-overlay" onClick={() => setShowPopup(false)}> {/*Faz com que ao clicar fora da caixa, o popup suma*/}
        <div className="popup" onClick={(e) => e.stopPropagation()}>  {/*Impede que o click do popup-overlay seja ativado ao clicar na caixa*/}
          <p className="popup-message">{popupContent.description}</p>  {/*mostra o conteudo de description ligado a variavel atrás*/}
          <button className="popup-button" onClick={() => setShowPopup(false)}>Fechar</button> {/*Quando clicado ele ativa a funcao para fechar a popup*/}
        </div>
      </div>
    )}
    </>
  );
};

export default Grids;
