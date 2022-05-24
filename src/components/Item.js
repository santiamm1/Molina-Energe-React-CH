import { Link } from "react-router-dom"
import { useState} from "react"

const Item = ({producto}) => {

    return (
        <article className="card">
            <h3><strong>{producto.nombre}</strong></h3>
            <img src={producto.imagen} alt="card" width="300px"/>
            <p><strong>Precio: $ {producto.precio}</strong></p>
            <Link to={`/item/${producto.id}`} key={producto.id}><button>Ver Detalles</button></Link>
           
            

        </article>
       
    )
}


export default Item
