import Header from "./components/Header"
import Footer from "./components/Footer"
import Main from "./components/Main"
import { BrowserRouter } from "react-router-dom"
import AppContext from "./components/AppContext";



const App = () => {
    
  
    return (
        <BrowserRouter>
        <AppContext>
            <Header/> 
            <Main/> 
            <Footer/>
        </AppContext>    
        </BrowserRouter>
    
    )
}

export default App ;