import React from "react";
import "./navbar.css"
import { Link, Navigate, useNavigate } from "react-router-dom";

const Navbar = () => {
  const Navigate = useNavigate();
  return (
    <>
    <div>
      <nav className="navbar">
        <div className="site-name">
          <img className="logo" onClick={() => Navigate("/")} src="../../logo-azul.png"/>
          <a className="p-logo" onClick={() => Navigate("/")}>HubAccounts</a>
          </div>
        <div className="search-bar">
          <input type="text" placeholder="🔍Anúncio, usuário ou categoria" />
        </div>
        <div className="nav-links">
          <a className="category" href="#">Categorias</a>
          <a className="blog" href="#" onClick={() => Navigate("/")}>Inicio</a>
          <button className="btn-announce" onClick={() => Navigate("/anunciar")}>Anunciar</button>
          <span className="cart">🛒</span>
          <span className="icon-btn">☰</span>
        </div>
      </nav>
    </div>
    </>
  );
};

export default Navbar;
