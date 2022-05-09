import Formulario from "./components/Formulario";
import { CategoriasProvider } from "./context/CategoriasProvider";
import { BebidasProvider } from "./context/BebidasProvider";
import ListadoBebidas from "./components/ListadoBebidas";
import ModalBebida from "./components/ModalBebida";

const App = () => {
  return (
    <CategoriasProvider>
      <BebidasProvider>
        <header>
          <h1>Buscador de Bebidas</h1>
        </header>
          <Formulario />
        <ListadoBebidas />
        <ModalBebida />
      </BebidasProvider>
    </CategoriasProvider>
  )
};

export default App;
