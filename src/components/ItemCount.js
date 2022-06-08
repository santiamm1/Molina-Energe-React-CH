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
          <div className="panelContadorBloqueA">
          <img src="https://cdn-icons-png.flaticon.com/512/709/709484.png" width="60px" onClick={sumar}></img>
          <p className="cantidad"><strong>Unidades a comprar :</strong> {contador}</p>
          <img src="https://cdn-icons-png.flaticon.com/512/66/66889.png" width="60px" onClick={restar}></img>
          </div>
          <div className="panelContadorBloque">
          <button onClick={confirmar}><img src="https://cdn-icons-png.flaticon.com/512/7708/7708160.png" width="50px"></img>Confirmar</button>
          </div>

        
    </div>
    );
  } else {
    return (
      <div className="panelContador">
        <div className="panelContadorBloqueA">
          <img src="https://cdn-icons-png.flaticon.com/512/709/709484.png" width="60px" onClick={sumar}></img>
          <p className="cantidad"><strong>Unidades a comprar :</strong> {contador}</p>
          <img src="https://cdn-icons-png.flaticon.com/512/66/66889.png" width="60px" onClick={restar}></img>
        </div>
        <div className="panelContadorBloque">
        <button onClick={confirmar}><img src="https://cdn-icons-png.flaticon.com/512/7708/7708160.png" width="50px"></img>Confirmar</button>
        </div>
        <div className="panelContadorBloque">
        <p id="confirmacion"><strong>¡Felicitaciones!</strong>Se confirmaron: {contador} unidades!
        <button onClick={cerrarConfirmado}>Cerrar</button>
        </p>
        </div>
     
      </div>
    );
  }
};
export default ItemCount;