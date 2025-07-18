import React from "react";
import "./signup.css";

interface SignupModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SignupModal: React.FC<SignupModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Cadastro</h2>
        <input type="text" placeholder="Nome Completo" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Senha" />
        <button>Cadastrar</button>
        <button onClick={onClose}>Fechar</button>
      </div>
    </div>
  );
};

export default SignupModal;