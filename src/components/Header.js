import Nav from "./Nav"
import CartWidget from  "./CartWidget"
import {Link} from "react-router-dom"

const Header = () => {
    return (
        <header className="header">
            <Link to="/">
                <h1 className="header__titulo">Energe-Tienda oficial</h1>
            </Link>
            <Link to="/carrito">
                <CartWidget/>
            </Link>
            
            <Nav/>    
        </header>  
        

    )
}

export default Header


