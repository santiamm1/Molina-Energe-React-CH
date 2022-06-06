const Contacto = () => {


    
    return (
        <div className="contacto">
    <form>
        <div className='imagen__contacto'></div>
        <label id='nombre'>Nombre:</label>
        <input type="text" placeholder="Nombre aqui" name='nombre' required></input>
        <label>Apellido:</label>
        <input type="text" placeholder="Apellido aqui" required ></input>
        <label>Email:</label>
        <input type="email" placeholder="Correo aqui" required></input>
        <label>Sugerencias</label>
        <textarea></textarea>
        <input type="submit" name="Enviar" className='btn_enviar' ></input>
       
    </form>
  
  
        </div>
    )
  }
  
  export default Contacto