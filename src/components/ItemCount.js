import { useState } from "react";

const ItemCount = ({ init, stock, onAdd , onCount}) => {
  const [contador, setContador] = useState(init);
  const [confirmado, setConfirmado] = useState(false);

  const sumar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    } else {
      alert("No tenemos mas stock");
    }
  };

  const restar = () => {
    if (contador > 1) setContador(contador - 1);
  };

  const confirmar = () => {
    /*onAdd(contador); */   
    console.log(contador);
    setConfirmado(true);
  };

  const cerrarConfirmado = () => {
    /*onCount()*/
    setConfirmado(false);
  };

  if (!confirmado) {
    return (
      <div>
        <div className="row justify-content-center">
          <button onClick={sumar} className="material-icons botonSuma btn-secondary">add</button>
          <p><strong>Unidades a comprar :</strong> {contador}</p>
          <button onClick={restar} className="material-icons botonSuma btn-secondary">remove</button>
        </div>
        <button onClick={confirmar} className="botonSuma btn-secondary">Confirmar</button>
    </div>
    );
  } else {
    return (
      <div>
        <div className="">
          <button onClick={sumar} className="material-icons botonSuma btn-secondary">add</button>
          <p className="cantidad">Unidades a comprar : {contador}</p>
          <button onClick={restar}className="material-icons botonSuma btn-secondary">remove</button>
        </div>
        <button onClick={confirmar} className="botonSuma btn-secondary">Confirmar</button>
        <p>
          Se confirmaron {contador} unidades!
         <button onClick={cerrarConfirmado}>Cerrar</button>
        </p>
      </div>
    );
  }
};
export default ItemCount;