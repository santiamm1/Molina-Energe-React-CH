import CartWidget from  "./CartWidget"
const Nav = () => {
    return ( 
    <nav className="Nav">
        <a href="#"><button type="button" className="btn btn-secondary">Equipos domiciliarios</button></a>
        <a href="#"><button type="button" className="btn btn-secondary">Equipos industriales</button></a>
        <a href="#"><button type="button" className="btn btn-secondary">Equipos para campo</button></a>
        <a href="#"><button type="button" className="btn btn-secondary">Contacto</button></a>
        <CartWidget/>
    </nav>
    
    )
}

export default Nav 