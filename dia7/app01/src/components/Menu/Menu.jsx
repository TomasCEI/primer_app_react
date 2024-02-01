import "./Menu.css"

const Menu = ({items}) => {
    //console.log(items);

    /*
    const productos = [
        {id:"23" ,titulo: "producto1", precio:25},
        {id:"35" ,titulo: "producto2", precio:25},
        {id:"2" ,titulo: "producto3", precio:25},
    ];
    */

    return (
        <nav>
            <ul>
                {
                items.map((item) => (
                    <li key={item.id}>
                        <a href={`#${item}`}>{item}</a>
                    </li>
                ))
                }
            </ul>
        </nav>
    )
}

export default Menu;