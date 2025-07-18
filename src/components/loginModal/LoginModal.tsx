import React from "react";
import "./loginmodal.css";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Login</h2>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Senha" />
        <button>Entrar</button>
        <button onClick={onClose}>Fechar</button>
      </div>
    </div>
  );
};

export default LoginModal;
