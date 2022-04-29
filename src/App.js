import React, { useState, useEffect } from "react";
import Formulario from "./components/Formulario";

function App() {
  // Definir el state
  const [busquedaletra, guardarBusquedaLetra] = useState({});

  useEffect(() => {
    if (Object.keys(busquedaletra).length === 0) return;
  }, [busquedaletra]);

  return (
    <>
      <Formulario guardarBusquedaLetra={guardarBusquedaLetra} />
    </>
  );
}

export default App;
