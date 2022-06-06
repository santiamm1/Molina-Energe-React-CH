import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"
import {db} from "./firebase"
import {getDoc,doc} from "firebase/firestore"
 


const ItemDetailContainer = () => {
    const [productos , setProductos] = useState([]);
    const [cargando , setCargando] = useState(true);
    const {id} = useParams();

    useEffect(() => {
    
        const referenciaItems = doc(db, "productos", id);
        const datos = getDoc(referenciaItems);
        datos
          .then((resultado) => {
            if(resultado.exists()){
            setCargando(false);
            setProductos({id:resultado.id, ...resultado.data()})
            };
          })
    /*useEffect(()=>{

        const productosCollection = collection (db,"productos");
        const resultadoDelDoc = doc(productosCollection,id)
        console.log(resultadoDelDoc)
        const consulta = getDoc(resultadoDelDoc)
        
        
        consulta
        .then ((resultado)=>{
            setProductos(resultado.data())
            setCargando(false)
            
        })*/

        .catch((error)=>{})
        .finally(()=>{})
        
        
           
    },[id]);

   
    if(cargando){
        return(
            <p>Cargando...</p>
        )
    } else{
        return (
            <>
              <ItemDetail producto={productos}/> 
            </>
        )
    }
}

export default ItemDetailContainer