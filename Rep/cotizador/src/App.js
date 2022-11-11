import React, { useState } from "react";
import Header from "./component/Header";
import Formulario from "./component/Formulario";
import Resumen from "./component/Resumen";
import Resultado from "./component/Resultado";
import Spinner from "./component/Spinner"; 
import styled from "@emotion/styled";

const Contenedor = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const ContenedorFormulario = styled.div`
  background-color: #fff;
  padding: 3rem;
`;

function App() {
  const [resumen, saveResumen] = useState({
    cotizacion: 0,
    datos: {
      marca: "",
      year: "",
      plan: "",
    },
  });

  const [cargando, saveCargando] = useState(false);

  return (
    <Contenedor>
      <Header titulo="Cotizador de Seguros"></Header>
      <ContenedorFormulario>
        <Formulario
          saveResumen={saveResumen}
          saveCargando={saveCargando}
        />
        {cargando ? <Spinner /> : <Resumen datos={resumen.datos}/>}
        {!cargando ? (
          <Resultado cotizacion={resumen.cotizacion}/>
        ) : null}
      </ContenedorFormulario>
    </Contenedor>
  );
}

export default App;
