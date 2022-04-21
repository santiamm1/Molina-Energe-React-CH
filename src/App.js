import Header from "./components/Header"
import Footer from "./components/Footer"
import Main from "./components/Main"
import ItemListContainer from "./components/ItemListContainer"



const App = () => {
    
  
    return (
        <>
            <Header/> 
            <ItemListContainer greeting="Hola ¿Cómo estás?"/>  
            <Main/>   
            <Footer/>
        </>
    
    )
}

export default App 
