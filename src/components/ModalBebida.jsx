import useBebidas from "../hooks/useBebidas";

const ModalBebida = () => {

  const {modal, handleModalClick, receta, cargando} = useBebidas();

  if(modal === false) {
    return null;
  };

  const mostrarIngredientes = () => {
    let ingredientes = [];
    
    for(let i = 1; i < 16; i++) {
      if(receta[`strIngredient${i}`]) {
        ingredientes.push(
          <li key={receta[`strIngredient${i}`]}>{ receta[`strIngredient${i}`] } { receta[`strMeasure${i}`] }</li>
        )
      }
    }
    return ingredientes;
  };

  return (
      !cargando && (<div className={`modal ${modal === true ? 'show' : ''}`} onClick={handleModalClick}>
        <div className='modal-content' onClick={e => e.stopPropagation()}>
          <div className='modal-header'>
          <img className="modal-img" src={receta.strDrinkThumb} alt={`Imagen receta ${receta.strDrink}`} />
            <h4 className='modal-title'>{receta.strDrink}</h4>
          </div>
          <div className='modal-body'>
            <h3>Instrucciones</h3>
            {receta.strInstructions}
            <h3>Ingredientes y Cantidades</h3>
            {mostrarIngredientes()}
          </div>
          <div className='modal-footer'>
            <button className='button-modal' onClick={handleModalClick}>
              Close
            </button>
          </div>
        </div>
      </div>)
  );
};

export default ModalBebida;
