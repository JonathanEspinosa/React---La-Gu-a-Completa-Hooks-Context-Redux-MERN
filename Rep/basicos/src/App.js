import React, { Fragment, useState } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Producto from "./Components/Producto";
import Carrito from "./Components/Carrito";

function App() {
  //Crear listado de prodcutos
  const [productos, setProductos] = useState([
    { id: 1, nombre: "Camisa ReactJS", precio: 50 },
    { id: 2, nombre: "Camisa VueJS", precio: 40 },
    { id: 3, nombre: "Camisa NodeJS", precio: 30 },
    { id: 4, nombre: "Camisa Javascript", precio: 20 },
  ]);

  // State para un carrito de compras
  const [carrito, addProduct] = useState([]);

  //Obtener la fecha
  const fecha = new Date().getFullYear();

  return (
    <Fragment>
      <Header titulo="Tienda Virtual" numero={20} />
      <h1>Lista de Productos</h1>
      {productos.map((producto) => (
      <Producto
          key={producto.id}
          producto={producto}
          productos={productos}
          carrito={carrito}
          addProduct={addProduct}
        />
      ))}
      <Carrito carrito={carrito} addProduct={addProduct}/>
      <Footer fecha={fecha} numero={15} />
    </Fragment>
  );
}

export default App;
