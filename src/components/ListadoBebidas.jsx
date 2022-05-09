import useBebidas from "../hooks/useBebidas";
import Bebida from "./Bebida";

const ListadoBebidas = () => {

  const {bebidas} = useBebidas();

  return (
    <div className="container-filas">
      {bebidas.map(bebida => (
        <Bebida 
          key={bebida.idDrink}
          bebida={bebida}
        />
      ))}
    </div>
  )
};

export default ListadoBebidas;