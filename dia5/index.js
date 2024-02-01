
console.clear();

// hook useState
function estadoDeLaCarrera(valorInicial){
    let estado = valorInicial;


    
    const setEstado =(nuevoValor) => {
        estado=nuevoValor;
        return;
    }

    const obtenerEstado = ()=> {
        return estado;
    }

    return [obtenerEstado, setEstado];
}

// usar el hook de useState
const [piloto, setPiloto] = estadoDeLaCarrera("Juan");

console.log(piloto());
setPiloto("Pedro");
console.log(piloto());
