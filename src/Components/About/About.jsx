import "./About.css";
import { useSelector } from "react-redux";

export default function About() {
  const style = useSelector((state) => state.style);
  return (
    <div className="containerAbout0">
      <div className={style ? "containerAbout" : "containerAbout1"}>
        <h2 className="aboutTitle">Clima App</h2>
        <hr />
        <p>
          En esta Aplicación usted cuenta con aproximadamente 200.000 ciudades
          de todo el mundo, donde usted podrá saber:
          <ol>
            <li>El clima actual</li>
            <li>Condicion ventosa de la ciudad que usted quiera</li>
            <li>Cantidad actual de nubes en la zona que se encuentra</li>
            <li>Y su ubicación en cualquier parte del planeta tierra</li>
          </ol>
          <hr />
          Próximamente estaremos agregando nuevas funcionalidades, para que
          usted pueda conocer las condiciones climaticas en días anteriores y
          posteriores.
          <hr />
          Espero sea de su agrado y pueda disfrutarla. ¡Un saludo!
        </p>
      </div>
    </div>
  );
}
