import Alumno from "./components/Alumno/Alumno"
import Article from "./components/Article/Article"
import {Mascota} from "./components/Mascota/Mascota"
import Menu from "./components/Menu/Menu"

function App() {

  return (
    <>
    
          <Menu items={["Inicio", "Contacto", "Productos", "Login"]} />
      
      <Mascota />

{ /*
 <Article title="Título de mi artículo" >
        <h3>Subitutlo de articulo</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique harum iusto sint dolore porro aspernatur velit culpa ab voluptatem ullam deleniti magni, tempora, sit voluptates quidem tenetur hic eum sapiente.
        </p>
        escrito por: <br/>
        <Alumno nombre="María" curso="Full Stack"/>
      </Article>
*/}
     
    </>
  )
}

export default App
