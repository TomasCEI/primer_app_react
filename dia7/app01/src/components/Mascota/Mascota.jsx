export const Mascota = ()=> {
    const nombre="Lassy";
    const isAdopted=false;

    return (
        <div>
        <h3>Mascota</h3>
        nombre: {nombre}
        {
            isAdopted
                ? (<div>Esta adoptada</div>)
                : (<div>
                    Esta en busqueda de un hogar
                </div>)
        }

        {
            isAdopted && <div>Esta adoptada</div>
        }

        {
            !isAdopted && <div>Esta en busqueda de un hogar</div>
        }

        </div>
    )
}