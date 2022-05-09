import useCategorias from "../hooks/useCategorias";
import { useState } from "react";
import Alerta from "./Alerta";
import useBebidas from "../hooks/useBebidas";

const Formulario = () => {

  const [busqueda, setBusqueda] = useState({
    nombre: '',
    categoria: ''
  });

  const [alerta, setAlerta] = useState('');
  const { categorias } = useCategorias();
  const {consultarBebida} = useBebidas();

  const handleSubmit = e => {
    e.preventDefault();
    if(Object.values(busqueda).includes('')) {
      setAlerta('Todos los campos son obligatorios');
      return
    }
    setAlerta('');
    consultarBebida(busqueda);
  };

  return (
    
    <form 
      onSubmit={handleSubmit}
    >
      {alerta && <Alerta>{alerta}</Alerta>}
      <div className="container-form">
      <div className="container-text">
        <label htmlFor="nombre">Nombre Bebida</label>
        <input 
          type="text" 
          placeholder="Ej: Tequila, Vodka, etc."
          name="nombre"
          id="nombre"
          value={busqueda.nombre}
          onChange={e => setBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value
          })}
        />
      </div>
      <div className="container-select">
        <label htmlFor="categoria">Categoría Bebida</label>
        <select 
          name="categoria" 
          id="categoria"
          value={busqueda.categoria}
          onChange={e => setBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value
          })}
        >
          <option value="">--Selecciona Categoría</option>
          {categorias.map(categoria => (
            <option 
              key={categoria.strCategory} 
              value={categoria.strCategory}
            >
              {categoria.strCategory}
            </option>
          ))}
        </select>
      </div>
      </div>
      <div className="container-button">
        <button className="btn-form" type="submit">
          Buscar Bebidas
        </button>
      </div>
    </form>
  )
}

export default Formulario
