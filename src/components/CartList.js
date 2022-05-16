import React from 'react'
import CartItem from './CartItem'



const CartList = ({carrito}) => {



  return (
   <>
{carrito.map(carro => {
    return <CartItem key={carro.item.id} carro={carro} />
})}
   
   
   </>
  )
}

export default CartList