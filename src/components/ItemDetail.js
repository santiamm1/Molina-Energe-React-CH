import {useState} from 'react'
import Contador from "./ItemCount"
import { productosIniciales } from "./ItemListContainer"


const ItemDetail = ({producto}) => { 

    return (
     
        <article>
              <div class="card m-5">
                <div class="row justify-content-center">
                        <div class="col-sm-3">
                                <div>
                                    <div><img src={producto.imagen} alt="card" width="300px"/></div>
                                </div>
                        </div>
                        <div class="col-sm-6">
                                <div>
                                <h2><strong>{producto.nombre}</strong></h2> 
                                <p><strong>Detalles: </strong>{producto.detalles}</p>
                                <p><strong>Funcionamiento: </strong>{producto.funcionamiento}</p>
                                <p><strong>Kit: </strong>{producto.kit}</p>
                                <h3><strong>Precio:$</strong> {producto.precio}</h3>
                                <img src="https://www.nopcommerce.com/images/thumbs/0006813_mercadopago-checkout-latam-tecnofin.png" width="200px"></img>
                            </div>
                        </div>
                        <div class="col-sm-2">
                        <div>
                                <h3><strong>Envíos</strong></h3>   
                                <p>El producto se despacha a las 24hs desde la confirmación del pago.</p>
                                <p>Podrá retirase sin cargo en sucural DEVOTO</p>
                                <p>Envíos a <strong>CABA</strong> $250</p>
                                <p>Envíos al <strong>resto del país</strong> $1250</p>
                                
                            </div>
                        </div>
                </div>
                       
        </div>
        
        </article>
        
      
       
    )

    /* return (
        <article className="card"> 
            <h2><strong>Detalles</strong></h2>
            <h5><strong>Equipo:</strong>{producto.nombre}</h5>
            <h5><strong>Precio:$ </strong>{producto.precio}</h5>
            <div class="col-sm-8">
            <img src={producto.imagen} alt="Equipos solares" width="300px"/>
            </div>
            <div class="col-sm-2">
            <h5><strong>Categoria:</strong>{producto.categorias}</h5>
            </div>
               
        </article>
    ) */
} 

export default ItemDetail