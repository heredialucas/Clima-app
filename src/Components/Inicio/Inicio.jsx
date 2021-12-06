import { Link } from "react-router-dom";
import "./Inicio.css";

export default function Inicio() {
  return (
    <div className="containerInicio">
      <h1 className="inicio1">BIENVENIDA/O</h1>
      <Link to="./ciudades">
        <h2 className="inicio2">Agregue una ciudad</h2>
      </Link>
    </div>
  );
}
