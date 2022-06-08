import React from 'react'
import { useContext } from 'react'
import { contexto } from './AppContext'



const CartItem = ({carro}) => {

const {removeItem} = useContext (contexto);



const valor = carro.item.precio * carro.quantity;
const valorFinanciado= valor/12;




  return (
   
      
        <div className="DetalleCarrito">
              <div className="contenedorCarrito">
              <h2><strong>{carro.item.nombre}</strong></h2>
              <h5><strong>Categoría del producto: </strong>{carro.item.categorias}</h5>
              </div>

              <div className="contenedorCarrito">
                  <img id="imagen-carrito" src={carro.item.imagen} alt="imagen-carrito" title="Imagen Carrito"/>
                  <p><strong>Las imágenes son de carácter ilustrativo</strong></p>
              </div>


              <div className="contenedorCarrito">
                  <h5><strong>Cantidad:</strong> {carro.quantity} unidad/es</h5>
                  <h5><strong>Precio</strong>: ${valor}</h5>
                  <p><strong>Valor expresado en $ARS</strong> correspondiente al monto del equipo en dólares, con la conversión del dólar tipo vendedor del BNA en la fecha de la operación.</p>
                  <img src="https://colchonesamalfi.com.ar/wp-content/uploads/2020/12/logoahora12.png" width="200px"></img>
                  <p>Pagá tu producto en 12 cuotas de : $ {valorFinanciado}</p>
              </div>
              <div className="contenedorCarrito">
              <button onClick={()=>{removeItem(carro.item.id)}}><img src="https://cdn.icon-icons.com/icons2/1380/PNG/512/vcsconflicting_93497.png" width="30px"></img>Eliminar</button>
              </div>   
                
        </div>  
  
  )
}

export default CartItem