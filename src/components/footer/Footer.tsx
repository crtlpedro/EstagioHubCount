import React from "react";
import "./footer.css";
import { Link, Navigate, useNavigate } from "react-router-dom";

const Footer: React.FC = () => {
   const Navigate = useNavigate();
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <img src="../../logo-azul.png" alt="Logo HubAccounts" className="footer-logo" />
          <span className="footer-title">HubAccounts</span>
        </div>

        <div className="footer-links">
          <div className="footer-column">
            <h4>Institucional</h4>
            <ul>
              <li><a href="#">Sobre nós</a></li>
              <li><a href="#">Termos de uso</a></li>
              <li><a href="#">Política de Privacidade</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Ajuda</h4>
            <ul>
              <li><a href="#">Suporte</a></li>
              <li><a href="#">Central de Ajuda</a></li>
              <li><a onClick={() => Navigate("/geraranuncio")}>Fale Conosco</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 HubAccounts - Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;