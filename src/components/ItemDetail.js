import Detalles from "./Detalles"

const ItemDetail =({productos})=>{
   
    
    return (
        <section className="class-container">
            {productos.map(producto=>{
                return(
                    <Detalles key={producto.id} producto={producto}/>
                )
            })}
        </section>
    )
}

export default ItemDetail
