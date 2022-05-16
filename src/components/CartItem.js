import React from 'react'
import { useContext } from 'react'
import { cartContext } from './cartContext'
import {useState} from 'react'


const CartItem = ({carro}) => {

const {removeItem,cart} = useContext(cartContext);



const valor = carro.item.precio * carro.quantity;


  return (
   
      
<div className="itemCarrito">
          <img id="imagen-carrito" src={carro.item.imagen} alt="" title=""/>
          <p><strong>{carro.item.nombre}</strong></p>
          <input type="number"  value={carro.quantity}/>
          <h3>${valor}</h3>
          <button  className="borrarItem">Eliminar</button>
</div>
  
  )
}

export default CartItem