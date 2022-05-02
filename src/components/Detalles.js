const Detalles = ({producto}) => {
    return (
     
        <div class="card m-5">
        <div class="row justify-content-center">
                <div class="col-sm-3">
                        <div>
                            <div><img src={producto.imagen} alt="card" width="300px"/></div>
                        </div>
                </div>
                <div class="col-sm-6">
                <div>
                           <h2>{producto.nombre}</h2> 
                           <p><strong>Detalles:</strong>{producto.detalle}</p>
                           <p><strong>Funcionamiento:</strong>{producto.funcionamiento}</p>
                           <p><strong>Kit:</strong>{producto.kit}</p>
                           <h3><strong>Precio:$</strong> {producto.precio}</h3>
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
       
    )
    
}


export default Detalles
