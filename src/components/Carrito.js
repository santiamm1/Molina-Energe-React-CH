import CartList from "./CartList";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { cartContext } from "./cartContext";
import { useState } from "react";
import {db} from "./firebase";

const Cart = () => {
  const { cart, clearCart } = useContext(cartContext);





    return (
        <div className="carritoCompras">
          <h2 id="carritoCompras"><strong>Compras realizadas</strong></h2>
          {cart.length === 0 && (
            <div className="carritoVacio">
              <h2>El carrito se encuentra vacío</h2>
              <img src="https://www.pngkey.com/png/full/411-4119504_el-carrito-de-la-compra-est-vaco-shopping.png" width="100px"></img>
            </div>
          )}
    
          <div className="contenedorItemComprados">
            <CartList    carrito={cart} />
    
            <div className="botoneraFinal">

            <h3 id="precioTotal"><strong>Precio Total:</strong></h3>  
              <div>
              <button 
              onClick={() => {
                clearCart();
                }} 
                className="vaciarCart">
              Vaciar Carrito
              </button>
              <Link to="/"><button className="volverInicio">{cart.length === 0 ? "Ir a Comprar" : "Continuar comprando"}</button>
              </Link>
              <button className="finalizarCompra">Finalizar Compra</button>
              </div>  
              
            
              
            </div>
          </div>
        </div>
      );
    };

export default Cart