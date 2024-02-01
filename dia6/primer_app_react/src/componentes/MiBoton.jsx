

export const MiBoton= ({texto, id}) => {
    //console.log(props);
    //const {texto, id} = props;
    return (
        <button  title={texto}  id={id} > {texto} </button>
    )
}
export const MiBotonOscuro = ({texto, id}) => {
    //console.log(props);
    //const {texto, id} = props;
    return (
        <button className="modoOscuro" title={texto}  id={id} > {texto} </button>
    )
}

//export default MiBoton;
//export default MiBotonOscuro;