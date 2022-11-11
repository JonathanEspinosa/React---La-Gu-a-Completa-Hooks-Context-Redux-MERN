import React from "react";

const Producto = ({ producto, carrito, addProduct, productos }) => {
  const { nombre, precio, id } = producto;

  //Agregar producto al carrito
  const seleccionarProducto = (id) => {
    // const producto=productos.find(producto=>producto.id===id);
    // console.log(producto);
    console.log(`Comprando... ${producto.id}: ${producto.nombre}`);
    addProduct([...carrito, producto]);
  };
  //Eliminar producto en el carrito
  const eliminarProducto = (id) => {
    const producto = carrito.filter(producto => producto.id !== id);
    addProduct(producto); 
  };
  return (
    <div>
      <h2>{nombre}</h2>
      <p>${precio}</p>
      {productos ? (
        <button type="button" onClick={() => seleccionarProducto(id, nombre)}>
          Comprar
        </button>
      ) : (
        <button type="button" onClick={() => eliminarProducto(id, nombre)}>
          Eliminar
        </button>
      )}
    </div>
  );
};

export default Producto;
