import { useEffect, useState } from "react"
//import { productosIniciales } from "./ItemListContainer"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"
import {db} from "./firebase"
import {collection,query,where, getDocs} from "firebase/firestore"
 


const ItemDetailContainer = () => {
    const [producto , setProducto] = useState([]);
    const [cargando , setCargando] = useState(true);
    const {id} = useParams();

    
    useEffect(()=>{

        const productosCollection = collection(db,'productos');
        const data = query(productosCollection,where('id','==',id));
        const datos = getDocs(data)
        datos
        .then((resultado)=>{
          const result = resultado.docs.map(res => res.data()
            )
            
            setCargando(false)
            setProducto(result)
        })
        .catch((error)=>{})
        .finally(()=>{})
    
           
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