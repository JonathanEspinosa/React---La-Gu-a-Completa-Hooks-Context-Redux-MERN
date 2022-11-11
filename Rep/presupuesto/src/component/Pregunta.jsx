import React, { Fragment, useState } from "react";
import Error from "./Error";
import PropTypes from "prop-types"

const Pregunta = ({savePresupuesto,saveRestante,updatePregunta}) => {
  //Definir el state
  const [cantidad, saveCantidad] = useState(0);
  const [error, saveError] = useState(false);

  //Funcion que lee el presupuesto
  const definirPresupuesto = (e) => {
    saveCantidad(parseInt(e.target.value, 10));
  };

  //Submit para definir el presupuesto
  const agregarPresupuesto = (e) => {
    e.preventDefault();
    //validar
    if (cantidad < 1 || isNaN(cantidad)) {
      saveError(true);
      return;
    } 

    //si se pasa la validacion
    saveError(false);
    savePresupuesto(cantidad);
    saveRestante(cantidad);
    updatePregunta(false);
  };

  return (
    <Fragment>
      <h2>Coloca tu presupuesto</h2>
      {error ? <Error mensaje="El presupuesto es incorrecto" /> : null}
      <form onSubmit={agregarPresupuesto}>
        <input
          type="number"
          min="0"
          className="u-full-width"
          placeholder="Ingresa tu presupuesto"
          onChange={definirPresupuesto}
        />
        <input
          type="submit"
          className="button-primary u-full-width"
          placeholder="Ingresa tu presupuesto"
        />
      </form>
    </Fragment>
  );
};

Pregunta.propTypes={
  savePresupuesto: PropTypes.func.isRequired,
  saveRestante: PropTypes.func.isRequired,
  updatePregunta: PropTypes.func.isRequired
}
export default Pregunta;
