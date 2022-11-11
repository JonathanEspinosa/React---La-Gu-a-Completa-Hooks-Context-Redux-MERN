// export const nombreTarea='Pasear al perro';
// // export default nombreTarea;

// //Exportar funcion

// export const CrearTarea=(tarea,urgencia)=>{
//     return `La tarea ${tarea} tiene un urgencia ${urgencia}`;
// }
// export const TareaCompletada=(tarea)=>{
//     return `La tarea ${tarea} esta completa`;
// }

// export default class Tarea{
export class Tarea {
  constructor(nombre, prioridad) {
    this.nombre = nombre;
    this.prioridad = prioridad;
  }

  mostrar() {
    console.log(`${this.nombre} tiene una prioridad de ${this.prioridad}`);
  }
}

export class ComprasPendientes extends Tarea {
  constructor(nombre, prioridad, cantidad) {
    super(nombre, prioridad);
    this.cantidad = cantidad;
  }
  mostrar() {
    super.mostrar();
    console.log(`con valor de ${this.cantidad}`);
  }
}
