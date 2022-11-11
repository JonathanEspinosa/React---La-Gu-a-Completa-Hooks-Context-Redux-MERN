import React from "react";

function Header({titulo, numero}) {
//   const edad = 18;
//   let mensaje = "";
//   if (edad > 18) {
//     mensaje = "si";
//   } else {       
//     mensaje = "no";
//   }
  return (
    <h1 id="encabezado" className="encabezado">
       {titulo}, {numero+2} {/*{mensaje} */}
    </h1>
  );
}

export default Header;
