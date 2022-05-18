import React from "react";
import '../estilosContador/Contador.css'

function Contador({ clics }) {
  return <div className="contador">{clics}</div>;
}

export default Contador;
