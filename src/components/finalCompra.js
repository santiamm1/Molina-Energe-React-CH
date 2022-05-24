import React from 'react'
import { useState, useEffect } from 'react';
import { db } from "./firebase";
import { addDoc, collection } from 'firebase/firestore';
import { useContext } from 'react';
import { cartContext } from "./cartContext";
import {Link} from 'react-router-dom'


const FinalCompra = () => {

    const [nombreTicket,setNombreTicket]= useState();
    const [telefonoTicket,setTelefonoTicket]= useState();
    const [correoTicket,setCorreoTicket]= useState();
    const [precioTotal,setPrecioTotal] = useState();
    const [idReferencia,setIdReferencia] = useState();
    const [mostrar,setMostrar]=useState(true)
    const {cart,clearCart} = useContext(cartContext)

    useEffect(()=>{
        let result=0;
       for(const carro of cart){
         
         let final = carro.quantity * carro.item.precio;
         result += final
       }
     
      setPrecioTotal(result)
     
     },[cart])


const entradaNombre=(e)=>{
let nombre_ticket =e.target.value;
setNombreTicket(nombre_ticket)
}
const entradaTelefono=(e)=>{
let telefono_ticket =e.target.value;
setTelefonoTicket(telefono_ticket)
}
const entradaCorreo=(e)=>{
let correo_ticket =e.target.value;
setCorreoTicket(correo_ticket)
}
  

const guardarCompra=()=>{

const ordenesCollection = collection(db, "ordenes");
const orden = {
    buyer:{
        name:{nombreTicket},
        phone:{telefonoTicket},
        email:{correoTicket}
    },
    item:{cart},
    date:{fecha},
    total:{precioTotal}

    }


    const consulta = addDoc(ordenesCollection,orden)
    consulta 
    .then((resultado)=>{
     setIdReferencia(resultado.id)
    })
    .catch((err)=>{
   console.log(err)
    })

       setMostrar(false)
}

    let fecha = new Date();
    let dia = fecha.getDay();
    let mes = fecha.getMonth();
    let anio = fecha.getFullYear();

  return (
    <div className="seccionFormulario">
       {mostrar ? (
       <form className="formulario">
        <h2>Carga de datos</h2>
        <p>A continuación vamos a solicitar una serie de datos para constatar su compra.</p>
       <label id="nombre">Nombre:</label>
       <input onChange={entradaNombre} type="text" placeholder="Nombre" name='nombre'/>
       <label>Telefono:</label>
       <input onChange={entradaTelefono} type="number" placeholder="Telefono"/>
       <label>Correo Electronico:</label>
       <input onChange={entradaCorreo} type="email" placeholder="Correo"/>
       <input className="btn-pagar" type="submit" onClick={guardarCompra} value="Pagar"/>
</form>):(
<div className="seccionCompra">
    <h2 id="agradecimientoCompra"><strong>Agradecemos tu compra</strong></h2>
    <section className="seccionCompraFinal">
    <h4><strong>Nombre: </strong>{nombreTicket}</h4> 
    <h4><strong>Telefono: </strong>{telefonoTicket}</h4>
    <h4><strong>Email: </strong>{correoTicket}</h4>
    <h4><strong>Items de carrito: </strong>:{cart.length}</h4>
    <h4><strong>Ticket Total: $</strong> {precioTotal}</h4>
    <h4><strong>Número de transacción: </strong> {idReferencia}</h4>
    </section>
 

<Link to="/"><button className="btn-pagar" onClick={()=>{clearCart()}}>Vovler a Homepage</button></Link>
</div>)}

    </div>
  )
}

export default FinalCompra