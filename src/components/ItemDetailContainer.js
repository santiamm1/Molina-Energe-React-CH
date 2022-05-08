import { useEffect, useState } from "react"
import { productosIniciales } from "./ItemListContainer"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"
 

const ItemDetailContainer =()=>{

    const[cargando, setCargando] = useState(true)
    const[producto, setProducto]= useState({})
    const {id}=useParams()

    
    useEffect(()=>{
        
        console.log("Pido el producto con id:",id)
        console.log("Tengo los productos iniciales:", productosIniciales)
        const detalleProducto = productosIniciales.filter((producto)=>{
            return producto.id == id
        })[0]

        console.log(detalleProducto)
        setProducto(detalleProducto)
        setCargando(false)   
    
    
    
        /*const detalleProducto = productosIniciales.filter((producto)=>{return producto.id === id})
        console.log(detalleProducto)*/
       
        
        const pedidoDeDetalle = new Promise ((res)=>{
            setTimeout(()=>{
               res(detalleProducto)
            },2000)
           })
           
           pedidoDeDetalle 
           .then(()=>{
               setCargando(false)
               setProducto(detalleProducto)
           })
           
    },[id, producto.id])

   
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