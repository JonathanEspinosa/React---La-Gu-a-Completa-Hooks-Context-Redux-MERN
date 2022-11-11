//=====Scope=====
// var musica = "rock";

// if (musica) {
//   let musica = "perrreo";
//   console.log("tipo: ", musica);
// }
// console.log("tipo: ", musica);

// //=====Formas de concatenar=====
// var nombre = "Jonathan";
// var trabajo = "Programador";
// console.log("Nombre:" + nombre + ", Trabajo:" + trabajo);
// console.log(`Nombre:${nombre}, Trabajo:${trabajo}`);

// let html = `
//     <ul>
//         <li>Nombre: ${nombre}</li>
//         <li>Trabajo: ${trabajo}</li>
//     </ul>
// `;

// const contenedorApp = document.querySelector("#app");
// contenedorApp.innerHTML = html;

// //=========FUNCION DE FLECHA=========
// //Es la misma funcion solo que sin la palabra
// let viajando=(destino="") =>{
//     return `Viajando a la ciudad de  ${destino}`;
// }
//   viajando=(destino="") => `Viajando a la ciudad de  ${destino}`;


// console.log(viajando("barcelona"));
// console.log(viajando());

//====Object Literal====
const persona={
    nombre: 'Jonathan',
    profesion: 'Programador'
}

console.log(persona);

//====Object Constructor====
function Tarea(nombre,urgencia){
    this.nombre=nombre;
    this.urgencia=urgencia;
} 
//Agregar un prototype a tarea:
Tarea.prototype.mostrarInformacionTarea= function(){
    return `La tarea ${this.nombre} tiene una prioridad de ${this.urgencia}`;   
} 

var tarea1= new Tarea('Aprender java','urgente');
console.log(tarea1);
console.log(tarea1.mostrarInformacionTarea());
//============================================

