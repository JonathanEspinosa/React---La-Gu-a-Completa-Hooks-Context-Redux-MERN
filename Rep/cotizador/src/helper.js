
export function obtenerDiferenciaYear(year) {
  return new Date().getFullYear() - year;
}

export function calcularMarca(marca) {
  let incremento;
  switch (marca) {
    case "americano":
      incremento = 0.15;
      break;
    case "europeo":
      incremento = 0.3;
      break;
    case "asiatico":
      incremento = 0.05;
      break;
    default:
      break;
  }
  return incremento;
}

export function calcularPlan(plan) {
  let incremento;
  plan === "basico" ? (incremento = 0.2) : (incremento = 0.5);

  return incremento;
}

//muestra la primer letra mayusucla

export function primeraMayuscula(texto){
    return texto.charAt(0).toUpperCase()+ texto.slice(1);
}

 