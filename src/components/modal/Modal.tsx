import React from "react";
import { useModal } from "../../types/modal";
import "./Modal.css"

const Modal: React.FC = () => {
  const { name, setName, modalOpen, handleConfirm } = useModal();

  if (!modalOpen) return null;

  return (
    <div className="modal-overlay">
    <div className="modal">
      <h2 className="message-modal">Digite seu nome:</h2>
      <input
        className="input-modal"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Digite aqui!"
      />
      <button className="button-modal" onClick={handleConfirm}>Confirmar</button>
    </div>
    </div>
  );
};

export default Modal;
