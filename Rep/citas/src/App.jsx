import React, { Fragment, useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import Cita from "./components/Cita";

function App() {
  //Citas en localStorage
  let citasIniciales = JSON.parse(localStorage.getItem("citas"));
  if (!citasIniciales) {
    citasIniciales = [];
  }
  //Arreglo de Citas
  const [citas, saveCitas] = useState(citasIniciales);

  //UseEffect para realizar operaciones cuando el estado cambia
  useEffect(() => { 
  localStorage.setItem("citas", JSON.stringify(citas)); 
  }, [citas]);

  //Funcion citas actuales y agregar nueva
  const crearCita = (cita) => {
    saveCitas([...citas, cita]);
  };

  //Funcion que elimina cita por id
  const deleteCita = (id) => {
    let nCitas = citas.filter((x) => x.id !== id);
    saveCitas(nCitas);
  };
  //Mensaje condicional
  var titulo = citas.length === 0 ? "No hay citas" : "Administra tus citas";

  return (
    <Fragment>
      <h1>Administrador de Pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario crearCita={crearCita} />
          </div>
          <div className="one-half column">
            <h2>{titulo}</h2>
            {citas.map((cita) => (
              <Cita key={cita.id} cita={cita} deleteCita={deleteCita} />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
} 
export default App;
