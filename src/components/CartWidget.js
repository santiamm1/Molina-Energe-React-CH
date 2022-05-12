import {useContext} from "react"
import {cartContext} from "./cartContext"


const CartWidget = () => {
    
    const {cantidad_total} = useContext(cartContext)
    console.log(cantidad_total)
    return (
    <div>
        <span className="material-symbols-outlined">
        shopping_cart
        </span>
        {cantidad_total}
    </div>
    
    )
}   

export default CartWidget


