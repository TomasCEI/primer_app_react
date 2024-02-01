import "./Alumno.css";

const Alumno = ({nombre, curso}) => {

    return (
        <div className="alumno">
            <h2>Hola me llamo {nombre}</h2>
            <p>Estoy cursando {curso}</p>
        </div>
    )
}

export default Alumno;



