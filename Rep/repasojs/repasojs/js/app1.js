//=======Destructuring de objetos===
const aprendiendo={
    version: {
        anterior: 'ES5',
        nueva: 'ES6'
    },
    framework: ['React','Vue','AngularJS']
}

// Destructuring es extraer vallores de un objeto
console.log(aprendiendo);

//version anterior
// let version=aprendiendo.version.nueva;
// let framework=aprendiendo.framework[0];
// console.log(framework);

// Destructuring forma nueva
let {version,framework}=aprendiendo;
console.log(version);
console.log(version.nueva);
console.log(framework);
console.log(framework[0]);

let {anterior}=aprendiendo.version;
console.log(anterior);


