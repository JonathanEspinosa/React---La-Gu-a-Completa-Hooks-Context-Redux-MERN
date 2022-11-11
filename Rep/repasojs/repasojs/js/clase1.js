// import  {nombreTarea,CrearTarea,TareaCompletada} from './tareas.js';

// console.log(nombreTarea);

// const tarea1=CrearTarea('Pasear al perro', 'Media');
// console.log(tarea1);
// console.log(TareaCompletada('Pasear al perro'));

import  {Tarea,ComprasPendientes} from './tareas.js';

const tarea1=new Tarea('uno','dos');
const ComprasPendiente=new ComprasPendientes('uno','dos');

console.log(tarea1);
console.log(ComprasPendiente);