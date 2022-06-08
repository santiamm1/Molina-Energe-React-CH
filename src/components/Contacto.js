const Contacto = () => {


    
    return (
        <div className="seccionFormularioB">
            <h2>Muchas gracias por contactarnos</h2>
            <p>A continuación le solicitamos que nos haga llegar su mensaje a través del formulario y a la brevedad lo contestamos.</p>
            <form>
                <div className="formulario">
                <label id='nombre'>Nombre:</label>
                <input type="text" placeholder="Ej. Santiago" name="nombre" required></input>
                <label>Apellido:</label>
                <input type="text" placeholder="Ej. Esquivel"></input>
                <label>Email:</label>
                <input type="email" placeholder="Ej. santiago@2pi.com" required></input>
                <label>Comentarios:</label>
                <textarea></textarea>
                <input type="submit" name="Enviar" className="btn-pagar" ></input>
                </div> 
            </form>
           <h5>Línea de Whatsapp <strong>+549261568978</strong></h5>
  
  
        </div>
    )
  }
  
  export default Contacto