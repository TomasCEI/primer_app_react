//import MiBoton from './MiBoton';

import { MiBoton, MiBotonOscuro } from './componentes/MiBoton';
import {MiComponente} from './componentes/MiComponente';
import './App.css';

function App() {
  
  return (
    <>
      <h1>Contenidooooo!</h1>
      {1+1}
      <MiComponente />
      <MiComponente />
      <MiComponente />
      <MiBoton texto="Boton 1" id="2"/>
      <MiBotonOscuro texto="Boton Oscuro" id="2"/>
    </>
  )
}




export default App
