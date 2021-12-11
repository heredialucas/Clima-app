import React from "react";
import Logo from "../../asset/logo.svg";
import SearchBar from "../SearchBar/SearchBar.jsx";
import "./Nav.css";
import { Link } from "react-router-dom";

function Nav({ onSearch}) {


  return (
    <nav className="navbar navbar-dark navegacion">
      <Link className="linkCabecera" to="/">
        <span className="navbar-brand">
          <img
            id="logo"
            src={Logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt=""
          />
          <span className="cabecera">Heredia Lucas - Clima App</span>
        </span>
      </Link>
      <div className='d-flex justify-content-center py-3 navSeparador'>
        <Link className="linkHome mx-2" to="/">
          <span>Inicio</span>
        </Link>
        <Link className="linkHome mx-2" to="/ciudades">
          <span>Ciudades</span>
        </Link>
        <Link className="linkHome mx-2" to="/about">
          <span>Acerca del Proyecto</span>
        </Link>
      </div>
      <SearchBar onSearch={onSearch} />
    </nav>
  );
}

export default Nav;
