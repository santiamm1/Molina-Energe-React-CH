import { useEffect,useState } from "react"
import { useParams } from "react-router-dom"
import Itemlist from "./ItemList"
import {db} from "./firebase"
import {collection,query,where,getDocs} from "firebase/firestore"




const ItemListContainer = () => {
    
    const [cargando,setCargando]  = useState(true) 
    const [productos,setProducto]  = useState([]) 
    const {nombreCategoria,id} = useParams();

    
    

    useEffect (()=>{

        if(nombreCategoria == undefined){
            const productosCollection = collection(db,"productos");
            const datos = getDocs(productosCollection);
    
        datos
        .then((resultado)=>{
            const result = resultado.docs.map(doc => {
                return {...doc.data(),id: doc.id}
            }
            )
            setCargando(false)
            setProducto(result)
        })
        .catch((error)=>{})
        .finally(()=>{})
      }
      else{
           const productosCollection = collection(db,"productos");
           const data = query(productosCollection,where('categorias','==',nombreCategoria));
           const datos = getDocs(data)

           console.log(datos)
        datos
        .then((resultado)=>{
            const result = resultado.docs.map(doc => {
                return {...doc.data(),id: doc.id}
            }
            )
            console.log(result)
            setCargando(false)
            setProducto(result)
        })
        .catch((error)=>{})
        .finally(()=>{})
    
    
    
    
      }
    
    
    
    
      },[nombreCategoria])


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
        )}
}

export default ItemListContainer
