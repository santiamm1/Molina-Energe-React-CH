import {useState} from 'react'
import Contador from "./ItemCount"

const ItemDetail = (producto) => {

    return (
        <article className="card"> 
            <h2><strong>Detalle de equipos</strong></h2>
            <h5>Nombre del producto : {producto.nombre}</h5>
            <h5>Precio : $ {producto.precio}</h5>
            <img src={producto.imagen} alt=""/>
            <h5>Categoria : {producto.categorias}</h5>
            
        </article>
    )
} 

export default ItemDetail