import Nav from "./Nav"
import CartWidget from  "./CartWidget"
import {Link} from "react-router-dom"

const Header = () => {
    return (
        <header className="header">
            
            <Link to="/">
                <img src="/energe-logo.png" alt="Energe logo"></img>
            </Link>
       
            <Link to="/carrito">
                <CartWidget/>
            </Link>
            
            <Nav/>    
        </header>  
        

    )
}

export default Header

