import { useState , useEffect } from "react"

const Contador = ({init,stock, onClick}) =>{

    const [contador, setContador] = useState(init, stock)
    
    /* useEffect() */

    const sumar =() => {
        setContador(contador+1)
    }

    const restar =() => {
        setContador(contador-1)
    }

    const confirmar = () =>{
        console.log({contador})
        onClick(contador)
    }


if(contador <= stock){
    return(
        <div>
            <p><strong>Unidades:</strong> {contador}</p>
            <button onClick={sumar} className="material-icons">add</button> 
            <button onClick={confirmar}class="btn btn-secondary">Confirmar</button> 
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