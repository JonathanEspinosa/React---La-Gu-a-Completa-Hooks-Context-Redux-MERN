// // Escribir clases
// class Tarea{
//     constructor(nombre,prioridad){
//         this.nombre=nombre;
//         this.prioridad=prioridad;
//     }

//     mostrar(){
//         console.log(`${this.nombre} tiene una prioridad de ${this.prioridad}`);
//     }

// }

class ComprasPendientes extends Tarea{
    constructor(nombre, prioridad,cantidad){
        super(nombre,prioridad);
        this.cantidad=cantidad;
    }
    mostrar(){
        super.mostrar();
        console.log (`con valor de ${this.cantidad}`);
    }
}

//crear los objetos
let tarea1= new Tarea('Aprender Javascript','Alta');
let pendientes= new ComprasPendientes('Jabon','Urgente',50);
console.log(tarea1);
console.log(tarea1.mostrar());
console.log(pendientes);
console.log(pendientes.mostrar()); 
