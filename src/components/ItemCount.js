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
    setConfirmado(true)
    
    };

  const cerrarConfirmado = () => {
    onCount()
    setConfirmado(false);
  };

  if (!confirmado) {
    return (
      <div>
        <div className="">
          <button onClick={sumar} className="material-icons botonSuma btn-secondary">add</button>
          <p><strong>Unidades a comprar :</strong> {contador}</p>
          <button onClick={restar} className="material-icons botonSuma btn-secondary">remove</button>
        </div>
        <div>
        <button onClick={confirmar} className="botonSuma btn-secondary">Confirmar</button>
        </div>
        
    </div>
    );
  } else {
    return (
      <div>
        <div className="">
          <button onClick={sumar} className="material-icons botonSuma btn-secondary">add</button>
          <p className="cantidad"><strong>Unidades a comprar :</strong> {contador}</p>
          <button onClick={restar}className="material-icons botonSuma btn-secondary">remove</button>
        </div>
        <button onClick={confirmar} className="botonSuma btn-secondary">Confirmar</button>
        <div id="confirmacion_bloque">
        <p id="confirmacion"><strong>Se confirmaron: {contador} unidades!</strong>
        <button onClick={cerrarConfirmado} className="botonSuma btn-secondary m-1">Cerrar</button>
        </p>
        </div>
     
      </div>
    );
  }
};
export default ItemCount;