import {useState} from 'react'
import {useContext} from 'react'
import { contexto } from "./AppContext";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";



const ItemDetail = ({producto}) => { 
    

    const [cartItems, setCartItems] = useState(0);
    const {addItem} = useContext(contexto);
    const [verContador, setVerContador] = useState(false)


    const onAdd = (quantity) => {
        setCartItems(quantity);
        addItem(producto, quantity);
        console.log("Producto confirmado correctamente");
        
      }

      const funcionVerContador = () => {
        setVerContador(true)
    }
    
if(!verContador) {


    return (
      <article>
         <div  className="cardDetail"> 
              <div className="bloqueCardDetail">
                      <div>
                          <div><img src={producto.imagen} alt="card" width="300px"/></div>
                      </div>
              </div>
              <div className="bloqueCardDetail">
                
                      <h2><strong>{producto.nombre}</strong></h2> 
                      <p><strong>Detalles: </strong>{producto.detalles}</p>
                      <p><strong>Funcionamiento: </strong>{producto.funcionamiento}</p>
                      <h3><strong>Precio:$</strong> {producto.precio} ARS</h3>
                      <img src="https://colchonesamalfi.com.ar/wp-content/uploads/2020/12/logoahora12.png" width="200px"></img>
              </div>
              <div className="bloqueCardDetail">
                      <div>
                      <h3><strong>Envíos</strong></h3>   
                      <p>El producto se despacha a las 24hs desde la confirmación del pago.</p>
                      <p>Podrá retirase sin cargo en sucural DEVOTO</p>
                      <p>Envíos a <strong>CABA</strong> $250</p>
                      <p>Envíos al <strong>resto del país</strong> $1250</p>
                      </div>
              </div>
        </div>
        <div className="contador">
        <ItemCount  stock ={10} init={0} onAdd={onAdd} onCount={funcionVerContador}/>
        
        <Link to="/carrito"><button><img src="https://cdn-icons-png.flaticon.com/512/1019/1019611.png" width="50px"></img>Finalizar compra</button></Link>
        </div>        
     
      </article>
    );
  }
    else {
      return(
      <article>
        <div className="cardDetail"> 
              <div className="bloqueCardDetail">
                      <div>
                          <div><img src={producto.imagen} alt="card" width="300px"/></div>
                      </div>
              </div>
              <div  className="bloqueCardDetail">
                      <h2><strong>{producto.nombre}</strong></h2> 
                      <p><strong>Detalles:</strong>{producto.detalles}</p>
                      <p><strong>Funcionamiento:</strong>{producto.funcionamiento}</p>
                      <h3><strong>Precio:$</strong> {producto.precio} ARS</h3>
                      <img src="https://colchonesamalfi.com.ar/wp-content/uploads/2020/12/logoahora12.png" width="200px"></img>
              </div>
              <div  className="bloqueCardDetail">
                      <div>
                      <h3><strong>Envíos</strong></h3>   
                      <p>El producto se despacha a las 24hs desde la confirmación del pago.</p>
                      <p>Podrá retirase sin cargo en sucural DEVOTO</p>
                      <p>Envíos a <strong>CABA</strong> $250</p>
                      <p>Envíos al <strong>resto del país</strong> $1250</p>
                      </div>
              </div>
        
        
        </div>
        <div className="bntFinalizar">
          <Link to="/carrito" >
          <button><img src="https://cdn-icons-png.flaticon.com/512/1019/1019611.png" width="50px"></img>Finalizar compra</button>
          </Link>
        </div>  
        
         
  
      </article>
      )
  }
  };
  
  export default ItemDetail;
  
  
    