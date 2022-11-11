import React from "react";
import Gasto from "./Gasto";
import PropTypes from "prop-types";

const Listado = ({ gastos }) => {
  return (
    <div className="gastos-realizados">
      <h2>Listado de Gastos</h2>
      <ul style={{ overflowY:"auto", height:'225px' }}>
        {gastos.map((gasto) => (
          <Gasto key={gasto.id} gasto={gasto} />
        ))}
      </ul>
    </div>
  );
};

Listado.propTypes = {
  gastos: PropTypes.array.isRequired,
};

export default Listado;
