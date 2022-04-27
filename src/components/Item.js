const Item = ({producto}) => {
    return (
        <article className="card">
            <h3>{producto.nombre}</h3>
            <img src={producto.imagen} alt="card" width="300px"/>
            <p>Precio: $ {producto.precio}</p>
            <button>Detalles</button>    

        </article>
       
    )
}


export default Item
