import React from "react";
import Logo from "../../asset/logo.svg";
import SearchBar from "../SearchBar/SearchBar.jsx";
import "./Nav.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { onStyle } from "../redux/actions/actions";

function Nav() {
  const style = useSelector((state) => state.style);
  const dispatch = useDispatch();

  return (
    <nav
      className={
        style
          ? "navbar navbar-dark navegacion2"
          : "navbar navbar-dark navegacion1"
      }
    >
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
      <div className="d-flex justify-content-center py-3 navSeparador">
        <Link className="linkHome mx-2" to="/">
          <span>Ciudades</span>
        </Link>
        <Link className="linkHome mx-2" to="/about">
          <span>Acerca del Proyecto</span>
        </Link>
        <button
          className={style ? "linkHome1" : "linkHome2"}
          onClick={() => dispatch(onStyle(false))}
        >
          Estilos
        </button>
      </div>
      <SearchBar />
    </nav>
  );
}

export default Nav;
