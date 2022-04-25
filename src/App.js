import Header from "./components/Header"
import Footer from "./components/Footer"
import Main from "./components/Main"
import Container from "./components/Container"
import ItemListContainer from "./components/ItemListContainer"



const App = () => {
    
  
    return (
        <>
            <Header/> 
            <ItemListContainer greeting="Hola ¿Cómo estás?"/>  
            <Container/>
            <Main/>   
            <Footer/>
        </>
    
    )
}

export default App 
