import { Link } from "react-router-dom"
import { useState} from "react"

const Item = ({producto}) => {

    const [detalles,setDetalles] = useState(false)

    const detallesPrductos = () => {
    console.log(producto.id)

    setDetalles(true)

}
    return (
        <article className="card">
            <h3>{producto.nombre}</h3>
            <img src={producto.imagen} alt="card" width="300px"/>
            <p>Precio: $ {producto.precio}</p>
            <Link to={`/item/${producto.id}`} key={producto.id}><button>Detalles</button></Link>
           
            

        </article>
       
    )
}


export default Item
