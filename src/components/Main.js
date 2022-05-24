import ItemListContainer  from "./ItemListContainer"
import ItemDetailContainer from "./ItemDetailContainer"
import Carrito from "./Carrito"
import {Routes, Route} from "react-router-dom"
import ItemDetail from "./ItemDetail"
import FinalCompra from "./finalCompra"



const Main = () => {
    return (
        <main>
            {/* <h1>Hola, bienvenido</h1>
            <ItemListContainer/>
            <ItemDetailContainer/> */}
        <Routes>
            <Route path="/" element={<ItemListContainer/>} />
            <Route path="/productos/:nombreCategoria" element={<ItemListContainer/>}/>
            <Route path="/item/:id" element={<ItemDetailContainer/>}/>
            <Route path="/productos/finalizarCompra" element={<FinalCompra/>}/>
            <Route path="/carrito" element={<Carrito/>}/>    
        </Routes>  
        </main>
        

    )
} 
export default Main
