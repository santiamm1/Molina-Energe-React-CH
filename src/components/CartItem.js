import React from 'react'
import { useContext } from 'react'
import { cartContext } from './cartContext'



const CartItem = ({carro}) => {

const {removeItem} = useContext (cartContext);



const valor = carro.item.precio * carro.quantity;





  return (
   
      
<div className="itemCarrito">
          <h2><strong>{carro.item.nombre}</strong></h2>
          <img id="imagen-carrito" src={carro.item.imagen} alt="" title=""/>
          <input  type="number"  value={carro.quantity}/>
          <h3>Precio: ${valor}</h3>
          <button  className="borrarItem" onClick={()=>{removeItem(carro.item.id)}}>Eliminar</button>      
</div>
  
  )
}

export default CartItem