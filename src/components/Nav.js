import {Link, NavLink} from "react-router-dom"

const Nav = () => {
    return ( 
    <nav className="Nav">
        <Link to="/productos/Termotanques"><button>Equipos térmicos</button></Link>
        <Link to="/productos/Fotovoltaicos"><button>Equipos fotovoltaicos</button></Link>
        <Link to="/productos/Piscinas"><button>Equipos para piscinas</button></Link>
        <Link to="/contacto"><button>Contacto</button></Link>
        
    </nav>
    
    )
}

export default Nav 