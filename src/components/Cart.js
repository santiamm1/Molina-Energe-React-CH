import CartList from "./CartList";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { contexto } from "./AppContext";



const Cart = () => {
  const { cart, clearCart } = useContext(contexto);
  const [precioTotal,setPrecioTotal]= useState()

useEffect(()=>{
    let resultado=0;
   for(const carro of cart){
     
     let final = carro.quantity * carro.item.precio;
     resultado += final
   }
 
  setPrecioTotal(resultado)
 
 },[cart])




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

            <h3 id="precioTotal"><strong>Precio Total:$ {precioTotal}</strong></h3> 
            <p>Te recordamos que las operaciones por el canal e-commerce tienen 5 días hábiles para procesamiento.</p>
            <p>Cualquier eventualidad durante el proceso. <strong>Por favor enviar el reclamo a ventas@energe.com.ar</strong></p>
            
              <div>
              <button  onClick={() => {clearCart()}}>Vaciar Carrito</button>
              <Link to="/"><button className="volverInicio">{cart.length === 0 ? "Ir a Comprar" : "Continuar comprando"}</button>
              </Link>
              <Link to="/productos/finalizarCompra"><button className="finalizarCompra">Finalizar Compra</button></Link>
              </div>  
              
                        
            </div>
          </div>
        </div>
      );
    };

export default Cart