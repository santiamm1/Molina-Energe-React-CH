import { useEffect, useState } from "react"
import ItemDetail from "./ItemDetail"

const productosIniciales = [
    {
        id :1,
        nombre: "Termotanque 90 litros-Perfil Alto-Alta presión",
        precio: 200000,
        imagen: "https://energe.com.ar/wp-content/uploads/2020/10/TS90s-Front-Sin-fondo.png",
        detalle: "Apto para viviendas de 2 personas con suministro de agua presurizado",
        funcionamiento: "El equipo se colocará en viviendas en donde el tanque de agua supere la distancia de 1,5m desde la base del techo. Su esquema ideal es colocarlo en apoyo de un equipo convencional (gas o electricidad) y de esta manera se obtendrá el mayor volumen de agua caliente desde el equipo solar. De esta forma el equipo asegura un ahorro anual del 80% de energía.",
        kit: "El kit consta del tanque, captador, estructuras, juego de tornillos y bulones para puesta en marcha, también se incluye el líquido caloportador y mangueras para conexión."
    }
]

const ItemDetailContainer =()=>{

    const[cargando, setCargando] = useState(true)
    const[productos, setProductos]= useState({})
    useEffect(()=>{
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
            <ItemDetail productos={productos}/> 
        )
    }
}

export default ItemDetailContainer