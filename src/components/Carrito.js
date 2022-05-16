import CartList from "./CartList";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { cartContext } from "./cartContext";
import { useState } from "react";

const Cart = () => {
  const { cart, carroVacio } = useContext(cartContext);



    return (
        <div className="carritoCompras">
          <h2 id="carritoCompras"><strong>Compras realizadas</strong></h2>
          {cart.length === 0 && (
            <div>
              <h2>Carrito vacio</h2>
            </div>
          )}
    
          <div className="contenedorItemComprados">
            <CartList    carrito={cart} />
    
            <div className="botoneraFinal">

            <h3 id="precioTotal"><strong>Precio Total:</strong></h3>  
              <div>
              <button onClick={() => {carroVacio();}}className="vaciarCart">Vaciar Carrito</button>
              <Link to="/"><button className="volverInicio">{cart.length === 0 ? "comprar" : "Continuar comprando"}</button>
              </Link>
              <button className="finalizarCompra">Finalizar Compra</button>
              </div>  
              
            
              
            </div>
          </div>
        </div>
      );
    };

export default Cart