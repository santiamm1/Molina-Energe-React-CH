import {Link, NavLink} from "react-router-dom"

const Nav = () => {
    return ( 
    <nav className="Nav">
        <Link to="/productos/Termotanques"><button type="button" className="btn btn-secondary">Equipos térmicos</button></Link>
        <Link to="/productos/Fotovoltaicos"><button type="button" className="btn btn-secondary">Equipos fotovoltaicos</button></Link>
        <Link to="/productos/Campo"><button type="button" className="btn btn-secondary">Equipos para campo</button></Link>
        <Link to="/contacto"><button type="button" className="btn btn-secondary">Contacto</button></Link>
        
    </nav>
    
    )
}

export default Nav 