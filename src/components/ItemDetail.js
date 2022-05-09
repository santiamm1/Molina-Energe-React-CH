import {useState} from 'react'
import Contador from "./ItemCount"
import { productosIniciales } from "./ItemListContainer"
import Hijo from "./Hijo"


const ItemDetail = ({producto}) => { 
    
    const [nombre,setNombre] =useState("");
    const handleClick =(contador)=>{
        
        if(contador !==""){
        setNombre(contador)
    }
    console.log("Se guardo la variable")
    console.log(contador) 
}
    

  
    return (
     
        <article>
              <div className="card m-5">
                <div className="row justify-content-center">
                        <div className="col-sm-3">
                                <div>
                                    <div><img src={producto.imagen} alt="card" width="300px"/></div>
                                </div>
                        </div>
                        <div className="col-sm-6">
                                <div>
                                <h2><strong>{producto.nombre}</strong></h2> 
                                <p><strong>Detalles: </strong>{producto.detalles}</p>
                                <p><strong>Funcionamiento: </strong>{producto.funcionamiento}</p>
                                <p><strong>Kit: </strong>{producto.kit}</p>
                                <h3><strong>Precio:$</strong> {producto.precio}</h3>
                                <img src="https://www.nopcommerce.com/images/thumbs/0006813_mercadopago-checkout-latam-tecnofin.png" width="200px"></img>
                            </div>
                        </div>
                        <div className="col-sm-2">
                            <div>
                                <h3><strong>Envíos</strong></h3>   
                                <p>El producto se despacha a las 24hs desde la confirmación del pago.</p>
                                <p>Podrá retirase sin cargo en sucural DEVOTO</p>
                                <p>Envíos a <strong>CABA</strong> $250</p>
                                <p>Envíos al <strong>resto del país</strong> $1250</p>
                                
                            </div>
                        </div>
                       {/*  <button onClick={handleClick} className="btn-secondary m-5 col-sm-2">Finalizar compra</button> */}
                        <Hijo onClick={handleClick}/>
                         
                </div>
                       
        </div>
        
        </article>
        
      
       
    )
} 

export default ItemDetail