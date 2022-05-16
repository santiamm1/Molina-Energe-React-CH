import Contador from "./ItemCount"



const Hijo =({onClick})=>{

    const handleClick =(contador)=>{
        onClick({contador})
    }
    const onAdd =(contador)=>{
        onAdd({contador})
    }


    return(
        <Contador stock={10} init={0} onClick={handleClick} onAdd={onAdd} />
        
    )
}

export default Hijo



