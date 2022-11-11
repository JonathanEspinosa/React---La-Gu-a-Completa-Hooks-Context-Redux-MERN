import React, { Fragment, useState, useEffect } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import Clima from "./components/Clima";
import Error from './components/Error'


function App() {
  //
  const [busqueda, saveBusqueda] = useState({
    ciudad: "",
    pais: "",
  });

  const [consultar, saveConsultar] = useState(false);
  const [resultado, saveResultado] = useState({});
  const [error,saveError]= useState(false);
  const { ciudad, pais } = busqueda;

  useEffect(() => {
    const consultarAPI = async () => {
      if (consultar) {
        const appId = "5d595c2f1b8c781d15a6e5e3f7bbd44e";
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;

        const respuesta = await fetch(url);
        const resultado = await respuesta.json();

        saveResultado(resultado);
        saveConsultar(false);
        //Revisar resultados y errores
        if(resultado.cod==='404'){
          saveError(true);
        }else{
          saveError(false);
        }
      }
    };
    consultarAPI();
    //  eslint-disable-next-line
  }, [consultar]);

  let componente;
 if(error){
  componente=<Error mensaje= 'No hay resultados'/>
 }else{
  componente= <Clima resultado={resultado} />

 }

  return (
    <Fragment>
      <Header titulo="Clima React App"></Header>
      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Formulario
                busqueda={busqueda}
                saveBusqueda={saveBusqueda}
                saveConsultar={saveConsultar}
              />
            </div>
            <div className="col m6 s12">
 
             {componente}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
