import {useContext} from "react"
import {contexto} from "./AppContext"


const CartWidget = () => {
    
    const {cart} = useContext(contexto)
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


