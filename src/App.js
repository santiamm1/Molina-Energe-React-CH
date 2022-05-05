import Header from "./components/Header"
import Footer from "./components/Footer"
import Main from "./components/Main"
import Container from "./components/Container"
import ItemListContainer from "./components/ItemListContainer"
import { BrowserRouter } from "react-router-dom"



const App = () => {
    
  
    return (
        <BrowserRouter>
            <Header/> 
            <Main/>
            <Container/>   
            <Footer/>
        </BrowserRouter>
    
    )
}

export default App 
