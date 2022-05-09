import { useState } from "react";
import useBebidas from "../hooks/useBebidas";

const Bebida = ({bebida}) => {

  const {handleModalClick, handleBebidaIdClick} = useBebidas();

  return (
      <div className="card-container">
        <div className="image-container">
          <img src={bebida.strDrinkThumb} alt={`Imagen de ${bebida.strDrink}`} />
        </div>
        <div className="card-content">
          <div className="card-title">
            <h6>{bebida.strDrink}</h6>
          </div>
        </div>
        <div className="btn">
          <button 
            className="btn-card" 
            onClick={() => {
              handleModalClick();
              handleBebidaIdClick(bebida.idDrink);
            }}
          >
            Ver Receta
          </button>
        </div>
      </div>
  )
};

export default Bebida;