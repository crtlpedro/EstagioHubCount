import React, { useState } from "react";
import LoginModal from "../loginModal/LoginModal";
import SignupModal from "../signupModal/SignupModal";
import "./anunciar.css";


const AnunciarPage: React.FC = () => {
    const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  return (
    <div className="account-choice-container">
      <h2 className="account-title">👤 Conta GGMAX</h2>

      <div className="account-choice-box">
        <div className="account-option">
          <h3>Já sou cliente GGMAX</h3>
          <p>Entre em sua conta para prosseguir:</p>
          <button className="account-btn" onClick={() => setShowLogin(true)}>
            Login
          </button>
        </div>

        <div className="vertical-divider"></div>

        <div className="account-option">
          <h3>Ainda não tenho cadastro</h3>
          <p>Ainda não possui uma conta? É fácil:</p>
          <button className="account-btn" onClick={() => setShowSignup(true)}>
            Cadastrar
          </button>
        </div>
      </div>

      <LoginModal isOpen={showLogin} onClose={() => setShowLogin(false)}/>
      <SignupModal isOpen={showSignup} onClose={() => setShowSignup(false)} /> 
      

    </div>
  );
};

export default AnunciarPage;