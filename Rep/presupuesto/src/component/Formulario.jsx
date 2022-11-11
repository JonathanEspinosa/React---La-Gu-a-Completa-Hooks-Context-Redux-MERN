import React, { useState } from "react";
import Error from "./Error";
import shortid from "shortid"
import PropTypes from "prop-types"

const Formulario = ({saveGasto,saveCrearGasto}) => {
  const [nombre, saveNombre] = useState("");
  const [cantidad, saveCantidad] = useState(0);
  const [error, saveError] = useState(false);

  //cuando el usuario agrega gasto
  const agregarGasto = (e) => {
    e.preventDefault();
    //validar
    if (cantidad < 1 || isNaN(cantidad) || nombre.trim() === "") {
      saveError(true);
      return;
    }
    saveError(false);

    //construir gasto
    const gasto={
        nombre,
        cantidad,
        id:shortid.generate()
    }
    //pasar el gasto al componente principal
    saveGasto(gasto);
    saveCrearGasto(true);
    //resetear el form
    saveNombre('');
    saveCantidad(0);
  };
  return (
    <form onSubmit={agregarGasto}>
      <h2>Agrega tus gastos aqui</h2>
      {error ? (
        <Error mensaje="Ambos campos son obligatorios o presupuesto es incorrecto" />
      ) : null}
      <div className="campo">
        <label>Nombre Gastos</label>
        <input
          type="text"
          className="u-full-width"
          placeholder="Ej. Transporte"
          value={nombre}
          onChange={(e) => saveNombre(e.target.value)}
        />
      </div>
      <div className="campo">
        <label>Cantidad Gastos</label>
        <input
          type="number"
          className="u-full-width"
          placeholder="300"
          value={cantidad}
          onChange={(e) => saveCantidad(parseInt(e.target.value))}
        />
      </div>
      <input
        type="submit"
        className="button-primary u-full=width"
        value="Agregar Gasto"
      />
    </form>
  );
};

Formulario.propTypes={
    saveGasto: PropTypes.func.isRequired,
    saveCrearGasto: PropTypes.func.isRequired
}
export default Formulario;
