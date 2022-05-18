import { useEffect, useState } from "react"
import { productosIniciales } from "./ItemListContainer"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"
import {db} from "./firebase"
import {collection,getDoc,doc,getDocs,addDoc} from "firebase/firestore"
 


const ItemDetailContainer =()=>{

    const[cargando, setCargando] = useState(true)
    const[producto, setProducto]= useState({})
    const {id}=useParams()

    
    useEffect(()=>{

        const detalleProducto = productosIniciales.find((producto)=>{
            return producto.id == id
        })
    
     
        const pedidoDeDetalle = new Promise ((res)=>{
            setTimeout(()=>{
               res(detalleProducto)
            },2000)
           })
           
            pedidoDeDetalle 
            .then(()=> setProducto(detalleProducto))
            .catch(err=>err)
            .finally(()=> setCargando(false))
           
    },[id])

   
    if(cargando){
        return(
            <p>Cargando...</p>
        )
    } else{
        return (
            <>
              <ItemDetail producto={producto}/> 
            </>
        )
    }
}

export default ItemDetailContainer