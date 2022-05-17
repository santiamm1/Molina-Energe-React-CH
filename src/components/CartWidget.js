import {useContext} from "react"
import {cartContext} from "./cartContext"


const CartWidget = () => {
    
    const {cart} = useContext(cartContext)
    console.log(cart)
    return (
    <div className="seccionCarrito">
        <span className="material-symbols-outlined">
        shopping_cart
        </span>
        <p className='indicador'>{cart.length}</p>
    </div>
    
    )
}   

export default CartWidget


