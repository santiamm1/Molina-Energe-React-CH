import { useEffect,useState } from "react"
import Itemlist from "./ItemList"

const productosIniciales = [
    {
        id :1,
        nombre: "Termotanque 90 litros",
        precio: 200000,
        imagen: "https://energe.com.ar/wp-content/uploads/2020/10/TS90s-Front-Sin-fondo.png"
    },
    {
        id :2,
        nombre: "Termotanque 180 litros",
        precio: 250000,
        imagen: "https://energe.com.ar/wp-content/uploads/2020/10/TS180s-Front-Sin-fondo.png"
    },
    {
        id :3,
        nombre: "Termotanque 260 litros",
        precio: 300000,
        imagen: "https://energe.com.ar/wp-content/uploads/2020/10/TS260s-Front-Sin-fondo.png"
    }
]

const ItemListContainer = () => {
    
    const [cargando,setCargando]  = useState(true) 
    const [productos,setProductos]  = useState([]) 

    useEffect (()=>{
        const pedido = new Promise ((res)=>{
         setTimeout(()=>{
            res(productosIniciales)
         },2000)
        })
        
        pedido
        .then(()=>{
            console.log("Termino el pedido bien!")
            setCargando(false)
            setProductos(productosIniciales)
        })
        
    },[])

    if(cargando){
        return(
            <p>Cargando...</p>
        )
    } else{
        return (
            <Itemlist productos={productos}/> 
        )
    }
}

export default ItemListContainer
