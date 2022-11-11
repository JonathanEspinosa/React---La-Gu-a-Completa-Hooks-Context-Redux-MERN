import React, { useState, useEffect, Fragment } from "react";
import Pregunta from "./component/Pregunta";
import Formulario from "./component/Formulario";
import Listado from "./component/Listado";
import ControlPresupuesto from "./component/ControlPresupuesto";
import Error from "./component/Error";

function App() {
  //definir el state
  const [presupuesto, savePresupuesto] = useState(0);
  const [restante, saveRestante] = useState(0);
  const [mostrarPregunta, updatePregunta] = useState(true);
  const [gastos, saveGastos] = useState([]);
  const [gasto, saveGasto] = useState([]);
  const [crearGasto, saveCrearGasto] = useState(false);
  const [error, saveError] = useState(false);

  //UseEffect que actualiza el restante
  useEffect(() => {
    if (crearGasto) {
      if (restante - gasto.cantidad >= 0) {
        //agregar el nuevo resultado
        saveGastos([...gastos, gasto]);

        //Restar el presupuesto actual
        saveRestante(restante - gasto.cantidad);
        saveError(false);
      } else {
        saveError(true);
      }
      //resetear a false
      saveCrearGasto(false);
    }
  }, [gasto, crearGasto, gastos, restante]);

  return (
    <div className="container">
      <header>
        <h1>Gasto Semanal</h1>
        <div className="contenido-principal contenido">
          {mostrarPregunta ? (
            <Pregunta
              savePresupuesto={savePresupuesto}
              saveRestante={saveRestante}
              updatePregunta={updatePregunta}
            />
          ) : (
            <Fragment>
              <div className="row"> 
                {error ? <Error mensaje="Ha excedido el presupuesto" /> : null}
              </div>
              <div className="row">
                <div className="one-half column">
                  <Formulario
                    saveGasto={saveGasto}
                    saveCrearGasto={saveCrearGasto}
                  />
                </div>
                <div className="one-half column">
                  <Listado gastos={gastos} />
                  <ControlPresupuesto
                    presupuesto={presupuesto}
                    restante={restante}
                  />
                </div>
              </div>
            </Fragment>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
