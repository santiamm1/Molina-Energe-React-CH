import { useState } from "react";

const ItemCount = ({ init, stock, onAdd , onCount}) => {
  const [contador, setContador] = useState(init);
  const [confirmado, setConfirmado] = useState(false);

  const sumar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    } else {
      alert("Stock no disponible");
    }
  };

  const restar = () => {
    if (contador > 1) setContador(contador - 1);
  };

  const confirmar = () => {

    onAdd(contador);
    console.log(contador);
    setConfirmado(true);
    
    };

  const cerrarConfirmado = () => {
    onCount()
    setConfirmado(true);
  };

  if (!confirmado) {
    return (
      <div className="panelContador">
          <div>
            <button onClick={sumar}>+ Agregar</button>
            <p><strong>Unidades a comprar :</strong> {contador}</p>
            <button onClick={restar}>- Quitar</button>
          </div>
  
          <button onClick={confirmar}>Confirmar</button>
      
        
    </div>
    );
  } else {
    return (
      <div className="panelContador">
        <div>
          <button onClick={sumar}>+ Agregar</button>
          <p className="cantidad"><strong>Unidades a comprar :</strong> {contador}</p>
          <button onClick={restar}>- Quitar</button>
        </div>
        <div>
        <button onClick={confirmar}>Confirmar</button>
        </div>
        <div>
        <p id="confirmacion"><strong>Se confirmaron: {contador} unidades!</strong>
        <button onClick={cerrarConfirmado}>Cerrar</button>
        </p>
        </div>
     
      </div>
    );
  }
};
export default ItemCount;