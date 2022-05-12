import Header from "./components/Header"
import Footer from "./components/Footer"
import Main from "./components/Main"
import Container from "./components/Container"
import ItemListContainer from "./components/ItemListContainer"
import { BrowserRouter } from "react-router-dom"
import { CustomProvider } from "./components/cartContext";



const App = () => {
    
  
    return (
        <BrowserRouter>
        <CustomProvider>
            <Header/> 
            <Main/>
            <Container/>   
            <Footer/>
        </CustomProvider>    
        </BrowserRouter>
    
    )
}

export default App 
