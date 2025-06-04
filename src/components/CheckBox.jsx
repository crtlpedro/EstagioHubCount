import {createContext, useContext, useState} from 'react'
import "./Checkbox.css"

const CheckboxContext = createContext(); //Cria o contexto para compartilhar o estado do checkbox para os componentes

export const useCheckbox = () => useContext (CheckboxContext); //hook para facilitar o acesso ao componentes

export const CheckboxProvider = ({ children }) => { //provider para gerenciar o estado do checkbox
    const [ocultarMnt, setOcultarMnt] = useState(false); //controla se os módulos em manutenção devem ou nao mostrar (false = mostrar)

    // Importante salientar a forma que o children funciona, pois, ele é usado de forma que eu junto todos os elementos e resumo a apenas ele quando chamado lá dentro
    // do return, no caso deste código, ele está pegando os estados da checkbox e está resumindo em uma unica variavel lá dentro do return

  return (
    <>
        <CheckboxContext.Provider value={{ ocultarMnt, setOcultarMnt}}> {/* emprega o valor a ser usado dentro do componente, variavel ocultarMnt e funcao setOcultarMnt*/}
            {children}
        </CheckboxContext.Provider>
    </>
  )
};

export const CheckboxFilter = () => {
    const {ocultarMnt, setOcultarMnt} = useCheckbox();

    return (
        <label className='label'>
            <input
                className='checkbox'
                type='checkbox' 
                checked={ocultarMnt} onChange={() => setOcultarMnt(!ocultarMnt)} 
            />
           <span className='span-checkbox'>Mostrar apenas modulos ativos</span>
        </label>
    )
}