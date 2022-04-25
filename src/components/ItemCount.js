import { useState , useEffect } from "react"

const Contador = ({init,stock, onAdd}) =>{

    const [contador, setContador] = useState(init, stock)
    
    /* useEffect() */

    const sumar =() => {
        setContador(contador+1)
    }

    const restar =() => {
        setContador(contador-1)
    }

    const confirmar = () =>{
        console.log({stock})
        onAdd(contador)
    }


if(contador <= stock){
    return(
        <div>
            <p>Unidades: {contador}</p>
            <button onClick={sumar} className="material-icons">add</button> 
            <button onClick={confirmar}>Confirmar</button> 
            <button onClick={restar} className="material-icons">remove</button> 
        </div>
    )
    }
    else{
    return(
        <div>
            <p>No hay más stock</p>
            <button onClick={confirmar}>Reservar producto</button> 
            <button onClick={restar} className="material-icons">remove</button> 
        </div>
    )
    }

    

}

export default Contador