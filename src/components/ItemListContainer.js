import { useEffect,useState } from "react"
import { useParams } from "react-router-dom"
import Itemlist from "./ItemList"
import {db} from "./firebase"
import {collection,query,where,getDocs} from "firebase/firestore"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


toast.success('Cargando productos', {
    position: "top-center",
    autoClose: 2,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });




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

        if(cargando){
            return(
                <ToastContainer/>
                
            )
        } else{
            return (
                
                <Itemlist productos={productos}/> 
                
            )}
    }

export default ItemListContainer
