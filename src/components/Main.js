import ItemListContainer  from "./ItemListContainer"
import ItemDetailContainer from "./ItemDetailContainer"
import Carrito from "./Carrito"
import {Routes, Route} from "react-router-dom"


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
            <Route path="/carrito" element={<Carrito/>}/>    
        </Routes>
        </main>  

    )
} 
export default Main
