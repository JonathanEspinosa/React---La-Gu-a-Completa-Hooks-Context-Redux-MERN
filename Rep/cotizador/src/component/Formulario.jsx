import React, { useState } from "react";
import styled from "@emotion/styled";
import { obtenerDiferenciaYear, calcularMarca, calcularPlan } from "../helper";
import PropTypes from "prop-types";

const Campo = styled.div`
  display: flex;
  margin-bottom: 1rem;
  align-items: center;
`;
const Label = styled.label`
  flex: 0 0 100px;
`;
const Select = styled.select`
  display: block;
  width: 100%;
  border: 1px solid #e1e1e1;
  -webkit-appearance: none;
`;

const InputRadio = styled.input`
  margin: 0 1rem;
`;

const Boton = styled.button`
  background-color: #00838f;
  font-size: 1rem;
  width: 100%;
  padding: 1rem;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  border: none;
  transition: background-color 0.3s ease;
  margin-top: 2rem;

  &:hover {
    background-color: #26c6da;
    cursor: pointer;
  }
`;

const Error = styled.div`
  background-color: red;
  color: white;
  padding: 1rem;
  width: 100%;
  text-align: center;
  margin-bottom: 2rem;
`;

const Formulario = ({ saveResumen, saveCargando }) => {
  const [datos, saveDatos] = useState({
    marca: "",
    year: "",
    plan: "",
  });

  const [error, saveError] = useState(false);

  //extraer valores
  const { marca, year, plan } = datos;

  //obtener datos del formulario y pasarlos al state
  const obtenerInformacion = (e) => {
    saveDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };

  //cuando presiona submit
  const cotizarSeguro = (e) => {
    e.preventDefault();
    if (marca.trim() === "" || year.trim() === "" || plan.trim() === "") {
      saveError(true);
      return;
    }
    saveError(false);
    //Base de 2000
    let resultado = 2000;

    //Obtener diferencia por año
    const diferenciaYear = obtenerDiferenciaYear(year);

    //por cada año restar 3%
    resultado -= diferenciaYear * 0.03;

    //Americano 15%
    //Asiatico 5%
    //Europeo 30%
    resultado += resultado * calcularMarca(marca);

    //Basico aumenta 20%
    //Completo aumenta 50%
    resultado += resultado * calcularPlan(plan);

    //total
    saveCargando(true);
    setTimeout(() => {
      //elimina el spinner
      saveCargando(false);

      //pasa informacion al componente principal
      saveResumen({
        cotizacion: Number(parseFloat(resultado).toFixed(2)),
        datos,
      });
    }, 2000);
  };

  return (
    <form onSubmit={cotizarSeguro}>
      {error ? <Error>Todos los campos son obligatorios</Error> : null}
      <Campo>
        <Label>Marca</Label>
        <Select name="marca" value={marca} onChange={obtenerInformacion}>
          <option value="">-- Seleccione --</option>
          <option value="americano">Americano</option>
          <option value="europeo">Europeo</option>
          <option value="asiatico">Asiatico</option>
        </Select>
      </Campo>

      <Campo>
        <Label>Año</Label>
        <Select name="year" value={year} onChange={obtenerInformacion}>
          <option value="">-- Seleccione --</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
          <option value="2016">2016</option>
          <option value="2015">2015</option>
          <option value="2014">2014</option>
          <option value="2013">2013</option>
          <option value="2012">2012</option>
        </Select>
      </Campo>

      <Campo>
        <Label>Plan</Label>
        <InputRadio
          type="radio"
          name="plan"
          value="basico"
          checked={plan === "basico"}
          onChange={obtenerInformacion}
        />
        Basico
        <InputRadio
          type="radio"
          name="plan"
          value="completo"
          checked={plan === "completo"}
          onChange={obtenerInformacion}
        />
        Completo
      </Campo>

      <Boton type="submit">Cotizar</Boton>
    </form>
  );
};

Formulario.propTypes = {
  saveResumen: PropTypes.func.isRequired,
  saveCargando: PropTypes.func.isRequired,
};

export default Formulario;
