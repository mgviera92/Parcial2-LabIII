import React, { useState, useEffect } from "react";

export const Registrar = () => {

  const obtenerRegistros = () =>{
    var datos = localStorage.getItem("registroslogin");
    if(datos){
      return JSON.parse(datos);
    }else{
      return [];
    }
  }

  const [registroslogin, setRegistrosLogin] = useState(obtenerRegistros());

  const [producto, setProducto] = useState("");
  const [categoria, setCategoria] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [precio, setPrecio] = useState("");

  const botonguardar = (e) => {
    e.preventDefault();
    var miObjeto = { producto, categoria, cantidad, precio };
    setRegistrosLogin([...registroslogin, miObjeto]);
    limpiarFormulario();
  };

  //LocalStorage
  useEffect(() => { 
    localStorage.setItem("registroslogin", JSON.stringify(registroslogin))
  }, [registroslogin]);

  const limpiarFormulario = () => {
    setProducto("");
    setCategoria("");
    setCantidad("");
    setPrecio("");
    document.getElementById("miFormulario").reset();
  };

  return (
    <div className="bg-light" style={{ marginTop: 20, padding: 20 }}>
      <div className="h3">
        Formulario De Registro de Productos
        <br />
        <form id="miFormulario" onSubmit={ botonguardar } >
          <div className="row" style={{ marginTop: 20  }} >
            <div className="col-6">
              <input
                className="form-control form-control-lg text-center"
                type="text"
                placeholder="Ingrese el producto"
                onChange={ (e) => setProducto(e.target.value)}
                required
              />
            </div>

            <div className="col-6">
              <select
                className="form-select form-select-lg text-center"
                onChange={ (e) => setCategoria(e.target.value)}
                required
              >
                <option value="">Indique Categoría</option>
                <option value="Informática">Informática</option>
                <option value="Gaming">Gaming</option>
                <option value="Accesorios">Accesorios</option>
              </select>
            </div>
          </div>

          <div className="row" style={{ marginTop: 20 }}>
            <div className="col-6">
              <select
                className="form-select form-select-lg text-center"
                onChange={ (e) => setCantidad(e.target.value)}
                required
              >
                <option value="">Indique Cantidad</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
            <div className="col-6">
              <input
                className="form-control form-control-lg text-center"
                type="number"
                min="1"
                max="100000000"
                placeholder="Digite El Precio"
                onChange={ (e) => setPrecio(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="row" style={{ marginTop: 20 }}>
            <div className="col">
              <button className="btn btn-primary btn-lg">Guardar Datos</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};