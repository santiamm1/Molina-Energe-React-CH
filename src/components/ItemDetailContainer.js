import { useEffect, useState } from "react"
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom"

const productosIniciales = [
    {
        id :1,
        nombre: "Termotanque 90 litros-Perfil Alto-Alta presión",
        precio: 200000,
        imagen: "https://energe.com.ar/wp-content/uploads/2020/10/TS90s-Front-Sin-fondo.png",
        detalle: "Apto para viviendas de 2 personas con suministro de agua presurizado",
        funcionamiento: "El equipo se colocará en viviendas en donde el tanque de agua supere la distancia de 1,5m desde la base del techo. Su esquema ideal es colocarlo en apoyo de un equipo convencional (gas o electricidad) y de esta manera se obtendrá el mayor volumen de agua caliente desde el equipo solar. De esta forma el equipo asegura un ahorro anual del 80% de energía.",
        kit: "El kit consta del tanque, captador, estructuras, juego de tornillos y bulones para puesta en marcha, también se incluye el líquido caloportador y mangueras para conexión.",
        categorias: "Termotanques"
    },
    {
        id :2,
        nombre: "Termotanque 180 litros",
        precio: 250000,
        imagen: "https://energe.com.ar/wp-content/uploads/2020/10/TS180s-Front-Sin-fondo.png",
        detalle: "Apto para viviendas de 2 personas con suministro de agua presurizado",
        funcionamiento: "El equipo se colocará en viviendas en donde el tanque de agua supere la distancia de 1,5m desde la base del techo. Su esquema ideal es colocarlo en apoyo de un equipo convencional (gas o electricidad) y de esta manera se obtendrá el mayor volumen de agua caliente desde el equipo solar. De esta forma el equipo asegura un ahorro anual del 80% de energía.",
        kit: "El kit consta del tanque, captador, estructuras, juego de tornillos y bulones para puesta en marcha, también se incluye el líquido caloportador y mangueras para conexión.",
        categorias: "Termotanques"
    },
    {
        id :3,
        nombre: "Generador de Inyección Micro 2/120",
        precio: 300000,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_652157-MLA32722495837_102019-O.webp",
        detalle: "Apto para viviendas de consumos bajos",
        funcionamiento: "El equipo se colocará en paralelo con el tablero eléctrico que la vivienda posea",
        categorias: "Fotovoltaicos"
    },
    {
        id :4,
        nombre: "Generador de Inyección Micro 4/240",
        precio: 350000,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_652157-MLA32722495837_102019-O.webp",
        detalle: "Apto para viviendas de cosumos medianos",
        funcionamiento: "El equipo se colocará en paralelo con el tablero eléctrico que la vivienda posea",
        categorias: "Fotovoltaicos"
    },
    {
        id :5,
        nombre: "Kit bombeo solar",
        precio: 450000,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_684282-MLA45117746834_032021-O.webp",
        detalle: "Apto para viviendas ubicadas en el campo sin suministro",
        funcionamiento: "El equipo se colocará en viviendas en exista otro tipo de suministro de electricidad",
        categorias: "Campo"
    },
] 

const ItemDetailContainer =()=>{

    const[cargando, setCargando] = useState(true)
    const[producto, setProducto]= useState({})
    const {id}=useParams()

    useEffect(()=>{

        const detalleProducto = productosIniciales.filter((producto)=>{return producto.id === id})
        
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
            <ItemDetail key={producto.id} productos={producto}/> 
            </>
        )
    }
}

export default ItemDetailContainer