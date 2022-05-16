import {useContext} from "react"
import {cartContext} from "./cartContext"


const CartWidget = () => {
    
    const {cart} = useContext(cartContext)
    console.log(cart)
    return (
    <div>
        <span className="material-symbols-outlined">
        shopping_cart
        </span>
        {cart.length}
    </div>
    
    )
}   

export default CartWidget


