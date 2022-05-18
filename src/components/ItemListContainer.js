import { useEffect,useState } from "react"
import { useParams } from "react-router-dom"
import Itemlist from "./ItemList"
import {db} from "./firebase"
import {collection,getDoc,doc,getDocs,addDoc} from "firebase/firestore"


export const productosIniciales = [
    {
        id : 1,
        nombre: "Termotanque 90 litros",
        precio: 200000,
        imagen: "https://energe.com.ar/wp-content/uploads/2020/10/TS90s-Front-Sin-fondo.png",
        categorias: "Termotanques",
        detalles:"Equipo ideal para viviendas de 2 personas",
        funcionamiento:"Se recomienda para viviendas con suministro de agua presurizada"
    },
    {
        id : 2,
        nombre: "Termotanque 180 litros",
        precio: 250000,
        imagen: "https://energe.com.ar/wp-content/uploads/2020/10/TS180s-Front-Sin-fondo.png",
        categorias: "Termotanques",
        detalles:"Equipo ideal para viviendas de 4 personas",
        funcionamiento:"Se recomienda para viviendas con suministro de agua presurizada"
    },
    {
        id : 3,
        nombre: "Kit Inyección Micro 2/120",
        precio: 300000,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_652157-MLA32722495837_102019-O.webp",
        categorias: "Fotovoltaicos",
        detalles:"Equipo ideal para viviendas de consumos moderados",
        funcionamiento:"Se coloca el equipo directamete en serie con el tablero eléctrico del domicilio"
    },
    {
        id : 4,
        nombre: "Kit Inyección Micro 4/240",
        precio: 350000,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_652157-MLA32722495837_102019-O.webp",
        categorias: "Fotovoltaicos",
        detalles:"Equipo ideal para viviendas de consumos medianos",
        funcionamiento:"Se coloca el equipo directamete en serie con el tablero eléctrico del domicilio"
    },
    {
        id : 5,
        nombre: "Kit bombeo solar",
        precio: 450000,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_684282-MLA45117746834_032021-O.webp",
        categorias: "Campo",
        detalles:"Equipo ideal para viviendas de campo",
        funcionamiento:"Se recomienda usarlo con caudales de agua relativamente bajos"
    },
]

const ItemListContainer = () => {
    
    const [cargando,setCargando]  = useState(true) 
    const [productos,setProductos]  = useState([]) 
    const {nombreCategoria,test} = useParams()

    
    

    useEffect (()=>{

        const productosCollection = collection(db,"productos")
        const consulta = getDocs(productosCollection)

        consulta
        .then((resultado)=>{
                const productos = resultado.docs.map(doc => {
                return  doc.data()
                })

                setProductos(productos)
                setCargando (false)
         })        
        .catch((error)=>{
        
        })
        .finally(()=>{

        })
    })    


        /*if(nombreCategoria==undefined){

                const pedido = new Promise ((res)=>{
                setTimeout(()=>{
                    res(productosIniciales)
                },2000)
                })
                
                pedido
                .then(()=>{
                    setCargando(false)
                    setProductos(productosIniciales)
                })
                
        
        }else{
            console.log("Solicito los productos de la categoria :",nombreCategoria)                

            const productosFiltrados = productosIniciales.filter(categoria=>categoria.categorias === nombreCategoria)

            console.log(productosFiltrados)
      
      
            const pedidoPorCategorias = new Promise ((res)=>{
              setTimeout(()=>{
              res(productosFiltrados)
              },2000)
            })
        
            pedidoPorCategorias
              .then(()=>{
                setCargando(false)
                setProductos(productosFiltrados)
               
              })
      
          }
      
        },[nombreCategoria])   */

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
