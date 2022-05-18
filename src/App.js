import "./App.css";
import freeCodeCampLogo from "./imagenes/freecodecamp-logo.png";
import Boton from "./components/Boton";
import Contador from "./components/Contador";
import { useState } from "react";

function App() {
  const [clics, setClics] = useState(0);

  const manejarClic = () => {
    setClics(clics + 1);
  };

  const reiniciar = () => {
    setClics(0);
  };

  const quitar=()=>{
    setClics(clics-1)
  }
  return (
    <div className="App">
      <div className="logo-contenedor">
        <img
          className="freecodecamp-logo"
          src={freeCodeCampLogo}
          alt="logo-freecodecamp"
        />
      </div>
      <div className="contenedor-principal">
        <Contador clics={clics} />

        <Boton texto={"Clic"} esBotonClic={true} manejarClic={manejarClic} />

        <Boton
          texto={"Quitar click"}
          esBotonClic={true}
          manejarClic={quitar}
        />

        <Boton
          texto={"Reiniciar"}
          esBotonClic={false}
          manejarClic={reiniciar}
        />
      </div>
    </div>
  );
}

export default App;
