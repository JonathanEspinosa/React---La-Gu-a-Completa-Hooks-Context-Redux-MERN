import React from "react";
 
const Footer = ({fecha,size}) => (
      <footer>
        <p style={{fontSize: size}}>Todos los derechos reservados {fecha}&copy;</p>
      </footer>
    );

export default Footer;
