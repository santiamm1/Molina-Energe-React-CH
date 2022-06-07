import ItemListContainer  from "./ItemListContainer"
import ItemDetailContainer from "./ItemDetailContainer"
import Cart from "./Cart"
import {Routes, Route} from "react-router-dom"
import FinalCompra from "./finalCompra"
import Contacto from  "./Contacto"



const Main = () => {
    return (
        <main>
           
        
        <Routes>
            <Route path="/" element={<ItemListContainer/>} />
            <Route path="/productos/:nombreCategoria" element={<ItemListContainer/>}/>
            <Route path="/item/:id" element={<ItemDetailContainer/>}/>
            <Route path="/productos/finalizarCompra" element={<FinalCompra/>}/>
            <Route path="/carrito" element={<Cart/>}/> 
            <Route path="/contacto" element={<Contacto/>}/>   
        </Routes>  
        </main>
        

    )
} 
export default Main
