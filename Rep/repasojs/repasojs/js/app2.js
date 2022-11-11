// // //Object literal enhancement

// // const banda='Metallica';
// // const genero='Heavy Metal';
// // const canciones=[1,2,3];

// // //Forma anterior
// // // const metallica={
// // //     banda: banda,
// // //     genero: genero,
// // //     canciones: canciones
// // // }

// // //Forma nueva
// // const metallica={banda,genero,canciones};

// // console.log(metallica);

// const carrito = ["p1", "p2", "p3"];

// let html = "";
// carrito.forEach((producto) => {
//   html += `<li>${producto}</li>`;
// });
// document.querySelector("#app").innerHTML = html;

// carrito.map((producto) => {
//   return `El producto es ${producto}`;
// });
// // Resultado de lo de arriba
// // (3) ["El producto es p1", "El producto es p2", "El producto es p3"]
// // 0: "El producto es p1"
// // 1: "El producto es p2"
// // 2: "El producto es p3"

// // Sprear operator...

// let lenguajes=['Javascript','PHP','Python'];
// let frameworks=['ReactJS','Laravel','Django'];

//unir arreglos en 1 solo

// // let combinacion=lenguajes.concat(frameworks);
// let combinacion=[...lenguajes,...frameworks];
// let copia=[...lenguajes];//sirve para copiar y no afectar al original
 
// console.log(combinacion);


// let [ultimo]=[...lenguajes].reverse();
// console.log(lenguajes);
// console.log(ultimo);
// ////////////////

// function suma(a,b,c){
//     console.log(a+b+c);
// }

// const numeros=[1,2,3];

// suma(numeros);
// suma(...numeros);
////////////////////
//Metodos en arreglos
const personas = [
    {nombre:'Jona',edad:23,aprendiendo: 'java'},
    {nombre:'Mar',edad:30,aprendiendo: 'c++'},
    {nombre:'Jos',edad:44,aprendiendo: 'python'},
    {nombre:'Ray',edad:78,aprendiendo: 'react'}
]

console.log(personas);

//Mayores a 28 
const mayores=personas.filter(persona=>{
    return persona.edad>28;
});
console.log(mayores);
console.log(`mayores esta aprendiendo ${mayores[0].aprendiendo}`);

//Que aprende jona y su edad
const jona=personas.find(persona=>{
    return persona.nombre==='Jona';
}); 
console.log(jona.aprendiendo );
console.log(`Jona esta aprendiendo ${jona.aprendiendo}`);

let total=personas.reduce((edadTotal,persona)=>{
    return edadTotal+persona.edad;
},0);
console.log(total);

let nombres=personas.reduce((nombres,persona)=>{
    return nombres+' '+persona.nombre;
},'');
console.log(nombres);

