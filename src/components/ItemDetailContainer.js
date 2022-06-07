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

        .catch((error)=>{})
        .finally(()=>{})
        
        
           
    },[id]);

   
    if(cargando){
        return(
            <h2>Cargando detalles...</h2>
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