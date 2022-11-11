const descargarUsuarios = (cantidad) =>
  new Promise((resolve, reject) => {
    //Pasar la cantidad a la api

    const api = `https://randomuser.me/api/?results=${cantidad}&nat=us`;

    //Llamado a ajax
    const xhr = new XMLHttpRequest();

    //abrir la conexionc    
    xhr.open("GET", api, true);

    //on load
    xhr.onload = () => {
      if (xhr.status === 200) {
        resolve(JSON.parse(xhr.responseText).results);
      } else {
        reject(Error(xhr.statusText));
      }
    };

    //opcionar (on error)
    xhr.onerror = (error) => reject(error);

    //send
    xhr.send();
  });

console.log(descargarUsuarios(20));

// descargarUsuarios(5).then(
//   (miembros) => console.log(miembros),
//   (error) => console.error(new Error(`Hubo un error ${error}`))
// );
 
descargarUsuarios(5).then(
    (miembros) =>imprimirHTML(miembros),
    (error) => console.error(new Error(`Hubo un error ${error}`))
  );

  function imprimirHTML(miembros){
    let html='';

      miembros.forEach(usuario => {
          html+=`
            <li>
                Nombre: ${usuario.name.first} ${usuario.name.last}&nbsp;&nbsp;   
                Pais: ${usuario.nat}&nbsp;&nbsp;   
                Imagen:
                    <img src="${usuario.picture.medium}">
            </li>
          `
      });
      const concontenedorApp= document.querySelector('#app'); 
      concontenedorApp.innerHTML=html;
  }











  