import { Link } from "react-router-dom"


const Item = ({producto}) => {

    return (
        <article className="card">
            <h3><strong>{producto.nombre}</strong></h3>
            <img id="img-producto" src={producto.imagen} alt="card"/>
            <h4><strong>Precio: $ {producto.precio}</strong></h4>
            <p><strong>Funcionamiento:</strong> {producto.funcionamiento}</p>
            <Link to={`/item/${producto.id}`} key={producto.id}><button>Ver Detalles</button></Link>
        </article>

    )
}


export default Item
